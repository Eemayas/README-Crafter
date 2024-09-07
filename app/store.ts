/** @format */

import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "@/components/Modals/store/ModalReducer";
import repoReducer from "@/app/(home)/store/repoReducer";
import folderStructureReducer from "@/app/main/sections/FolderStructureSection/store/folderStructureReducer";
import contributingGuideReducer from "@/app/main/sections/ContributingGuideSection/store/ContributingGuideReducer";
import contributorsReducer from "@/app/main/sections/ContributorsSection/store/contributorsReducer";
import licenseReducer from "@/app/main/sections/LicenseSection/store/licenseReducer";
import projectHeaderReducer from "@/app/main/sections/HeaderSection/store/headerReducer";

const store = configureStore({
  reducer: {
    modal: modalReducer,
    repoReducer,
    folderStructureReducer,
    contributingGuideReducer,
    contributorsReducer,
    licenseReducer,
    projectHeaderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
