import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

interface DropdownProps {
  placeholder?: string; // Custom placeholder for the dropdown
  label?: string; // Label for the dropdown
  value?: string; // Controlled value for the dropdown
  onClick?: () => void; // Callback for the onClick event
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void; // Callback for the onChange event
  onSelect?: (country: string) => void; // Callback for when a country is selected
}

const Dropdown_33: React.FC<DropdownProps> = ({
  placeholder = "Select Country",
  label = "Country",
  value = "",
  onClick,
  onChange,
  onSelect,
}) => {
  const [countries, setCountries] = useState<string[]>([]);

  useEffect(() => {
    const loadCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        const countryList = data.map((country: any) => country.name.common).sort();
        setCountries(countryList);
      } catch (error) {
        console.error("Failed to fetch countries:", error);
      }
    };
    loadCountries();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCountry = e.target.value;
    if (onChange) onChange(e);
    if (onSelect) onSelect(selectedCountry);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-4"
    >
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <select
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        value={value}
        onClick={onClick}
        onChange={handleChange}
      >
        <option value="">{placeholder}</option>
        {countries.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </select>
    </motion.div>
  );
};

export default Dropdown_33;
