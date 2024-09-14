/** @format */

// components/HomeForm.tsx
import React, { useState } from "react";
import InputField from "@/components/InputField";
import ActionButton from "@/components/ActionButton";
import { useRepoData } from "../hooks/useRepoData";
import {
  showSpinner,
  showUrlQuery,
} from "@/components/Modals/store/ModalReducer";
import store, { RootState } from "@/app/store";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { Root } from "postcss";

const HomeForm = () => {
  const router = useRouter();
  const {
    errorMessage,
    validateGitHubLink,
    checkRepoExistence,
    fetchData,
    setErrorMessage,
  } = useRepoData();
  const baseUrl = useSelector((state: RootState) => state.baseUrlReducer);
  const [inputRepositoryUrl, setInputRepositoryUrl] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    store.dispatch(showSpinner(true));
    e.preventDefault();
    if (validateGitHubLink(inputRepositoryUrl)) {
      const repoExists = await checkRepoExistence(inputRepositoryUrl);
      if (repoExists) {
        setErrorMessage("");
        await fetchData(inputRepositoryUrl)
          .then(() => router.push("/main"))
          .catch(() =>
            setErrorMessage("Error Retrieveing MetaData from Server"),
          );
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
    <div className="flex flex-col">
      <form
        className="flex w-full flex-col justify-center gap-3 px-8 sm:w-[30rem]"
        onSubmit={handleSubmit}
      >
        <InputField
          label="GitHub Repo Link"
          value={inputRepositoryUrl}
          onChange={(e) => setInputRepositoryUrl(e.target.value)}
          errorMessage={errorMessage}
        />
        <ActionButton text="Get going &rarr;" onClick={() => {}} />
      </form>
      <div className="text-sm text-gray-500 dark:text-gray-500">
        Currently API point set at:{" "}
        <a
          href={baseUrl}
          className="font-bold text-blue-400 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {baseUrl}
        </a>
        . Wrong Url?{" "}
        <a
          className="cursor-pointer font-bold text-blue-400 underline"
          onClick={() => store.dispatch(showUrlQuery(true))}
        >
          Change it
        </a>
      </div>
    </div>
  );
};

export default HomeForm;
