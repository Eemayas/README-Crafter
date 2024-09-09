/** @format */

import ActionButton from "@/components/ActionButton";
import MoveUpFadeAnimation from "@/components/MoveUpFadeAnimation";
import { useFetchContributingGuideData } from "./hooks/useFetchContributingGuideData";
import SectionHeader from "../../components/SectionHeader";
import MarkDownEditor from "@/components/MarkDownEditor";
import store from "@/app/store";
import { setContributingGuide } from "./store/ContributingGuideReducer";

const ContributingGuideSection = () => {
  const { contributingGuideMarkdownValue, fetchContributingGuideData } =
    useFetchContributingGuideData();

  return (
    <MoveUpFadeAnimation>
      <SectionHeader text="Contributing Guide" subtext={"contributing guide"} />

      <div className="mt-10 flex w-full justify-center px-20">
        <ActionButton
          onClick={function (): void {
            fetchContributingGuideData();
          }}
          text="Generate contributing guide of project &rarr;"
        />
      </div>
      <hr className="my-8 h-[2px] border-0 bg-gray-500 dark:bg-gray-700"></hr>
      <MarkDownEditor
        value={contributingGuideMarkdownValue}
        visible={true}
        className="h-screen"
        onChange={(value) => store.dispatch(setContributingGuide(value))}
      />
    </MoveUpFadeAnimation>
  );
};
export default ContributingGuideSection;
