/** @format */
import React from "react";
import { useFetchFolderStructureData } from "./hooks/useFetchFolderStructureData";
import store from "@/app/store";
import { setFolderstructure } from "./store/folderStructureReducer";
import SectionLayout from "@/app/main/components/SectionLayout";

const FolderStructureSection: React.FC = () => {
  const { folderStructureMarkdownValue, fetchFolderStructureData } =
    useFetchFolderStructureData();

  return (
    <SectionLayout
      sectionHeaderMainText="Folder Structure 📂📁"
      sectionHeaderSubText="folder structure"
      actionButtonText="Generate folder structure &rarr;"
      actionButtonOnClick={fetchFolderStructureData}
      markdownEditorValue={folderStructureMarkdownValue}
      markdownEditorOnChange={(value) =>
        store.dispatch(setFolderstructure(value))
      }
      markdownClassName="h-[50vh]" // Optional class for height
    />
  );
};

export default FolderStructureSection;

// /** @format */
// import React from "react";
// import MoveUpFadeAnimation from "@/components/MoveUpFadeAnimation";
// import ActionButton from "@/components/ActionButton";
// import SectionHeader from "../../components/SectionHeader";
// import { useFetchFolderStructureData } from "./hooks/useFetchFolderStructureData";
// import MarkDownEditor from "@/components/MarkDownEditor";
// import store from "@/app/store";
// import { setFolderstructure } from "./store/folderStructureReducer";
// import SectionLayout from "../../components/SectionLayout";

// const FolderStructureSection = () => {
//   const { folderStructureMarkdownValue, fetchFolderStructureData } =
//     useFetchFolderStructureData();

//   return (
//     <MoveUpFadeAnimation>
//       <SectionHeader text="Folder Structure 📂📁" subtext="folder structure" />
//       <div className="mt-10 flex w-full justify-center px-20">
//         <ActionButton
//           onClick={() => fetchFolderStructureData()}
//           text="Generate folder structure &rarr;"
//         />
//       </div>
//       <hr className="my-8 h-[2px] border-0 bg-gray-500 dark:bg-gray-700" />
//       <MarkDownEditor
//         value={folderStructureMarkdownValue}
//         visible={true}
//         className="h-[50vh]"
//         onChange={(value) => {
//           store.dispatch(setFolderstructure(value));
//         }}
//       />
//     </MoveUpFadeAnimation>
//   );
// };

// export default FolderStructureSection;
