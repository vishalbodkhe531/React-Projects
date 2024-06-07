import React, { useRef } from "react";
import Cart from "./Cart";
import { products } from "../data";
// import products from "../data.js";

function Forground() {
  const ref = useRef(null);

  return (
    <>
      <div
        ref={ref}
        className="fixed z-[3] w-full h-screen flex flex-wrap gap-10 justify-center items-center"
      >
        {products.map((item) => (
          <Cart data={item} reference={ref} />
        ))}
      </div>
    </>
  );
}

export default Forground;
