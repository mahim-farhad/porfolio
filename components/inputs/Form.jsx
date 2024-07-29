import {
  createContext,
  useContext,
  useId,
  forwardRef
} from "react";

import { Slot } from "@radix-ui/react-slot";

import {
  Controller,
  FormProvider,
  useFormContext
} from "react-hook-form";

import clsx from "clsx";
import { classNames } from "@libs/utils";

import { Label } from "@components/inputs/Label";

const Form = FormProvider;

const FormFieldContext = createContext({});

const FormField = (props) => {
  return (
    <FormFieldContext.Provider
      value={{ name: props.name }}
    >
      <Controller {...props} />
    </FormFieldContext.Provider>
  )
};

const useFormField = () => {
  const fieldContext = useContext(FormFieldContext);
  const itemContext = useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();

  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
}

const FormItemContext = createContext({})

const FormItem = forwardRef(({ className, ...props }, ref) => {
  const id = useId()

  return (
    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={classNames("space-y-2", className)} {...props} />
    </FormItemContext.Provider>
  )
})

FormItem.displayName = "FormItem"

const FormLabel = forwardRef(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField()

  return (
    <Label
      ref={ref}
      className={classNames(error && "text-destructive", className)}
      htmlFor={formItemId}
      {...props}
    />
  )
})

FormLabel.displayName = "FormLabel"

const FormControl = forwardRef(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  )
})

FormControl.displayName = "FormControl"

const FormDescription = forwardRef(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField()

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={classNames("text-[0.8rem] text-muted-foreground", className)}
      {...props}
    />
  )
})

FormDescription.displayName = "FormDescription"

const FormMessage = forwardRef(({
  className,
  children,
  ...props
}, ref) => {
  const { error, formMessageId } = useFormField();

  const body = error ? String(error?.message) : children;

  if (!body) return null;

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={clsx(
        "text-[0.8rem]",
        "font-medium",
        "text-gray-300",
        className
      )}
      {...props}
    >
      {body}
    </p>
  );
});

FormMessage.displayName = "FormMessage";

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
};
