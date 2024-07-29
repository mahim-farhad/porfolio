import { forwardRef, useState } from "react";

import PropTypes from "prop-types";

import { inputTypes } from "@libs/types";

import Icon from "@components/ui/Icon";

import getTextfieldClasses from "@styles/components/textfieldClasses";

const Textfield = forwardRef(function Textfield({
  type = "text",
  name,
  label,
  value,
  placeholder,
  size = "base",
  rounded = false,
  className = "",
  style = {},
  onFocus = () => { },
  onBlur = () => { },
  onChange = () => { },
  required,
  success,
  error,
  disabled = false,
  ...props
}, inputRef) {
  const [isFocused, setFocused] = useState(false);
  const [isFilled, setFilled] = useState(value);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = (event) => {
    setFocused(false);

    setFilled(event.target.value);
  };

  const textfieldClasses = getTextfieldClasses(
    placeholder, size, rounded, isFocused,
    isFilled, success, error,
    disabled
  );

  const hasValidType = inputTypes?.types?.[type];
  const hasValidSize = inputTypes?.sizes?.[size];

  const isValid = hasValidType && hasValidSize;

  if (!isValid) return null;

  return (
    <div
      ref={inputRef}
      className={textfieldClasses?.textfieldWrapper}
    >
      <input
        ref={inputRef}
        type={type}
        role="textfield"
        aria-label="textfield"
        aria-labelledby={name}
        aria-autocomplete="none"
        data-placeholder=""
        className={textfieldClasses?.input}
        style={style}
        name={name}
        id={name}
        value={value}
        placeholder={placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
        // onChange={handleChange}
        disabled={disabled}
        {...props}
      />

      {label && (
        <span className={textfieldClasses?.labelWrapper}>
          <label
            htmlFor={name}
            className={textfieldClasses?.label}
          >
            {label}
          </label>
        </span>
      )}

      <span className={textfieldClasses?.iconWrapper}>
        <Icon name="Lock" size={size} />
      </span>
    </div>
  );
});

Textfield.displayName = "Textfield";

Textfield.propTypes = {
  type: PropTypes.oneOf(Object.keys(inputTypes?.types)).isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.any.isRequired,
  size: PropTypes.oneOf(Object.keys(inputTypes?.sizes)),
  className: PropTypes.string,
  style: PropTypes.object,
  disabled: PropTypes.bool
};

export default Textfield;
