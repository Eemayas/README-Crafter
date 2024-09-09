/** @format */

import { useFetchContributingGuideData } from "./hooks/useFetchContributingGuideData";
import store from "@/app/store";
import { setContributingGuide } from "./store/ContributingGuideReducer";
import SectionLayout from "@/app/main/components/SectionLayout";

const ContributingGuideSection = () => {
  const { contributingGuideMarkdownValue, fetchContributingGuideData } =
    useFetchContributingGuideData();

  return (
    <SectionLayout
      sectionHeaderMainText={"Contributing Guide"}
      sectionHeaderSubText={"contributing guide"}
      actionButtonText="Generate contributing guide of project &rarr;"
      actionButtonOnClick={function (): void {
        fetchContributingGuideData();
      }}
      markdownEditorValue={contributingGuideMarkdownValue}
      markdownEditorOnChange={function (value: string): void {
        store.dispatch(setContributingGuide(value));
      }}
      markdownClassName={"h-screen"}
    />
    // <MoveUpFadeAnimation>
    //   <SectionHeader text="Contributing Guide" subtext={"contributing guide"} />

    //   <div className="mt-10 flex w-full justify-center px-20">
    //     <ActionButton
    //       onClick={function (): void {
    //         fetchContributingGuideData();
    //       }}
    //       text="Generate contributing guide of project &rarr;"
    //     />
    //   </div>
    //   <hr className="my-8 h-[2px] border-0 bg-gray-500 dark:bg-gray-700"></hr>
    //   <MarkDownEditor
    //     value={contributingGuideMarkdownValue}
    //     visible={true}
    //     className="h-screen"
    //     onChange={(value) => store.dispatch(setContributingGuide(value))}
    //   />
    // </MoveUpFadeAnimation>
  );
};
export default ContributingGuideSection;
