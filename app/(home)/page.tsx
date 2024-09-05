/** @format */

"use client";

import React, { useState } from "react";
import { showSpinner } from "@/components/Modals/store/ModalReducer";
import MoveUpFadeAnimation from "@/components/MoveUpFadeAnimation";
import PhotoGallery from "./components/PhotoGallery";
import HomeForm from "./components/HomeForm";
import { useRepoData } from "./hooks/useRepoData";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { useRouter } from "next/navigation";
import store from "../store";

export default function Home() {
  const router = useRouter();
  const {
    errorMessage,
    validateGitHubLink,
    checkRepoExistence,
    fetchData,
    setErrorMessage,
  } = useRepoData();
  const [inputRepositoryUrl, setInputRepositoryUrl] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    store.dispatch(showSpinner(true));
    e.preventDefault();
    if (validateGitHubLink(inputRepositoryUrl)) {
      const repoExists = await checkRepoExistence(inputRepositoryUrl);
      if (repoExists) {
        setErrorMessage("");
        await fetchData(inputRepositoryUrl);
        router.push("/main");
      } else {
        setErrorMessage(
          "Repository does not exist or there was an error fetching the repository.",
        );
      }
    } else {
      setErrorMessage("Invalid GitHub link");
    }
    store.dispatch(showSpinner(false));
  };

  return (
    <HeroHighlight containerClassName="items-center">
      <MoveUpFadeAnimation>
        <h1 className="mx-auto max-w-4xl px-4 text-center text-2xl font-bold leading-relaxed text-black dark:text-white md:text-4xl lg:text-5xl lg:leading-snug">
          Create your perfect{" "}
          <Highlight className="text-black dark:text-white">README</Highlight>{" "}
          effortlessly with{" "}
          <Highlight className="text-black dark:text-white">Ollama</Highlight> —
          where simplicity meets customization!
        </h1>

        <h2 className="mx-auto mt-5 max-w-4xl px-4 text-center text-2xl leading-relaxed text-neutral-700 dark:text-white md:text-lg lg:text-2xl lg:leading-snug">
          Our user-friendly editor lets you easily add and customize all the
          sections you need for your project's README.
        </h2>
        <PhotoGallery />

        <div className="mt-10 flex w-full justify-center">
          <HomeForm
            inputRepositoryUrl={inputRepositoryUrl}
            setInputRepositoryUrl={setInputRepositoryUrl}
            errorMessage={errorMessage}
            handleSubmit={handleSubmit}
          />
        </div>
      </MoveUpFadeAnimation>
    </HeroHighlight>
  );
}
