/** @format */

// components/HomeForm.tsx
import React from "react";
import InputField from "@/components/InputField";
import ActionButton from "@/components/ActionButton";

interface HomeFormProps {
  inputRepositoryUrl: string;
  setInputRepositoryUrl: React.Dispatch<React.SetStateAction<string>>;
  errorMessage: string;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const HomeForm: React.FC<HomeFormProps> = ({
  inputRepositoryUrl,
  setInputRepositoryUrl,
  errorMessage,
  handleSubmit,
}) => (
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

export default HomeForm;
