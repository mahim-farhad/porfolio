import clsx from "clsx";

import { twMerge } from "tailwind-merge";

import getTextfieldVariants from "@styles/variants/textfieldVariants";

function getTextfieldClasses(
  placeholder, size, rounded, isFocused,
  isFilled, isValid, isInvalid,
  disabled
) {
  const isActive = placeholder || isFocused || isFilled;

  const textfieldVariants = getTextfieldVariants(size, isActive);

  if (!textfieldVariants) return null;

  const textfieldClasses = {
    textfieldWrapper: twMerge(clsx(
      "relative flex flex-nowrap items-center justify-between",
      "w-full",
      textfieldVariants.size.textfieldWrapper,
      "border",
      isFocused && !isValid && !isInvalid
        ? "border-primary"
        : !isFocused && isValid && !isInvalid
          ? "border-success"
          : !isFocused && !isValid && isInvalid
            ? "border-error"
            : "border-gray-300",
      rounded ? "rounded-full" : "rounded-md",
      disabled ? "opacity-50" : "opacity-100",
      "transition-all duration-300 ease-in-out"
    )),
    labelWrapper: twMerge(clsx(
      "relative flex items-center",
      "-my-px mr-auto",
      textfieldVariants.size.labelWrapper,
      "after:content-['']",
      "after:z-0 after:absolute after:top-0 after:left-0",
      "after:left-0",
      isActive
        ? "after:scale-x-1 after:opacity-1"
        : "after:scale-x-0 after:opacity-0",
      "after:origin-center",
      "after:w-full after:h-px",
      "after:bg-white",
      "after:transition-all after:duration-300 after:ease-in-out"
    )),
    label: twMerge(clsx(
      "z-10 translate-y-0",
      textfieldVariants.size.label,
      "py-0.5 px-1.5",
      "font-sans leading-[16px] font-medium",
      isFocused && !isValid && !isInvalid
        ? "text-primary"
        : !isFocused && isValid && !isInvalid
          ? "text-success"
          : !isFocused && !isValid && isInvalid
            ? "text-error"
            : "text-gray-400",
      "bg-transparent rounded-sm",
      "transition-all duration-300 ease-in-out"
    )),
    input: twMerge(clsx(
      "z-10 absolute top-0 right-0 bottom-0 left-0",
      textfieldVariants.size.input,
      "-my-px -mx-px",
      "font-sans leading-[21px] font-medium uppercase",
      "whitespace-nowrap appearance-none cursor-pointer",
      "text-gray-400 bg-transparent",
      "outline-none border-px border-transparent",
      rounded ? "rounded-full" : "rounded-lg",
      "disabled:pointer-events-none",
      "disabled:cursor-not-allowed",
      "disabled:opacity-50",
      "transition-all duration-300 ease-in-out"
    )),
    iconWrapper: twMerge(clsx(
      "flex items-center justify-center",
      textfieldVariants.size.iconWrapper,
      "-m-px ml-auto",
      isFocused && !isValid && !isInvalid
        ? "text-primary"
        : !isFocused && isValid && !isInvalid
          ? "text-success"
          : !isFocused && !isValid && isInvalid
            ? "text-error"
            : "text-gray-400",
      "transition-all duration-300 ease-in-out"
    ))
  };

  return textfieldClasses;
}

export default getTextfieldClasses;
