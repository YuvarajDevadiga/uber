import React from "react";

const WaitForDriver = (props) => {
  return (
    <div>
      <h5
        onClick={() => props.waitingForDriver(false)}
        className="p-1 w-[93%] text-center absolute top-0 "
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5 text-center">
        Meet at pick up point{" "}
      </h3>

      <div className="flex items-center justify-between">
        <img
          className="h-16"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXJr-fGkiy1DE5A0JNOkcmCNGcXuQXdzENZA&s"
          alt=""
        />
        <div className="text-right">
          <h2 className="text-lg font-medium text-gray-800 ">Yuvaraj</h2>
          <h4 className="text-2xl font-semibold -my-1">MP04 AB 1234</h4>
          <p className="text-md text-gray-600">Maruti Suzuki Alto</p>
        </div>
      </div>

      <div className="flex gap-4 flex-col justify-between items-center">
        <div className="w-full mt-4">
          <div className="flex items-center text-lg gap-4 p-3 border-b-2">
            <i className="ri-map-pin-range-fill"></i>
            <div className="">
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kankariay Talab, Ahmedabadh
              </p>
            </div>
          </div>
          <div className="flex items-center text-lg gap-4 p-3 border-b-2">
            <i className="ri-map-pin-2-fill"></i>
            <div className="">
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kankariay Talab, Ahmedabadh
              </p>
            </div>
          </div>
          <div className="flex items-center text-lg gap-4 pb-8 p-3 border-b-2">
            <i className="ri-currency-line"></i>
            <div className="">
              <h3 className="text-lg font-medium">₹193.20</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash cash</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitForDriver;
