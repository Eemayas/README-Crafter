/** @format */

import MoveUpFadeAnimation from "@/components/MoveUpFadeAnimation";
import SectionHeader from "../../components/SectionHeader";
import ActionButton from "@/components/ActionButton";
import useLocalStorage from "@/lib/hooks/useLocalStorage";
import { useFetchLicenseData } from "./hooks/useFetchLicenseData";
import dynamic from "next/dynamic";

const MarkdownEditor = dynamic(
  () => import("@uiw/react-markdown-editor").then((mod) => mod.default),
  { ssr: false },
);

const LicenseSection = () => {
  const [repoInfo] = useLocalStorage("repoInfo", {
    repoName: "",
    repoLink: "",
  });
  const { licenseMarkdownValue, fetchLicenseData, loading } =
    useFetchLicenseData(repoInfo.repoLink);

  return (
    <MoveUpFadeAnimation>
      <SectionHeader text="License" subtext={"license"} />

      <div className="mt-10 flex w-full justify-center px-20">
        <ActionButton
          className="max-w-80"
          onClick={function (): void {
            fetchLicenseData();
          }}
          text="Generate license of project &rarr;"
        />
      </div>
      <hr className="my-8 h-[2px] border-0 bg-gray-500 dark:bg-gray-700"></hr>
      <div className="container mb-10 w-[1500px]">
        <MarkdownEditor
          value={licenseMarkdownValue}
          visible={true}
          className="h-[50vh]"
        />
      </div>
    </MoveUpFadeAnimation>
  );
};

export default LicenseSection;
