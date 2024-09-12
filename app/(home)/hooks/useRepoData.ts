/** @format */
import { useState } from "react";
import { setRepo } from "../store/repoReducer";
import { getCloneRepoUrl, getMetaDataUrl } from "@/lib/constants/apiEndpoints";
import store, { RootState } from "@/app/store";
import { useSelector } from "react-redux";

export const useRepoData = () => {
  const [metadata, setMetadata] = useState(null);
  const [cloneData, setCloneData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const baseUrl = useSelector((state: RootState) => state.baseUrlReducer);
  const validateGitHubLink = (value: string) => {
    const githubUrlPattern = /^https:\/\/github\.com\/[\w-]+\/[\w-]+\/?$/;
    return githubUrlPattern.test(value);
  };

  const checkRepoExistence = async (url: string): Promise<boolean> => {
    try {
      const repoApiUrl = "https://api.github.com/repos/".concat(
        url.split("/").slice(3).join("/"),
      );
      const response = await fetch(repoApiUrl);

      if (!response.ok) {
        throw new Error(
          "GitHub repository does not exist or Error fetching repository data",
        );
      }

      return true;
    } catch (error) {
      setErrorMessage(
        "GitHub repository does not exist or Error fetching repository data",
      );
      return false;
    }
  };

  const fetchData = async (inputRepositoryUrl: string) => {
    try {
      const metadataUrl = getMetaDataUrl(inputRepositoryUrl, baseUrl);
      const cloneRepUrl = getCloneRepoUrl(inputRepositoryUrl, baseUrl);
      console.log({ metadata, cloneData });

      const metadataResponse = await fetch(metadataUrl);
      const metadataJson = await metadataResponse.json();
      setMetadata(metadataJson);

      const cloneResponse = await fetch(cloneRepUrl);
      const cloneJson = await cloneResponse.json();
      setCloneData(cloneJson);
      console.log({ metadataJson });

      store.dispatch(
        setRepo({
          repoName: metadataJson.metadata.name,
          repoLink: inputRepositoryUrl,
        }),
      );
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  return {
    metadata,
    cloneData,
    errorMessage,
    validateGitHubLink,
    checkRepoExistence,
    fetchData,
    setErrorMessage,
  };
};
