import React from "react";
import { FaFileLines } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa6";
import { motion } from "framer-motion";

function Cart({ data, reference }) {
  return (
    <>
      <motion.div
        drag
        dragConstraints={reference}
        whileDrag={{ scale: "1.08" }}
        dragElastic={1.2}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
        className="bg-zinc-800/90 py-5 px-7 relative overflow-hidden  sm:h-72 sm:w-60 sm:rounded-[50px] rounded-[20px] h-52 w-44"
      >
        <FaFileLines />
        <p className="sm:mt-10 mt-4 sm:text-[1rem] text-[11px]">{data.desc}</p>
        <footer className="absolute w-full bottom-10 left-0 h-14">
          <div className="flex justify-between items-center h-full p-4">
            <h5 className=" sm:text-[1rem] text-[12px]">{data.fileSize}</h5>
            <div className="bg-red-500 p-3 rounded-full cursor-pointer">
              <FaDownload size=".8em" />
            </div>
          </div>
          <div
            className={`flex items-center justify-center px-6 h-10 text-white ${
              data.tag.tagColor === "green" ? "bg-green-400" : "bg-blue-400"
            }`}
          >
            <span className="cursor-pointer">Drag Now</span>
          </div>
        </footer>
      </motion.div>
    </>
  );
}

export default Cart;
