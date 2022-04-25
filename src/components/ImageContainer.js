import { React, useRef } from "react";
import stamp from "../images/stamp2.png";
import { exportComponentAsPNG } from "react-component-export-image";

export const ImageContainer = (props) => {
  const printRef = useRef();
  const { name } = props;

  return (
    <div className="flex flex-col justify-center items-center">
      <div
        ref={printRef}
        className="relative flex flex-col justify-center items-center"
      >
        <img className="w-80 " src={stamp} />
        <h1 className=" text-center font-bold text-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {name}
        </h1>
      </div>
      <button
        onClick={(e) => {
          exportComponentAsPNG(printRef);
          console.log("clicled");
        }}
        className="bg-yellow-300 px-3 py-2 rounded-lg mt-3 shadow-md"
      >
        CLAIM YOUR UNIQUE STAMP!
      </button>
    </div>
  );
};
