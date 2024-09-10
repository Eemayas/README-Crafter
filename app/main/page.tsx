/** @format */
"use client";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import FolderStructureSection from "./sections/FolderStructureSection/FolderStructureSection";
import HeaderSection from "./sections/HeaderSection/HeaderSection";
import ProjectOverviewSection from "./sections/ProjectOverview/ProjectOverviewSection";
import SummaryGenerationSection from "./sections/SummarySection/SummaryGenerationSection";
import KeyFeatureSection from "./sections/KeyFeatureSection/KeyFeatureSection";
import ContributorsSection from "./sections/ContributorsSection/ContributionsSection";
import LicenseSection from "./sections/LicenseSection/LicenseSection";
import ContributingGuideSection from "./sections/ContributingGuideSection/ContributingGuideSection";
import { getFolderStructureDictUrl } from "@/lib/constants/apiEndpoints";
import ProjectInstallationGuideSection from "./sections/ProjectInstallationGuideSection/ProjectInstallationGuideSection";
import { useSelector } from "react-redux";
import store, { RootState } from "../store";
import { setFolderstructureDict } from "./sections/FolderStructureSection/store/folderStructureDictReducer";
import Navbar from "@/components/Navbar";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import ActionButton from "@/components/ActionButton";
import Footer from "@/components/Footer";

const MainPage = () => {
  const router = useRouter();
  const repoInfo = useSelector((state: RootState) => state.repoReducer);
  const { repoLink, repoName } = repoInfo;

  // if (repoName === "") {
  //   router.push("./");
  // }

  useEffect(() => {
    const fetchData = async () => {
      if (repoName === "") {
        // router.push("./"); // Redirect to home if repoName is empty
      } else {
        try {
          const folderStructureUrl = getFolderStructureDictUrl(repoLink);
          await fetch(folderStructureUrl)
            .then(async (folderStructureDictResponse) => {
              const folderStructureDictJson =
                await folderStructureDictResponse.json();
              store.dispatch(
                setFolderstructureDict(
                  folderStructureDictJson.folder_structure,
                ),
              );
            })
            .catch((e) =>
              console.log(`Error fetching folder structure Dict: ${e}`),
            );
        } catch (error) {
          console.error("Error fetching folder structure:", error);
        }
      }
    };

    fetchData();
  }, [repoInfo, router]);

  return (
    <>
      <Navbar />
      <SummaryGenerationSection />
      <hr className="my-8 h-[2px] border-0 bg-gray-500 dark:bg-gray-700"></hr>
      <HeaderSection />
      <hr className="my-8 h-[2px] border-0 bg-gray-500 dark:bg-gray-700"></hr>
      <ProjectOverviewSection />
      <hr className="my-8 h-[2px] border-0 bg-gray-500 dark:bg-gray-700"></hr>
      <KeyFeatureSection />
      <hr className="my-8 h-[2px] border-0 bg-gray-500 dark:bg-gray-700"></hr>
      <ProjectInstallationGuideSection />
      <hr className="my-8 h-[2px] border-0 bg-gray-500 dark:bg-gray-700"></hr>
      <FolderStructureSection />
      <hr className="my-8 h-[2px] border-0 bg-gray-500 dark:bg-gray-700"></hr>
      <ContributingGuideSection />
      <hr className="my-8 h-[2px] border-0 bg-gray-500 dark:bg-gray-700"></hr>
      <ContributorsSection />
      <hr className="my-8 h-[2px] border-0 bg-gray-500 dark:bg-gray-700"></hr>
      <LicenseSection />
      <hr className="my-8 h-[2px] border-0 bg-gray-500 dark:bg-gray-700"></hr>
      <div className="mt-10 flex w-full justify-center px-20">
        <ActionButton
          onClick={function (): void {
            router.push("./result");
          }}
          text="Done Editing. Go to Final Preview Page  &rarr;"
        />
      </div>{" "}
      <Footer />{" "}
      <hr className="my-8 h-[2px] border-0 bg-gray-500 dark:bg-gray-700"></hr>
      <ScrollToTopButton />
    </>
  );
};

export default MainPage;
