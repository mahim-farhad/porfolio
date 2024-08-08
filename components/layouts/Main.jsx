import PropTypes from "prop-types";

import { twMerge } from "tailwind-merge";

function Main({
  className = "",
  style = {},
  children,
  ...props
}) {
  const mainClasses = twMerge(
    "min-h-screen",
    "p-4 sm:p-16",
    className
  );

  return (
    <main
      className={mainClasses}
      style={style}
      {...props}
    >
      {children}
    </main>
  );
}

Main.displayName = "Main";

Main.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node.isRequired
};

export default Main;
