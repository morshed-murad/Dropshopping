"use client";
import { cartProductType, selectedImgType } from "@/types/cartType";
import React from "react";


interface SetColorProps {
  images: selectedImgType[];
  cartProduct: cartProductType;
  handleColorSelect: (value: selectedImgType) => void;
}

export default function SetColor({
  images,
  cartProduct,
  handleColorSelect,
}: SetColorProps) {
  return (
    <div className="flex ga-4 items-center">
      <span className="font-semibold capitalize">Color:</span>
      <div className="flex gap-1">
        {images.map((image) => {
          return (
            <div
              key={image.color}
              onClick={() => handleColorSelect(image)}
              className={`h-7 w-7 rounded-full border-teal-200 flex items-center justify-center ${
                cartProduct.selectedImg.color === image.color
                  ? "border-[1.5px]"
                  : "border-non"
              }`}
            >
              <div
                style={{ background: image.colorCode }}
                className="h-5 w-5 rounded-full border-[1.2px] border-slate-300 cursor-pointer"
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
