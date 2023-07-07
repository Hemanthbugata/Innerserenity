import React from "react";
import img from "/astro.jpeg";

export default function MyEvents() {
  // Card data
  const cardData = [
    {
      title: "Importance of Mental Health",
      description:
        "Lorem ipsum dolor sit amet 1Lorem ip ipsum dolor sit amet 1L dolor sit amet 1",
      creator: "*creator address*",
      tickets: "220/300",
      price: 20,
      img: "../event6.jpg",
    },
    {
      title: "Introduction to Yoga",
      description:
        "Lorem ipsum dolor sit amet 1Lorem ip ipsum dolor sit amet 1L dolor sit amet 1",
      creator: "*creator address*",
      tickets: "180/300",
      price: 20,
      img: "../event2.jpg",
    },
    {
      title: "Mind is the key",
      description:
        "Lorem ipsum dolor sit amet 1Lorem ip ipsum dolor sit amet 1L dolor sit amet 1",
      creator: "*creator address*",
      tickets: "100/100",
      price: 20,
      img:"../event4.jpg"
    },
    // Add more card data objects as needed
  ];

  return (
    <div className="flex flex-wrap justify-evenly gap-5 pb-20 items-center mt-16">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="user-card h-[70%] relative flex flex-col rounded-lg w-96 mx-auto bg-gray-200 "
        >
          <img
            className="w-full h-40 mx-auto rounded-lg"
            src={card.img}
            alt="event-icon"
          />
          <div className="text-center mt-3 text-2xl font-bold">
            {card.title}
          </div>
          <div className="text-center mt-2 font-normal text-xl">
            {card.description}
          </div>
          <div className="font-semibold mt-6  text-sm mt-2 text-center">
            Created by: {localStorage.getItem('useraddress')}
          </div>
          <div className="h-[15vh] flex flex-col w-full  mt- items-center justify-center ">
            <div className="h-[6vh] w-full   rounded-2xl flex flex-col justify-center items-center">
              <p className="text-center text-xl font-bold">Tickets Sold: 20</p>
              <p className="text-center text-xl font-bold">Earnings: 4000</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
