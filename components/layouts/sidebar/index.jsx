import clsx from "clsx";

import Icon from "@components/ui/Icon";
import Link from "@components/ui/Link";
import Typography from "@components/ui/Typography";
import Button from "@components/ui/Button";

import Box from "@components/layouts/Box";
import Flex from "@components/layouts/Flex";

const contactItems = [{
  id: 1,
  link: {
    path: "",
    text: "richard@example.com"
  },
  label: "Email",
  iconName: "Mail",
}, {
  id: 2,
  link: {
    path: "",
    text: "+1 (213) 352-2795"
  },
  label: "Phone",
  iconName: "Phone"
}, {
  id: 3,
  link: {
    path: "/",
    text: "June 23, 1982"
  },
  label: "Birthday",
  iconName: "Calendar",
}, {
  id: 4,
  link: {
    path: "/",
    text: "Sacramento, California, USA"
  },
  label: "Location",
  iconName: "Pin",
}]

function Info() {
  return (
    <Box
      className={clsx(
        "flex-shrink-0",
        "flex xl:flex-col",
        "gap-4 sm:gap-8",
        "items-center",
        "xl:py-8",
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
          src="https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/my-avatar.png"
          alt="Mahim Farhad"
          className="w-20 sm:w-28 xl:w-32"
        />
      </figure>

      <Box className="space-y-2 lg:text-center">
        <Typography
          type="h5"
          title="Mahim Farhad"
          className="-mt-1.5 text-base sm:text-xl font-medium capitalize"
        >
          Farhad Al Rashid
        </Typography>

        <Typography
          className={clsx(
            "inline-block",
            "h-6",
            "px-4 py-0.5",
            "text-xs leading-[21px]",
            "text-white bg-white/5",
            "rounded-md uppercase"
          )}
        >
          Programmer
        </Typography>
      </Box>

      <Button
        size="sm"
        iconOnly
        className="service-item absolute top-0 -right-px rounded-none rounded-bl-xl xl:hidden"
      >
        <Icon name="ChevronDown" />
      </Button>
    </Box>
  );
}

function Contacts() {
  return (
    <Box className="my-auto">
      <ul className="space-y-4">
        {contactItems?.map((contactItem) => (
          <li
            key={contactItem?.id}
            className={clsx(
              "flex gap-4",
              "items-center",
            )}
          >
            <div
              className={clsx(
                "relative",
                "w-12 h-12",
                "p-3",
                "text-center",
                "bg-[#202022] rounded-lg service-item",
              )}
            >
              <Icon name={contactItem?.iconName} className="text-primary" />
            </div>

            <div>
              <Typography
                className="text-xs uppercase text-white/50"
              >
                {contactItem?.label}
              </Typography>

              <a href="mailto:richard@example.com" className="text-sm">
                {contactItem?.link['text']}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </Box>
  );
}

function Socials() {
  return (
    <Box className="flex-shrink-0">
      <ul class="flex gap-4 justify-center">
        <li>
          <Button
            iconOnly
            size="sm"
            variant="text"
            asChild
            className="text-white"
          >
            <a href="#">
              <Icon name="Facebook" />
            </a>
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
            <a href="#">
              <Icon name="Twitter" />
            </a>
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
            <a href="#">
              <Icon name="Instagram" />
            </a>
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
            <a href="#">
              <Icon name="Dribbble" />
            </a>
          </Button>
        </li>
      </ul>
    </Box>
  )
}

function Sidebar() {
  return (
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
      <Info />

      <Separator className="my-4 sm:my-8" />

      <Contacts />

      <Separator className="my-4 sm:my-8" />

      <Socials />
    </aside>
  );
}

export default Sidebar;
