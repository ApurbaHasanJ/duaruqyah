import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

export default function Home() {
  const catName = encodeURIComponent("dua's-importance");
  const catId = "1";
  return (
    <main className="h-screen flex justify-center items-center">
      <Link
        href={`/duas/${catName}?cat=${catId}`}
        className="bg-primary">
        <button className="flex gap-3 items-center">
          <span>Go To Dua&apos;s Page</span>
          <FaChevronRight className="animate-pulse" />
        </button>
      </Link>
    </main>
  );
}
