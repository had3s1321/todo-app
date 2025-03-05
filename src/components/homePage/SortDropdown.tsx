"use client";

import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { ChevronDownIcon } from "../ui/icons";
import { sortingOptions } from "@/utils/selectSortingOption";

const SortDropdown = () => {
  const [sortOption, setSortOption] = useState("Default");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="dropdown" size="dropdown">
          {"Sort"}
          <ChevronDownIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-full">
        <DropdownMenuRadioGroup
          value={sortOption}
          onValueChange={setSortOption}
        >
          {sortingOptions.map((option, i) => (
            <React.Fragment key={option}>
              <DropdownMenuRadioItem
                value={option}
                className="text-[12px]"
                onSelect={(e) => e.preventDefault()}
              >
                {option}
              </DropdownMenuRadioItem>
              {i !== sortingOptions.length - 1 && <DropdownMenuSeparator />}
            </React.Fragment>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SortDropdown;
