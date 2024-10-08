function getTypographyVariants(type) {
  const typeVariants = {
    h1: [
      "font-serif",
      "text-4xl lg:text-7xl leading-[1.1]",
      "font-bold uppercase tracking-wide",
      "text-foreground-light dark:text-foreground-dark"
    ],
    h2: [
      "font-serif",
      "text-3xl lg:text-5xl leading-[1.25]",
      "font-bold uppercase tracking-wide",
      "text-foreground-light dark:text-foreground-dark"
    ],
    h3: [
      "font-serif",
      "text-2xl lg:text-4xl leading-[1.5]",
      "font-bold uppercase tracking-wide",
      "text-foreground-light dark:text-foreground-dark"
    ],
    h4: [
      "font-serif",
      "text-xl lg:text-3xl leading-[1.75]",
      "font-semibold tracking-wide",
      "text-foreground-light dark:text-foreground-dark"
    ],
    h5: [
      "font-serif",
      "text-lg lg:text-2xl leading-[1.75]",
      "font-medium uppercase tracking-wide",
      "text-foreground-light dark:text-foreground-dark"
    ],
    h6: [
      "font-serif",
      "text-base lg:text-xl leading-[1.75]",
      "font-bold uppercase tracking-wide",
      "text-foreground-light dark:text-foreground-dark"
    ],
    p: [
      "font-sans",
      "text-base leading-[1.75]",
      "font-normal tracking-normal",
      "text-gray-300"
    ],
    small: [
      "font-sans",
      "text-xs leading-[1.75]",
      "font-semibold uppercase tracking-normal",
      "text-gray-400"
    ],
    blockquote: [
      "p-4 font-sans text-base leading-[1.75] font-medium",
      "text-gray-400 dark:text-gray-100",
      "bg-surface-light dark:bg-surface-dark",
      "border-l-2 border-primary"
    ]
  };

  const typeVariant = typeVariants?.[type];

  const isValid = typeVariant;

  if (!isValid) return null;

  const typographyVariants = {
    type: typeVariant
  };

  return typographyVariants;
}

export default getTypographyVariants;
