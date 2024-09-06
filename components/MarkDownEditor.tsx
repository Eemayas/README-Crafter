"use client";
import dynamic from "next/dynamic";
import React from "react";
// Dynamically import the Markdown editor component with SSR disabled
const MarkdownEditorImport = dynamic(
  () => import("@uiw/react-markdown-editor").then((mod) => mod.default),
  { ssr: false },
);

interface MarkDownEditorProps {
  value: string;
  visible: boolean;
  className?: string; 
}

const MarkDownEditor: React.FC<MarkDownEditorProps> = ({
  value,
  visible,
  className,
}) => {
  return (
    <div className={`container mx-auto mb-10 w-[90%] lg:w-[1500px]`}>
      <MarkdownEditorImport
        value={value}
        visible={visible}
        className={className}
      />
    </div>
  );
};

export default MarkDownEditor;
