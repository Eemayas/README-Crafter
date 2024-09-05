/** @format */

import store from "@/app/store";
import { showSpinner } from "@/components/Modals/store/ModalReducer";
import {
  getFolderStructureDictUrl,
  getFolderStructureUrl,
} from "@/lib/constants/apiEndpoints";
import { useState, useCallback } from "react";
import { initalFolderStructureMarkdown } from "../constants";

export function useFetchFolderStructureData(repoLink: string) {
  const [markdownValue, setMarkdownValue] = useState(
    initalFolderStructureMarkdown,
  );
  const [folderStructureDict, setFolderStructureDict] = useState<any>({});
  const [loading, setLoading] = useState(false);

  const fetchFolderStructureData = useCallback(async () => {
    setLoading(true);
    store.dispatch(showSpinner(true));

    try {
      const folderStructureUrl = getFolderStructureUrl(repoLink);
      const folderStructureDictUrl = getFolderStructureDictUrl(repoLink);

      const folderStructureResponse = await fetch(folderStructureUrl);
      const folderStructureJson = await folderStructureResponse.json();
      setMarkdownValue(folderStructureJson.folder_structure_markdown);

      const folderStructureDictResponse = await fetch(folderStructureDictUrl);
      const folderStructureDictJson = await folderStructureDictResponse.json();
      setFolderStructureDict(folderStructureDictJson.folder_structure);
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    setLoading(false);
    store.dispatch(showSpinner(false));
  }, [repoLink]);

  return {
    markdownValue,
    folderStructureDict,
    fetchFolderStructureData,
    loading,
  };
}
