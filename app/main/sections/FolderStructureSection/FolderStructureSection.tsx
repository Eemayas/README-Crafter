/** @format */
import React from "react";
import MoveUpFadeAnimation from "@/components/MoveUpFadeAnimation";
import useLocalStorage from "@/lib/hooks/useLocalStorage";
import ActionButton from "@/components/ActionButton";
import "@uiw/react-markdown-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import SectionHeader from "../../components/SectionHeader";
import { useFetchFolderStructureData } from "./hooks/useFetchFolderStructureData";
import MarkDownEditor from "@/components/MarkDownEditor";

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
      <MarkDownEditor value={markdownValue} visible={true} />
    </MoveUpFadeAnimation>
  );
};

export default FolderStructureSection;
