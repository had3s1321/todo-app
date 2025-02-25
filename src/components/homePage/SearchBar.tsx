"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { ArrowRightIcon, SearchIcon } from "../ui/icons";
import { Input } from "../ui/input";

const SearchBar = () => {
  const [value, setValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <div className="relative w-full [&>svg]:absolute [&>svg]:left-0 [&>svg]:top-0 [&>svg]:ml-3 [&>svg]:mt-[20px]">
      <Input
        searchBar
        placeholder="Search..."
        value={value}
        onChange={handleChange}
      />
      <SearchIcon />
      <Button
        variant="round"
        size="noCustom"
        className="absolute right-0 top-0 mr-3 mt-3"
      >
        <ArrowRightIcon />
      </Button>
    </div>
  );
};

export default SearchBar;
