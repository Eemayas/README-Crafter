/** @format */

import MoveUpFadeAnimation from "@/components/MoveUpFadeAnimation";
import SectionHeader from "../../components/SectionHeader";
import ActionButton from "@/components/ActionButton";
import { useFetchKeyFeatureData } from "./hooks/useFetchKeyFeatureData";
import MarkDownEditor from "@/components/MarkDownEditor";
import store from "@/app/store";
import { setKeyFeatures } from "./store/keyFeaturesReducer";

const KeyFeatureSection: React.FC = () => {
  const { keyFeatureMarkdownValue, fetchKeyFeatureData } =
    useFetchKeyFeatureData();

  return (
    <>
      <MoveUpFadeAnimation>
        <SectionHeader text="Key Feature" subtext={"Key feature"} />

        <div className="mt-10 flex w-full justify-center px-20">
          <ActionButton
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
          onChange={(value) => {
            store.dispatch(setKeyFeatures(value));
          }}
        />
      </MoveUpFadeAnimation>
    </>
  );
};

export default KeyFeatureSection;
