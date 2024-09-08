/** @format */

import { useCallback } from "react";
import { getContributorsUrl } from "@/lib/constants/apiEndpoints";
import { showSpinner } from "@/components/Modals/store/ModalReducer";
import store, { RootState } from "@/app/store";
import { useSelector } from "react-redux";
import { setContributors } from "../store/contributorsReducer";

export function useFetchContributorsData() {
  const { repoLink } = useSelector((state: RootState) => state.repoReducer);
  const contributorsMarkdownValue = useSelector(
    (state: RootState) => state.contributorsReducer,
  );

  const fetchContributorsData = useCallback(async () => {
    store.dispatch(showSpinner(true));

    try {
      const contributorsUrl = getContributorsUrl(repoLink);

      const response = await fetch(contributorsUrl);
      const data = await response.json();

      store.dispatch(setContributors(data.contributors_markdown));
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    store.dispatch(showSpinner(false));
  }, [repoLink]);

  return { contributorsMarkdownValue, fetchContributorsData };
}
