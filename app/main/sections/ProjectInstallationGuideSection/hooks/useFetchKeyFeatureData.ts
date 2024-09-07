/** @format */

import store from "@/app/store";
import { showSpinner } from "@/components/Modals/store/ModalReducer";
import { useState, useCallback } from "react";
import { initialKeyFeaturesMkdr } from "../constant";
import {
  getKeyFeatureUrl,
  getProjectInstallationGuideUrl,
} from "@/lib/constants/apiEndpoints";
import useLocalStorage from "@/lib/hooks/useLocalStorage";
import { keyFeaturesLS, repoInfoLS } from "@/lib/constants/localStorageNames";

export function useFetchProjectInstallationGuideData() {
  const [{ repoLink }] = useLocalStorage(repoInfoLS, {
    repoName: "",
    repoLink: "",
  });
  const [
    projectInstallationGuideMarkdownValue,
    setProjectInstallationGuideMarkdownValue,
  ] = useLocalStorage(keyFeaturesLS, initialKeyFeaturesMkdr);

  const fetchProjectInstallationGuideData = useCallback(async () => {
    store.dispatch(showSpinner(true));

    try {
      const keyFeatureUrl = getProjectInstallationGuideUrl(repoLink);

      const response = await fetch(keyFeatureUrl);
      const data = await response.json();

      setProjectInstallationGuideMarkdownValue(
        data.installation_guide_markdown,
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    store.dispatch(showSpinner(false));
  }, [repoLink]);

  return {
    projectInstallationGuideMarkdownValue,
    fetchProjectInstallationGuideData,
  };
}
