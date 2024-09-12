/** @format */

import store, { RootState } from "@/app/store";
import { showSpinner } from "@/components/Modals/store/ModalReducer";
import { useCallback } from "react";
import { getProjectOverviewUrl } from "@/lib/constants/apiEndpoints";
import { useSelector } from "react-redux";
import { setProjectOverview } from "../store/projectOverviewReducer";

export function useFetchProjectOverviewData() {
  const { repoLink } = useSelector((state: RootState) => state.repoReducer);
  const projectOverviewMarkdownValue = useSelector(
    (state: RootState) => state.projectOverviewReducer,
  );
  const baseUrl = useSelector((state: RootState) => state.baseUrlReducer);

  const fetchProjectOverviewData = useCallback(async () => {
    store.dispatch(showSpinner(true));

    try {
      const projectOverviewUrl = getProjectOverviewUrl(repoLink, baseUrl);

      const response = await fetch(projectOverviewUrl);
      const data = await response.json();
      store.dispatch(setProjectOverview(data.project_overview_markdown));
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      store.dispatch(showSpinner(false));
    }
  }, [repoLink]);

  return { projectOverviewMarkdownValue, fetchProjectOverviewData };
}
