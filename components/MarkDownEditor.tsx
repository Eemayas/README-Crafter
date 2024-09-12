"use client";
import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import "./editor.css";

import { useEffect } from "react";
import { useTheme } from "next-themes";

// Dynamically import the Markdown editor component with SSR disabled
const MarkdownEditorImport = dynamic(
  () => import("@uiw/react-markdown-editor").then((mod) => mod.default),
  { ssr: false },
);

interface MarkDownEditorProps {
  value: string;
  visible: boolean;
  className?: string;
  height?: string;
  localStorageName?: string;
  onChange?: (value: string) => void;
  [key: string]: any;
}

const MarkDownEditor: React.FC<MarkDownEditorProps> = ({
  value,
  visible,
  className,
  height,
  onChange,
  ...rest
}) => {
  const { theme } = useTheme();
  useEffect(() => {
    document.documentElement.setAttribute("data-color-mode", theme || "light");
  }, [theme]);

  return (
    <div className="min-h-[75vh]">
      <MarkdownEditorImport
        height={height}
        value={value}
        enableScroll={false}
        {...rest}
        visible={visible}
        onChange={(value, viewUpdate) => {
          onChange && onChange(value);
        }}
      />
    </div>
  );
};

export default MarkDownEditor;

// useEffect(() => {
//   document.addEventListener("DOMContentLoaded", () => {
//     const contentEditor = document.querySelector(
//       ".md-editor-content-editor",
//     ) as HTMLElement | null;
//     const contentPreview = document.querySelector(
//       ".md-editor-preview",
//     ) as HTMLElement | null;

//     const editorTextLength = contentEditor?.offsetHeight || 0;
//     const previewTextLength = contentPreview?.offsetHeight || 0;

//     const totalLength = editorTextLength + previewTextLength;

//     console.log(`Total length of content: ${totalLength}`);
//   });
//   const contentEditor = document.querySelector(
//     ".md-editor-content-editor",
//   ) as HTMLElement | null;
//   const contentPreview = document.querySelector(
//     ".md-editor-preview",
//   ) as HTMLElement | null;

//   const editorTextLength = contentEditor?.offsetHeight || 0;
//   const previewTextLength = contentPreview?.offsetHeight || 0;

//   console.log({ editorTextLength, previewTextLength });

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
