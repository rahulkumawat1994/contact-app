import Image from "next/image";
import React from "react";
import { Type } from "../../interfaces/contact";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  labelClasses?: string;
  prepend?: React.ReactNode | null;
}

export const Input: React.FC<Props> = ({
  label,
  error,
  labelClasses,
  prepend = null,
  ...props
}) => {
  return (
    <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
      <label
        htmlFor="last-name"
        className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
      >
        {label}
      </label>
      <div className="mt-1 sm:col-span-2 sm:mt-0">
        <input
          {...props}
          className="px-2 h-8 block w-full max-w-lg rounded-md border border-ctGray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
        />
      </div>
    </div>
  );
};
interface SelectProps {
  label: string;
  name: string;
  value: Type;
  onChange: (e: Type) => void;
  options: { value: Type; label: string }[];
}
export const SelectInput: React.FC<SelectProps> = ({ label, ...props }) => {
  return (
    <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
      <label
        htmlFor="Type"
        className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
      >
        {label}
      </label>
      <div className="mt-1 sm:col-span-2 sm:mt-0">
        <select
          value={props.value}
          name={props.name}
          onChange={(e) => props.onChange(e.target.value as Type)}
          className="px-2 h-8 block w-full max-w-lg rounded-md border border-ctGray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
        >
          {props.options.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
interface RadioProps {
  label: string;
  value: string|boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  options: { value: string; label: string }[];
}
export const RadioInput: React.FC<RadioProps> = ({
  label,
  options,
  ...props
}) => {
  return (
    <div className="pt-6 sm:pt-5">
      <div role="group" aria-labelledby="label-notifications">
        <div className="sm:grid sm:grid-cols-3 sm:items-baseline sm:gap-4">
          <div>
            <div
              className="text-base font-medium text-gray-900 sm:text-sm sm:text-gray-700"
              id="label-notifications"
            >
              Whatsapp
            </div>
          </div>
          <div className="sm:col-span-2">
            <div className="max-w-lg">
              <div className="mt-4 space-y-4">
                {options.map((item) => (
                  <div className="flex items-center" key={item.value}>
                    <input
                      name="isWhatsapp"
                      type="radio"
                      checked={props.value === item.value}
                      onChange={props.onChange}
                      value={item.value}
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                    />
                    <label
                      htmlFor="isWhatsapp"
                      className="ml-3 block text-sm font-medium text-gray-700"
                    >
                      {item.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
interface ImageProps {
  imageUpload: File | null;
  value: string | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const ImageSelect = ({ onChange, value, imageUpload }: ImageProps) => {
  return (
    <div className="space-y-6 sm:space-y-5">
      <div className="space-y-6 sm:space-y-5">
        <div className="sm:grid sm:grid-cols-3 sm:items-center sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            htmlFor="photo"
            className="block text-sm font-medium text-gray-700"
          >
            Photo
          </label>
          <div className="mt-1 sm:col-span-2 sm:mt-0">
            <div className="flex items-center">
              <span className="h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                {imageUpload || value ? (
                  <img
                    height={100}
                    width={100}
                    className="object-cover h-full"
                    src={
                      imageUpload
                        ? URL.createObjectURL(imageUpload as Blob | MediaSource)
                        : value || ""
                    }
                  />
                ) : (
                  <svg
                    className="h-full w-full text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )}
              </span>
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500"
              >
                <span className="ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2">
                  Change
                </span>

                <input
                accept="image/*"
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  onChange={onChange}
                  className="sr-only"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
