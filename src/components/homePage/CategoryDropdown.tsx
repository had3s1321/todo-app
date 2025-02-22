"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon } from "lucide-react";

const CategoryDropdown = () => {
  const [categories, setCategories] = React.useState<string[]>([]);
  const cat = ["Job", "Sport", "Coding", "Food", "Football", "Walking"];

  const isChecked = (value: string) => {
    if (categories.includes(value)) return true;
    return false;
  };

  const handleCheck = (value: string) => {
    if (categories.includes(value)) {
      const newList = categories.filter((category) => category !== value);
      setCategories(newList);
    } else {
      const newList = [...categories, value];
      setCategories(newList);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="dropdown" size="dropdown">
          {"Category"}
          <ChevronDownIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[180px]">
        {cat.map((category, i) => {
          const checked = isChecked(category);
          return (
            <React.Fragment key={category}>
              <DropdownMenuCheckboxItem
                onSelect={(e) => e.preventDefault()}
                checked={checked}
                onCheckedChange={() => handleCheck(category)}
                className="text-[12px]"
              >
                {category}
              </DropdownMenuCheckboxItem>
              {i !== cat.length - 1 && <DropdownMenuSeparator />}
            </React.Fragment>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CategoryDropdown;
