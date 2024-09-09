"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";
import MarkdownEditor from "@uiw/react-markdown-editor";
import "@/components/editor.css";
const MarkdownEditorImport = dynamic(
  () => import("@uiw/react-markdown-editor").then((mod) => mod.default),
  { ssr: false },
);
const ResultPage = () => {
  const router = useRouter();
  const { repoName } = useSelector((state: RootState) => state.repoReducer);
  const projectHeader = useSelector(
    (state: RootState) => state.projectHeaderReducer,
  );
  const projectOverview = useSelector(
    (state: RootState) => state.projectOverviewReducer,
  );
  const keyFeatures = useSelector(
    (state: RootState) => state.keyFeaturesReducer,
  );
  const folderStructure = useSelector(
    (state: RootState) => state.folderStructureReducer,
  );
  const installationGuide = useSelector(
    (state: RootState) => state.projectInstallationGuideReducer,
  );
  const contributingGuide = useSelector(
    (state: RootState) => state.contributingGuideReducer,
  );
  const contributors = useSelector(
    (state: RootState) => state.contributorsReducer,
  );
  const license = useSelector((state: RootState) => state.licenseReducer);

  //   if (repoName === "") {
  //     router.push("./");
  //   }

  const finalMarkdown =
    projectHeader +
    projectOverview +
    keyFeatures +
    folderStructure +
    installationGuide +
    contributingGuide +
    contributors +
    license;
  console.log({ finalMarkdown });
  return (
    <div>
      <Navbar />
      <MarkdownEditor.Markdown source={finalMarkdown} />
      <div className="h-7 w-7 bg-red-600"></div>
    </div>
  );
};

export default ResultPage;
