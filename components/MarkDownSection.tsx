// /** @format */

// import React, { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "@uiw/react-md-editor/markdown-editor.css";
// import "@uiw/react-markdown-preview/markdown.css";

// interface MarkdownEditorProps {
//   value: string;
//   onChange: (value: string) => void;
//   height: number;
// }

// export const MarkdownEditor: React.FC<MarkdownEditorProps> = ({
//   value,
//   onChange,
//   height,
// }) => {
//   return (
//     <MDEditor
//       height={900}
//       value={value}
//       onChange={(val) => onChange(val || "")}
//     />
//   );
// };

// interface EditorSectionProps {
//   title: string;
//   colorMode: string;
//   value: string;
//   onChange: (value: string) => void;
// }

// export const EditorSection: React.FC<EditorSectionProps> = ({
//   title,
//   colorMode,
//   value,
//   onChange,
// }) => {
//   return (
//     <div>
//       <h3>{title}</h3>
//       <div data-color-mode={colorMode}>
//         <MarkdownEditor value={value} onChange={onChange} height={2} />
//       </div>
//     </div>
//   );
// };
