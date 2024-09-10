/** @format */

import React from "react";
import { Highlight } from "@/components/ui/hero-highlight";
import { styles, subTextStyle } from "@/app/style";
import { LinkPreview } from "@/components/ui/link-preview";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
const SectionHeader: React.FC<{
  text: string;
  subtext?: string;
  className?: string;
}> = ({ text, subtext, className }) => {
  const { repoLink, repoName } = useSelector(
    (state: RootState) => state.repoReducer,
  );
  return (
    <>
      <h1 className={`${styles.sectionHeadText} ${className} text-center`}>
        <Highlight className="px-8 text-black dark:text-white">
          {text}
        </Highlight>{" "}
      </h1>
      {subtext ? (
        <h2 className={`${subTextStyle}`}>
          Generate the {subtext} of{" "}
          <LinkPreview
            url={repoLink}
            className="bg-gradient-to-br from-green-400 to-blue-600 bg-clip-text font-bold text-transparent"
          >
            {repoName}
          </LinkPreview>
        </h2>
      ) : null}{" "}
    </>
  );
};

export default SectionHeader;
