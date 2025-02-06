"use client"; // ✅ This makes it a Client Component

import { Product } from "../types/product";
import { handleAddToCart } from "@/app/utils/handlers";
import { MouseEvent } from "react";

interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    handleAddToCart(e, product);
  };

  return (
    <button 
      className="bg-[#2A254B] text-white text-xs px-4 py-2"
      onClick={handleClick} // ✅ Now allowed in a Client Component
    >
      Add to cart
    </button>
  );
}
