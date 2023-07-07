import React, { useState } from "react";

export default function Event({ title, description, creator, tickets, price, img }) {
  const [amount,setAmount] = useState(0)
  // const img = "../astro.jpeg"
  return (
    <>
      <div className="user-card relative flex flex-col rounded-lg w-96 mx-auto bg-gray-200 pb-5 mb-8">
        <img
          className="w-full h-40 mx-auto rounded-lg"
          src={img}
          alt="event-icon"
        />
        <div className="text-center mt-3 text-2xl font-bold">
          {title}
        </div>
        <div className="text-center mt-2 font-normal text-xl">
          {description}
        </div>
        <div className="font-semibold mt-6  text-xl mt-2 text-center">
          Created by: {creator}
        </div>
        <div className="font-semibold ml-3  text-xl mt-2 text-center">
          Tickets sold out: {tickets}
        </div>
        <div className="h-[15vh] flex flex-col w-full  mt-6 items-center justify-center ">
          <div className="flex space-x-4">
            <span className="relative top-3">Buy</span>
            <div className="border-black border-2 flex justify-center items-center mt-3">
              <button
                className="h-full w-5 bg-gray-200 font-bold border-black border-r-2 flex justify-center items-center hover:bg-gray-500 hover:text-white"
                onClick={() => setAmount(amount - 1)}
              >
                -
              </button>
              <span className="mx-3 text-xl font-semibold">{amount}</span>
              <button
                className="h-full w-5 bg-gray-200 font-bold border-black border-l-2 flex justify-center items-center hover:bg-gray-500 hover:text-white"
                onClick={() => setAmount(amount + 1)}
              >
                +
              </button>
            </div>
            <span className="relative top-3">Tickets.</span>
          </div>
          <div className="h-[6vh] w-full  mt-5 -mb-10 bg-green-400 rounded-2xl flex">
            <button className="h-full rounded-2xl bg-transparent w-full hover:bg-green-500">
              Pay {0.02 * amount} Fantom
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
