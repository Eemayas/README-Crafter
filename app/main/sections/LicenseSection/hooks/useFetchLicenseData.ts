/** @format */

import store from "@/app/store";
import { showSpinner } from "@/components/Modals/store/ModalReducer";
import { getLicenseUrl } from "@/lib/constants/apiEndpoints";
import { useState, useCallback } from "react";
import { initialLicenseMkdr } from "../constant";
import useLocalStorage from "@/lib/hooks/useLocalStorage";
import { licenseLS, repoInfoLS } from "@/lib/constants/localStorageNames";

export function useFetchLicenseData() {
  const [{ repoLink }] = useLocalStorage(repoInfoLS, {
    repoName: "",
    repoLink: "",
  });
  const [licenseMarkdownValue, setLicenseMarkdownValue] = useLocalStorage(
    licenseLS,
    initialLicenseMkdr,
  );

  const fetchLicenseData = useCallback(async () => {
    store.dispatch(showSpinner(true));

    try {
      const licenseUrl = getLicenseUrl(repoLink);

      const response = await fetch(licenseUrl);
      const data = await response.json();

      setLicenseMarkdownValue(data.license_markdown || licenseMarkdownValue);
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    store.dispatch(showSpinner(false));
  }, [repoLink, licenseMarkdownValue]);

  return { licenseMarkdownValue, fetchLicenseData };
}
