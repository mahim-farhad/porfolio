import { forwardRef } from "react";

import PropTypes from "prop-types";

import { twMerge } from "tailwind-merge";

const Box = forwardRef(function Box({
  className = "",
  style = {},
  children,
  ...props
}, boxRef) {
  const boxClasses = twMerge(className) || undefined;

  return (
    <div
      ref={boxRef}
      className={boxClasses}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
});

Box.displayName = "Box";

Box.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node
};

export default Box;
