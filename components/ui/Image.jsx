import NextImage from "next/image";

import PropTypes from "prop-types";

import { twMerge } from "tailwind-merge";

function Image({
  src,
  alt,
  className = "",
  style = {},
  ...props
}) {
  const imgClasses = twMerge("w-full", className);

  const isValid = src && alt;

  if (!isValid) return null;

  return (
    <NextImage
      src={src}
      alt={alt}
      loading="lazy"
      width={0}
      height={0}
      className={imgClasses}
      style={style}
      {...props}
    />
  );
}

Image.displayName = "Image";

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
};

export default Image;
