/** @format */

import React from "react";
import dynamic from "next/dynamic";
import useLocalStorage from "@/lib/hooks/useLocalStorage";
import MoveUpFadeAnimation from "@/components/MoveUpFadeAnimation";
import SectionHeader from "../../components/SectionHeader";
import ActionButton from "@/components/ActionButton";
import { useFetchProjectOverviewData } from "./hooks/useFetchProjectOverviewData";

const MarkdownEditor = dynamic(
  () => import("@uiw/react-markdown-editor").then((mod) => mod.default),
  { ssr: false },
);

const ProjectOverviewSection: React.FC = () => {
  const [repoInfo] = useLocalStorage("repoInfo", {
    repoName: "",
    repoLink: "",
  });
  const { projectOverviewMarkdownValue, fetchProjectOverviewData } =
    useFetchProjectOverviewData(repoInfo.repoLink);

  return (
    <MoveUpFadeAnimation>
      <SectionHeader text="Project Overview" subtext="overview" />

      <div className="mt-10 flex w-full justify-center px-20">
        <ActionButton
          className="max-w-80"
          onClick={fetchProjectOverviewData}
          text="Generate overview of project &rarr;"
        />
      </div>
      <hr className="my-8 h-[2px] border-0 bg-gray-500 dark:bg-gray-700" />
      <div className="container mb-10 w-[1500px]">
        <MarkdownEditor
          value={projectOverviewMarkdownValue}
          visible={true}
          className="h-[50vh]"
        />
      </div>
    </MoveUpFadeAnimation>
  );
};

export default ProjectOverviewSection;
