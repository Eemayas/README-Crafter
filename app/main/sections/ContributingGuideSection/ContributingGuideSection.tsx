/** @format */

import ActionButton from "@/components/ActionButton";
import MoveUpFadeAnimation from "@/components/MoveUpFadeAnimation";
import useLocalStorage from "@/lib/hooks/useLocalStorage";
import { useFetchContributingGuideData } from "./hooks/useFetchContributingGuideData";
import dynamic from "next/dynamic";
import SectionHeader from "../../components/SectionHeader";

const MarkdownEditor = dynamic(
  () => import("@uiw/react-markdown-editor").then((mod) => mod.default),
  { ssr: false },
);
const ContributingGuideSection = () => {
  const [repoInfo] = useLocalStorage("repoInfo", {
    repoName: "",
    repoLink: "",
  });
  const { contributingGuideMarkdownValue, fetchContributingGuideData } =
    useFetchContributingGuideData(repoInfo.repoLink);

  return (
    <MoveUpFadeAnimation>
      <SectionHeader text="Contributing Guide" subtext={"contributing guide"} />

      <div className="mt-10 flex w-full justify-center px-20">
        <ActionButton
          className="max-w-80"
          onClick={function (): void {
            fetchContributingGuideData();
          }}
          text="Generate contributing guide of project &rarr;"
        />
      </div>
      <hr className="my-8 h-[2px] border-0 bg-gray-500 dark:bg-gray-700"></hr>
      <div className="container mb-10 w-[1500px]">
        <MarkdownEditor
          value={contributingGuideMarkdownValue}
          visible={true}
          className="h-screen"
        />
      </div>
    </MoveUpFadeAnimation>
  );
};
export default ContributingGuideSection;
