/** @format */
import React from "react";
import { useFetchProjectOverviewData } from "./hooks/useFetchProjectOverviewData";
import { setProjectOverview } from "./store/projectOverviewReducer";
import store from "@/app/store";
import SectionLayout from "@/app/main/components/SectionLayout";

const ProjectOverviewSection: React.FC = () => {
  const { projectOverviewMarkdownValue, fetchProjectOverviewData } =
    useFetchProjectOverviewData();

  return (
    <SectionLayout
      sectionHeaderMainText="Project Overview"
      sectionHeaderSubText="overview"
      actionButtonText="Generate overview of project &rarr;"
      actionButtonOnClick={fetchProjectOverviewData}
      markdownEditorValue={projectOverviewMarkdownValue}
      markdownEditorOnChange={(value) =>
        store.dispatch(setProjectOverview(value))
      }
      markdownClassName="h-[50vh]"
    />
  );
};

export default ProjectOverviewSection;

// /** @format */

// import React from "react";
// import MoveUpFadeAnimation from "@/components/MoveUpFadeAnimation";
// import SectionHeader from "../../components/SectionHeader";
// import ActionButton from "@/components/ActionButton";
// import { useFetchProjectOverviewData } from "./hooks/useFetchProjectOverviewData";
// import MarkDownEditor from "@/components/MarkDownEditor";
// import store from "@/app/store";
// import { setProjectOverview } from "./store/projectOverviewReducer";

// const ProjectOverviewSection: React.FC = () => {
//   const { projectOverviewMarkdownValue, fetchProjectOverviewData } =
//     useFetchProjectOverviewData();

//   return (
//     <MoveUpFadeAnimation>
//       <SectionHeader text="Project Overview" subtext="overview" />

//       <div className="mt-10 flex w-full justify-center px-20">
//         <ActionButton
//           onClick={fetchProjectOverviewData}
//           text="Generate overview of project &rarr;"
//         />
//       </div>
//       <hr className="my-8 h-[2px] border-0 bg-gray-500 dark:bg-gray-700" />
//       <MarkDownEditor
//         value={projectOverviewMarkdownValue}
//         visible={true}
//         className="h-[50vh]"
//         onChange={(value) => {
//           store.dispatch(setProjectOverview(value));
//         }}
//       />
//     </MoveUpFadeAnimation>
//   );
// };

// export default ProjectOverviewSection;
