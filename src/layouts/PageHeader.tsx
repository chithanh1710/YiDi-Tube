import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { useEffect, useRef, useState } from "react";
import { useSideBarContext } from "../contexts/SideBarContexts";

export default function PageHeader() {
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchIconRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Element;
      if (!searchInputRef.current || !searchIconRef.current) return;

      if (
        !searchInputRef.current.contains(target) &&
        !searchIconRef.current.contains(target.closest("button"))
      ) {
        setShowFullWidthSearch(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    showFullWidthSearch && searchInputRef.current?.focus();
  }, [showFullWidthSearch]);

  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 px-6">
      <PageHeaderFirstSection showFullWidthSearch={showFullWidthSearch} />
      <form
        className={`${
          showFullWidthSearch ? "flex" : "hidden md:flex"
        } gap-4 flex-grow justify-center`}
      >
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className={`flex-shrink-0 ${
            !showFullWidthSearch ? "hidden" : "md:hidden flex "
          }`}
          onClick={(e) => {
            e.preventDefault();
            setShowFullWidthSearch(false);
          }}
        >
          <ArrowLeft />
        </Button>

        <div className="flex flex-grow max-w-[600px]">
          <input
            onFocus={() => {
              setShowFullWidthSearch(true);
            }}
            ref={searchInputRef}
            type="search"
            placeholder="Search"
            className="rounded-l-full outline-none border border-secondary-border  shadow-inner shadow-secondary py-1 px-4 text-xl w-full focus:border-blue-500"
          />
          <Button className="rounded-r-full py-1 px-4 flex-shrink-0 border border-l-0 border-secondary-border shadow-inner shadow-secondary  ">
            <Search />
          </Button>
        </div>
        <Button type="button" size="icon" className="flex-shrink-0">
          <Mic />
        </Button>
      </form>

      <div
        className={`flex-shrink-0 justify-center items-center md:gap-2 ${
          showFullWidthSearch ? "md:flex hidden" : "flex"
        }`}
      >
        <Button
          ref={searchIconRef}
          type="button"
          size="icon"
          variant="ghost"
          className="md:hidden"
          onClick={(e) => {
            e.preventDefault();
            setShowFullWidthSearch(true);
          }}
        >
          <Search />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="md:hidden flex-shrink-0"
        >
          <Mic />
        </Button>
        <Button size="icon" variant="ghost">
          <Upload />
        </Button>
        <Button size="icon" variant="ghost">
          <Bell />
        </Button>
        <Button size="icon" variant="ghost">
          <User />
        </Button>
      </div>
    </div>
  );
}

type PageHeaderFirstSectionProps = {
  showFullWidthSearch?: boolean;
};

export function PageHeaderFirstSection({
  showFullWidthSearch,
}: PageHeaderFirstSectionProps) {
  const { toggle } = useSideBarContext();
  return (
    <div
      className={`${
        showFullWidthSearch ? "md:flex hidden" : "flex"
      } gap-4 justify-center items-center flex-shrink-0`}
    >
      <Button onClick={toggle} variant="ghost" size="icon">
        <Menu />
      </Button>
      <Link className="text-2xl" to="/">
        🍿<span className="roboto-bold">YidiTube</span>
      </Link>
    </div>
  );
}
