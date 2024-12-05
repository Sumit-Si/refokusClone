import { motion } from "motion/react";
import React from "react";

function Marquee({ val,direction }) {
  // console.log(val, "img");

  return (
    <div className="flex items-center py-3 gap-16 w-full whitespace-nowrap overflow-hidden">
      {val.map((imgUrl) => (
        <>
          <motion.div initial={{x: direction === "left" ? "0" : "-100%"}} transition={{duration: 10,repeat: Infinity,ease: "linear"}} animate={{x: direction === "left" ? "-100%" : "0"}} className="flex gap-20 shrink-0">
            <img className="" src={imgUrl} alt="img" />
          </motion.div>
          <motion.div initial={{x: direction === "left" ? "0" : "-100%"}} transition={{duration: 10,repeat: Infinity,ease: "linear"}} animate={{x: direction === "left" ? "-100%" : "0"}} className="flex gap-20 shrink-0">
            <img className="" src={imgUrl} alt="img" />
          </motion.div>
          
        </>
      ))}
    </div>
  );
}

export default Marquee;
