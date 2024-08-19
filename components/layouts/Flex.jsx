import { forwardRef } from "react";

import PropTypes from "prop-types";

import { twMerge } from "tailwind-merge";

const Flex = forwardRef(function Flex({
  className = "",
  style = {},
  children,
  ...props
}, flexRef) {
  const flexClasses = twMerge(
    "flex",
    "flex-wrap",
    className
  );

  return (
    <div
      ref={flexRef}
      className={flexClasses}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
});

Flex.displayName = "Flex";

Flex.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node
};

export default Flex;
