/** @format */
import React from "react";
import MoveUpFadeAnimation from "@/components/MoveUpFadeAnimation";
import useLocalStorage from "@/lib/hooks/useLocalStorage";
import ActionButton from "@/components/ActionButton";
import "@uiw/react-markdown-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import SectionHeader from "../../components/SectionHeader";
import dynamic from "next/dynamic";
import { useFetchFolderStructureData } from "./hooks/useFetchFolderStructureData";

const MarkdownEditor = dynamic(
  () => import("@uiw/react-markdown-editor").then((mod) => mod.default),
  { ssr: false },
);

const FolderStructureSection = () => {
  const [repoInfo] = useLocalStorage("repoInfo", {
    repoName: "",
    repoLink: "",
  });
  const { markdownValue, fetchFolderStructureData, loading } =
    useFetchFolderStructureData(repoInfo.repoLink);

  return (
    <MoveUpFadeAnimation>
      <SectionHeader text="Folder Structure 📂📁" subtext="folder structure" />
      <div className="mt-10 flex w-full justify-center px-20">
        <ActionButton
          className="max-w-80"
          onClick={fetchFolderStructureData}
          text="Generate folder structure &rarr;"
        />
      </div>
      <hr className="my-8 h-[2px] border-0 bg-gray-500 dark:bg-gray-700" />
      <div className="container mb-10 w-[1500px]">
        <MarkdownEditor value={markdownValue} visible={true} />
      </div>
    </MoveUpFadeAnimation>
  );
};

export default FolderStructureSection;
