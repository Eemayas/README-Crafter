/** @format */

import store from "@/app/store";
import { showSpinner } from "@/components/Modals/store/ModalReducer";
import { getLicenseUrl } from "@/lib/constants/apiEndpoints";
import { useState, useCallback } from "react";
import { initialLicenseMkdr } from "../constant";

export function useFetchLicenseData(repoLink: string) {
  const [licenseMarkdownValue, setLicenseMarkdownValue] =
    useState(initialLicenseMkdr);
  const [loading, setLoading] = useState(false);

  const fetchLicenseData = useCallback(async () => {
    setLoading(true);
    store.dispatch(showSpinner(true));

    try {
      const licenseUrl = getLicenseUrl(repoLink);

      const response = await fetch(licenseUrl);
      const data = await response.json();

      setLicenseMarkdownValue(data.license_markdown || licenseMarkdownValue);
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    setLoading(false);
    store.dispatch(showSpinner(false));
  }, [repoLink, licenseMarkdownValue]);

  return { licenseMarkdownValue, fetchLicenseData, loading };
}
