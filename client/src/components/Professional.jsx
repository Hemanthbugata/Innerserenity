import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../index.css";
import { Dropdown } from "rsuite";
export default function Professional({
  useraddress,
  name,
  specialization,
  available,
  totalRatings,
  totalScore,
}) {
  const [ntr, setntr] = useState(totalRatings);
  const [nts, setnts] = useState(totalScore);
  const [reqapped, setReqapp] = useState(false);
  const [clicked, setClicked] = useState(false);
  // const [cnt, setCnt] = useState(0);
  const url = import.meta.env.VITE_APP_BACKEND_URL;

  const updaterate = async (starcnt) => {
    // e.preventDefault();
    try {
      await axios.post(`${url}/api/updaterating/${useraddress}`, {
        totalRatings: totalRatings + 1,
        totalScore: (totalScore * totalRatings + starcnt) / (totalRatings + 1),
      });
      setntr(totalRatings + 1);
      setnts((totalScore * totalRatings + starcnt) / (totalRatings + 1));
    } catch (error) {
      console.log(error);
    }
    setClicked(false);
  };
  return (
    <>
      {/* <div>
        <Dropdown title="Dropdown">
          <Dropdown.Item>New File</Dropdown.Item>
          <Dropdown.Item>New File with Current Profile</Dropdown.Item>
          <Dropdown.Item>Download As...</Dropdown.Item>
          <Dropdown.Item>Export PDF</Dropdown.Item>
          <Dropdown.Item>Export HTML</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>About</Dropdown.Item>
        </Dropdown>
      </div> */}
      {/* <div className="bg-gray-200 h-screen w-full flex justify-center items-center"> */}
      <div className="user-card relative flex flex-col rounded-lg w-96 mx-auto bg-white pb-5 mt-20">
        <div className="mx-2 py-2">
          <button
            className={`${
              available ? "bg-green-200" : "bg-gray-200"
            } rounded-full px-3 py-1`}
            style={{ float: "right" }}
          >
            {available ? "available" : "unavailable"}
          </button>
          {reqapped ? (
            <>
              <Link
                to={`/chat/p/${useraddress}`}
                state={{ name: name, gender: "p" }}
              >
                <button className="ms-2">
                  <img src="/chat.png" className="w-5" alt="chat-icon" />
                </button>
              </Link>
            </>
          ) : (
            <></>
          )}
        </div>
        <img
          className="w-40 mx-auto -mt-20 rounded-full "
          src="../prof.png"
          alt="user-icon"
        />
        <div className="text-center mt-3 text-3xl font-bold">{name}</div>
        <div className="text-center mt-2 font-semibold text-lg">
          Specialized In: {specialization}
        </div>
        {clicked ? (
          <>
            <div className="flex flex-row-reverse justify-center ms-10 mt-5 -mb-5">
              <i
                className=" fa-solid fa-star text-yellow-500 peer peer-hover:text-yellow-800 hover:text-yellow-800 w-12 h-12"
                onClick={() => updaterate(5)}
              ></i>
              <i
                className=" fa-solid fa-star text-yellow-500 peer peer-hover:text-yellow-800 hover:text-yellow-800 w-12 h-12"
                onClick={() => updaterate(4)}
              ></i>
              <i
                className=" fa-solid fa-star text-yellow-500 peer peer-hover:text-yellow-800 hover:text-yellow-800 w-12 h-12"
                onClick={() => updaterate(3)}
              ></i>
              <i
                className=" fa-solid fa-star text-yellow-500 peer peer-hover:text-yellow-800 hover:text-yellow-800 w-12 h-12"
                onClick={() => updaterate(2)}
              ></i>
              <i
                className=" fa-solid fa-star text-yellow-500 peer peer-hover:text-yellow-800 hover:text-yellow-800 w-12 h-12"
                onClick={() => updaterate(1)}
              ></i>
            </div>
          </>
        ) : (
          <>
            <div
              className="flex mt-2 justify-center items-center"
              onClick={() => setClicked(true)}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Rating star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <p className="text-sm font-bold ">{nts}</p>
              <p className="text-sm ms-1 font-semibold">({ntr} reviews)</p>
            </div>
          </>
        )}
        <div className="mx-auto my-4">
          {available ? (
            <>
              {reqapped ? (
                <>
                  <button
                    className="bg-gray-600 text-white px-4 py-2 rounded-full"
                    onClick={() => setReqapp(true)}
                  >
                    Appointment Requested
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="bg-black text-white px-4 py-2 rounded-full"
                    onClick={() => setReqapp(true)}
                  >
                    Request Appointment
                  </button>
                </>
              )}
            </>
          ) : (
            <>
              <button
                    className="bg-gray-500 text-white px-4 py-2 rounded-full"
                    disabled
                  >
                    Request Appointment
                  </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
