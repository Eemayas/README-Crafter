/** @format */

import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "@/components/Modals/store/ModalReducer";
import baseUrlReducer from "@/components/Modals/store/BaseUrlReducer";
import repoReducer from "@/app/(home)/store/repoReducer";
import folderStructureReducer from "@/app/main/sections/FolderStructureSection/store/folderStructureReducer";
import contributingGuideReducer from "@/app/main/sections/ContributingGuideSection/store/ContributingGuideReducer";
import contributorsReducer from "@/app/main/sections/ContributorsSection/store/contributorsReducer";
import licenseReducer from "@/app/main/sections/LicenseSection/store/licenseReducer";
import projectHeaderReducer from "@/app/main/sections/HeaderSection/store/headerReducer";
import keyFeaturesReducer from "@/app/main/sections/KeyFeatureSection/store/keyFeaturesReducer";
import projectInstallationGuideReducer from "@/app/main/sections/ProjectInstallationGuideSection/store/projectInstallationGuideReducer";
import projectOverviewReducer from "@/app/main/sections/ProjectOverview/store/projectOverviewReducer";
import summaryGenerationReducer from "@/app/main/sections/SummarySection/store/summaryGenerationReducer";
import folderStructureDictReducer from "@/app/main/sections/FolderStructureSection/store/folderStructureDictReducer";

const store = configureStore({
  reducer: {
    modal: modalReducer,
    baseUrlReducer,
    repoReducer,
    summaryGenerationReducer,
    projectHeaderReducer,
    projectOverviewReducer,
    keyFeaturesReducer,
    folderStructureReducer,
    folderStructureDictReducer,
    projectInstallationGuideReducer,
    contributingGuideReducer,
    contributorsReducer,
    licenseReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
