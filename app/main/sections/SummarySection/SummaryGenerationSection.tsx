/** @format */

import React from "react";
import { useFetchSummaryData } from "./hooks/useFetchSummaryData";
import MoveUpFadeAnimation from "@/components/MoveUpFadeAnimation";
import SectionHeader from "../../components/SectionHeader";
import ActionButton from "@/components/ActionButton";
import { MultiStepLoader as Loader } from "@/components/ui/multi-step-loader";
import { IconSquareRoundedX } from "@tabler/icons-react";
import MarkDownEditor from "@/components/MarkDownEditor";
import store from "@/app/store";
import { setSummaryGeneration } from "./store/summaryGenerationReducer";

const SummaryGenerationSection: React.FC = () => {
  const {
    markdownValue,
    fetchSummaryData,
    loading,
    currentState,
    setLoading,
    fileList,
  } = useFetchSummaryData();

  return (
    <>
      <MoveUpFadeAnimation>
        <SectionHeader
          className="pt-52"
          text="Summary Generation 📝"
          subtext="summary"
        />
        <div className="mt-10 flex w-full justify-center px-20">
          <ActionButton
            onClick={fetchSummaryData}
            text="Generate summary &rarr;"
          />
        </div>
        <hr className="my-8 h-[2px] border-0 bg-gray-500 dark:bg-gray-700" />
        <MarkDownEditor
          value={markdownValue}
          visible={true}
          className="min-h-screen"
          onChange={(value) => {
            store.dispatch(setSummaryGeneration(value));
          }}
        />
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
