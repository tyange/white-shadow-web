import { InputHTMLAttributes } from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  register: UseFormRegister<FieldValues>;
}

export default function Input({
  type,
  autoComplete,
  label,
  register,
}: InputProps) {
  return (
    <label className="input input-bordered flex items-center gap-2 bg-zinc-300 shadow-md">
      {label}
      <input
        className="grow"
        type={type}
        autoComplete={autoComplete}
        {...register}
      />
    </label>
  );
}
