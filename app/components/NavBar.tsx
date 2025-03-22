import { Link } from "@remix-run/react";
import { IoMenu } from "react-icons/io5";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "~/components/ui/drawer";
import { Button } from "~/components/ui/button";
import DarkModeToggler from "~/components/dark-mode-toggler";
import { FiFileText } from "react-icons/fi";

const navLinks = [
  { href: "/", name: "Home" },
  { href: "/projects", name: "Projects" },
  { href: "/blogs", name: "Blogs" },
];

export default function NavBar() {
  return (
    <div className="flex flex-row justify-between items-center md:px-3 py-2 mx-3 uppercase">
      <Link to="/" className="flex flex-row gap-1 md:gap-2 items-center">
        <div className="md:text-md font-semibold px-4 py-1 border shadow-sm hover:shadow-md hover:shadow-zinc-500 shadow-zinc-500 dark:shadow-none dark:hover:border-zinc-600 duration-150 dark:bg-zinc-900 rounded-md">BlueSalt</div>
      </Link>

      {/* Desktop Navigation Links */}
      {/* <div className="hidden md:flex flex-row gap-0">
        {navLinks.map((link) => (
          <Link key={link.href} to={link.href}>
            <Button variant="ghost" className="font-semibold text-[11px] uppercase">
              {link.name}
            </Button>
          </Link>
        ))}
      </div> */}

      {/* Mobile Drawer Menu */}
      <div className="flex items-center md:gap-3 gap-2">
        <div className="md:hidden">
          <Drawer>
            <DrawerTrigger asChild>
              <button className="flex items-center text-2xl shadow-sm hover:shadow-zinc-400 dark:shadow-none hover:shadow-md shadow-zinc-400 dark:bg-zinc-900 p-1 rounded-md dark:hover:bg-zinc-800 duration-150">
                <IoMenu />
              </button>
            </DrawerTrigger>
            <DrawerContent>
              <div className="mx-auto w-full max-w-sm">
                <div className="p-4">
                  <div className="flex flex-col space-y-4">
                    {navLinks.map((link) => (
                      <Link key={link.href} to={link.href}>
                        <Button variant="ghost" className="w-full text-left font-semibold uppercase text-xs">
                          {link.name}
                        </Button>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>

        {/* Dark Mode Toggle */}
        <a href="/Aaditya_Pandagle_Resume.pdf" download="Aaditya_Pandagle_Resume.pdf">
          <button className="shadow-sm hover:shadow-zinc-400 dark:shadow-none hover:shadow-md shadow-zinc-400 p-2 rounded-md duration-150 dark:bg-zinc-900">
            <FiFileText />
          </button>
        </a>
        <DarkModeToggler />
      </div>
    </div>
  );
}
