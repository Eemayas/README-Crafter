/** @format */

import { useCallback } from "react";
import { initialContributorsMkdr } from "../constants";
import { getContributorsUrl } from "@/lib/constants/apiEndpoints";
import { showSpinner } from "@/components/Modals/store/ModalReducer";
import store, { RootState } from "@/app/store";
import { contributorsLS, repoInfoLS } from "@/lib/constants/localStorageNames";
import useLocalStorage from "@/lib/hooks/useLocalStorage";
import { useSelector } from "react-redux";
import { setLicense } from "../../LicenseSection/store/licenseReducer";
import { setContributors } from "../store/contributorsReducer";

export function useFetchContributorsData() {
  const [{ repoLink }] = useLocalStorage(repoInfoLS, {
    repoName: "",
    repoLink: "",
  });
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
