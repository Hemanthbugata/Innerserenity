import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";

export default function Chat() {
  const location = useLocation();
  const { name, gender } = location.state;
  const { type, address } = useParams();
  const [msg, setMsg] = useState("");
  const [allmsgs, setallmsgs] = useState([]);
  const updatearr = () => {
    const newmsg = [...allmsgs, msg];
    setallmsgs(newmsg);
    setMsg("");
  };
  return (
    <div className="flex-2 w-[100%]">
      <div className="h-[10%] flex bg-gray-700 items-center px-3 py-2">
        <img
          src={
            gender == "male"
              ? "/male-user.png"
              : gender == "female"
              ? "/female-user.png"
              : "/prof.png"
          }
          style={{ width: "3rem" }}
        ></img>
        <span className="text-slate-300 relative left-[1em] text-2xl font-mono w-[100%]">
          {name}
        </span>
        <div className="flex justify-end w-[80%] space-x-6 relative right-3">
          <img src="/Vector.png" alt="search" />
          <img src="/call.png" alt="call" />
          <img src="/3-dot.png" alt="dot" />
        </div>
      </div>
      <div className="h-[83%] w-[100%] bg-purple-100 pt-5 px-5">
        {allmsgs.map((m, index) => (
          <div key={index} className="mb-5">
            <span className="border-2 px-5 border-gray-500 rounded-lg py-1">
              {m}
            </span>
          </div>
        ))}
      </div>
      <div className="flex items-center h-[7%] w-full">
        <div className="w-[80%] lg:w-[90%] h-full">
          <input
            type="text"
            placeholder="Enter your Message"
            className="h-full w-full outline-none p-5"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          ></input>
        </div>
        <div className="w-[20%] lg:w-[10%] ">
          <button className="bg-blue-300 w-full h-full p-2" onClick={updatearr}>
            send
          </button>
        </div>
      </div>
    </div>
  );
}
