/** @format */
import { useState, useCallback } from "react";
import { initialContributingGuidelinesMkdr } from "../constant";
import { showSpinner } from "@/components/Modals/store/ModalReducer";
import store, { RootState } from "@/app/store";
import { getContributingGuideUrl } from "@/lib/constants/apiEndpoints";
import useLocalStorage from "@/lib/hooks/useLocalStorage";
import {
  contributingGuideLS,
  contributorsLS,
  repoInfoLS,
} from "@/lib/constants/localStorageNames";
import { useSelector } from "react-redux";
import { setContributingGuide } from "../store/ContributingGuideReducer";

export function useFetchContributingGuideData() {
  const [{ repoLink }] = useLocalStorage(repoInfoLS, {
    repoName: "",
    repoLink: "",
  });
  const contributingGuideMarkdownValue = useSelector(
    (state: RootState) => state.contributingGuideReducer,
  );

  const fetchContributingGuideData = useCallback(async () => {
    store.dispatch(showSpinner(true));

    try {
      const contributingGuideUrl = getContributingGuideUrl(repoLink);

      const response = await fetch(contributingGuideUrl);
      const data = await response.json();

      store.dispatch(setContributingGuide(data.contributing_guide_markdown));
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    store.dispatch(showSpinner(false));
  }, [repoLink]);

  return {
    contributingGuideMarkdownValue,
    fetchContributingGuideData,
  };
}
