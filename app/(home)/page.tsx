/** @format */

"use client";

import React from "react";
import MoveUpFadeAnimation from "@/components/MoveUpFadeAnimation";
import PhotoGallery from "./components/PhotoGallery";
import HomeForm from "./components/HomeForm";
import { Highlight } from "@/components/ui/hero-highlight";
import { styles } from "../style";
import store from "../store";
import { showUrlQuery } from "@/components/Modals/store/ModalReducer";

export default function Home() {
  store.dispatch(showUrlQuery(true));
  return (
    <div className="grid min-h-screen items-center">
      <MoveUpFadeAnimation>
        <h1
          className={`${styles.sectionHeadText} text-center text-text-light dark:text-text-dark`}
        >
          {/* <h1 c lassName="mx-auto max-w-4xl px-4 text-center text-2xl font-bold leading-relaxed text-black dark:text-white md:text-4xl lg:text-5xl lg:leading-snug"> */}
          Create your perfect{" "}
          <Highlight className="text-black dark:text-white">README</Highlight>{" "}
          effortlessly with{" "}
          <Highlight className="text-black dark:text-white">Ollama</Highlight> —
          where simplicity meets customization!
        </h1>
        {/* <h2 className={`${styles.sectionSubText} text-center`}> */}
        <h2 className="mx-auto mt-5 max-w-4xl px-4 text-center text-lg leading-relaxed text-neutral-700 dark:text-white md:text-xl lg:text-2xl lg:leading-snug">
          Our user-friendly editor lets you easily add and customize all the
          sections you need for your project's README.
        </h2>{" "}
        <hr className="my-3 h-[2px] border-0 bg-gray-300 dark:bg-gray-600" />
        <PhotoGallery />
        <hr className="my-8 h-[2px] border-0 bg-gray-300 dark:bg-gray-600" />
        <div className="mt-10 flex w-full justify-center">
          <HomeForm />
        </div>
      </MoveUpFadeAnimation>
    </div>
  );
}
