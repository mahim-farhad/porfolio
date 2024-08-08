import { twMerge } from "tailwind-merge";

import { poppins, montserrat, firaCode } from "@libs/fonts";

import ThemeProvider from "@components/layouts/ThemeProvider";

import "@styles/globals.css";

export const metadata = {
  title: "Web Devloper Portfolio",
  description: "..."
};

export const viewport = {
  themeColor: "rgb(0 0 0)"
};

function RootLayout({ children }) {
  const bodyClasses = twMerge(
    poppins.variable, montserrat.variable, firaCode.variable,
    "antialiased font-sans leading-normal",
    "text-base font-normal select-none",
    "overflow-x-hidden overflow-overlay",
    "text-foreground-light dark:text-foreground-dark",
    "bg-background-light dark:bg-background-dark"
  );

  return (
    <html lang="en">
      <body className={bodyClasses}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
        // disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

export default RootLayout;
