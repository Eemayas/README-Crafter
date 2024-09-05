/** @format */

const InputField = ({
  label,
  value,
  onChange,
  errorMessage,
}: {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
}) => (
  <div>
    <label
      htmlFor="github-repo-link"
      className={`mb-2 block text-sm font-medium ${
        errorMessage
          ? "text-red-700 dark:text-red-500"
          : "text-gray-900 dark:text-white"
      }`}
    >
      {label}
    </label>
    <input
      type="text"
      id="github-repo-link"
      value={value}
      onChange={onChange}
      className={`${errorMessage ? "bg-red-50" : "bg-gray-50"} border ${
        errorMessage
          ? "border-red-500 text-red-900 placeholder-red-700"
          : "border-gray-300 text-gray-900 placeholder-gray-500"
      } rounded-lg text-sm focus:ring-${
        errorMessage ? "red-500" : "blue-500"
      } dark:bg-gray-700 focus:border-${
        errorMessage ? "red-500" : "blue-500"
      } block w-full p-2.5 dark:text-${
        errorMessage ? "red-500" : "gray-300"
      } dark:placeholder-${errorMessage ? "red-500" : "gray-500"} dark:border-${
        errorMessage ? "red-500" : "gray-600"
      }`}
      placeholder="https://github.com/"
    />
    {errorMessage && (
      <p className="mt-2 text-sm text-red-600 dark:text-red-500">
        <span className="font-medium">{errorMessage}</span>
      </p>
    )}
  </div>
);
export default InputField;
