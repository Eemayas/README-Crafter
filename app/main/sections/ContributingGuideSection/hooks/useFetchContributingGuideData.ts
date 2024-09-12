/** @format */
import { useCallback } from "react";
import { showSpinner } from "@/components/Modals/store/ModalReducer";
import store, { RootState } from "@/app/store";
import { getContributingGuideUrl } from "@/lib/constants/apiEndpoints";
import { useSelector } from "react-redux";
import { setContributingGuide } from "../store/ContributingGuideReducer";

export function useFetchContributingGuideData() {
  const { repoLink } = useSelector((state: RootState) => state.repoReducer);
  const contributingGuideMarkdownValue = useSelector(
    (state: RootState) => state.contributingGuideReducer,
  );
  const baseUrl = useSelector((state: RootState) => state.baseUrlReducer);

  const fetchContributingGuideData = useCallback(async () => {
    store.dispatch(showSpinner(true));

    try {
      const contributingGuideUrl = getContributingGuideUrl(repoLink, baseUrl);

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
