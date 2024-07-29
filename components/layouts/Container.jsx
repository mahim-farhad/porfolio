import PropTypes from "prop-types";

import { twMerge } from "tailwind-merge";

function Container({
  className = "",
  style = {},
  children,
  ...props
}) {
  const containerClasses = twMerge(
    "2xl:max-w-[97.5rem]",
    "2xl:mx-auto",
    className
  );

  return (
    <div
      className={containerClasses}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
}

Container.displayName = "Container";

Container.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node.isRequired
};

export default Container;
