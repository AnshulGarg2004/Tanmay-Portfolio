"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Problem", href: "/problem" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-4 inset-x-0 z-50 flex justify-center">
      <div className="flex items-center gap-6 px-6 py-3 rounded-xl backdrop-blur-lg bg-[#0f172a]/80 shadow-lg border border-slate-700/30">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm md:text-base font-medium transition-colors duration-300",
                isActive
                  ? "text-blue-400"
                  : "text-slate-300 hover:text-white hover:underline"
              )}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
