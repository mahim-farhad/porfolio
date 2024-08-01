"use client";

import { useState } from "react";

import {
  m,
  LazyMotion,
  domAnimation
} from "framer-motion";

import clsx from "clsx";

import useWindowSize from "@hooks/useWindowSize";

import Icon from "@components/ui/Icon";
import Separator from "@components/ui/Separator";
import Link from "@components/ui/Link";
import Typography from "@components/ui/Typography";
import Button from "@components/ui/Button";

import Box from "@components/layouts/Box";

const contactItems = [{
  id: 1,
  link: {
    path: "mailto:mahim.connect@gmail.com",
    text: "mahim.connect@gmail.com"
  },
  label: "Email",
  iconName: "Mail"
}, {
  id: 2,
  link: {
    path: "tel:+880134717081",
    text: "+880-134-717081"
  },
  label: "Phone",
  iconName: "Phone"
}, {
  id: 3,
  link: {
    path: "/",
    text: "February 20, 1999"
  },
  label: "Birthday",
  iconName: "Calendar"
}, {
  id: 4,
  link: {
    path: "/",
    text: "Chattogram, BD"
  },
  label: "Location",
  iconName: "Pin"
}];

function Info({ open, setOpen }) {
  return (
    <Box
      className={clsx(
        "flex",
        "xl:flex-col",
        "gap-4 sm:gap-8",
        "items-center xl:items-start",
      )}
    >
      <figure
        className={clsx(
          "overflow-hidden",
          "dark:bg-white/10",
          "rounded-xl"
        )}
      >
        <img
          src="https://i.ibb.co/9ZCM9dt/file-1.png"
          alt="Mahim Farhad"
          className={clsx(
            "translate-y-3",
            "w-24 sm:w-36 xl:w-full",
            "object-cover"
          )}
        />
      </figure>

      <Box
        className={clsx(
          "w-full",
          "space-y-1 sm:space-y-4"
        )}
      >
        <Typography
          type="h5"
          title="Mahim Farhad"
          className={clsx(
            "-mt-1.5",
            "font-sans text-base sm:text-2xl",
            "font-medium capitalize"
          )}
        >
          Farhad Rashid
        </Typography>

        <span
          className={clsx(
            "inline-block",
            "h-6 py-0.5 px-2.5",
            "font-mono text-xs leading-[21px] uppercase",
            "text-primary bg-white/5",
            "rounded-md"
          )}
        >
          {"<Programmer />"}
        </span>
      </Box>

      <Button
        className={clsx(
          "absolute",
          "top-0 right-0",
          "xl:hidden",
          "w-10 sm:w-auto",
          "h-10",
          "max-sm:p-2.5",
          "text-xs",
          "rounded-none rounded-bl-xl",
          "service-item",
        )}
        onClick={() => setOpen(!open)}
      >
        <span className="hidden sm:block">Show Contacts</span>
        <Icon
          name="ChevronDown"
          className="block sm:hidden"
        />
      </Button>
    </Box>
  );
}

function Contacts() {
  return (
    <Box className="my-auto">
      <ul
        className={clsx(
          "flex flex-wrap",
          "gap-y-4",
          "flex-col sm:flex-row xl:flex-col"
        )}
      >
        {contactItems?.map((contactItem) => (
          <li
            key={contactItem?.id}
            className={clsx(
              "flex",
              "flex-nowrap",
              "gap-x-4",
              "items-center",
              "sm:w-1/2 xl:w-full",
            )}
          >
            <div
              className={clsx(
                "flex-shrink-0",
                "relative",
                "w-12 h-12 p-3",
                "text-center bg-[#202022]",
                "rounded-lg",
                "service-item",
              )}
            >
              <Icon
                name={contactItem?.iconName}
                className="text-primary"
              />
            </div>

            <div className="w-[calc(100%-4rem)]">
              <Typography
                className={clsx(
                  "text-xs uppercase",
                  "text-white/50"
                )}
              >
                {contactItem?.label}
              </Typography>

              <Link
                href={contactItem?.link['path']}
                className={clsx(
                  "overflow-hidden",
                  "text-sm text-ellipsis whitespace-nowrap",
                )}
              >
                {contactItem?.link['text']}
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </Box>
  );
}

function Socials() {
  return (
    <Box>
      <ul className="flex gap-4 xl:justify-center">
        <li>
          <Button
            iconOnly
            size="sm"
            variant="text"
            asChild
            className="text-white"
          >
            <Link href="#" title="facebook">
              <Icon name="Facebook" />
            </Link>
          </Button>
        </li>

        <li>
          <Button
            iconOnly
            size="sm"
            variant="text"
            asChild
            className="text-white"
          >
            <Link href="/#" title="twitter">
              <Icon name="Twitter" />
            </Link>
          </Button>
        </li>

        <li>
          <Button
            iconOnly
            size="sm"
            variant="text"
            asChild
            className="text-white"
          >
            <Link href="#" title="instagram">
              <Icon name="Instagram" />
            </Link>
          </Button>
        </li>

        <li>
          <Button
            iconOnly
            size="sm"
            variant="text"
            asChild
            className="text-white"
          >
            <Link href="#" title="dribbble">
              <Icon name="Dribbble" />
            </Link>
          </Button>
        </li>
      </ul>
    </Box>
  );
}

function Aside() {
  const [open, setOpen] = useState(false);

  const windowSize = useWindowSize();

  const animate = {
    height: windowSize < 1240 ? open ? "auto" : 0 : "auto",
    opacity: windowSize < 1240 ? open ? 1 : 0 : 1,
    transition: {
      type: "tween"
    }
  };

  return (
    <LazyMotion features={domAnimation} strict>
      <aside
        className={clsx(
          "z-10",
          "relative xl:sticky",
          "xl:top-16",
          "flex",
          "flex-col",
          "xl:h-[calc(100vh-8rem)]",
          "p-4 sm:p-8",
          "overflow-hidden",
          "bg-surface-light dark:bg-surface-dark",
          "border border-[#383838]",
          "rounded-3xl",
          "transition-[var(--transition-1)]"
        )}
      >
        <Info open={open} setOpen={setOpen} />

        <m.div
          initial={{ height: 0, opacity: 1 }}
          animate={animate}
          exit={{ height: 0, opacity: 1 }}
          className={clsx(
            "xl:flex-1 flex flex-col",
          )}
        >
          <Separator className="my-4 sm:my-8" />

          <Contacts />

          <Separator className="my-4 sm:my-8" />

          <Socials />
        </m.div>
      </aside>
    </LazyMotion>
  );
}

export default Aside;
