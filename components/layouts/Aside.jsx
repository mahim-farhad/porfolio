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
    text: "+880 1634 717081"
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
    text: "Mohra, Chattogram, BD"
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
        "xl:h-full",
      )}
    >
      <Box
        className={clsx(
          "max-xl:flex-shrink-0",
          "w-20 sm:w-24 xl:w-full",
          "h-20 sm:h-24 xl:h-full",
          "overflow-hidden",
          "dark:bg-white/10",
          "bg-[url('https://i.pinimg.com/originals/f0/19/0e/f0190e4bac7a39672da2439f48d1e0f2.jpg')]",
          "bg-no-repeat bg-bottom bg-cover",
          "rounded-xl"
        )}
      />

      <Box
        className={clsx(
          "w-full",
          "space-y-2 sm:space-y-4"
        )}
      >
        <Typography
          type="h5"
          title="Mahim Farhad"
          className={clsx(
            "-mt-1.5",
            "font-sans text-lg sm:!text-xl",
            "font-normal capitalize"
          )}
        >
          Farhad Al Rashid
        </Typography>

        <span
          className={clsx(
            "inline-block",
            "py-0.5 px-2.5",
            "font-mono text-xs leading-[21px]",
            "font-medium uppercase",
            "text-primary bg-white/10",
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
          "border-0 rounded-none rounded-bl-xl",
          "service-item"
        )}
        onClick={() => setOpen(!open)}
      >
        <span className="hidden sm:block">{open ? "Hide" : "Show"} Contacts</span>
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
    <ul
      className={clsx(
        "flex flex-wrap",
        "gap-y-4 sm:gap-y-8",
        "flex-col sm:flex-row xl:flex-col"
      )}
    >
      {contactItems?.map((contactItem) => (
        <li
          key={contactItem?.id}
          className={clsx(
            "flex flex-nowrap",
            "gap-x-4 items-center",
            "sm:w-1/2 xl:w-full",
          )}
        >
          <div
            className={clsx(
              "relative",
              "flex items-center justify-center",
              "w-12 h-12 p-3",
              "rounded-xl",
              "service-item",
            )}
          >
            <Icon
              name={contactItem?.iconName}
              className="text-primary"
            />
          </div>

          <div
            className={clsx(
              "w-[calc(100%-4rem)]",
              "space-y-1.5"
            )}
          >
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
  );
}

function Socials() {
  return (
    <ul className="flex gap-4 xl:justify-center">
      <li>
        <Button
          iconOnly
          size="sm"
          variant="text"
          asChild
          className="text-white"
        >
          <Link href="https://facebook.com/mahimfarhad" title="facebook">
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
          <Link href="https://twitter.com/mahimfarhad" title="twitter">
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
          <Link href="https://instagram.com/mahimfarhad" title="instagram">
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
          <Link href="https://dribbble.com/mahimfarhad" title="dribbble">
            <Icon name="Dribbble" />
          </Link>
        </Button>
      </li>
    </ul>
  );
}

function Aside() {
  const [open, setOpen] = useState(false);

  const windowSize = useWindowSize();

  const animate = {
    height: windowSize < 1240 ? (open ? "auto" : 0) : "auto",
    opacity: windowSize < 1240 ? (open ? 1 : 0) : 1,
    transition: {
      type: "tween"
    }
  };

  return (
    <LazyMotion
      features={domAnimation}
      strict
    >
      <aside
        className={clsx(
          "z-10 relative xl:sticky xl:top-16",
          "flex flex-col",
          "xl:h-[calc(100vh-8rem)] p-4 sm:p-8",
          "overflow-hidden",
          "bg-surface-light dark:bg-surface-dark",
          "border border-[var(--jet)]",
          "rounded-3xl",
          "transition-[var(--transition-1)]"
        )}
      >
        <Info open={open} setOpen={setOpen} />

        <m.div
          initial={{ height: 0 }}
          animate={animate}
          exit={{ height: 0 }}
          className={clsx(
            "xl:!h-auto",
            "xl:flex-shrink-0"
          )}
        >
          <Box
            className={clsx(
              "flex flex-col",
            )}
          >
            <Separator
              className={clsx(
                "my-4 sm:my-8"
              )}
            />

            <Contacts />

            <Separator
              className={clsx(
                "my-4 sm:my-8"
              )}
            />

            <Socials />
          </Box>
        </m.div>
      </aside>
    </LazyMotion>
  );
}

export default Aside;
