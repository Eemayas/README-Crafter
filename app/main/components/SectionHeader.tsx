/** @format */

import React from "react";
import { Highlight } from "@/components/ui/hero-highlight";
import { subTextStyle } from "@/app/style";
import { LinkPreview } from "@/components/ui/link-preview";
import useLocalStorage from "@/lib/hooks/useLocalStorage";
const SectionHeader: React.FC<{
  text: string;
  subtext: string;
  clasName?: string;
}> = ({ text, subtext, clasName }) => {
  const [repoInfo, setRepoInfo] = useLocalStorage("repoInfo", {
    repoName: "",
    repoLink: "",
  });
  localStorage.getItem("repoInfo")
  return (
    <>
      <h1
        className={`text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-black dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto ${clasName}`}
      >
        <Highlight className="text-black dark:text-white">{text}</Highlight>{" "}
      </h1>
      <h2 className={`${subTextStyle}`}>
        Generate the {subtext} of{" "}
        <LinkPreview
          url={repoInfo.repoLink}
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
        >
          {repoInfo.repoName}
        </LinkPreview>
      </h2>
    </>
  );
};

export default SectionHeader;
