/** @format */

import { TFolderStructureDict } from "@/app/main/sections/FolderStructureSection/types";

export function generateFileList(
  input: TFolderStructureDict,
  ignoreList: string[] = [],
  ignoreExtensions: string[] = [],
): string[] {
  let summary: string[] = [];

  function processNode(node: TFolderStructureDict | null, currentPath: string) {
    if (!node) return;

    for (const key in node) {
      const newPath = currentPath ? `${currentPath}/${key}` : key;

      if (ignoreList.includes(key)) continue;

      const extension = key.split(".").pop()?.toLowerCase();
      if (extension && ignoreExtensions.includes(`.${extension}`)) continue;

      if (node[key] === null) {
        summary.push(newPath);
      } else {
        processNode(node[key], newPath);
      }
    }
  }

  processNode(input, "");
  return summary;
}

export type FileDescription = {
  fileName: string;
  description: string;
};

export function convertFileDescriptions(
  fileDescriptions: Record<string, string>,
): FileDescription[] {
  return Object.entries(fileDescriptions).map(([fileName, description]) => ({
    fileName,
    description,
  }));
}

export function convertToMarkdownTable(
  fileDescriptions: FileDescription[],
): string {
  let markdownTable = "| File | Description |\n";
  markdownTable += "|------|-------------|\n";

  for (const { fileName, description } of fileDescriptions) {
    const formattedDescription = description.replace(/\n/g, "<br>");
    markdownTable += `| ${fileName} | ${formattedDescription} |\n`;
  }

  return markdownTable;
}
