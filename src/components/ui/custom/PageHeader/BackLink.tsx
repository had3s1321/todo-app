import Link from "next/link";
import { ArrowLeftIcon } from "../../icons";

const BackLink = () => {
  return (
    <Link
      href="/"
      className="absolute left-0 top-0 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--custom-light)]"
    >
      <ArrowLeftIcon />
    </Link>
  );
};

export default BackLink;
