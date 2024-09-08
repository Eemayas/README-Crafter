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
  return (
    <div className={`container mx-auto mb-10 w-[90%] lg:w-[1500px]`}>
      <MarkdownEditorImport
        value={value}
        visible={visible}
        className={className}
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
