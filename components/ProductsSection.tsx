// *********************
// Role of the component: products section intended to be on the home page
// Name of the component: ProductsSection.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 2.0 (Modernized)
// Component call: <ProductsSection slug={slug} />
// Input parameters: no input parameters
// Output: products grid with modern design
// *********************

import React from "react";
import ProductItem from "./ProductItem";
import Heading from "./Heading";
import apiClient from "@/lib/api";

const ProductsSection = async () => {
  let products = [];
  
  try {
    // sending API request for getting all products
    const data = await apiClient.get("/api/products");
    
    if (!data.ok) {
      console.error('Failed to fetch products:', data.statusText);
      products = [];
    } else {
      const result = await data.json();
      // Ensure products is an array
      products = Array.isArray(result) ? result : [];
    }
  } catch (error) {
    console.error('Error fetching products:', error);
    products = [];
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden py-24">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-semibold rounded-full">
              EXPLORE OUR COLLECTION
            </span>
          </div>
          <Heading title="FEATURED PRODUCTS" />
          <p className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto">
            Discover our curated selection of premium products designed for excellence
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.length > 0 ? (
            products.map((product: any) => (
              <div key={product.id} className="group h-full">
                <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden h-full transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 border border-slate-700/50 hover:border-blue-500/30 backdrop-blur-sm flex flex-col">
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/0 via-transparent to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                  
                  {/* Product Image - Full width/height no padding */}
                  <div className="relative z-10 flex-1 overflow-hidden w-full h-full">
                    <ProductItem product={product} color="white" />
                  </div>
                  
                  {/* View Details Button
                  <button className="w-full group/btn relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold py-3 px-6 transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
                    <span className="relative z-10">View Details</span>
                    <i className="pi pi-arrow-right text-sm transition-transform group-hover/btn:translate-x-1"></i>
                  </button> */}
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full">
              <div className="text-center py-16">
                <div className="inline-block p-4 bg-slate-800/50 rounded-full mb-4">
                  <i className="pi pi-inbox text-4xl text-slate-400"></i>
                </div>
                <p className="text-slate-400 text-lg">No products available at the moment.</p>
                <p className="text-slate-500 text-sm mt-2">Check back soon for our latest offerings</p>
              </div>
            </div>
          )}
        </div>

        {/* Call to Action */}
        {products.length > 0 && (
          <div className="mt-16 text-center">
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl hover:shadow-blue-500/30">
              View All Products
              <i className="pi pi-arrow-right"></i>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;