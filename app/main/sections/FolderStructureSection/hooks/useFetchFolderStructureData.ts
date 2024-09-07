// /** @format */

// import store from "@/app/store";
// import { showSpinner } from "@/components/Modals/store/ModalReducer";
// import {
//   getFolderStructureUrl,
//   getKeyFeatureUrl,
// } from "@/lib/constants/apiEndpoints";
// import { useCallback } from "react";
// import { initalFolderStructureMarkdown } from "../constants";
// import useLocalStorage from "@/lib/hooks/useLocalStorage";
// import {
//   folderStructureLS,
//   keyFeaturesLS,
//   repoInfoLS,
// } from "@/lib/constants/localStorageNames";

// export function useFetchFolderStructureData() {
//   const [{ repoLink }] = useLocalStorage(repoInfoLS, {
//     repoName: "",
//     repoLink: "",
//   });
//   const [folderStructure, setFolderStructure] = useLocalStorage(
//     keyFeaturesLS,
//     initalFolderStructureMarkdown,
//   );

//   const fetchFolderStructureData = useCallback(async () => {
//     store.dispatch(showSpinner(true));

//     try {
//       // // const folderStructureUrl = getKeyFeatureUrl(repoLink);
//       // const folderStructureUrl = getFolderStructureUrl(repoLink);

//       // const folderStructureResponse = await fetch(folderStructureUrl);
//       // const folderStructureJson = await folderStructureResponse.json();
//       // // setFolderStructure(folderStructureJson.key_feature_markdown);
//       // const ss = folderStructureJson.folder_structure_markdown;
//       const ss = "Hello";
//       console.log({ ss });
//       setFolderStructure(ss);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }

//     store.dispatch(showSpinner(false));
//   }, [repoLink]);

//   return {
//     folderStructure,
//     fetchFolderStructureData,
//   };
// }

// // /** @format */

// // import store from "@/app/store";
// // import { showSpinner } from "@/components/Modals/store/ModalReducer";
// // import {
// //   getFolderStructureUrl,
// //   getKeyFeatureUrl,
// // } from "@/lib/constants/apiEndpoints";
// // import { useCallback } from "react";
// // import { initalFolderStructureMarkdown } from "../constants";
// // import useLocalStorage from "@/lib/hooks/useLocalStorage";
// // import {
// //   folderStructureLS,
// //   keyFeaturesLS,
// //   repoInfoLS,
// // } from "@/lib/constants/localStorageNames";
// // import { initialKeyFeaturesMkdr } from "../../KeyFeatureSection/constant";

// // export function useFetchFolderStructureData() {
// //   const [{ repoLink }] = useLocalStorage(repoInfoLS, {
// //     repoName: "",
// //     repoLink: "",
// //   });
// //   const [folderStructure, setFolderStructure] = useLocalStorage(
// //     folderStructureLS,
// //     initalFolderStructureMarkdown,
// //   );
// //   // const [keyFeatureMarkdownValue, setKeyFeatureMarkdownValue] = useLocalStorage(
// //   //   folderStructureLS,
// //   //   initalFolderStructureMarkdown,
// //   // );

// //   const fetchFolderStructureData = useCallback(async () => {
// //     store.dispatch(showSpinner(true));

// //     try {
// //       const folderStructureUrl = getFolderStructureUrl(repoLink);

// //       const response = await fetch(folderStructureUrl);
// //       const data = await response.json();

// //       setFolderStructure(() => {
// //         return "Sdfsdfsdfsdfsd";
// //       });
// //     } catch (error) {
// //       console.error("Error fetching data:", error);
// //     }

// //     store.dispatch(showSpinner(false));
// //   }, [repoLink]);

// //   const fetchKeyFeatureData = useCallback(async () => {
// //     store.dispatch(showSpinner(true));

// //     try {
// //       const keyFeatureUrl = getKeyFeatureUrl(repoLink);
// //       // const keyFeatureUrl = getFolderStructureUrl(repoLink);

// //       const response = await fetch(keyFeatureUrl);
// //       const data = await response.json();

// //       setFolderStructure(data.key_feature_markdown);
// //     } catch (error) {
// //       console.error("Error fetching data:", error);
// //     }

// //     store.dispatch(showSpinner(false));
// //   }, [repoLink]);

// //   return {
// //     folderStructure,
// //     fetchFolderStructureData,
// //     fetchKeyFeatureData,
// //     keyFeatureMarkdownValue: folderStructure,
// //   };
// // }
/** @format */

import store from "@/app/store";
import { showSpinner } from "@/components/Modals/store/ModalReducer";
import { useState, useCallback } from "react";
import { getKeyFeatureUrl } from "@/lib/constants/apiEndpoints";
import useLocalStorage from "@/lib/hooks/useLocalStorage";
import { keyFeaturesLS, repoInfoLS } from "@/lib/constants/localStorageNames";
import { initialKeyFeaturesMkdr } from "../../KeyFeatureSection/constant";

export function useFetchFolderStructureData() {
  const [{ repoLink }] = useLocalStorage(repoInfoLS, {
    repoName: "",
    repoLink: "",
  });
  const [folderStructure, setFolderStructure] = useLocalStorage(
    keyFeaturesLS,
    initialKeyFeaturesMkdr,
  );

  const fetchFolderStructureData = async () => {
    console.log("SDsdfdsf");
    // store.dispatch(showSpinner(true));

    // try {
    setFolderStructure("data.key_feature_markdown");
    // } catch (error) {
    //   console.error("Error fetching data:", error);
    // }
    setFolderStructure("data.key_feature_markdown");
    // store.dispatch(showSpinner(false));
  };

  return { folderStructure, fetchFolderStructureData };
}
