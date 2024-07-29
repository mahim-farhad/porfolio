function getTextfieldVariants(size, isActive) {
  const sizeVariants = {
    textfieldWrapper: {
      sm: "h-10",
      base: "h-12",
      lg: "h-14",
      xl: "h-16"
    },
    labelWrapper: {
      sm: "h-10 ml-2",
      base: "h-12 ml-2.5",
      lg: "h-14 ml-2.5",
      xl: "h-16 ml-2.5"
    },
    label: {
      sm: [
        "text-base",
        isActive && "-translate-y-[19px] text-xs"
      ],
      base: [
        "text-base",
        isActive && "-translate-y-[23px] text-sm"
      ],
      lg: [
        "text-lg",
        isActive && "-translate-y-[27px] text-base"
      ],
      xl: [
        "text-lg",
        isActive && "-translate-y-[31px] text-base"
      ]
    },
    input: {
      sm: "px-3.5 text-sm",
      base: "px-4 text-base",
      lg: "px-4 text-lg",
      xl: "px-4 text-xl"
    },
    iconWrapper: {
      sm: "w-10 h-10 p-3",
      base: "w-12 h-12 p-3.5",
      lg: "w-14 h-14 p-4",
      xl: "w-16 h-16 p-5"
    }
  };

  const sizeVariant = {
    textfieldWrapper: sizeVariants?.textfieldWrapper?.[size],
    labelWrapper: sizeVariants?.labelWrapper?.[size],
    label: sizeVariants?.label?.[size],
    input: sizeVariants?.input?.[size],
    iconWrapper: sizeVariants?.iconWrapper?.[size]
  };

  const isValid =
    sizeVariant.textfieldWrapper && sizeVariant.labelWrapper &&
    sizeVariant.label && sizeVariant.input &&
    sizeVariant.iconWrapper;

  if (!isValid) return null;

  const textfieldVariants = { size: sizeVariant };

  return textfieldVariants;
};

export default getTextfieldVariants;
