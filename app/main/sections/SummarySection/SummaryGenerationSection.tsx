/** @format */

import React, { useState } from "react";

import { generateFileList } from "@/lib/utils/fileUtils";
import useLocalStorage from "@/lib/hooks/useLocalStorage";
import {
  ignoreListExtensions,
  ignoreListFolderStructure,
} from "@/lib/constants/ignoreList";
import { useFetchSummaryData } from "./hooks/useFetchSummaryData";
import MoveUpFadeAnimation from "@/components/MoveUpFadeAnimation";
import SectionHeader from "../../components/SectionHeader";
import ActionButton from "@/components/ActionButton";
import dynamic from "next/dynamic";
import { MultiStepLoader as Loader } from "@/components/ui/multi-step-loader";
import { IconSquareRoundedX } from "@tabler/icons-react";
import { incorrectInitialFileDescriptions } from "./constant";

const MarkdownEditor = dynamic(
  () => import("@uiw/react-markdown-editor").then((mod) => mod.default),
  { ssr: false },
);

const SummaryGenerationSection: React.FC = () => {
  const [folderStructureDict] = useLocalStorage("folderStructureDict", {});
  const [repoInfo] = useLocalStorage("repoInfo", {
    repoName: "",
    repoLink: "",
  });

  const fileList = generateFileList(
    folderStructureDict,
    ignoreListFolderStructure,
    ignoreListExtensions,
  );

  const { markdownValue, fetchSummaryData, loading, currentState, setLoading } =
    useFetchSummaryData(
      fileList,
      repoInfo.repoLink,
      incorrectInitialFileDescriptions,
    );

  return (
    <>
      <MoveUpFadeAnimation>
        <SectionHeader
          className="mt-52"
          text="Summary Generation 📝"
          subtext="summary"
        />
        <div className="mt-10 flex w-full justify-center px-20">
          <ActionButton
            className="max-w-80"
            onClick={fetchSummaryData}
            text="Generate Header &rarr;"
          />
        </div>
        <hr className="my-8 h-[2px] border-0 bg-gray-500 dark:bg-gray-700" />
        <div className="container mb-10 w-[1500px]">
          <MarkdownEditor
            value={markdownValue}
            visible={true}
            className="min-h-screen"
          />
        </div>
      </MoveUpFadeAnimation>
      {loading && (
        <div className="flex h-[60vh] w-full items-center justify-center">
          <Loader
            loadingStates={fileList.map((filepath) => ({ text: filepath }))}
            loading={loading}
            duration={2000}
            currentState={currentState}
          />
          <button
            className="fixed right-4 top-4 z-[120] text-black dark:text-white"
            onClick={() => setLoading(false)}
          >
            <IconSquareRoundedX className="h-10 w-10" />
          </button>
        </div>
      )}
    </>
  );
};

export default SummaryGenerationSection;
