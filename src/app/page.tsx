import CategoryDropdown from "@/components/homePage/CategoryDropdown";
import SearchBar from "@/components/homePage/SearchBar";
import SortDropdown from "@/components/homePage/SortDropdown";
import TodosList from "@/components/homePage/TodosList";
import { PlusIcon } from "@/components/ui/icons";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <SearchBar />
      <div className="flex gap-8">
        <SortDropdown />
        <CategoryDropdown />
      </div>
      <TodosList status="pending" />
      <h3>Completed:</h3>
      <TodosList status="completed" />
      <Link
        href="/add-task"
        className="mx-auto flex gap-2 rounded-[30px] bg-[var(--custom-primary)] p-4 text-[18px] text-white"
      >
        <PlusIcon />
        <p className="hover:cursor-pointer">Add new Task</p>
      </Link>
    </>
  );
}
