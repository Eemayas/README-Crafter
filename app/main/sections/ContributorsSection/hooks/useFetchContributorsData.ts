/** @format */

import { useState, useCallback } from "react";
import { initialContributorsMkdr } from "../constants";
import { getContributorsUrl } from "@/lib/constants/apiEndpoints";
import { showSpinner } from "@/components/Modals/store/ModalReducer";
import store from "@/app/store";

export function useFetchContributorsData(repoLink: string) {
  const [contributorsMarkdownValue, setContributorsMarkdownValue] = useState(
    initialContributorsMkdr,
  );

  const fetchContributorsData = useCallback(async () => {
    store.dispatch(showSpinner(true));

    try {
      const contributorsUrl = getContributorsUrl(repoLink);

      const response = await fetch(contributorsUrl);
      const data = await response.json();

      setContributorsMarkdownValue(data.contributors_markdown);
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    store.dispatch(showSpinner(false));
  }, [repoLink]);

  return { contributorsMarkdownValue, fetchContributorsData };
}
