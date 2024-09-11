"use client";
import React, { Suspense } from "react";
import dynamic from "next/dynamic";
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
  return (
    <Suspense
      fallback={
        <div
          className={`fixed inset-0 z-50 flex min-h-[50vh] items-center justify-center overflow-y-auto overflow-x-hidden outline-none backdrop-blur-sm focus:outline-none`}
        >
          <div className="relative mx-auto my-6 w-auto max-w-3xl">
            <div className="h-24 w-24 rounded-full border-b-8 border-t-8 border-gray-200"></div>
            <div className="absolute left-0 top-0 h-24 w-24 animate-spin rounded-full border-b-8 border-t-8 border-blue-500"></div>
          </div>
        </div>
      }
    >
      <MarkdownEditorImport
        height={height}
        value={value}
        {...rest}
        visible={visible}
        onChange={(value, viewUpdate) => {
          onChange && onChange(value);
        }}
      />
    </Suspense>
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
