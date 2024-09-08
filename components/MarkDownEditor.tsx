"use client";
import dynamic from "next/dynamic";
import React, { useEffect } from "react";
import "./editor.css";
import "@uiw/react-markdown-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
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

  return (
    <div className={`container mx-auto mb-10 w-[90%] lg:w-[1500px]`}>
      <MarkdownEditorImport
        value={value}
        // height="600px"
        visible={visible}
        // className={className}
        className="min-h-[50vh]"
        onChange={(value, viewUpdate) => {
          onChange && onChange(value);
          // if (localStorage) {
          //   console.log({ localStorage, value });
          //   setLocalStorage(value);
          // } else {
          // }
        }}
      />
    </div>
  );
};

export default MarkDownEditor;
