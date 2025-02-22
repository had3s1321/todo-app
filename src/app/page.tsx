import CategoryDropdown from "@/components/homePage/CategoryDropdown";
import SearchBar from "@/components/homePage/SearchBar";
import SortDropdown from "@/components/homePage/SortDropdown";
import TodosList from "@/components/homePage/TodosList";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@/components/ui/icons";

export default function Home() {
  return (
    <>
      <SearchBar />
      <div className="flex gap-8">
        <SortDropdown />
        <CategoryDropdown />
      </div>
      <TodosList />
      <Button
        variant="action"
        size="xlCustom"
        className="mx-auto text-[18px] text-white"
      >
        <PlusIcon />
        {"Add new Task"}
      </Button>
    </>
  );
}
