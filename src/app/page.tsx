import SearchBar from "@/components/homePage/SearchBar";
import SortDropdown from "@/components/homePage/SortDropdown";

export default function Home() {
  return (
    <>
      <SearchBar />
      <div className="flex w-full gap-8">
        <SortDropdown />
        <SortDropdown />
      </div>
    </>
  );
}
