import ButtonsGroup from "@/components/homePage/ButtonsGroup";
import CategoryDropdown from "@/components/homePage/CategoryDropdown";
import SearchBar from "@/components/homePage/SearchBar";
import SortDropdown from "@/components/homePage/SortDropdown";
import TodosList from "@/components/homePage/TodosList";

export default function Home() {
  return (
    <>
      <SearchBar />
      <div className="flex gap-8">
        <SortDropdown />
        <CategoryDropdown />
      </div>
      <TodosList status="pending" />
      <TodosList status="completed" />
      <ButtonsGroup />
    </>
  );
}
