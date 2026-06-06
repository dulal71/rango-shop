"use client";

import { useState } from "react";
import Image from "next/image";
import { BiMinus, BiPlus } from "react-icons/bi";
import { CgShoppingCart } from "react-icons/cg";
import { FaStar } from "react-icons/fa";

const Details = ({product}) => {
     const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || "");
  const [selectedColor, setSelectedColor] = useState(
    product.colors?.[0] || ""
  );
  const [quantity, setQuantity] = useState(1);
    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-10">
        {/* LEFT SIDE */}
        <div>
          <div className="border rounded-lg overflow-hidden">
            <Image
              src={selectedImage}
              alt={product.name}
              width={700}
              height={700}
              className="w-full h-[500px] object-cover"
            />
          </div>

          <div className="flex gap-3 mt-4">
            {product.images.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(img)}
                className={`border rounded-md overflow-hidden ${
                  selectedImage === img
                    ? "border-4 border-black"
                    : "border-gray-300"
                }`}
              >
                <Image
                  src={img}
                  alt=""
                  width={80}
                  height={80}
                  className="w-20 h-20 object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>

          <div className="flex items-center gap-2 mt-3">
            <FaStar className="text-yellow-500" />
            <span>{product.rating}</span>
          </div>

          <h2 className="text-3xl font-bold text-blue-600 mt-4">
            ${product.price}
          </h2>

          <p className="mt-5 text-gray-600 leading-7">
            {product.description}
          </p>

          <div className="">
            <span className="font-semibold">Brand:</span>{" "}
            {product.brand}
          </div>

          <div className="mt-2">
            <span className="font-semibold">Category:</span>{" "}
            {product.category}
          </div>

          <div className="mt-2">
            <span className="font-semibold">Stock:</span>{" "}
            {product.stock} pcs
          </div>

          {/* SIZE */}
          <div className=" my-5 flex items-center gap-10">
            <div className=" w-40">
            <label className="font-semibold block mb-2">
              Select Size
            </label>

            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="border px-4 py-2 rounded-md w-full"
            >
              {product.sizes.map((size) => (
                <option key={size}>{size}</option>
              ))}
            </select>
          </div>

          {/* COLOR */}
          <div className="  w-40">
            <label className="font-semibold block mb-2">
              Select Color
            </label>

            <select
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
              className="border px-4 py-2 rounded-md w-full"
            >
              {product.colors.map((color) => (
                <option key={color}>{color}</option>
              ))}
            </select>
          </div>
          </div>

          {/* QUANTITY */}
          <div className="flex items-center gap-3 mt-8">
            <button
              onClick={() =>
                quantity > 1 && setQuantity(quantity - 1)
              }
              className="border p-2 rounded"
            >
              <BiMinus />
            </button>

            <span className="font-semibold text-lg">
              {quantity}
            </span>

            <button
              onClick={() => setQuantity(quantity + 1)}
              className="border p-2 rounded"
            >
              <BiPlus />
            </button>
          </div>

          {/* BUTTON */}
          <div className="flex items-center gap-4">
             <button className="mt-6 flex items-center gap-2 bg-green-700 hover:bg-red-700 text-white px-8 py-3 rounded-md">
            <CgShoppingCart />
            Buy Now
          </button>


             <button className="mt-6 flex items-center gap-2 bg-black hover:bg-[#998345] text-white px-8 py-3 rounded-md">
            <CgShoppingCart />
            Add To Cart
          </button>

          </div>
         
        </div>
      </div>

      {/* DESCRIPTION */}
      <div className="mt-16 border-t pt-8">
        <h2 className="text-2xl font-bold mb-4">
          Product Description
        </h2>

        <p className="text-gray-600 leading-8">
          {product.description}
        </p>
      </div>
    </div>
    );
};

export default Details;