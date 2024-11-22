"use client";
import React from "react";
import { styles, subTextStyle } from "../style";
import { Highlight } from "@/components/ui/hero-highlight";
import SectionLayout from "../main/components/SectionLayout";
import { generateMarkdown } from "./utils/generateMarkdown";

const markdownData = {
  app_url: "http://example.com",
  app_logo_url: "http://example.com/logo.png",
  app_name: "ExampleApp",
  app_description: "A minimal example application.",
  badge_url: "http://badge.url",
  badge_img_url: "http://badge.img.url",
  badge_alt_text: "Example Badge",
  gitter_url: "http://gitter.url",
  gitter_badge_url: "http://gitter.badge.url",
  gitter_badge_alt: "Gitter Chat",
  thanks_url: "http://thanks.url",
  thanks_badge_url: "http://thanks.badge.url",
  thanks_badge_alt: "Thanks Badge",
  donate_url: "http://donate.url",
  donate_badge_url: "http://donate.badge.url",
  donate_badge_alt: "Donate Badge",
  screenshot_url: "http://example.com/screenshot.png",
  repo_url: "http://github.com/example/repo",
  repo_name: "example-repo",
  download_url: "http://example.com/download",
  email: "example@example.com",
  features: ["Feature 1", "Feature 2", "Feature 3"],
  packages: [
    { name: "Package1", url: "http://package1.url" },
    { name: "Package2", url: "http://package2.url" },
  ],
  related_projects: [
    {
      name: "Related Project 1",
      url: "http://related1.url",
      description: "Description of Related Project 1",
    },
    {
      name: "Related Project 2",
      url: "http://related2.url",
      description: "Description of Related Project 2",
    },
  ],
  buy_me_a_coffee_url: "http://buymeacoffee.url",
  buy_me_a_coffee_img_url: "http://buymeacoffee.img.url",
  patreon_url: "http://patreon.url",
  patreon_img_url: "http://patreon.img.url",
  license: "MIT",
  author_website: "Author Website",
  author_website_url: "http://author.website.url",
  github_username: "githubuser",
  github_url: "http://github.com/githubuser",
  twitter_username: "twitteruser",
  twitter_url: "http://twitter.com/twitteruser",
};

const TemplatesPage = () => {
  const markdownContent = generateMarkdown(markdownData);

  console.log(markdownContent);
  return (
    <div>
      {" "}
      <>
        <h1 className={`${styles.sectionHeadText} mt-36 text-center`}>
          <Highlight className="px-8 text-black dark:text-white">
            Popular Templates
          </Highlight>{" "}
        </h1>

        <h2 className={`${subTextStyle}`}>
          Explore the most popular templates.
        </h2>
      </>
      <SectionLayout
        sectionHeaderMainText={"Contributing Guide"}
        sectionHeaderSubText={"contributing guide"}
        actionButtonText="Generate contributing guide of project &rarr;"
        actionButtonOnClick={function (): void {}}
        markdownEditorValue={markdownContent}
        markdownEditorOnChange={function (value: string): void {}}
        markdownClassName={"h-screen"}
      />
    </div>
  );
};

export default TemplatesPage;
