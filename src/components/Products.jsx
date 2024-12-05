import React, { useState } from "react";
import Product from "./Product";
import { motion } from "motion/react";

function Products() {
  var products = [
    {
      title: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      case: false,
    },
    {
      title: "YIR 2022",
      description:
        "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
      live: true,
      case: false,
    },
    {
      title: "Yahoo!",
      description:
        "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
      live: true,
      case: true,
    },
    {
      title: "Rainfall",
      description:
        "We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.",
      live: true,
      case: true,
    },
  ];

  const [pos,setPos] = useState(0);

  const mover = (val) => {
    setPos(val*16);
  }

  return (
    <div className="mt-24 relative">
      {products.map((elem, index) => (
        <Product key={index} val={elem} mover={mover} count={index} />
      ))}
      <div className="absolute w-full h-full pointer-events-none top-0">
        <motion.div initial={{y: pos,x: "-35%"}} animate={{y: pos+`rem`}} transition={{ease: [0.76,0,0.24,1],duration: 0.3}} className="window absolute w-96 h-[16rem] left-[40%] rounded-lg overflow-hidden">
          <motion.div animate={{y: -pos+`rem`}} transition={{ease: [0.76,0,0.24,1],duration: 0.6}} className="w-full h-full bg-slate-200"></motion.div>
          <motion.div animate={{y: -pos+`rem`}} transition={{ease: [0.76,0,0.24,1],duration: 0.6}} className="w-full h-full bg-slate-400"></motion.div>
          <motion.div animate={{y: -pos+`rem`}} transition={{ease: [0.76,0,0.24,1],duration: 0.6}} className="w-full h-full bg-slate-600"></motion.div>
          <motion.div animate={{y: -pos+`rem`}} transition={{ease: [0.76,0,0.24,1],duration: 0.6}} className="w-full h-full bg-slate-800"></motion.div>
          <motion.div animate={{y: -pos+`rem`}} transition={{ease: [0.76,0,0.24,1],duration: 0.6}} className="w-full h-full bg-slate-900"></motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
