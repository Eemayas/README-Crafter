/** @format */

import store from "@/app/store";
import { showSpinner } from "@/components/Modals/store/ModalReducer";
import { useState, useCallback } from "react";
import { initialProjectOverviewMkdr } from "../constants";
import { getProjectOverviewUrl } from "@/lib/constants/apiEndpoints";

export function useFetchProjectOverviewData(repoLink: string) {
  const [projectOverviewMarkdownValue, setProjectOverviewMarkdownValue] =
    useState(initialProjectOverviewMkdr);

  const fetchProjectOverviewData = useCallback(async () => {
    store.dispatch(showSpinner(true));

    try {
      const projectOverviewUrl = getProjectOverviewUrl(repoLink);

      const response = await fetch(projectOverviewUrl);
      const data = await response.json();

      setProjectOverviewMarkdownValue(data.project_overview_markdown);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      store.dispatch(showSpinner(false));
    }
  }, [repoLink]);

  return { projectOverviewMarkdownValue, fetchProjectOverviewData };
}
