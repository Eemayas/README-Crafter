/** @format */

"use client";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { showSpinner } from "@/components/Modals/store/ModalReducer";
import MoveUpFadeAnimation from "@/components/MoveUpFadeAnimation";
import PhotoGallery from "./components/PhotoGallery";
import HomeForm from "./components/HomeForm";
import { useRepoData } from "./hooks/useRepoData";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";

export default function Home() {
  const dispatch = useDispatch();
  const {
    errorMessage,
    validateGitHubLink,
    checkRepoExistence,
    fetchData,
    setErrorMessage,
  } = useRepoData();
  const [inputRepositoryUrl, setInputRepositoryUrl] = useState("");

  const showSpinnerModal = () => dispatch(showSpinner(true));
  const hideSpinnerModal = () => dispatch(showSpinner(false));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    showSpinnerModal();
    e.preventDefault();
    if (validateGitHubLink(inputRepositoryUrl)) {
      const repoExists = await checkRepoExistence(inputRepositoryUrl);
      if (repoExists) {
        setErrorMessage("");
        fetchData(inputRepositoryUrl);
      } else {
        setErrorMessage(
          "Repository does not exist or there was an error fetching the repository."
        );
      }
    } else {
      setErrorMessage("Invalid GitHub link");
    }
    hideSpinnerModal();
  };

  return (
    <HeroHighlight>
      <MoveUpFadeAnimation>
        <h1 className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-black dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto">
          Create your perfect{" "}
          <Highlight className="text-black dark:text-white">README</Highlight>{" "}
          effortlessly with{" "}
          <Highlight className="text-black dark:text-white">Ollama</Highlight> —
          where simplicity meets customization!
        </h1>

        <h2 className="text-md px-4 md:text-lg lg:text-xl text-neutral-700 dark:text-white max-w-4xl mt-5 leading-relaxed lg:leading-snug text-center mx-auto">
          Our user-friendly editor lets you easily add and customize all the
          sections you need for your project's README.
        </h2>
        <PhotoGallery />

        <div className="w-full mt-10 flex justify-center">
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
