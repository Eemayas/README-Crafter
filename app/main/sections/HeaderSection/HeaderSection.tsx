/** @format */
"use client";
import React, { useState } from "react";
import MoveUpFadeAnimation from "@/components/MoveUpFadeAnimation";
import useLocalStorage from "@/lib/hooks/useLocalStorage";
import ActionButton from "@/components/ActionButton";
import "@uiw/react-markdown-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import DropdownField from "@/components/Dropdown";
import InputField from "@/components/InputField";
import { projectTypeList } from "./constants";
import SectionHeader from "../../components/SectionHeader";
import dynamic from "next/dynamic";
import { useFetchHeaderData } from "./hooks/useFetchHeaderData";

const MarkdownEditor = dynamic(
  () => import("@uiw/react-markdown-editor").then((mod) => mod.default),
  { ssr: false },
);

const HeaderSection = () => {
  const [repoInfo] = useLocalStorage("repoInfo", {
    repoName: "",
    repoLink: "",
  });
  const [selectedOption, setSelectedOption] = useState<string>(
    projectTypeList[0],
  );
  const [inputProjectImageUrl, setInputProjectImageUrl] = useState("");

  const { projectHeaderValue, fetchHeaderData } = useFetchHeaderData(
    repoInfo.repoLink,
    projectTypeList.findIndex((option) => option === selectedOption) + 1,
    inputProjectImageUrl,
  );

  const handleDropdownChange = (selected: string) => {
    setSelectedOption(selected);
    console.log("Selected option:", selected);
  };

  return (
    <MoveUpFadeAnimation>
      <SectionHeader text="Project Header" subtext="header" />
      <div className="w-full">
        <div className="mx-auto flex w-[30rem] flex-col gap-5">
          <DropdownField
            label="Select Project Type"
            options={projectTypeList}
            onChange={handleDropdownChange}
          />
          {selectedOption === "Custom Link" ? (
            <InputField
              label="Profile Icon Link"
              value={inputProjectImageUrl}
              onChange={(e) => setInputProjectImageUrl(e.target.value)}
            />
          ) : null}
        </div>
      </div>
      <div className="mt-10 flex w-full justify-center px-20">
        <ActionButton
          className="max-w-80"
          onClick={fetchHeaderData}
          text="Generate Header &rarr;"
        />
      </div>
      <hr className="my-8 h-[2px] border-0 bg-gray-500 dark:bg-gray-700" />
      <div className="container mb-10 w-[1500px]">
        <MarkdownEditor
          value={projectHeaderValue}
          visible={true}
          className="h-[50vh]"
        />
      </div>
    </MoveUpFadeAnimation>
  );
};
export default HeaderSection;