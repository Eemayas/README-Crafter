/** @format */

import store, { RootState } from "@/app/store";
import { showSpinner } from "@/components/Modals/store/ModalReducer";
import { getLicenseUrl } from "@/lib/constants/apiEndpoints";
import { useCallback } from "react";
import useLocalStorage from "@/lib/hooks/useLocalStorage";
import { repoInfoLS } from "@/lib/constants/localStorageNames";
import { useSelector } from "react-redux";
import { setLicense } from "../store/licenseReducer";

export function useFetchLicenseData() {
  const [{ repoLink }] = useLocalStorage(repoInfoLS, {
    repoName: "",
    repoLink: "",
  });

  const licenseMarkdownValue = useSelector(
    (state: RootState) => state.licenseReducer,
  );
  const fetchLicenseData = useCallback(async () => {
    store.dispatch(showSpinner(true));

    try {
      const licenseUrl = getLicenseUrl(repoLink);

      const response = await fetch(licenseUrl);
      const data = await response.json();

      store.dispatch(setLicense(data.license_markdown));
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    store.dispatch(showSpinner(false));
  }, [repoLink, licenseMarkdownValue]);

  return { licenseMarkdownValue, fetchLicenseData };
}
