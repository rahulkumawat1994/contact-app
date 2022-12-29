import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  labelClasses?: string;
  prepend?: React.ReactNode | null;
}

const Input: React.FC<Props> = ({
  label,
  error,
  labelClasses,
  prepend = null,
  ...props
}) => {
  return (
    <div
      className={`relative my-2 flex h-[60px] cursor-text flex-wrap items-center justify-start rounded-lg border-[1px] ${
        error
          ? " border-fcRed-500 "
          : " border-fcBlack-100 border-opacity-50 dark:border-fcBlack-200 "
      } ${props.disabled ? " opacity-60 " : " "}`}
    >
      <div></div>
      <label
        className={`absolute left-7 -top-2.5 bg-white px-1 text-sm text-fcBlue-500 dark:bg-fcBlack-600 dark:text-fcBlue-400  ${labelClasses}`}
      >
        {props.required ? label + "*" : label}
      </label>
      <div className="flex h-full w-full items-center justify-start ">
        {prepend}
        <input
          {...props}
          autoComplete="off"
          className={`h-full w-full border-0 bg-transparent px-4 outline-none dark:text-white dark:placeholder:text-fcBlack-100  ${props.className}`}
        />
      </div>

      {error && (
        <small className="absolute top-[100%] mt-[1px] text-fcRed-600 ">
          {error}
        </small>
      )}
    </div>
  );
};

export default Input;
