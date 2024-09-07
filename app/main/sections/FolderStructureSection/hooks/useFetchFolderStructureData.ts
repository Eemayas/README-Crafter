/** @format */

import store, { RootState } from "@/app/store";
import { showSpinner } from "@/components/Modals/store/ModalReducer";
import { useState, useCallback, useEffect } from "react";
import {
  getFolderStructureUrl,
  getKeyFeatureUrl,
} from "@/lib/constants/apiEndpoints";
import useLocalStorage from "@/lib/hooks/useLocalStorage";
import { keyFeaturesLS, repoInfoLS } from "@/lib/constants/localStorageNames";
import { initialKeyFeaturesMkdr } from "../../KeyFeatureSection/constant";
import { useSelector } from "react-redux";
import { setFolderstructure } from "../store/folderStructureReducer";

export function useFetchFolderStructureData() {
  const [{ repoLink }] = useLocalStorage(repoInfoLS, {
    repoName: "",
    repoLink: "",
  });
  const folderStructureMarkdownValue = useSelector(
    (state: RootState) => state.folderStructureReducer,
  );
  useEffect(() => {
    console.log({ folderStructureMarkdownValue });
  }, [folderStructureMarkdownValue]);

  const fetchFolderStructureData = useCallback(async () => {
    store.dispatch(showSpinner(true));

    try {
      const folderStructureUrl = getFolderStructureUrl(repoLink);

      const response = await fetch(folderStructureUrl);
      const data = await response.json();
      console.log({
        folderStructureMarkdownValuesss: data.folder_structure_markdown,
      });
      store.dispatch(setFolderstructure(data.folder_structure_markdown));
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    store.dispatch(showSpinner(false));
  }, [repoLink]);

  return { folderStructureMarkdownValue, fetchFolderStructureData };
}
