/** @format */

// components/HomeForm.tsx
import React, { useState } from "react";
import InputField from "@/components/InputField";
import ActionButton from "@/components/ActionButton";
import { useRepoData } from "../hooks/useRepoData";
import { showSpinner } from "@/components/Modals/store/ModalReducer";
import store from "@/app/store";
import { useRouter } from "next/navigation";

const HomeForm = () => {
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
  );
};

export default HomeForm;
