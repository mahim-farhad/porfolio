import { forwardRef } from "react";

import * as SelectPrimitive from "@radix-ui/react-select";

import PropTypes from "prop-types";

import Icon from "@components/ui/Icon";

import {
  getTriggerClasses,
  getContentClasses,
  getLabelClasses,
  getItemClasses
} from "@styles/components/selectClasses";

const Select = SelectPrimitive.Root;

const SelectTrigger = forwardRef(function SelectTrigger({
  label,
  placeholder,
  size = "base",
  className,
  ...props
}, triggerRef) {
  const triggerClasses = getTriggerClasses(size, className);

  return (
    <SelectPrimitive.Trigger
      ref={triggerRef}
      className={triggerClasses?.trigger}
      {...props}
    >
      {label && (
        <span className={triggerClasses?.labelWrapper}>
          <span className={triggerClasses?.label}>
            {label}
          </span>
        </span>
      )}

      <span className={triggerClasses?.valueWrapper}>
        <SelectPrimitive.Value placeholder={placeholder} />
      </span>

      <SelectPrimitive.Icon className={triggerClasses?.iconWrapper}>
        <Icon name="ChevronsUpDown" size={size} />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
});

SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

SelectTrigger.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string
};

const SelectScrollUpButton = forwardRef(function SelectScrollUpButton({
  ...props
}, scrollUpRef) {
  return (
    <SelectPrimitive.ScrollUpButton
      ref={scrollUpRef}
      className="py-1 text-center"
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Outline"
        viewBox="0 0 24 24"
        width="512" height="512"
        className="w-5 h-5 mx-auto"
      >
        <path d="M6.41,16H17.59a1,1,0,0,0,.7-1.71L12.71,8.71a1,1,0,0,0-1.42,0L5.71,14.29A1,1,0,0,0,6.41,16Z" />
      </svg>
    </SelectPrimitive.ScrollUpButton>
  );
});

SelectScrollUpButton.displayName =
  SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDownButton = forwardRef(function SelectScrollDownButton({
  ...props
}, scrollDownRef) {
  return (
    <SelectPrimitive.ScrollDownButton
      ref={scrollDownRef}
      className="py-1 text-center"
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Outline"
        viewBox="0 0 24 24"
        width="512" height="512"
        className="w-5 h-5 mx-auto"
      >
        <path d="M6.41,9H17.59a1,1,0,0,1,.7,1.71l-5.58,5.58a1,1,0,0,1-1.42,0L5.71,10.71A1,1,0,0,1,6.41,9Z" />
      </svg>
    </SelectPrimitive.ScrollDownButton>
  );
});

SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName;

const SelectGroup = forwardRef(function SelectGroup({
  ...props
}, groupRef) {
  return (
    <SelectPrimitive.Group
      ref={groupRef}
      className="space-y-1"
      {...props}
    />
  );
});

SelectGroup.displayName = SelectPrimitive.Group.displayName;

const SelectContent = forwardRef(function SelectContent({
  position = "popper",
  className = "",
  children,
  ...props
}, contentRef) {
  const contentClasses = getContentClasses(position, className);

  return (
    <SelectPrimitive.Content
      ref={contentRef}
      position={position}
      className={contentClasses}
      {...props}
    >
      <SelectScrollUpButton />

      <SelectPrimitive.Viewport className="p-1">
        {children}
      </SelectPrimitive.Viewport>

      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  );
});

SelectContent.displayName = SelectPrimitive.Content.displayName;

SelectContent.propTypes = {
  position: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node
};

const SelectLabel = forwardRef(function SelectLabel({
  className = "",
  ...props
}, labelRef) {
  const labelClasses = getLabelClasses(className);

  return (
    <SelectPrimitive.Label
      ref={labelRef}
      className={labelClasses}
      {...props}
    />
  );
});

SelectLabel.displayName = SelectPrimitive.Label.displayName;

SelectLabel.propTypes = {
  className: PropTypes.string
};

const SelectItem = forwardRef(function SelectItem({
  textValue,
  className = "",
  ...props
}, itemRef) {
  const itemClasses = getItemClasses(className);

  return (
    <SelectPrimitive.Item
      ref={itemRef}
      className={itemClasses?.item}
      {...props}
    >
      <SelectPrimitive.ItemText>
        {textValue}
      </SelectPrimitive.ItemText>

      <SelectPrimitive.ItemIndicator className={itemClasses?.indicator}>
        <Icon name="Check" size="sm" />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  );
});

SelectItem.displayName = SelectPrimitive.Item.displayName;

SelectItem.propTypes = {
  textValue: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node
};

const SelectSeparator = forwardRef(function SelectSeparator({
  ...props
}, separatorRef) {
  return (
    <SelectPrimitive.Separator
      ref={separatorRef}
      className="h-px -mx-1 my-1 bg-gray-200"
      {...props}
    />
  );
});

SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  Select,
  SelectTrigger,
  SelectGroup,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator
};
