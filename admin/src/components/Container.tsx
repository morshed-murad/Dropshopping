import React from "react";

interface Props {
  children: React.ReactNode;
}
export default function Container({ children }: Props) {
  return (
    <div className="max-w-[1920px] mx-auto xl:px-20 md:px-6 px-4">
      {children}
    </div>
  );
}
