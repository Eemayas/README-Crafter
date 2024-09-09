/** @format */
import React from "react";
import { useFetchLicenseData } from "./hooks/useFetchLicenseData";
import { setLicense } from "./store/licenseReducer";
import store from "@/app/store";
import SectionLayout from "@/app/main/components/SectionLayout";

const LicenseSection: React.FC = () => {
  const { licenseMarkdownValue, fetchLicenseData } = useFetchLicenseData();

  return (
    <SectionLayout
      sectionHeaderMainText="License"
      sectionHeaderSubText="license"
      actionButtonText="Generate license of project &rarr;"
      actionButtonOnClick={fetchLicenseData}
      markdownEditorValue={licenseMarkdownValue}
      markdownEditorOnChange={(value) => store.dispatch(setLicense(value))}
      markdownClassName="h-[50vh]"
    />
  );
};

export default LicenseSection;

// /** @format */

// import MoveUpFadeAnimation from "@/components/MoveUpFadeAnimation";
// import SectionHeader from "../../components/SectionHeader";
// import ActionButton from "@/components/ActionButton";
// import { useFetchLicenseData } from "./hooks/useFetchLicenseData";
// import MarkDownEditor from "@/components/MarkDownEditor";
// import store from "@/app/store";
// import { setLicense } from "./store/licenseReducer";

// const LicenseSection = () => {
//   const { licenseMarkdownValue, fetchLicenseData } = useFetchLicenseData();

//   return (
//     <MoveUpFadeAnimation>
//       <SectionHeader text="License" subtext={"license"} />

//       <div className="mt-10 flex w-full justify-center px-20">
//         <ActionButton
//           onClick={function (): void {
//             fetchLicenseData();
//           }}
//           text="Generate license of project &rarr;"
//         />
//       </div>
//       <hr className="my-8 h-[2px] border-0 bg-gray-500 dark:bg-gray-700"></hr>
//       <MarkDownEditor
//         value={licenseMarkdownValue}
//         visible={true}
//         className="h-[50vh]"
//         onChange={(value) => store.dispatch(setLicense(value))}
//       />
//     </MoveUpFadeAnimation>
//   );
// };

// export default LicenseSection;
