import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="flex relative z-30 py-5 justify-between mx-auto">
      <Link href="/">
        <Image src="/logo.png" alt="Resteferme logo" width={52} height={100} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="cursor-pointer font-normal pb-1.5 transition-all hover:font-medium"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="flex">
        <button
          className="shadow-md rounded-full w-full text-center bg-primary mx-auto px-4 cursor-pointer text-white font-medium hover:bg-primary/80 m inline-flex items-center gap-8"
          type="button"
        >
          Say hi!
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
