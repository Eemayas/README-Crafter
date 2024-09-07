/** @format */

import { useState, useCallback } from "react";

import { initialProjectHeaderMkdr, projectTypeList } from "../constants";
import { showSpinner } from "@/components/Modals/store/ModalReducer";
import store, { RootState } from "@/app/store";
import {
  getProjectBadgeUrl,
  getProjectIconUrl,
  getProjectLanguageUrl,
  getProjectNameUrl,
} from "@/lib/constants/apiEndpoints";
import useLocalStorage from "@/lib/hooks/useLocalStorage";
import { headerSectionLS, repoInfoLS } from "@/lib/constants/localStorageNames";
import { useSelector } from "react-redux";
import { setHeader } from "../store/headerReducer";

export function useFetchHeaderData() {
  const [{ repoLink }] = useLocalStorage(repoInfoLS, {
    repoName: "",
    repoLink: "",
  });

  const [selectedOption, setSelectedOption] = useState<string>(
    projectTypeList[0],
  );
  const [inputProjectImageUrl, setInputProjectImageUrl] = useState("");

  const projectHeaderValue = useSelector(
    (state: RootState) => state.projectHeaderReducer,
  );
  const fetchHeaderData = useCallback(async () => {
    store.dispatch(showSpinner(true));

    // Define URLs
    const projectIconUrl = getProjectIconUrl(
      repoLink,
      projectTypeList.findIndex((option) => option === selectedOption) + 1,
      inputProjectImageUrl,
    );
    const projectNameUrl = getProjectNameUrl(repoLink);
    const projectBadgeUrl = getProjectBadgeUrl(repoLink);
    const projectLanguageUrl = getProjectLanguageUrl(repoLink);

    const fetchData = async (url: string) => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
      } catch (error) {
        console.error(`Error fetching data from ${url}:`, error);
        throw error;
      }
    };

    try {
      const [
        projectIconJson,
        projectNameJson,
        projectBadgeJson,
        projectLanguageJson,
      ] = await Promise.all([
        fetchData(projectIconUrl),
        fetchData(projectNameUrl),
        fetchData(projectBadgeUrl),
        fetchData(projectLanguageUrl),
      ]);
      console.log({
        projectBadgeJson: projectBadgeJson?.badges_html,
      });

      store.dispatch(
        setHeader(`
${projectIconJson?.project_image_markdown || ""}
${projectNameJson?.project_name_markdown || ""}
${projectBadgeJson?.badges_html || ""}
${projectLanguageJson?.badges_html || ""}
      `),
      );
    } catch (error) {
      console.error("Error fetching one or more data sources:", error);
    } finally {
      store.dispatch(showSpinner(false));
    }
  }, [repoLink, selectedOption, inputProjectImageUrl]);

  return {
    projectHeaderValue,
    fetchHeaderData,
    selectedOption,
    setSelectedOption,
    inputProjectImageUrl,
    setInputProjectImageUrl,
  };
}
