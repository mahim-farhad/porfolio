import clsx from "clsx";

import Link from "@components/ui/Link";

function Navbar() {
  return (
    <nav
      className={clsx(
        "z-10 fixed xl:absolute",
        "top-auto xl:top-0 xl:right-0",
        "bottom-0 xl:bottom-auto left-0 xl:left-auto",
        "flex items-center justify-center",
        "w-full xl:w-max h-16 px-8 overflow-hidden",
        "bg-white/5",
        "border border-[var(--jet)]",
        "rounded-none xl:rounded-bl-3xl xl:rounded-tr-3xl",
        "transition-all duration-300 ease-in-out"
      )}
    >
      <ul
        className={clsx(
          "flex items-center justify-center",
          "gap-4",
          "p-0 m-0"
        )}
      >
        <li>
          <Link
            href="/"
            className={clsx(
              "p-4",
              "text-sm font-medium uppercase",
              "hover:text-primary",
              "transition-all duration-300 ease-in-out"
            )}
          >
            About
          </Link>
        </li>

        <li>
          <Link
            href="/resume"
            className={clsx(
              "p-4",
              "text-sm font-medium uppercase",
              "hover:text-primary",
              "transition-all duration-300 ease-in-out"
            )}
          >
            Resume
          </Link>
        </li>

        <li>
          <Link
            href="/portfolio"
            className={clsx(
              "p-4",
              "text-sm font-medium uppercase",
              "hover:text-primary",
              "transition-all duration-300 ease-in-out"
            )}
          >
            Portfolio
          </Link>
        </li>

        <li>
          <Link
            href="/blog"
            className={clsx(
              "p-4",
              "text-sm font-medium uppercase",
              "hover:text-primary",
              "transition-all duration-300 ease-in-out"
            )}
          >
            Blog
          </Link>
        </li>

        <li>
          <Link
            href="/contact"
            className={clsx(
              "p-4",
              "text-sm font-medium uppercase",
              "hover:text-primary",
              "transition-all duration-300 ease-in-out"
            )}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
