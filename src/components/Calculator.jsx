import React, { useState } from "react";

const Calculator = () => {
  const btn = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  const [currval, setval]=useState("");
  const calcu=(e)=>{
  const newvalue = currval + e;
  setval(newvalue)

if(e === 'C'){
    setval("")
}
else if(e === '='){
    const result = eval(currval);
    setval(result);
}

  }
  return (
    
    <>
      <div className="w-full">
        <div className="mt-5 mb-5">
          <input
            className=" shadow-lg text-2xl text-center  w-screen h-20 md:w-96"
            type="text
            "
            readOnly
            value={currval}
            
            
            id="text"
          />
        </div>
        <div className="flex flex-wrap justify-center  md:w-96 gap-5 mb-5">

        {btn.map((items) => (
        <button 
          key={items}
          onClick={()=>calcu(items)}
          className="bg-[#fdba74] text-2xl shadow-2xl text-white font-bold w-24 h-16 rounded-2xl"
          
        >
          {items}
        </button>
      ))}
            
         
        </div>
      </div>
    </>
  );
};

export default Calculator;
