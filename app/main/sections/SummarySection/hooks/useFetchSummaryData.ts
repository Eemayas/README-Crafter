/** @format */

// /lib/hooks/useFetchSummaryData.ts

import { useState, useCallback } from "react";
import {
  FileDescription,
  convertFileDescriptions,
  convertToMarkdownTable,
} from "@/lib/utils/fileUtils";
import { showSpinner } from "@/components/Modals/store/ModalReducer";
import store from "@/app/store";
import { getSummaryGenerationFileUrl } from "@/lib/constants/apiEndpoints";

export function useFetchSummaryData(
  fileList: string[],
  repoLink: string,
  initialFileDescriptions: Record<string, string>,
) {
  const [loading, setLoading] = useState(false);
  const [currentState, setCurrentState] = useState(0);
  const [summaryData, setSummaryData] = useState<FileDescription[]>([]);
  const [markdownValue, setMarkdownValue] = useState(
    convertToMarkdownTable(convertFileDescriptions(initialFileDescriptions)),
  );

  const fetchSummaryData = useCallback(async () => {
    setLoading(true);
    // store.dispatch(showSpinner(true));

    const updatedData: FileDescription[] = [...summaryData];

    for (const filepath of fileList) {
      try {
        const summaryGenerationFileUrl = getSummaryGenerationFileUrl(
          repoLink,
          filepath,
        );

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

  return { markdownValue, fetchSummaryData, loading, currentState, setLoading };
}
