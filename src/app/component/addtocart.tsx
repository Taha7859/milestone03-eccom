"use client";
import { Button } from "@/components/ui/button";
import { urlFor } from "@/sanity/lib/image";
import { useShoppingCart } from "use-shopping-cart";

interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
}
export interface Product {
  name: string;
  description: string;
  price: number;
  currency: string;
  image:SanityImage; // Allow `null` to handle missing images gracefully
}

export default function AddToCart({
  currency,
  price,
  name,
  description,
  image,
}: Product) {
  const { addItem, handleCartClick } = useShoppingCart();

  const product = {
    name,
    description,
    price,
    image: image ? urlFor(image).url() : "", // Handle null image gracefully
    currency: currency,
    id: "khh",
  };

  return (
    <Button
      onClick={() => {
        addItem(product);
        handleCartClick();
      }}
    >
      Add To Cart
    </Button>
  );
}