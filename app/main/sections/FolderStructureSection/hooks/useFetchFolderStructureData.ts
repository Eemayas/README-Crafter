/** @format */

import store, { RootState } from "@/app/store";
import { showSpinner } from "@/components/Modals/store/ModalReducer";
import { useCallback } from "react";
import { getFolderStructureUrl } from "@/lib/constants/apiEndpoints";
import { useSelector } from "react-redux";
import { setFolderstructure } from "../store/folderStructureReducer";

export function useFetchFolderStructureData() {
  const { repoLink } = useSelector((state: RootState) => state.repoReducer);
  const folderStructureMarkdownValue = useSelector(
    (state: RootState) => state.folderStructureReducer,
  );

  const fetchFolderStructureData = useCallback(async () => {
    store.dispatch(showSpinner(true));

    try {
      const folderStructureUrl = getFolderStructureUrl(repoLink);

      const response = await fetch(folderStructureUrl);
      const data = await response.json();

      store.dispatch(setFolderstructure(data.folder_structure_markdown));
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    store.dispatch(showSpinner(false));
  }, [repoLink]);

  return { folderStructureMarkdownValue, fetchFolderStructureData };
}
