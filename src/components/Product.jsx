import React from "react";
import Button from "./Button";

function Product({ val,mover,count }) {
  return (
    <div className="w-full h-[16rem] py-14 hover:bg-[#22004c]">
      <div onMouseOver={() => mover(count)} className="max-w-screen-xl mx-auto flex items-center justify-between">
        <h1 className="text-5xl font-medium">{val.title}</h1>
        <div className="details w-1/3">
          <p className="mb-6">{val.description}</p>
          <div className="flex gap-2">
            {val.live && <Button title="Live Website" />}
            {val.case && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
