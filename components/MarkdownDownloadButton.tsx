import React from "react";
import ActionButton from "./ActionButton";

const MarkdownDownloadButton: React.FC<{
  finalMarkdown: string;
  fileName?: string;
}> = ({ finalMarkdown, fileName = "Final_Markdown.md" }) => {
  const downloadMarkdown = (content: string, filename: string) => {
    const blob = new Blob([content], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleDownload = () => {
    downloadMarkdown(finalMarkdown, fileName);
  };

  return (
    <div className="mt-10 flex w-full justify-center px-20">
      <ActionButton onClick={handleDownload} text="Download Markdown &rarr;" />
    </div>
  );
};

export default MarkdownDownloadButton;
