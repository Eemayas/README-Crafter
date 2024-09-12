/** @format */

import { useSelector } from "react-redux";

export const BASE_API_URL = "http://127.0.0.1:5000";

export const getMetaDataUrl = (repoLink: string, baseUrl: string) => {
  const sss = `${baseUrl}/github_metadata?repository_url=${encodeURIComponent(repoLink)}`;
  console.log({ sss });
  return sss;
};

export const getCloneRepoUrl = (repoLink: string, baseUrl: string) =>
  `${baseUrl}/clone_repo?repository_url=${encodeURIComponent(repoLink)}`;

export const getFolderStructureUrl = (repoLink: string, baseUrl: string) =>
  `${baseUrl}/folder_structure?repository_url=${encodeURIComponent(repoLink)}`;

export const getFolderStructureDictUrl = (repoLink: string, baseUrl: string) =>
  `${baseUrl}/folder_structure_dict?repository_url=${encodeURIComponent(
    repoLink,
  )}`;

export const getProjectIconUrl = (
  repoLink: string,
  baseUrl: string,
  choice: number,
  customLink: string,
) =>
  `${baseUrl}/project_icon?repository_url=${encodeURIComponent(
    repoLink,
  )}&choice=${choice}&custom_link=${customLink}`;

export const getProjectNameUrl = (repoLink: string, baseUrl: string) =>
  `${baseUrl}/project_name?repository_url=${encodeURIComponent(repoLink)}`;

export const getProjectBadgeUrl = (repoLink: string, baseUrl: string) =>
  `${baseUrl}/get_project_badges?repository_url=${encodeURIComponent(
    repoLink,
  )}&badges=license&badges=last-commit&badges=repo-top-language&badges=repo-language-count&badges=build-status&badges=open-issues&badges=forks&badges=stars&badges=pull-requests&badges=contributors&badges=commit-activity&badges=code-size&badges=repo-size&badges=downloads&badges=sponsors&badges=release-version&badges=coverage&badges=code-quality&badges=dependencies&badges=dev-dependencies&badges=security&badges=performance&badges=activity&badges=documentation&badges=version`;

export const getProjectLanguageUrl = (repoLink: string, baseUrl: string) =>
  `${baseUrl}/get_project_languages?repository_url=${encodeURIComponent(
    repoLink,
  )}`;

export const getProjectOverviewUrl = (repoLink: string, baseUrl: string) =>
  `${baseUrl}/project_overview?repository_url=${encodeURIComponent(repoLink)}`;

export const getSummaryGenerationFileUrl = (
  repoLink: string,
  baseUrl: string,
  filepath: string,
) =>
  `${baseUrl}/file_summary_generation?repository_url=${encodeURIComponent(
    repoLink,
  )}&file_path=Github_repos/${filepath}`;

export const getKeyFeatureUrl = (repoLink: string, baseUrl: string) =>
  `${baseUrl}/project_key_feature?repository_url=${encodeURIComponent(
    repoLink,
  )}`;

export const getProjectInstallationGuideUrl = (
  repoLink: string,
  baseUrl: string,
) =>
  `${baseUrl}/project_installation_guide?repository_url=${encodeURIComponent(
    repoLink,
  )}`;

export const getContributingGuideUrl = (repoLink: string, baseUrl: string) =>
  `${baseUrl}/contributing_guide?repository_url=${encodeURIComponent(
    repoLink,
  )}`;

export const getContributorsUrl = (repoLink: string, baseUrl: string) =>
  `${baseUrl}/project_contributors?repository_url=${encodeURIComponent(
    repoLink,
  )}`;

export const getLicenseUrl = (repoLink: string, baseUrl: string) =>
  `${baseUrl}/project_license?repository_url=${encodeURIComponent(repoLink)}`;
