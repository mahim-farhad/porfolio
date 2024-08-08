import clsx from "clsx";

import Typography from "@components/ui/Typography";

import Box from "@components/layouts/Box";

function Footer() {
  return (
    <footer
      className={clsx(
        "z-10 absolute right-auto bottom-0 left-0",
        "flex items-center justify-center",
        "w-max h-16 px-8 overflow-hidden",
        "bg-white/5",
        "border border-[var(--jet)]",
        "rounded-none rounded-tr-3xl rounded-bl-3xl",
        "transition-all duration-300 ease-in-out"
      )}
    >
      <Box
        className={clsx(
          "grid",
          "grid-cols-1",
          "items-center",
          "xl:h-16",
        )}
      >
        <Box
          className={clsx(
            "col-span-1",
          )}
        >
          <Typography
            type="h6"
            className={clsx(
              "!text-sm",
              "font-normal",
              "text-center xl:text-start",
            )}
          >
            Copyright
            © {new Date().getFullYear()}, {" "}
            Mahim Farhad
          </Typography>
        </Box>
      </Box>
    </footer>
  );
}

export default Footer;
