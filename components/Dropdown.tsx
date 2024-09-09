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
        className={`text-text-light dark:text-text-dark mb-2 block text-sm font-medium`}
      >
        {label}
      </label>


      <select
        id="dropdown"
        value={selectedOption}
        onChange={handleSelect}
        className={`dark:text-text-dark text-text-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm placeholder-gray-500 focus:border-blue-500 focus:ring-blue-50 dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-500`}
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
