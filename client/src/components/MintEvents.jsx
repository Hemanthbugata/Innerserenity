import React, { useState } from "react";

export default function MintEvents() {
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventPrice, setEventPrice] = useState("");
  const [totalTickets, setTotalTickets] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [submit,setSubmit] = useState(true);

  const handleEventNameChange = (e) => {
    setEventName(e.target.value);
  };

  const handleEventDescriptionChange = (e) => {
    setEventDescription(e.target.value);
  };

  const handleEventPriceChange = (e) => {
    setEventPrice(e.target.value);
  };

  const handleTotalTicketsChange = (e) => {
    setTotalTickets(e.target.value);
  };

  const handleStartTimeChange = (e) => {
    setStartTime(e.target.value);
  };

  const handleEndTimeChange = (e) => {
    setEndTime(e.target.value);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any further processing or API calls with the stored values
    // Reset the form
    setEventName("");
    setEventDescription("");
    setEventPrice("");
    setTotalTickets("");
    setStartTime("");
    setEndTime("");
    setImage(null);
    setImagePreview(null);
  };

  return (
    <div className="h-fill w-full flex justify-center items-center bg-purple-100">
      <div className="border-2 flex flex-col border-black h-fill w-[70vh] mt-6 items-center shadow-xl mb-10 space-y-10 pt-10 hover:border-green-300 bg-white">
        <span className="font-bold text-2xl underline">
          Mint Your Own Event!
        </span>
        <span className="text-sm font-bold -mb-28">on Fantom Network</span>
        <form className="flex flex-col px-20  space-y-10" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Event Name"
            value={eventName}
            onChange={handleEventNameChange}
            className={`border-black border-b-2 outline-none w-[49vh] ${
              eventName ? "border-green-400" : ""
            }`}
          />
          <textarea
            placeholder="Event Description"
            value={eventDescription}
            onChange={handleEventDescriptionChange}
            className={`border-black border-b-2 outline-none ${
              eventDescription ? "border-green-400" : ""
            }`}
          ></textarea>
          <input
            type="text"
            placeholder="Event Price in Fantom"
            value={eventPrice}
            onChange={handleEventPriceChange}
            className={`border-black border-b-2 outline-none ${
              eventPrice ? "border-green-400" : ""
            }`}
          />
          <input
            type="number"
            placeholder="Total Tickets"
            value={totalTickets}
            onChange={handleTotalTicketsChange}
            className={`border-black border-b-2 outline-none ${
              totalTickets ? "border-green-400" : ""
            }`}
          />
          <input
            type="datetime-local"
            value={startTime}
            onChange={handleStartTimeChange}
            required
            className={`border-black outline-none ${
              startTime ? "border-green-400" : ""
            }`}
          />
          <label className="text-gray-400 relative -top-10">
            {startTime ? "Start Time" : "Select Start Time"}
          </label>

          <input
            type="datetime-local"
            value={endTime}
            onChange={handleEndTimeChange}
            required
            className={`border-black outline-none relative -top-10 ${
              endTime ? "border-green-400" : ""
            }`}
          />
          <label className="text-gray-400 relative -top-16">
            {endTime ? "End Time" : "Select End Time"}
          </label>

          <div className="relative -top-10 flex flex-col items-center justify-center">
            <label htmlFor="imageUpload" className="cursor-pointer">
              <span className="text-gray-600">Upload your event picture </span>
              <input
                id="imageUpload"
                className="hidden"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </label>
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Uploaded"
                className="mt-4 rounded-lg shadow-lg w-[80%]"
              />
            )}
          </div>
          <div className="pb-10 flex items-center justify-center">
          <button className="border-black border-2 h-[5vh] w-[20vh] rounded-lg hover:bg-purple-400" type="Mint Event">
            Mint
          </button>
          </div>
        </form>
      </div>
    </div>
  );
}