import React from "react";
import { TailSpin } from "react-loader-spinner";

export default function Loader() {
  return (
    <div>
      <div className="flex justify-center items-center" style={{height:"100vh"}}>
        <TailSpin
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    </div>
  );
}
