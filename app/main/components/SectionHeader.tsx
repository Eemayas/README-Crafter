/** @format */

import React from "react";
import { Highlight } from "@/components/ui/hero-highlight";
import { subTextStyle } from "@/app/style";
import { LinkPreview } from "@/components/ui/link-preview";
import useLocalStorage from "@/lib/hooks/useLocalStorage";
const SectionHeader: React.FC<{
  text: string;
  subtext: string;
  className?: string;
}> = ({ text, subtext, className }) => {
  const [repoInfo, setRepoInfo] = useLocalStorage("repoInfo", {
    repoName: "",
    repoLink: "",
  });
  localStorage.getItem("repoInfo");
  return (
    <>
      <h1
        className={`mx-auto max-w-4xl px-4 text-center text-2xl font-bold leading-relaxed text-black dark:text-white md:text-4xl lg:text-5xl lg:leading-snug ${className}`}
      >
        <Highlight className="text-black dark:text-white">{text}</Highlight>{" "}
      </h1>
      <h2 className={`${subTextStyle}`}>
        Generate the {subtext} of{" "}
        <LinkPreview
          url={repoInfo.repoLink}
          className="bg-gradient-to-br from-purple-500 to-pink-500 bg-clip-text font-bold text-transparent"
        >
          {repoInfo.repoName}
        </LinkPreview>
      </h2>
    </>
  );
};

export default SectionHeader;
