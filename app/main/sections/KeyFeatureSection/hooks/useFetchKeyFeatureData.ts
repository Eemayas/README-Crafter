/** @format */

import store from "@/app/store";
import { showSpinner } from "@/components/Modals/store/ModalReducer";
import { useState, useCallback } from "react";
import { initialKeyFeaturesMkdr } from "../constant";
import { getKeyFeatureUrl } from "@/lib/constants/apiEndpoints";

export function useFetchKeyFeatureData(repoLink: string) {
  const [keyFeatureMarkdownValue, setKeyFeatureMarkdownValue] = useState(
    initialKeyFeaturesMkdr,
  );
  const [loading, setLoading] = useState(false);

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

  return { keyFeatureMarkdownValue, fetchKeyFeatureData, loading };
}
