import React, { useState } from "react";
import AllEvents from "./AllEvents";
import MintEvent from "./MintEvents";
import MyTickets from "./MyTicket";
import MyEvents from "./MyEvents";

export default function Events() {
  const [activeButton, setactiveButton] = useState("All-Events");

  const handleButtonClick = (buttonName) => {
    setactiveButton(buttonName);
  };

  return (
    <div className="w-[100%] bg-purple-100">
      <div className="h-[9vh] bg-gray-300 flex flex-row justify-between items-center px-4 rounded-b-2xl">
        <div>
          <button
            onClick={() => handleButtonClick("All-Events")}
            className="h-[5vh] px-2 border-gray-400 border-2 rounded-lg hover:bg-slate-500 hover:text-white hover:shadow-xl transition duration-400 ease-in-out"
          >
            All Events
          </button>
        </div>
        <div>
          <button
            onClick={() => handleButtonClick("Mint-Event")}
            className="h-[5vh] px-2 border-gray-400 border-2 rounded-lg hover:bg-slate-500 hover:text-white hover:shadow-xl transition duration-400 ease-in-out"
          >
            Mint Event
          </button>
        </div>
        <div>
          <button
            onClick={() => handleButtonClick("My-Tickets")}
            className="h-[5vh] px-2 border-gray-400 border-2 rounded-lg hover:bg-slate-500 hover:text-white hover:shadow-xl transition duration-400 ease-in-out"
          >
            My Tickets
          </button>
        </div>
        <div>
          <button
            onClick={() => handleButtonClick("My-Events")}
            className="h-[5vh] px-2 border-gray-400 border-2 rounded-lg hover:bg-slate-500 hover:text-white hover:shadow-xl transition duration-400 ease-in-out"
          >
            My Events
          </button>
        </div>
      </div>
      {activeButton === "All-Events" && <AllEvents />}
      {activeButton === "Mint-Event" && <MintEvent />}
      {activeButton === "My-Tickets" && <MyTickets />}
      {activeButton === "My-Events" && <MyEvents />}
    </div>
  );
}
