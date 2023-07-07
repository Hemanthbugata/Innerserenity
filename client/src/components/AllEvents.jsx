import React, { useState } from "react";
// import img from "/astro.jpeg";
import Event from "./Event";
export default function AllEvents() {
  // Card data
  const cardData = [
    {
      title: "Importance of Mental Health",
      description:
        "Lorem ipsum dolor sit amet 1Lorem ip ipsum dolor sit amet 1L dolor sit amet 1",
      creator: "*creator address*",
      tickets: "220/300",
      price: 20,
      img:"../event6.jpg"
    },
    {
      title: "Introduction to Yoga",
      description:
        "Lorem ipsum dolor sit amet 1Lorem ip ipsum dolor sit amet 1L dolor sit amet 1",
      creator: "*creator address*",
      tickets: "180/300",
      price: 20,
      img:"../event2.jpg"
    },
    {
      title: "World Health Day",
      description:
        "Lorem ipsum dolor sit amet 1Lorem ip ipsum dolor sit amet 1L dolor sit amet 1",
      creator: "*creator address*",
      tickets: "120/200",
      price: 20,
      img:"../event3.jpg"
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
    {
      title: "Meditation",
      description:
        "Lorem ipsum dolor sit amet 1Lorem ip ipsum dolor sit amet 1L dolor sit amet 1",
      creator: "*creator address*",
      tickets: "180/300",
      price: 20,
      img:"../event5.jpg"
    },
    {
      title: "Mental health intro",
      description:
        "Lorem ipsum dolor sit amet 1Lorem ip ipsum dolor sit amet 1L dolor sit amet 1",
      creator: "*creator address*",
      tickets: "180/300",
      price: 20,
      img:"../event1.jpg"
    },
    // Add more card data objects as needed
  ];

  return (
    <div className="flex flex-wrap justify-evenly gap-5 py-5 mt-5 ">
      {cardData.map((card, index) => (
        <Event
          key={index}
          title={card.title}
          description={card.description}
          creator={card.creator}
          tickets={card.tickets}
          price={card.price}
          img={card.img}
        />
      ))}
    </div>
  );
}
