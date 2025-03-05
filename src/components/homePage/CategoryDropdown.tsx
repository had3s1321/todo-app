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
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { changeCategories } from "@/lib/features/options/optionsSlice";

const CategoryDropdown = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todos);
  const selectedCategories = useAppSelector(
    (state) => state.options.selectedCategories,
  );
  const tags = todos.map((todo) => todo.tags.map((tag) => tag.name));
  const categories = [...new Set(tags.flat(1))];

  const isChecked = (value: string) => {
    if (selectedCategories.includes(value)) return true;
    return false;
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
        {categories.map((category, i) => {
          const checked = isChecked(category);
          return (
            <React.Fragment key={category}>
              <DropdownMenuCheckboxItem
                onSelect={(e) => e.preventDefault()}
                checked={checked}
                onCheckedChange={() => dispatch(changeCategories(category))}
                className="text-[12px]"
              >
                {category}
              </DropdownMenuCheckboxItem>
              {i !== categories.length - 1 && <DropdownMenuSeparator />}
            </React.Fragment>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CategoryDropdown;
