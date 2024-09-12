/** @format */

import store, { RootState } from "@/app/store";
import { showSpinner } from "@/components/Modals/store/ModalReducer";
import { useCallback } from "react";
import { getKeyFeatureUrl } from "@/lib/constants/apiEndpoints";
import { useSelector } from "react-redux";
import { setKeyFeatures } from "../store/keyFeaturesReducer";

export function useFetchKeyFeatureData() {
  const { repoLink } = useSelector((state: RootState) => state.repoReducer);
  const keyFeatureMarkdownValue = useSelector(
    (state: RootState) => state.keyFeaturesReducer,
  );
  const baseUrl = useSelector((state: RootState) => state.baseUrlReducer);

  const fetchKeyFeatureData = useCallback(async () => {
    store.dispatch(showSpinner(true));

    try {
      const keyFeatureUrl = getKeyFeatureUrl(repoLink, baseUrl);

      const response = await fetch(keyFeatureUrl);
      const data = await response.json();

      store.dispatch(setKeyFeatures(data.key_feature_markdown));
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    store.dispatch(showSpinner(false));
  }, [repoLink]);

  return { keyFeatureMarkdownValue, fetchKeyFeatureData };
}
