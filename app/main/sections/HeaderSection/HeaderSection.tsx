/** @format */
"use client";
import React from "react";
import DropdownField from "@/components/Dropdown";
import InputField from "@/components/InputField";
import { projectTypeList } from "./constants";
import { useFetchHeaderData } from "./hooks/useFetchHeaderData";
import { setHeader } from "./store/headerReducer";
import store from "@/app/store";
import SectionLayout from "@/app/main/components/SectionLayout";

const HeaderSection: React.FC = () => {
  const {
    projectHeaderValue,
    fetchHeaderData,
    selectedOption,
    setSelectedOption,
    inputProjectImageUrl,
    setInputProjectImageUrl,
  } = useFetchHeaderData();

  const handleDropdownChange = (selected: string) => {
    setSelectedOption(selected);
    console.log("Selected option:", selected);
  };

  return (
    <SectionLayout
      sectionHeaderMainText="Project Header"
      sectionHeaderSubText="header"
      actionButtonText="Generate Header &rarr;"
      actionButtonOnClick={fetchHeaderData}
      markdownEditorValue={projectHeaderValue}
      markdownEditorOnChange={(value) => store.dispatch(setHeader(value))}
      markdownClassName="h-[50vh]"
    >
      <div className="w-full">
        <div className="mx-auto mt-10 flex w-[30rem] flex-col gap-5">
          <DropdownField
            label="Select Project Type"
            options={projectTypeList}
            onChange={handleDropdownChange}
          />
          {selectedOption === "Custom Link" ? (
            <InputField
              label="Profile Icon Link"
              value={inputProjectImageUrl}
              onChange={(e) => setInputProjectImageUrl(e.target.value)}
            />
          ) : null}
        </div>
      </div>
    </SectionLayout>
  );
};

export default HeaderSection;

// /** @format */
// "use client";
// import React from "react";
// import MoveUpFadeAnimation from "@/components/MoveUpFadeAnimation";
// import ActionButton from "@/components/ActionButton";;
// import DropdownField from "@/components/Dropdown";
// import InputField from "@/components/InputField";
// import { projectTypeList } from "./constants";
// import SectionHeader from "../../components/SectionHeader";
// import { useFetchHeaderData } from "./hooks/useFetchHeaderData";
// import MarkDownEditor from "@/components/MarkDownEditor";
// import { setHeader } from "./store/headerReducer";
// import store from "@/app/store";
// import SectionLayout from "@/app/main/components/SectionLayout";
// const HeaderSection = () => {
//   const {
//     projectHeaderValue,
//     fetchHeaderData,
//     selectedOption,
//     setSelectedOption,
//     inputProjectImageUrl,
//     setInputProjectImageUrl,
//   } = useFetchHeaderData();

//   const handleDropdownChange = (selected: string) => {
//     setSelectedOption(selected);
//     console.log("Selected option:", selected);
//   };

//   return (
//     <MoveUpFadeAnimation>
//       <SectionHeader text="Project Header" subtext="header" />
//       <div className="w-full">
//         <div className="mx-auto mt-10 flex w-[30rem] flex-col gap-5">
//           <DropdownField
//             label="Select Project Type"
//             options={projectTypeList}
//             onChange={handleDropdownChange}
//           />
//           {selectedOption === "Custom Link" ? (
//             <InputField
//               label="Profile Icon Link"
//               value={inputProjectImageUrl}
//               onChange={(e) => setInputProjectImageUrl(e.target.value)}
//             />
//           ) : null}
//         </div>
//       </div>
//       <div className="mt-10 flex w-full justify-center px-20">
//         <ActionButton
//           onClick={fetchHeaderData}
//           text="Generate Header &rarr;"
//         />
//       </div>
//       <hr className="my-8 h-[2px] border-0 bg-gray-500 dark:bg-gray-700" />
//       <MarkDownEditor
//         value={projectHeaderValue}
//         visible={true}
//         className="h-[50vh]"
//         onChange={(value) => {
//           store.dispatch(setHeader(value));
//         }}
//       />
//     </MoveUpFadeAnimation>
//   );
// };
// export default HeaderSection;
