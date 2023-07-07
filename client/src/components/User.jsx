import React, { useState } from "react";
import "../index.css";
export default function User({ name, age, gender }) {
  // const [name,setName] = useState("suraj")
  // const [gender,setGender] = useState("male")
  // const [age,setAge] = useState(17)
  // const usertype = ""
  return (
    <>
      {/* <div className=""> */}
        <div className="user-card rounded-lg w-96  bg-white pb-10 mt-20">
          <img
            className="w-40 mx-auto rounded-full -mt-20 border-white"
            src={`../${
              gender === "male" ? "male-user.png" : "female-user.png"
            }`}
            alt="user-icon"
            style={{ border: "7px solid white" }}
          />
          <div className="text-center mt-3 text-3xl font-bold">{name}</div>
          <div className="text-center mt-2 font-semibold text-lg">Age: {age}</div>
          <div className="text-center font-semibold text-lg">Gender: {gender}</div>
        </div>
      {/* </div> */}
    </>
  );
}
