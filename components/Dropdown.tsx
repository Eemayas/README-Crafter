/** @format */
import { useState } from "react";

interface DropdownFieldProps {
  label: string;
  options: string[];
  onChange: (selectedOption: string) => void; // Callback when the value changes
  className?: string;
}

const DropdownField: React.FC<DropdownFieldProps> = ({
  label,
  options,
  onChange,
  className,
}) => {
  const [selectedOption, setSelectedOption] = useState<string>(options[0]);

  // Handles selection change
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
    onChange(selectedValue); // Pass selected value back to the parent component
  };

  return (
    <div className={`${className}`}>
      <label
        htmlFor="dropdown"
        className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white `}
      >
        {label}
      </label>
      <select
        id="dropdown"
        value={selectedOption}
        onChange={handleSelect}
        className={`bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 text-sm rounded-lg focus:ring-blue-50 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:text-gray-300 dark:placeholder-gray-500 dark:border-gray-600`}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownField;
