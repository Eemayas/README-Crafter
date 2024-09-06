/** @format */

import MoveUpFadeAnimation from "@/components/MoveUpFadeAnimation";
import useLocalStorage from "@/lib/hooks/useLocalStorage";
import SectionHeader from "../../components/SectionHeader";
import ActionButton from "@/components/ActionButton";
import { useFetchKeyFeatureData } from "./hooks/useFetchKeyFeatureData";
import MarkDownEditor from "@/components/MarkDownEditor";

const KeyFeatureSection: React.FC = () => {
  const [repoInfo] = useLocalStorage("repoInfo", {
    repoName: "",
    repoLink: "",
  });
  const { keyFeatureMarkdownValue, fetchKeyFeatureData, loading } =
    useFetchKeyFeatureData(repoInfo.repoLink);

  return (
    <>
      <MoveUpFadeAnimation>
        <SectionHeader text="Key Feature" subtext={"Key feature"} />

        <div className="mt-10 flex w-full justify-center px-20">
          <ActionButton
            className="max-w-80"
            onClick={function (): void {
              fetchKeyFeatureData();
            }}
            text="Generate Key feature of project &rarr;"
          />
        </div>
        <hr className="my-8 h-[2px] border-0 bg-gray-500 dark:bg-gray-700"></hr>
        <MarkDownEditor
          value={keyFeatureMarkdownValue}
          visible={true}
          className="h-[50vh]"
        />
      </MoveUpFadeAnimation>
    </>
  );
};

export default KeyFeatureSection;
