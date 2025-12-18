// *********************
// Role of the component: Product item component 
// Name of the component: ProductItem.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 1.1 (Updated)
// Component call: <ProductItem product={product} color={color} />
// Input parameters: { product: Product; color: string; }
// Output: Product item component that contains product image, title, link to the single product page, price, button...
// *********************

import Image from "next/image";
import React from "react";
import Link from "next/link";

import { sanitize } from "@/lib/sanitize";

const ProductItem = ({
  product,
  color,
}: {
  product: Product;
  color: string;
}) => {
  return (
    <div className="flex flex-col h-full">
      {/* Image Container - Full width, no padding */}
      <Link href={`/product/${product.slug}`} className="relative w-full h-64 overflow-hidden flex-1 bg-gray-100">
        <Image
          src={
            product.mainImage
              ? `/${product.mainImage}`
              : "/product_placeholder.jpg"
          }
          width={400}
          height={300}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="w-full h-full object-cover"
          alt={sanitize(product?.title) || "Product image"}
        />
      </Link>

      {/* Product Info - With padding */}
      <div className="flex flex-col gap-y-2 p-4">
        <Link
          href={`/product/${product.slug}`}
          className={
            color === "black"
              ? `text-lg font-semibold uppercase line-clamp-2 hover:text-blue-600 transition`
              : `text-lg font-semibold uppercase line-clamp-2 text-white hover:text-blue-300 transition`
          }
        >
          {sanitize(product.title)}
        </Link>
        <p
          className={
            color === "black"
              ? "text-lg font-bold text-gray-500"
              : "text-lg font-bold text-gray-300"
          }
        >
          ${product.price}
        </p>

        {/* <Link
          href={`/product/${product?.slug}`}
          className="block w-full py-3 px-4 text-center uppercase bg-white text-blue-600 font-bold border border-gray-300 hover:bg-blue-600 hover:text-white transition-all duration-300"
        >
          View Product
        </Link> */}
      </div>
    </div>
  );
};

export default ProductItem;