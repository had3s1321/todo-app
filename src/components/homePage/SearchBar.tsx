"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ArrowRightIcon, SearchIcon } from "../ui/icons";
import { Input } from "../ui/input";
import { useAppDispatch } from "@/lib/hooks";
import { useDebounce } from "@/hooks/useDebounce";
import { changeFilterValue } from "@/lib/features/options/optionsSlice";

const SearchBar = () => {
  const [value, setValue] = useState<string>("");
  const dispatch = useAppDispatch();
  const debounceValue = useDebounce(value, 1000);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    dispatch(changeFilterValue(value));
  }, [debounceValue]); // eslint-disable-line

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
