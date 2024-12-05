import { motion } from "motion/react";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function Card({ width, hover = false, para, start }) {
  return (
    <motion.div whileHover={{backgroundColor: hover === true ? "#7443ff":"#010",paddingLeft: "25px"}}
      className={`${width} rounded-lg p-4 min-h-[25em] flex flex-col justify-between bg-zinc-800`}
    >
      <div>
        <div className="flex items-center justify-between">
          <h4 className="text-md text-zinc-300">Some text</h4>
          <FaArrowRightLong />
        </div>
        <h2 className="text-xl font-medium mt-2">Some heading</h2>
      </div>
      <div className="down">
        {start && (
          <>
            <h1 className="text-8xl mb-5 font-medium">Start a Project</h1>
            <button className="rounded-full border-2 px-6 py-2 text-sm border-zinc-500">
              Contact Us
            </button>
          </>
        )}

        {para && (
          <p className="text-zinc-400">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
