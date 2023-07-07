import React from "react";
import "../index.css";
const Home = () => {
  return (
    <div className="">
      <div className="flex flex-wrap justify-center items-center px-4 lg:px-40 mt-8">
        <div className="lg:w-1/2 mx-auto ">
          <p className="font-bold text-6xl text-green-600 text-center">
            InnerSerenity
          </p>
          <p className="font-bold text-2xl p-6" style={{ color: "#57494b" }}>
            Unlock the Fantom-AWS Gateway to Inner Peace with InnerSerenity
          </p>
          <div className="  block lg:hidden">
          <img src="../prof-reg.jpg" alt="hero-1" className="w-2/3 mx-14 my-8" />
        </div>
          <p className="text-xl font-semibold">
            Experience the magic of InnerSerenity, where the Fantom-AWS
            blockchain platform meets mental health support. Connect with
            qualified professionals and supportive peers in a secure and private
            space. Discover transparency through feedback and ratings, making
            informed choices for your well-being. Accessible and affordable,
            InnerSerenity breaks barriers to mental health services.
          </p>
        </div>
        <div className="w-2/5 hidden lg:block my-auto ">
          <img src="../prof-reg.jpg" alt="hero-1" />
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center px-4 lg:px-40  lg:mt-16 ">
        <div className="lg:w-1/2 hidden lg:block w-full sm:mb-20 my-auto">
          <img src="../hero.png" alt="hero-2" />
        </div>
        <div className="lg:w-1/2 mx-auto">
          <p className="text-xl font-semibold pt-5">
            Enhance your journey with our unique event ticketing feature.
            Immerse yourself in specialized events, guided by experts issuing
            ERC1155 tokens. Embrace personal growth and enlightenment through
            engaging experiences. InnerSerenity empowers you to find balance,
            harmony, and inner peace. 
            <span className="mt-5 block mb-16 lg:mb-0">
              Join us now and unlock the gateway to your InnerSerenity. Experience
              the transformative potential of blockchain technology, as we create
              a connected, resilient, and serene future together.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
