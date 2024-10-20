"use client";

import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  // disabled: boolean;
  outline?: boolean;
  small?: boolean;
  custom?: boolean;
  icon?: IconType;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
export default function Button({
  label,
  // disabled,
  outline,
  small,
  custom,
  icon: Icon,
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`disabled:opacity-70 disabled:cursor-not-allowed rounded-m hover:opacity-80 transition w-full border-slate-700 flex items-center justify-center gap-2 ${
        outline ? "bg-white" : "bg-slate-700"
      } ${outline ? "text-slate-700" : "text-white"} ${
        small ? "text-sm font-light" : "text-md font-semibold"
      } ${small ? "py-1 px-2 border-[1px]" : "py-3 px-4 border-[2px]"} ${
        custom ? custom : ""
      }`}
    >
      {Icon && <Icon size={24} />} {label}
    </button>
  );
}
