"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";
import MarkdownEditor from "@uiw/react-markdown-editor";
import "@/components/editor.css";
import MarkDownEditor from "@/components/MarkDownEditor";
import SectionLayout from "../main/components/SectionLayout";
const MarkdownEditorImport = dynamic(
  () => import("@uiw/react-markdown-editor").then((mod) => mod.default),
  { ssr: false },
);

import { useEffect } from "react";

// Mock markdown-to-HTML function (you might replace this with a real library like Marked.js)
function markdownToHTML(markdown: string): string {
  return markdown
    .replace(/^# (.*$)/gim, "<h1>$1</h1>") // h1
    .replace(/^## (.*$)/gim, "<h2>$1</h2>") // h2
    .replace(/^### (.*$)/gim, "<h3>$1</h3>") // h3
    .replace(/\n$/gim, "<br />");
}

const MarkdownEditorTry = () => {
  useEffect(() => {
    const contentEditor = document.querySelector(
      ".md-editor-content-editor",
    ) as HTMLElement | null;
    const contentPreview = document.querySelector(
      ".md-editor-preview",
    ) as HTMLElement | null;

    const applyDynamicScrollSpeed = () => {
      if (contentEditor && contentPreview) {
        // Function to map headings between the editor and the preview
        const synchronizeScrollByHeadings = () => {
          const editorText = contentEditor.innerText;
          const previewHeadings =
            contentPreview?.querySelectorAll("h1, h2, h3");

          // Find positions of headings in the editor
          const editorLines = editorText.split("\n");
          const editorHeadingsPositions: { line: number; text: string }[] = [];
          editorLines.forEach((line, index) => {
            if (/^#/.test(line)) {
              editorHeadingsPositions.push({
                line: index,
                text: line.replace(/^#+ /, ""),
              });
            }
          });

          // Get the current scroll position and find the closest heading in the editor
          const editorScrollPosition = contentEditor.scrollTop;
          const editorTotalHeight =
            contentEditor.scrollHeight - contentEditor.clientHeight;
          const editorPercentageScrolled =
            editorScrollPosition / editorTotalHeight;
          const editorScrolledLines = Math.floor(
            editorPercentageScrolled * editorLines.length,
          );

          // Find the closest heading in the editor
          let closestHeadingIndex = 0;
          for (let i = 0; i < editorHeadingsPositions.length; i++) {
            if (editorHeadingsPositions[i].line <= editorScrolledLines) {
              closestHeadingIndex = i;
            }
          }

          // Scroll to the corresponding heading in the preview
          if (previewHeadings && previewHeadings[closestHeadingIndex]) {
            previewHeadings[closestHeadingIndex].scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        };

        // Attach the scroll event listener
        contentEditor.addEventListener("scroll", synchronizeScrollByHeadings);

        // Cleanup the event listener when the component unmounts
        return () => {
          contentEditor.removeEventListener(
            "scroll",
            synchronizeScrollByHeadings,
          );
        };
      }
    };

    applyDynamicScrollSpeed();
  }, []);

  return (
    <div style={{ display: "flex", height: "400px" }}>
      <div
        className="md-editor-content-editor"
        style={{
          width: "50%",
          height: "100%",
          overflowY: "scroll",
          border: "1px solid black",
          padding: "10px",
        }}
        contentEditable={true}
      >
        {/* Simulated markdown editor content */}
        <h1>Heading 1</h1>
        <p>Some text here...</p>
        <h2>Heading 2</h2>
        <p>More text here...</p>
        <h3>Heading 3</h3>
        <p>Even more text here...</p>
      </div>

      <div
        className="md-editor-preview"
        style={{
          width: "50%",
          height: "100%",
          overflowY: "scroll",
          border: "1px solid black",
          padding: "10px",
        }}
      >
        {/* Preview content (replace with actual markdown-to-HTML conversion) */}
        <h1>Heading 1</h1>
        <p>Some text here...</p>
        <h2>Heading 2</h2>
        <p>More text here...</p>
        <h3>Heading 3</h3>
        <p>Even more text here...</p>
      </div>
    </div>
  );
};

const ResultPage = () => {
  const router = useRouter();
  const { repoName } = useSelector((state: RootState) => state.repoReducer);
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

  // if (repoName === "") {
  //   router.push("./");
  // }

  const finalMarkdown =
    projectHeader +
    projectOverview +
    keyFeatures +
    folderStructure +
    installationGuide +
    contributingGuide +
    contributors +
    license;
  console.log({ finalMarkdown });
  return (
    <div>
      <Navbar />
      <div className="mt-28"></div>
      {/* <MarkdownEditorTry /> */}
      <SectionLayout
        sectionHeaderMainText={"Final Preview"}
        markdownEditorValue={finalMarkdown}
        markdownEditorOnChange={function (value: string): void {}}
        actionButtonOnClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      {/* <MarkDownEditor
        value={finalMarkdown}
        visible={true}
        // onChange={(value) => store.dispatch(setLicense(value))}
      /> */}
    </div>
  );
};

export default ResultPage;
