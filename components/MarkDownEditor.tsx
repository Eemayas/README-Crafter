"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import "./editor.css";
// Dynamically import the Markdown editor component with SSR disabled
const MarkdownEditorImport = dynamic(
  () => import("@uiw/react-markdown-editor").then((mod) => mod.default),
  { ssr: false },
);

interface MarkDownEditorProps {
  value: string;
  visible: boolean;
  className?: string;
  localStorageName?: string;
  onChange?: (value: string) => void;
}
// Mock markdown-to-HTML function (replace with a real library like Marked.js)
function markdownToHTML(markdown: string): string {
  return markdown
    .replace(/^# (.*$)/gim, "<h1>$1</h1>") // h1
    .replace(/^## (.*$)/gim, "<h2>$1</h2>") // h2
    .replace(/^### (.*$)/gim, "<h3>$1</h3>") // h3
    .replace(/\n$/gim, "<br />");
}
const MarkDownEditor: React.FC<MarkDownEditorProps> = ({
  value,
  visible,
  className,
  localStorageName,
  onChange,
}) => {
  // useEffect(() => {
  //   const contentEditor = document.querySelector(
  //     ".md-editor-content-editor",
  //   ) as HTMLElement | null;
  //   const contentPreview = document.querySelector(
  //     ".md-editor-preview",
  //   ) as HTMLElement | null;

  //   function calculateScrollSpeed(height: number): number {
  //     const baseSpeed = 100;
  //     const maxSpeed = 300;
  //     const minSpeed = 50;
  //     const speed = Math.max(minSpeed, baseSpeed * (height / 500));
  //     return Math.min(speed, maxSpeed);
  //   }

  //   function applyDynamicScrollSpeed() {
  //     // Ensure both contentEditor and contentPreview exist before continuing
  //     if (contentEditor && contentPreview) {
  //       const editorHeight = contentEditor.scrollHeight;
  //       const previewHeight = contentPreview.scrollHeight;

  //       const editorScrollSpeed = calculateScrollSpeed(editorHeight);
  //       const previewScrollSpeed = calculateScrollSpeed(previewHeight);

  //       contentEditor.style.scrollBehavior = "smooth";
  //       contentPreview.style.scrollBehavior = "smooth";

  //       setInterval(() => {
  //         contentEditor.scrollBy(0, 1);
  //       }, editorScrollSpeed);

  //       setInterval(() => {
  //         contentPreview.scrollBy(0, 1);
  //       }, previewScrollSpeed);
  //     }
  //   }

  //   applyDynamicScrollSpeed();
  // }, []);

  const [markdown, setMarkdown] = useState<string>(value);
  const [isEditorScrolling, setIsEditorScrolling] = useState(false);
  const [isPreviewScrolling, setIsPreviewScrolling] = useState(false);

  useEffect(() => {
    const contentEditor = document.querySelector(
      ".md-editor-content-editor",
    ) as HTMLElement | null;
    const contentPreview = document.querySelector(
      ".md-editor-preview",
    ) as HTMLElement | null;

    const applyDynamicScrollSpeed = () => {
      if (contentEditor && contentPreview) {
        // Function to synchronize scroll from editor to preview
        const synchronizeScrollByHeadings = (
          scrollSource: "editor" | "preview",
        ) => {
          const editorText = contentEditor.innerText;
          const previewHeadings =
            contentPreview?.querySelectorAll("h1, h2, h3");

          const editorLines = editorText.split("\n");
          const editorHeadingsPositions: { line: number; offsetTop: number }[] =
            [];
          let currentLineOffset = 0;

          // Capture editor heading positions
          editorLines.forEach((line, index) => {
            if (/^#/.test(line)) {
              editorHeadingsPositions.push({
                line: index,
                offsetTop: contentEditor.scrollTop + currentLineOffset,
              });
            }
            currentLineOffset += line.length;
          });

          // Get current scroll position
          let scrollPosition,
            totalHeight,
            scrolledLines,
            closestHeadingIndex = 0;
          if (scrollSource === "editor") {
            scrollPosition = contentEditor.scrollTop;
            totalHeight =
              contentEditor.scrollHeight - contentEditor.clientHeight;
            scrolledLines = Math.floor(
              (scrollPosition / totalHeight) * editorLines.length,
            );
          } else {
            scrollPosition = contentPreview.scrollTop;
            totalHeight =
              contentPreview.scrollHeight - contentPreview.clientHeight;
            scrolledLines = Math.floor(
              (scrollPosition / totalHeight) * editorLines.length,
            );
          }

          // Find the closest heading
          for (let i = 0; i < editorHeadingsPositions.length; i++) {
            if (editorHeadingsPositions[i].line <= scrolledLines) {
              closestHeadingIndex = i;
            }
          }

          // Scroll the other pane
          if (scrollSource === "editor") {
            if (previewHeadings && previewHeadings[closestHeadingIndex]) {
              setIsPreviewScrolling(true);
              previewHeadings[closestHeadingIndex].scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          } else {
            if (editorHeadingsPositions[closestHeadingIndex]) {
              setIsEditorScrolling(true);
              contentEditor.scrollTop =
                editorHeadingsPositions[closestHeadingIndex].offsetTop;
            }
          }
        };

        // Scroll event listeners
        contentEditor.addEventListener("scroll", () => {
          if (!isPreviewScrolling) {
            synchronizeScrollByHeadings("editor");
          }
          setIsPreviewScrolling(false); // Reset after synchronization
        });

        contentPreview.addEventListener("scroll", () => {
          if (!isEditorScrolling) {
            synchronizeScrollByHeadings("preview");
          }
          setIsEditorScrolling(false); // Reset after synchronization
        });

        // Cleanup on component unmount
        return () => {
          contentEditor.removeEventListener("scroll", () =>
            synchronizeScrollByHeadings("editor"),
          );
          contentPreview.removeEventListener("scroll", () =>
            synchronizeScrollByHeadings("preview"),
          );
        };
      }
    };

    applyDynamicScrollSpeed();
  }, [isEditorScrolling, isPreviewScrolling]);
  return (
    // <div style={{ display: "flex", height: "400px" }}>
    //   <div
    //     className="md-editor-content-editor"
    //     style={{
    //       width: "50%",
    //       height: "100%",
    //       overflowY: "scroll",
    //       border: "1px solid black",
    //       padding: "10px",
    //     }}
    //     contentEditable={true}
    //     onInput={(e) => setMarkdown((e.target as HTMLElement).innerText || "")}
    //   >
    //     {/* Editor content */}
    //     <div>{markdown}</div>
    //   </div>

    //   <div
    //     className="md-editor-preview"
    //     style={{
    //       width: "50%",
    //       height: "100%",
    //       overflowY: "scroll",
    //       border: "1px solid black",
    //       padding: "10px",
    //     }}
    //     dangerouslySetInnerHTML={{ __html: markdownToHTML(markdown) }}
    //   ></div>
    // </div>
    <MarkdownEditorImport
      value={value}
      height="600px"
      visible={visible}
      className={className}
      // className="min-h-[50vh]"
      onChange={(value, viewUpdate) => {
        onChange && onChange(value);
        // if (localStorage) {
        //   console.log({ localStorage, value });
        //   setLocalStorage(value);
        // } else {
        // }
      }}
    />
  );
};

export default MarkDownEditor;
