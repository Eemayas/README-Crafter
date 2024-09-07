/** @format */

import store from "@/app/store";
import { showSpinner } from "@/components/Modals/store/ModalReducer";
import { useState, useCallback } from "react";
import { initialKeyFeaturesMkdr } from "../constant";
import { getKeyFeatureUrl } from "@/lib/constants/apiEndpoints";
import useLocalStorage from "@/lib/hooks/useLocalStorage";
import { keyFeaturesLS, repoInfoLS } from "@/lib/constants/localStorageNames";

export function useFetchKeyFeatureData() {
  const [{ repoLink }] = useLocalStorage(repoInfoLS, {
    repoName: "",
    repoLink: "",
  });
  const [keyFeatureMarkdownValue, setKeyFeatureMarkdownValue] = useLocalStorage(
    keyFeaturesLS,
    initialKeyFeaturesMkdr,
  );

  const fetchKeyFeatureData = useCallback(async () => {
    store.dispatch(showSpinner(true));

    try {
      const keyFeatureUrl = getKeyFeatureUrl(repoLink);

      const response = await fetch(keyFeatureUrl);
      const data = await response.json();

      setKeyFeatureMarkdownValue(data.key_feature_markdown);
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    store.dispatch(showSpinner(false));
  }, [repoLink]);

  return { keyFeatureMarkdownValue, fetchKeyFeatureData };
}
