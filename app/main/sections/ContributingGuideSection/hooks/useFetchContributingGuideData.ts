/** @format */
import { useState, useCallback } from "react";
import { initialContributingGuidelinesMkdr } from "../constant";
import { showSpinner } from "@/components/Modals/store/ModalReducer";
import store from "@/app/store";
import { getContributingGuideUrl } from "@/lib/constants/apiEndpoints";

export function useFetchContributingGuideData(repoLink: string) {
  const [contributingGuideMarkdownValue, setContributingGuideMarkdownValue] =
    useState(initialContributingGuidelinesMkdr);
  const [loading, setLoading] = useState(false);

  const fetchContributingGuideData = useCallback(async () => {
    setLoading(true);
    store.dispatch(showSpinner(true));

    try {
      const contributingGuideUrl = getContributingGuideUrl(repoLink);

      const response = await fetch(contributingGuideUrl);
      const data = await response.json();

      setContributingGuideMarkdownValue(data.contributing_guide_markdown);
      console.log({ data: data.contributing_guide_markdown });
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    setLoading(false);
    store.dispatch(showSpinner(false));
  }, [repoLink]);

  return {
    contributingGuideMarkdownValue,
    fetchContributingGuideData,
    loading,
  };
}
