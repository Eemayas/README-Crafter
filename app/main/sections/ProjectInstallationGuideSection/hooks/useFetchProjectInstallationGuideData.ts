/** @format */

import store, { RootState } from "@/app/store";
import { showSpinner } from "@/components/Modals/store/ModalReducer";
import { useCallback } from "react";
import { getProjectInstallationGuideUrl } from "@/lib/constants/apiEndpoints";
import { useSelector } from "react-redux";
import { setProjectInstallationGuide } from "../store/projectInstallationGuideReducer";

export function useFetchProjectInstallationGuideData() {
  const { repoLink } = useSelector((state: RootState) => state.repoReducer);
  const projectInstallationGuideMarkdownValue = useSelector(
    (state: RootState) => state.projectInstallationGuideReducer,
  );
  const baseUrl = useSelector((state: RootState) => state.baseUrlReducer);

  const fetchProjectInstallationGuideData = useCallback(async () => {
    store.dispatch(showSpinner(true));

    try {
      const keyFeatureUrl = getProjectInstallationGuideUrl(repoLink, baseUrl);

      const response = await fetch(keyFeatureUrl);
      const data = await response.json();

      store.dispatch(
        setProjectInstallationGuide(data.installation_guide_markdown),
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
