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
  );
};
export default ContributingGuideSection;
