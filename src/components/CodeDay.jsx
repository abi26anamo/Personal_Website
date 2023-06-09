import React from "react";
import leetcode from "../assets/images/daysIcode.png";

function Leetcode() {
  return (
    <div className="flex flex-col items-center mt-10 text-gray-100 text-center">
      <h1 className="text-3xl font-bold">
        Days I code on<span className="text-cyan-600"> <a href="https://leetcode.com/Abianamo/" target="_blank">Leetcode</a> </span> 
      </h1>
      <div className="mt-4">
        <img src={leetcode} alt="Days I Code" />
      </div>
    </div>
  );
}

export default Leetcode;







