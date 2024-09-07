/** @format */

// /lib/hooks/useFetchSummaryData.ts

import { useState, useCallback } from "react";
import {
  FileDescription,
  convertFileDescriptions,
  convertToMarkdownTable,
  generateFileList,
} from "@/lib/utils/fileUtils";
import { getSummaryGenerationFileUrl } from "@/lib/constants/apiEndpoints";
import useLocalStorage from "@/lib/hooks/useLocalStorage";
import {
  summaryGenerationLS,
  folderStructureDictLS,
  repoInfoLS,
} from "@/lib/constants/localStorageNames";
import {
  ignoreListExtensions,
  ignoreListFolderStructure,
} from "@/lib/constants/ignoreList";
import { incorrectInitialFileDescriptions } from "../constant";

export function useFetchSummaryData() {
  const [loading, setLoading] = useState(false);
  const [currentState, setCurrentState] = useState(0);
  const [summaryData, setSummaryData] = useState<FileDescription[]>([]);
  const [folderStructureDict] = useLocalStorage(folderStructureDictLS, {});
  const [markdownValue, setMarkdownValue] = useLocalStorage(
    summaryGenerationLS,
    convertToMarkdownTable(
      convertFileDescriptions(incorrectInitialFileDescriptions),
    ),
  );
  const [repoInfo] = useLocalStorage(repoInfoLS, {
    repoName: "",
    repoLink: "",
  });
  const { repoLink } = repoInfo;

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
    setMarkdownValue(convertToMarkdownTable(updatedData));
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
