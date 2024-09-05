/** @format */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setRepo } from "../store/repoReducer";
import useLocalStorage from "@/lib/hooks/useLocalStorage";

export const useRepoData = () => {
  const dispatch = useDispatch();
  const [metadata, setMetadata] = useState(null);
  const [cloneData, setCloneData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [repoInfo, setRepoInfo] = useLocalStorage("repoInfo", {
    repoName: "",
    repoLink: "",
  });

  const validateGitHubLink = (value: string) => {
    const githubUrlPattern = /^https:\/\/github\.com\/[\w-]+\/[\w-]+\/?$/;
    return githubUrlPattern.test(value);
  };

  const checkRepoExistence = async (url: string): Promise<boolean> => {
    try {
      const repoApiUrl = "https://api.github.com/repos/".concat(
        url.split("/").slice(3).join("/")
      );
      const response = await fetch(repoApiUrl);

      if (!response.ok) {
        throw new Error(
          "GitHub repository does not exist or Error fetching repository data"
        );
      }

      const data = await response.json();
      const repoName = data.name;
      return true;
    } catch (error) {
      setErrorMessage(
        "GitHub repository does not exist or Error fetching repository data"
      );
      return false;
    }
  };

  const fetchData = async (inputRepositoryUrl: string) => {
    try {
      const metadataUrl = `http://127.0.0.1:5000/github_metadata?repository_url=${encodeURIComponent(
        inputRepositoryUrl
      )}`;
      const cloneRepUrl = `http://127.0.0.1:5000/clone_repo?repository_url=${encodeURIComponent(
        inputRepositoryUrl
      )}`;

      const metadataResponse = await fetch(metadataUrl);
      const metadataJson = await metadataResponse.json();
      setMetadata(metadataJson);

      const cloneResponse = await fetch(cloneRepUrl);
      const cloneJson = await cloneResponse.json();
      setCloneData(cloneJson);
      console.log({ metadataJson });

      setRepoInfo({
        repoName: metadataJson.metadata.name,
        repoLink: metadataJson.metadata.clone_url.replace(/\.git$/, ""),
      });
      dispatch(
        setRepo({
          repoName: metadataJson.metadata.name,
          repoLink: metadataJson.metadata.clone_url,
        })
      );
    } catch (error) {
      console.error("Error fetching data:", error);
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
