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

const SortDropdown = () => {
  const [sortOption, setSortOption] = useState("Default");
  const sortOptions = [
    "Default",
    "Ascending Date",
    "Descending Date",
    "Ascending Complexity",
    "Descending Complexity",
    "Ascending Priority",
    "Descending Priority",
  ];

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
          {sortOptions.map((option, i) => (
            <React.Fragment key={option}>
              <DropdownMenuRadioItem value={option} className="text-[12px]">
                {option}
              </DropdownMenuRadioItem>
              {i !== sortOptions.length - 1 && <DropdownMenuSeparator />}
            </React.Fragment>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
//combo-box
//dropdown menu
//radio group
//select
export default SortDropdown;
