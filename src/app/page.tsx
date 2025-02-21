import CategoryDropdown from "@/components/homePage/CategoryDropdown";
import SearchBar from "@/components/homePage/SearchBar";
import SortDropdown from "@/components/homePage/SortDropdown";

export default function Home() {
  return (
    <>
      <SearchBar />
      <div className="flex gap-8">
        <SortDropdown />
        <CategoryDropdown />
      </div>
    </>
  );
}
