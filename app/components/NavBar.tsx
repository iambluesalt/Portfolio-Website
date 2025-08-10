import { Link, NavLink } from "@remix-run/react";
import { IoMenu } from "react-icons/io5";
import { Drawer, DrawerContent, DrawerTrigger } from "~/components/ui/drawer";
import DarkModeToggler from "~/components/dark-mode-toggler";
import { FiFileText } from "react-icons/fi";
import { useState } from "react";

const navLinks = [
  { href: "/", name: "Home" },
  { href: "/about", name: "About" },
  { href: "/projects", name: "Projects" },
  { href: "/blogs", name: "Blogs" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 inset-x-0 z-50 pt-3 px-4 md:px-6">
      <div className="mx-auto max-w-7xl">
  <div className="flex h-14 md:h-16 items-center justify-between rounded-xl bg-white dark:bg-zinc-900 shadow-sm px-4 md:px-6">
          <Link to="/" className="font-semibold tracking-tight text-sm md:text-base">fudge<span className="text-zinc-400">.</span>fantastic</Link>
          <div className="hidden md:flex items-center gap-1 text-[13px]">
            {navLinks.map(l => (
              <NavLink key={l.href} to={l.href} className={({isActive}) => `px-3 py-1.5 rounded-md font-medium transition text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 ${isActive? 'text-zinc-900 dark:text-zinc-100': ''}`}>{l.name}</NavLink>
            ))}
          </div>
          <div className="flex items-center gap-3">
            {/* Resume icon and text for all screen sizes, hidden in drawer */}
            <a href="/Aaditya_Pandagle_Resume.pdf" download className="inline-flex md:inline-flex items-center gap-1 text-[12px] font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 md:mr-0 mr-2">
              <FiFileText className="text-[16px]" />
            </a>
            <DarkModeToggler />
            <div className="md:hidden">
              <Drawer open={open} onOpenChange={setOpen}>
                <DrawerTrigger asChild>
                  <button
                    className="flex items-center text-2xl p-1 outline-none bg-transparent shadow-none hover:shadow-none focus:ring-0"
                    style={{ background: 'none' }}
                  >
                    <IoMenu />
                  </button>
                </DrawerTrigger>
                <DrawerContent>
                  <div className="mx-auto w-full max-w-sm p-4">
                    <div className="flex flex-col space-y-1">
                      {navLinks.map(link => (
                        <NavLink key={link.href} to={link.href} onClick={() => setOpen(false)} className={({isActive}) => `w-full text-center px-3 py-2 rounded-md font-medium text-sm ${isActive? 'bg-zinc-200/60 dark:bg-zinc-800/60': 'hover:bg-zinc-200/40 dark:hover:bg-zinc-800/40'}`}>{link.name}</NavLink>
                      ))}
                      {/* Resume button removed from mobile drawer as requested */}
                    </div>
                  </div>
                </DrawerContent>
              </Drawer>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
