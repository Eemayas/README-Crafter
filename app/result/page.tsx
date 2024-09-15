"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import Navbar from "@/components/Navbar";
import "@/components/editor.css";
import SectionLayout from "../main/components/SectionLayout";

import Footer from "@/components/Footer";
import MarkdownDownloadButton from "@/components/MarkdownDownloadButton";
import formatMarkdown from "@/lib/utils/formatMarkdown";
import { Toc } from "@/lib/utils/generateTableOfContents";

const ResultPage = () => {
  const router = useRouter();
  const { repoName } = useSelector((state: RootState) => state.repoReducer);
  if (repoName === "") {
    router.push("./");
  }
  const projectHeader = useSelector(
    (state: RootState) => state.projectHeaderReducer,
  );
  const projectOverview = useSelector(
    (state: RootState) => state.projectOverviewReducer,
  );
  const keyFeatures = useSelector(
    (state: RootState) => state.keyFeaturesReducer,
  );
  const folderStructure = useSelector(
    (state: RootState) => state.folderStructureReducer,
  );
  const installationGuide = useSelector(
    (state: RootState) => state.projectInstallationGuideReducer,
  );
  const contributingGuide = useSelector(
    (state: RootState) => state.contributingGuideReducer,
  );
  const contributors = useSelector(
    (state: RootState) => state.contributorsReducer,
  );
  const license = useSelector((state: RootState) => state.licenseReducer);

  const [finalMarkdown, setFinalMarkdown] = useState(`${projectHeader}\n
${projectOverview}\n
${keyFeatures}\n
${folderStructure}\n
${installationGuide}\n
${contributingGuide}\n
${contributors}\n
${license}\n`);

  useEffect(() => {
    const tocGenerator = new Toc(false, [1, 6], "");
    tocGenerator.parseMarkdown(finalMarkdown);
    console.log(tocGenerator.generateToc("-", 2, true));
    const tableOFContentAdded = `${projectHeader}\n
${projectOverview}\n
# Table of Content\n
${tocGenerator.generateToc("-", 2, true)}\n
${keyFeatures}\n
${folderStructure}\n
${installationGuide}\n
${contributingGuide}\n
${contributors}\n
${license}\n`;
    // const formatedMarkdown = formatMarkdown(tableOFContentAdded);
    setFinalMarkdown(tableOFContentAdded);
  }, []);

  return (
    <>
      <Navbar />
      <div className="pt-28">
        <SectionLayout
          sectionHeaderMainText={"Final Preview"}
          markdownEditorValue={finalMarkdown}
          markdownEditorOnChange={(value: string) => {
            setFinalMarkdown(value);
          }}
          actionButtonOnClick={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
        <hr className="my-8 h-[2px] border-0 bg-gray-500 dark:bg-gray-700"></hr>
        <MarkdownDownloadButton
          finalMarkdown={finalMarkdown}
          fileName={`${repoName}.md`}
        />
        <Footer />{" "}
        <hr className="my-8 h-[2px] border-0 bg-gray-500 dark:bg-gray-700"></hr>
      </div>
    </>
  );
};

export default ResultPage;
