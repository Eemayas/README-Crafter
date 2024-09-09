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
      <ScrollToTopButton />
    </>
  );
};

export default MainPage;

// const mkdStr = `
// # Folder Structure
// \`\`\`sh
// folderName-1/
// ├── fileName-1.csv
// ├── fileName-2.md
// ├── fileName-3.csv
// ├── fileName-4.exe
// └── folderName-2
//     ├── folderName-3
//     │   ├── fileName-5.cpp
//     │   ├── fileName-6.h
//     │   ├── fileName-7.cpp
//     │   ├── fileName-8.h
//     │   ├── fileName-9.cpp
//     │   └── fileName-10.h
//     ├── fileName-11.cpp
//     ├── fileName-12.h
//     ├── fileName-13.cpp
//     └── folderName-4
//         ├── fileName-14.cpp
//         ├── fileName-15.h
//         ├── fileName-16.cpp
//         ├── fileName-17.h
//         ├── fileName-18.cpp
//         ├── fileName-19.h
//         ├── fileName-20.cpp
//         └── fileName-21.h
// 4 directories, 21 files
// \`\`\`
// `;

// export const FolderStructureSection = () => {
//   const [repoInfo, setRepoInfo] = useLocalStorage("repoInfo", {
//     repoName: "",
//     repoLink: "",
//   });
//   const [folderStructureDict, setFolderStructureDict] = useLocalStorage(
//     "folderStructureDict",
//     {}
//   );
//   const [markdownValue, setMarkdownValue] = useState(mkdStr);

//   const fetchFolderStructureData = async () => {
//     store.dispatch(showSpinner(true));

//     try {
//       const folderStructureUrl = `http://127.0.0.1:5000/folder_structure?repository_url=${encodeURIComponent(
//         repoInfo.repoLink
//       )}`;
//       const folderStructureDictUrl = `http://127.0.0.1:5000/folder_structure_dict?repository_url=${encodeURIComponent(
//         repoInfo.repoLink
//       )}`;

//       const folderStructureResponse = await fetch(folderStructureUrl);
//       const folderStructureJson = await folderStructureResponse.json();
//       setMarkdownValue(folderStructureJson.folder_structure_markdown);

//       const folderStructureDictResponse = await fetch(folderStructureDictUrl);
//       const folderStructureDictJson = await folderStructureDictResponse.json();
//       console.log({ folderdict: folderStructureDictJson.folder_structure });
//       setFolderStructureDict(folderStructureDictJson.folder_structure);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//     store.dispatch(showSpinner(false));
//   };

//   return (
//     <MoveUpFadeAnimation>
//       <SectionHeader
//         text="Folder Structure 📂📁"
//         className="mt-52"
//         subtext={"folder structure"}
//       />

//       <div className="w-full flex justify-center mt-10 px-20">
//         <ActionButton
//           className="max-w-80"
//           onClick={function (): void {
//             fetchFolderStructureData();
//           }}
//           text="Generate folder structure  &rarr;"
//         />
//       </div>
//       <hr className="h-[2px] my-8 bg-gray-500 border-0 dark:bg-gray-700"></hr>
//       <div className="container w-[1500px] mb-10">
//         <MarkdownEditor value={markdownValue} visible={true} />
//       </div>
//     </MoveUpFadeAnimation>
//   );
// };

// export const Header = () => {
//   const projectHeaderInitialMkdr = `
// <p align="center">
//   <img src="https://cdn-icons-png.flaticon.com/512/6295/6295417.png" width="100" />
// </p>
// <p align="center">
//     <h1 align="center">Daraz_Scraper</h1>
// </p>

// <p align="center">
//   <img src="https://img.shields.io/github/license/Eemayas/Daraz_Scraper?style=flat&color=0080ff" alt="license">
//   <img src="https://img.shields.io/github/last-commit/Eemayas/Daraz_Scraper?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
//   <img src="https://img.shields.io/github/languages/top/Eemayas/Daraz_Scraper?style=flat&color=0080ff" alt="repo-top-language">
//   <img src="https://img.shields.io/github/languages/count/Eemayas/Daraz_Scraper?style=flat&color=0080ff" alt="repo-language-count">
//   <img src="https://img.shields.io/github/actions/workflow/status/Eemayas/Daraz_Scraper/build.yml?branch=main&style=flat&color=0080ff" alt="build-status">
//   <img src="https://img.shields.io/github/issues/Eemayas/Daraz_Scraper?style=flat&color=0080ff" alt="open-issues">
//   <img src="https://img.shields.io/github/forks/Eemayas/Daraz_Scraper?style=flat&color=0080ff" alt="forks">
//   <img src="https://img.shields.io/github/stars/Eemayas/Daraz_Scraper?style=flat&color=0080ff" alt="stars">
//   <img src="https://img.shields.io/github/issues-pr/Eemayas/Daraz_Scraper?style=flat&color=0080ff" alt="pull-requests">
//   <img src="https://img.shields.io/github/contributors/Eemayas/Daraz_Scraper?style=flat&color=0080ff" alt="contributors">
//   <img src="https://img.shields.io/github/commit-activity/m/Eemayas/Daraz_Scraper?style=flat&color=0080ff" alt="commit-activity">
//   <img src="https://img.shields.io/github/languages/code-size/Eemayas/Daraz_Scraper?style=flat&color=0080ff" alt="code-size">
//   <img src="https://img.shields.io/github/repo-size/Eemayas/Daraz_Scraper?style=flat&color=0080ff" alt="repo-size">
//   <img src="https://img.shields.io/github/downloads/Eemayas/Daraz_Scraper/total?style=flat&color=0080ff" alt="downloads">
//   <img src="https://img.shields.io/github/sponsors/Eemayas/Daraz_Scraper?style=flat&color=0080ff" alt="sponsors">
//   <img src="https://img.shields.io/github/v/release/Eemayas/Daraz_Scraper?style=flat&color=0080ff" alt="release-version">
//   <img src="https://img.shields.io/codecov/c/github/Eemayas/Daraz_Scraper?style=flat&color=0080ff" alt="coverage">
//   <img src="https://img.shields.io/codeclimate/quality/a/Eemayas/Daraz_Scraper?style=flat&color=0080ff" alt="code-quality">
//   <img src="https://img.shields.io/david/Eemayas/Daraz_Scraper?style=flat&color=0080ff" alt="dependencies">
//   <img src="https://img.shields.io/david/dev/Eemayas/Daraz_Scraper?style=flat&color=0080ff" alt="dev-dependencies">
//   <img src="https://img.shields.io/snyk/vulnerabilities/github/Eemayas/Daraz_Scraper?style=flat&color=0080ff" alt="security">
//   <img src="https://img.shields.io/website?style=flat&color=0080ff&url=https%3A%2F%2Fexample.com" alt="performance">
//   <img src="https://img.shields.io/github/commit-activity/y/Eemayas/Daraz_Scraper?style=flat&color=0080ff" alt="activity">
//   <img src="https://img.shields.io/docsify/docs?style=flat&color=0080ff" alt="documentation">
//   <img src="https://img.shields.io/github/v/tag/Eemayas/Daraz_Scraper?style=flat&color=0080ff" alt="version">
// </p>

// <p align="center">
//     <em>Constructed using the following tools and technologies:</em>
// </p>

// <p align="center">
//   <img src="https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white" alt="CSS">
//   <img src="https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white" alt="CSS3">
//   <img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white" alt="TypeScript">
//   <img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white" alt="HTML5">
//   <img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black" alt="JavaScript">
//   <img src="https://img.shields.io/badge/Electron-47848F.svg?style=for-the-badge&logo=Electron&logoColor=white" alt="Electron">
//   <img src="https://img.shields.io/badge/Next.js-000000.svg?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js">
// </p>
// `;
//   const projectTypeList: string[] = [
//     "Ecommerce",
//     "Banking",
//     "School",
//     "Education",
//     "Work",
//     "Healthcare",
//     "Real Estate",
//     "Travel",
//     "Social Media",
//     "Fitness",
//     "News",
//     "Entertainment",
//     "Food Delivery",
//     "Finance",
//     "Transportation",
//     "Hospitality",
//     "Music",
//     "Gaming",
//     "Environment",
//     "Nonprofit",
//     "Photography",

//     "Custom Link",
//   ];
//   const [repoInfo, setRepoInfo] = useLocalStorage("repoInfo", {
//     repoName: "",
//     repoLink: "",
//   });
//   const [projectHeaderValue, setProjectHeaderValue] = useState(
//     projectHeaderInitialMkdr
//   );
//   const [selectedOption, setSelectedOption] = useState<string>(
//     projectTypeList[0]
//   );

//   const handleDropdownChange = (selected: string) => {
//     setSelectedOption(selected);
//     console.log("Selected option:", selected);
//   };

//   const [inputProjectImageUrl, setInputRepositoryUrl] = useState("");

//   const fetchHeaderData = async () => {
//     store.dispatch(showSpinner(true));

//     // Define URLs
//     const projectIconUrl = `http://127.0.0.1:5000/project_icon?repository_url=${encodeURIComponent(
//       repoInfo.repoLink
//     )}&choice=${
//       projectTypeList.findIndex((option) => option === selectedOption) + 1
//     }&custom_link=${inputProjectImageUrl}`;
//     const projectNameUrl = `http://127.0.0.1:5000/project_name?repository_url=${encodeURIComponent(
//       repoInfo.repoLink
//     )}`;
//     const projectBadgeUrl = `http://127.0.0.1:5000/get_project_badges?repository_url=${encodeURIComponent(
//       repoInfo.repoLink
//     )}&badges=pull-requests&badges=contributors&badges=commit-activity&badges=code-size&badges=repo-size&badges=downloads&badges=sponsors&badges=release-version&badges=coverage&badges=code-quality&badges=dependencies&badges=dev-dependencies&badges=security&badges=performance&badges=activity&badges=documentation&badges=version`;
//     const projectLanguageUrl = `http://127.0.0.1:5000/get_project_languages?repository_url=${encodeURIComponent(
//       repoInfo.repoLink
//     )}`;

//     // Helper function to fetch data and handle errors
//     const fetchData = async (url: string) => {
//       try {
//         const response = await fetch(url);
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return await response.json();
//       } catch (error) {
//         console.error(`Error fetching data from ${url}:`, error);
//         return null; // Return null or handle as appropriate
//       }
//     };

//     try {
//       // Fetch data from each URL
//       const [
//         projectIconJson,
//         projectNameJson,
//         projectBadgeJson,
//         projectLanguageJson,
//       ] = await Promise.all([
//         fetchData(projectIconUrl),
//         fetchData(projectNameUrl),
//         fetchData(projectBadgeUrl),
//         fetchData(projectLanguageUrl),
//       ]);

//       // Log or use the fetched data
//       console.log("Project Icon:", projectIconJson.project_image_markdown);
//       console.log("Project Name:", projectNameJson.project_name_markdown);
//       console.log("Project Badges:", projectBadgeJson.badges_html);
//       console.log("Project Languages:", projectLanguageJson.badges_html);

//       setProjectHeaderValue(
//         `${projectIconJson.project_image_markdown}\n${projectNameJson.project_name_markdown}\n
//         `
//       );
//       // ${projectBadgeJson.badges_html}\n${projectLanguageJson.badges_html}
//     } catch (error) {
//       console.error("Error fetching one or more data sources:", error);
//     } finally {
//       store.dispatch(showSpinner(false));
//     }
//   };

//   return (
//     <MoveUpFadeAnimation>
//       <SectionHeader text="Project Header" subtext={"header"} />
//       <div className="w-full ">
//         <div className="w-[30rem] mx-auto gap-5 flex flex-col">
//           <DropdownField
//             label="Select Project Type"
//             options={projectTypeList}
//             onChange={handleDropdownChange}
//           />
//           {selectedOption === "Custom Link" ? (
//             <InputField
//               label="Profile Icon Link"
//               value={inputProjectImageUrl}
//               onChange={(e) => setInputRepositoryUrl(e.target.value)}
//             />
//           ) : null}
//         </div>
//       </div>

//       <div className="w-full flex justify-center mt-10 px-20">
//         <ActionButton
//           className="max-w-80"
//           onClick={() => fetchHeaderData()}
//           text="Generate Header  &rarr;"
//         />
//       </div>
//       <hr className="h-[2px] my-8 bg-gray-500 border-0 dark:bg-gray-700"></hr>
//       <div className="container w-[1500px] mb-10">
//         <MarkdownEditor value={projectHeaderValue} visible={true} />
//       </div>
//     </MoveUpFadeAnimation>
//   );
// };

// export const ProjectOverview = () => {
//   const [repoInfo, setRepoInfo] = useLocalStorage("repoInfo", {
//     repoName: "",
//     repoLink: "",
//   });
//   const [projectOverview, setProjectOverview] = useLocalStorage(
//     "projectOverview",
//     {}
//   );
//   const [projectOverviewMarkdownValue, setProjectOverviewMarkdownValue] =
//     useState(`
// # Project Overview

// This project involves developing a custom module called \`scrapper\` for scraping product data from an e-commerce platform, with specific focus on extracting detailed information about products listed on Daraz.com. The module is designed to automatically generate email notifications to users based on certain criteria related to product updates, such as changes in stock availability or price drops.

// The project utilizes Node.js and various libraries like Nodemailer for sending emails and Cheerio for HTML parsing, along with Mongoose for MongoDB interactions. Key features of the project include its ability to track product prices and stock levels, send alerts when products become available again after being out of stock, notify users about price drops exceeding a certain threshold (40% in this case), and welcome new users who start tracking a product. The project's setup involves configuring Nodemailer with authentication details for sending emails from a specific account.`);

//   const fetchProjectOverviewData = async () => {
//     store.dispatch(showSpinner(true));

//     try {
//       const projectOverviewUrl = `http://127.0.0.1:5000/project_overview?repository_url=${encodeURIComponent(
//         repoInfo.repoLink
//       )}`;

//       const projectOverviewResponse = await fetch(projectOverviewUrl);
//       const projectOverviewJson = await projectOverviewResponse.json();
//       setProjectOverviewMarkdownValue(
//         projectOverviewJson.project_overview_markdown
//       );
//       setProjectOverview(projectOverviewJson.project_overview_markdown);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//     store.dispatch(showSpinner(false));
//   };

//   return (
//     <MoveUpFadeAnimation>
//       <SectionHeader text="Project Overview" subtext={"overview"} />

//       <div className="w-full flex justify-center mt-10 px-20">
//         <ActionButton
//           className="max-w-80"
//           onClick={function (): void {
//             fetchProjectOverviewData();
//           }}
//           text="Generate overview of project &rarr;"
//         />
//       </div>
//       <hr className="h-[2px] my-8 bg-gray-500 border-0 dark:bg-gray-700"></hr>
//       <div className="container w-[1500px] mb-10">
//         <MarkdownEditor
//           value={projectOverviewMarkdownValue}
//           visible={true}
//           className="h-[50vh]"
//         />
//       </div>
//     </MoveUpFadeAnimation>
//   );
// };

// type IncorrectFileDescription = {
//   [key: string]: string;
// };
// interface FileDescription {
//   fileName: string;
//   description: string;
// }

// export const SummaryGeneration = () => {
//   type FileTree = { [key: string]: FileTree | null };
//   const [loading, setLoading] = useState(false);
//   const [currentState, setCurrentState] = useState(0);
//   const [folderStructureDict, setFolderStructureDict] = useLocalStorage(
//     "folderStructureDict",
//     {}
//   );
//   const [repoInfo, setRepoInfo] = useLocalStorage("folderStructureDict", {
//     repoName: "",
//     repoLink: "",
//   });
//   const [summaryData, setSummaryData] = useState<FileDescription[]>([]);

//   function generateFileList(
//     input: FileTree,
//     ignoreList: string[] = [],
//     ignoreExtensions: string[] = []
//   ): string[] {
//     let summary: string[] = [];

//     function processNode(node: FileTree | null, currentPath: string) {
//       if (!node) return;

//       for (const key in node) {
//         const newPath = currentPath ? `${currentPath}/${key}` : key;

//         // Check if the directory or file is in the ignore list
//         if (ignoreList.includes(key)) continue;

//         // Check if the file has an extension that should be skipped
//         const extension = key.split(".").pop()?.toLowerCase();
//         if (extension && ignoreExtensions.includes(`.${extension}`)) continue;

//         if (node[key] === null) {
//           // It's a file, so add it to the summary
//           summary.push(newPath);
//         } else {
//           processNode(node[key], newPath);
//         }
//       }
//     }

//     processNode(input, "");
//     return summary;
//   }

//   const fileList = generateFileList(
//     folderStructureDict,
//     ignoreListFolderStructure,
//     ignoreListExtensions
//   );
//   const loadingStates = fileList.map((fileList) => {
//     return { text: fileList };
//   });
//   console.log(fileList);

//   function convertFileDescriptions(
//     fileDescriptions: IncorrectFileDescription
//   ): FileDescription[] {
//     return Object.entries(fileDescriptions).map(([fileName, description]) => ({
//       fileName,
//       description,
//     }));
//   }

//   const incorrectInitialFileDescriptions: IncorrectFileDescription = {
//     "Github_repos\\Daraz_Scraper\\.env.local.copy":
//       "It appears there are no code snippets to summarize. The provided text contains environment variable settings, but does not include any programming code that I can assist with summarizing.\n\nIf you'd like to provide the actual code snippet, I'll be happy to help summarize it for you!",
//     "Github_repos\\Daraz_Scraper\\.gitignore":
//       "This code is a `.gitignore` file, used to ignore certain files and directories from being tracked by Git. It contains several sections:\n\n1. **Dependencies**: Ignores node_modules, .pnp, and .pnp.js files.\n2. **Testing**: Excludes coverage folder and generated Next.js files.\n3. **Production**: Omits build directory.\n4. **Miscellaneous**: Ignoring macOS-specific file `.DS_Store` and PEM certificate files.\n5. **Debugging**: Hides debugging logs for npm, yarn, and Vercel.\n6. **Local Environment Variables**: Ignores local .env files.\n7. **Vercel**: Excludes Vercel configuration files.\n8. **TypeScript**: Omits TypeScript build information and Next.js environment file.\n\nThis summary provides an overview of the ignored files and directories, which helps maintain a clean and organized Git repository.",
//     "Github_repos\\Daraz_Scraper\\README.md":
//       "**DarazScrapper Summary**\n\nDarazScrapper is a web application built with Next.js that scrapes product details from Daraz, records price changes, and notifies users when specific conditions are met. The app uses MongoDB for data storage and Bright Data for efficient scraping.\n\n**Key Features:**\n\n1. **Price Tracking**: Records highest and lowest prices for products over time.\n2. **Notification System**: Sends alerts when price drops below a set threshold.\n3. **Web Scraping**: Extracts product details like name, price, and rating.\n4. **Cron Jobs**: Schedules scraping tasks to run periodically.\n\n**Technologies Used:**\n\n1. Next.js\n2. MongoDB\n3. Bright Data\n4. Node.js\n5. Tailwind CSS\n\n**Prerequisites:**\n\n1. Node.js v14 or higher\n2. npm or Yarn\n3. MongoDB instance\n\n**Installation:**\n\n1. Clone the repository and install dependencies.\n2. Set up environment variables in `.env.local` file.\n\n**Usage:**\n\n1. Add product URL to scrape using `addProductToScraper(productUrl)`.\n2. The app will automatically track price changes and notify users of significant changes.\n\n**Website:**\n\nView live demo at [https://daraz-scraper.vercel.app/](https://daraz-scraper.vercel.app/).",
//     "Github_repos\\Daraz_Scraper\\app\\api\\cron\\route.ts":
//       "Here is a summary of the code:\n\n**Overview**\n\nThis is an API endpoint written in Next.js that runs a cron job to scrape product data from Daraz, update database records, and send email notifications.\n\n**Main Functionality**\n\n1. Connects to a MongoDB database.\n2. Fetches all products from the database.\n3. Scrapes latest product details for each product using `scrapeDarazProduct` function.\n4. Updates the product record in the database with the scraped data.\n5. Checks each product's status and sends email notifications if applicable.\n\n**Key Features**\n\n* Dynamic revalidation of API response (every 0 seconds)\n* Maximum execution time of 300 seconds\n* Uses Next.js `Request` object to handle incoming requests\n\n**Imported Functions**\n\n* `getLowestPrice`, `getHighestPrice`, `getAveragePrice`, and `getEmailNotifType` from `/lib/utils`\n* `connectToDB` from `/lib/mongoose`\n* `scrapeDarazProduct` from `/lib/scrapper`\n* `generateEmailBody` and `sendEmail` from `/lib/nodemailer`\n\n**Return Value**\n\nThe API endpoint returns a JSON response with a success message and an array of updated product data.",
//     "Github_repos\\Daraz_Scraper\\app\\globals.css":
//       'This is a Tailwind CSS configuration file that defines various utility classes for styling web pages. The code consists of several sections:\n\n1. **Base styles**: A single rule resets default browser styles by setting `margin`, `padding`, and `box-sizing` to their desired values.\n2. **Typography**: At the base layer, the font family is set to "font-inter" for the `<body>` element.\n3. **Component styles**: This section defines utility classes for various HTML elements, such as:\n\t* Buttons (`btn` class)\n\t* Headlines (`head-text` class)\n\t* Section text (`section-text` class)\n\t* Small text (`small-text` class)\n\t* Paragraphs (`paragraph-text` class)\n4. **Component styles (continued)**: This section defines utility classes for various components, such as:\n\t* Hero carousel\n\t* Trending section\n\t* Product container and related elements (product image, info, hearts, stars, reviews)\n\t* Modal dialog box\n5. **Navbar**: A simple navigation bar component is defined with a logo element.\n6. **Price info card**: A price information card component is defined.\n7. **Product card**: A product card component is defined with various elements (image container, image, title).\n8. **Searchbar input**: A search bar input field and button are defined.\n\nOverall, this code provides a set of reusable utility classes for styling web pages using Tailwind CSS.',
//     "Github_repos\\Daraz_Scraper\\app\\layout.tsx":
//       "Here's a summary of the code:\n\n**Purpose:** This code defines the layout for a Next.js application, which includes font imports, metadata setup, and a reusable `RootLayout` component.\n\n**Key Features:**\n\n1. **Font Imports**: The code imports two Google Fonts (Inter and Space_Grotesk) and sets them up with various subsets and weights.\n2. **Metadata Setup**: The `metadata` object defines the title and description of the application, which will be used in search engine results and other metadata contexts.\n3. **RootLayout Component**: This component is a reusable layout that wraps around the application's content. It includes:\n\t* A `<html>` tag with a `lang` attribute set to \"en\".\n\t* A `<body>` tag with a class name generated from the Inter font import.\n\t* A `<main>` tag with a max width and margin set to auto.\n\t* A `Navbar` component imported from another file.\n\t* The application's content (rendered by the `children` prop).\n\nOverall, this code sets up a basic layout for a Next.js application, including font imports and metadata setup.",
//   };

//   const initialFileDescriptions = convertFileDescriptions(
//     incorrectInitialFileDescriptions
//   );

//   function convertToMarkdownTable(fileDescriptions: FileDescription[]): string {
//     // Create the table headers
//     let markdownTable = "| File | Description |\n";
//     markdownTable += "|------|-------------|\n";

//     // Add each file description to the table
//     for (const { fileName, description } of fileDescriptions) {
//       // Replace newlines with `<br>` for HTML-like line breaks in markdown
//       const formattedDescription = description.replace(/\n/g, "<br>");
//       markdownTable += `| ${fileName} | ${formattedDescription} |\n`;
//     }

//     return markdownTable;
//   }

//   const fetchSummaryData = async () => {
//     setLoading(true);
//     // store.dispatch(showSpinner(true));

//     const updatedData = [...summaryData]; // Start with the current state

//     for (const filepath of fileList.slice(0, 10)) {
//       console.log(filepath);
//       try {
//         const summaryGenerationFileUrl = `http://127.0.0.1:5000/file_summary_generation?repository_url=${encodeURIComponent(
//           repoInfo.repoLink
//         )}&file_path=Github_repos/${filepath}`;

//         const summaryGenerationFileResponse = await fetch(
//           summaryGenerationFileUrl
//         );
//         const summaryGenerationFileJson =
//           await summaryGenerationFileResponse.json();

//         const tempData = {
//           fileName: summaryGenerationFileJson.new_data.File,
//           description: summaryGenerationFileJson.new_data.Description,
//         };

//         // Push the new tempData to the updatedData array
//         updatedData.push(tempData);
//         console.log({ tempData });
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }

//       // Ensure that state updates are handled correctly using the functional form of setState
//       setCurrentState((prevState) => prevState + 1);
//     }

//     // Once all data is fetched, update the state
//     setSummaryData(updatedData);
//     console.log({ updatedData });

//     setMarkdownValue(convertToMarkdownTable(updatedData));
//     store.dispatch(showSpinner(false));
//   };

//   const [markdownValue, setMarkdownValue] = useState(
//     convertToMarkdownTable(initialFileDescriptions)
//   );

//   return (
//     <>
//       <MoveUpFadeAnimation>
//         <SectionHeader text="Summary Generation 📝" subtext={"summary"} />

//         <div className="w-full flex justify-center mt-10 px-20">
//           <ActionButton
//             className="max-w-80"
//             onClick={() => fetchSummaryData()}
//             text="Generate Header  &rarr;"
//           />
//         </div>
//         <hr className="h-[2px] my-8 bg-gray-500 border-0 dark:bg-gray-700"></hr>
//         <div className="container w-[1500px] mb-10">
//           <MarkdownEditor
//             value={markdownValue}
//             visible={true}
//             className="min-h-screen"
//           />
//         </div>
//       </MoveUpFadeAnimation>
//       {loading && (
//         <div className="w-full h-[60vh] flex items-center justify-center">
//           <Loader
//             loadingStates={loadingStates}
//             loading={loading}
//             duration={2000}
//             currentState={currentState}
//           />

//           <button
//             className="fixed top-4 right-4 text-black dark:text-white z-[120]"
//             onClick={() => setLoading(false)}
//           >
//             <IconSquareRoundedX className="h-10 w-10" />
//           </button>
//         </div>
//       )}
//     </>
//   );
// };

// export const KeyFeature = () => {
//   const [repoInfo, setRepoInfo] = useLocalStorage("repoInfo", {
//     repoName: "",
//     repoLink: "",
//   });
//   const [keyFeature, setKeyFeature] = useLocalStorage("keyFeature", {});
//   const [keyFeatureMarkdownValue, setKeyFeatureMarkdownValue] = useState(`
// # Key Features
// - **Key Feature 1**: Short description of \`Key Feature 1\`.
// - **Key Feature 2**: Short description of \`Key Feature 2\`.
// - **Key Feature 3**: Short description of \`Key Feature 3\`.
// - **Key Feature 4**: Short description of \`Key Feature 4\`.
// - **Key Feature 5**: Short description of \`Key Feature 5\`.
// - **Key Feature 6**: Short description of \`Key Feature 6\`.
// `);

//   const fetchKeyFeatureData = async () => {
//     store.dispatch(showSpinner(true));

//     try {
//       const keyFeatureUrl = `http://127.0.0.1:5000/project_key_feature?repository_url=${encodeURIComponent(
//         repoInfo.repoLink
//       )}`;

//       const keyFeatureResponse = await fetch(keyFeatureUrl);
//       const keyFeatureJson = await keyFeatureResponse.json();
//       setKeyFeatureMarkdownValue(keyFeatureJson.key_feature_markdown);
//       setKeyFeature(keyFeatureJson.key_feature_markdown);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//     store.dispatch(showSpinner(false));
//   };

//   return (
//     <MoveUpFadeAnimation>
//       <SectionHeader text="Key Feature" subtext={"Key feature"} />

//       <div className="w-full flex justify-center mt-10 px-20">
//         <ActionButton
//           className="max-w-80"
//           onClick={function (): void {
//             fetchKeyFeatureData();
//           }}
//           text="Generate Key feature of project &rarr;"
//         />
//       </div>
//       <hr className="h-[2px] my-8 bg-gray-500 border-0 dark:bg-gray-700"></hr>
//       <div className="container w-[1500px] mb-10">
//         <MarkdownEditor
//           value={keyFeatureMarkdownValue}
//           visible={true}
//           className="h-[50vh]"
//         />
//       </div>
//     </MoveUpFadeAnimation>
//   );
// };

// export const Contributors = () => {
//   const [repoInfo, setRepoInfo] = useLocalStorage("repoInfo", {
//     repoName: "",
//     repoLink: "",
//   });
//   const [contributors, setContributors] = useLocalStorage("contributors", {});
//   const [contributorsMarkdownValue, setContributorsMarkdownValue] = useState(`
// # Contributors

// | Avatar | Contributor | GitHub Profile | No of Contributions |
// |:--------:|:--------------:|:----------------:|:-------------------:|
// | <img src='https://avatars.githubusercontent.com/u/100434825?v=4' width='40' height='40' style='border-radius:50%;'/> | Eemayas | [@Eemayas](https://github.com/Eemayas) | 14 |
// | <img src='https://avatars.githubusercontent.com/u/100434825?v=4' width='40' height='40' style='border-radius:50%;'/> | Eemayas | [@Eemayas](https://github.com/Eemayas) | 14 |
// `);

//   const fetchContributorsData = async () => {
//     store.dispatch(showSpinner(true));

//     try {
//       const contributorsUrl = `http://127.0.0.1:5000/project_key_feature?repository_url=${encodeURIComponent(
//         repoInfo.repoLink
//       )}`;

//       const contributorsResponse = await fetch(contributorsUrl);
//       const contributorsJson = await contributorsResponse.json();
//       setContributorsMarkdownValue(contributorsJson.key_feature_markdown);
//       setContributors(contributorsJson.key_feature_markdown);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//     store.dispatch(showSpinner(false));
//   };

//   return (
//     <MoveUpFadeAnimation>
//       <SectionHeader text="Contributors" subtext={"contributors"} />

//       <div className="w-full flex justify-center mt-10 px-20">
//         <ActionButton
//           className="max-w-80"
//           onClick={function (): void {
//             fetchContributorsData();
//           }}
//           text="Generate contributors of project &rarr;"
//         />
//       </div>
//       <hr className="h-[2px] my-8 bg-gray-500 border-0 dark:bg-gray-700"></hr>
//       <div className="container w-[1500px] mb-10">
//         <MarkdownEditor
//           value={contributorsMarkdownValue}
//           visible={true}
//           className="h-[50vh]"
//         />
//       </div>
//     </MoveUpFadeAnimation>
//   );
// };

// export const ContributingGuideSection = () => {
//   const [repoInfo, setRepoInfo] = useLocalStorage("repoInfo", {
//     repoName: "",
//     repoLink: "",
//   });
//   const [contributingGuide, setContributingGuide] = useLocalStorage(
//     "contributingGuide",
//     {}
//   );
//   const [contributingGuideMarkdownValue, setContributingGuideMarkdownValue] =
//     useState(`
// # Contributing
// Contributions are welcome! Here are several ways you can contribute:
// - **[Submit Pull Requests](https://github.com/repo_owner/repo_name.git/pulls)**: Review open PRs, and submit your own PRs.
// - **[Join the Discussions](https://github.com/repo_owner/repo_name.git/discussions)**: Share your insights, provide feedback, or ask questions.
// - **[Report Issues](https://github.com/repo_owner/repo_name.git/issues)**: Submit bugs found or log feature requests for Daraz_Scraper.git.

// ### Contributing Guidelines

// 1. **Fork the Repository**:
//     - Start by forking the project repository to your GitHub account.
// 2. **Clone the Repository**:
//     - Clone your forked repository to your local machine using the command:
//     \`\`\`sh
//     git clone https://github.com/your-username/Daraz_Scraper.git.git
//     \`\`\`
//     - Replace \`your-username\` with your GitHub username.
// 3. **Create a New Branch**:
//     - Create a new branch for your changes using the command:
//     \`\`\`sh
//     git checkout -b your-branch-name
//     \`\`\`
// 4. **Make Your Changes**:
//     - Edit, add, or delete files as needed. Ensure your changes align with the project's contribution guidelines.
// 5. **Commit Your Changes**:
//     - Stage your changes and commit them with a descriptive message:
//     \`\`\`bash
//     git add .
//     git commit -m "Your descriptive message"
//     \`\`\`
// 6. **Push Your Changes**:
//     - Push your branch to your forked repository:
//     \`\`\`bash
//     git push origin your-branch-name
//     \`\`\`
// 7. **Create a Pull Request (PR)**:
//     - Go to the original repository on GitHub and click “Compare & pull request.” Provide a clear description of the changes and submit the PR.

// Once your PR is reviewed and approved, it will be merged into the main branch.
// `);

//   const fetchContributingGuideData = async () => {
//     store.dispatch(showSpinner(true));

//     try {
//       const contributingGuideUrl = `http://127.0.0.1:5000/project_key_feature?repository_url=${encodeURIComponent(
//         repoInfo.repoLink
//       )}`;

//       const contributingGuideResponse = await fetch(contributingGuideUrl);
//       const contributingGuideJson = await contributingGuideResponse.json();
//       setContributingGuideMarkdownValue(
//         contributingGuideJson.key_feature_markdown
//       );
//       setContributingGuide(contributingGuideJson.key_feature_markdown);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//     store.dispatch(showSpinner(false));
//   };

//   return (
//     <MoveUpFadeAnimation>
//       <SectionHeader text="Contributing Guide" subtext={"contributing guide"} />

//       <div className="w-full flex justify-center mt-10 px-20">
//         <ActionButton
//           className="max-w-80"
//           onClick={function (): void {
//             fetchContributingGuideData();
//           }}
//           text="Generate contributing guide of project &rarr;"
//         />
//       </div>
//       <hr className="h-[2px] my-8 bg-gray-500 border-0 dark:bg-gray-700"></hr>
//       <div className="container w-[1500px] mb-10">
//         <MarkdownEditor
//           value={contributingGuideMarkdownValue}
//           visible={true}
//           className="h-screen"
//         />
//       </div>
//     </MoveUpFadeAnimation>
//   );
// };
// export const LicenseSection = () => {
//   const [repoInfo, setRepoInfo] = useLocalStorage("repoInfo", {
//     repoName: "",
//     repoLink: "",
//   });
//   const [license, setLicense] = useLocalStorage("license", {});
//   const [licenseMarkdownValue, setLicenseMarkdownValue] = useState(`
// # License
// This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
// `);

//   const fetchLicenseData = async () => {
//     store.dispatch(showSpinner(true));

//     try {
//       const licenseUrl = `http://127.0.0.1:5000/project_key_feature?repository_url=${encodeURIComponent(
//         repoInfo.repoLink
//       )}`;

//       const licenseResponse = await fetch(licenseUrl);
//       const licenseJson = await licenseResponse.json();
//       setLicenseMarkdownValue(licenseJson.key_feature_markdown);
//       setLicense(licenseJson.key_feature_markdown);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//     store.dispatch(showSpinner(false));
//   };

//   return (
//     <MoveUpFadeAnimation>
//       <SectionHeader text="License" subtext={"license"} />

//       <div className="w-full flex justify-center mt-10 px-20">
//         <ActionButton
//           className="max-w-80"
//           onClick={function (): void {
//             fetchLicenseData();
//           }}
//           text="Generate license of project &rarr;"
//         />
//       </div>
//       <hr className="h-[2px] my-8 bg-gray-500 border-0 dark:bg-gray-700"></hr>
//       <div className="container w-[1500px] mb-10">
//         <MarkdownEditor
//           value={licenseMarkdownValue}
//           visible={true}
//           className="h-[50vh]"
//         />
//       </div>
//     </MoveUpFadeAnimation>
//   );
// };
