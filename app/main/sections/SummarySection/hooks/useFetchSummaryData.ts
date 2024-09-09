/** @format */

// /lib/hooks/useFetchSummaryData.ts

import { useState, useCallback } from "react";
import {
  FileDescription,
  convertToMarkdownTable,
  generateFileList,
} from "@/lib/utils/fileUtils";
import { getSummaryGenerationFileUrl } from "@/lib/constants/apiEndpoints";
import {
  ignoreListExtensions,
  ignoreListFolderStructure,
} from "@/lib/constants/ignoreList";
import store, { RootState } from "@/app/store";
import { setSummaryGeneration } from "../store/summaryGenerationReducer";
import { useSelector } from "react-redux";

export function useFetchSummaryData() {
  const [loading, setLoading] = useState(false);
  const [currentState, setCurrentState] = useState(0);
  const [summaryData, setSummaryData] = useState<FileDescription[]>([]);
  const folderStructureDict = useSelector(
    (state: RootState) => state.folderStructureDictReducer,
  );
  const markdownValue = useSelector(
    (state: RootState) => state.summaryGenerationReducer,
  );
  const { repoLink } = useSelector((state: RootState) => state.repoReducer);

  const fileList = generateFileList(
    folderStructureDict,
    ignoreListFolderStructure,
    ignoreListExtensions,
  );

  const fetchSummaryData = useCallback(async () => {
    console.log("Clicked");
    setLoading(true);
    // store.dispatch(showSpinner(true));

    const updatedData: FileDescription[] = [...summaryData];
    for (const filepath of fileList) {
      try {
        const summaryGenerationFileUrl = getSummaryGenerationFileUrl(
          repoLink,
          filepath,
        );
        console.log({ filepath, summaryGenerationFileUrl });

        const response = await fetch(summaryGenerationFileUrl);
        const data = await response.json();

        const tempData: FileDescription = {
          fileName: data.new_data.File,
          description: data.new_data.Description,
        };

        updatedData.push(tempData);
        setCurrentState((prevState) => prevState + 1);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    setSummaryData(updatedData);
    store.dispatch(setSummaryGeneration(convertToMarkdownTable(updatedData)));
    setCurrentState(0);
    // store.dispatch(showSpinner(false));
    setLoading(false);
  }, [fileList, repoLink, summaryData]);

  return {
    markdownValue,
    fetchSummaryData,
    loading,
    currentState,
    setLoading,
    fileList,
  };
}
