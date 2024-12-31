import React from "react";

const ConfirmRide = ({ setconfirmRidePanel, setVehicleFound }) => {
  return (
    <div>
      <h5
        onClick={() => setconfirmRidePanel(false)}
        className="p-1 w-[93%] text-center absolute top-0 "
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Confirm your Ride </h3>
      <div className="flex gap-4 flex-col justify-between items-center">
        <img
          className="h-20"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1568134115/assets/6d/354919-18b0-45d0-a151-501ab4c4b114/original/XL.png"
          alt="car-img"
        />
        <div className="w-full mt-2">
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
          <div className="flex items-center text-lg gap-4 p-3 border-b-2">
            <i className="ri-currency-line"></i>
            <div className="">
              <h3 className="text-lg font-medium">₹193.20</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash cash</p>
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            setVehicleFound(true);
          }}
          className="w-full mt-2 bg-green-600 text-white font-semibold p-2 rounded-lg text-lg "
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmRide;
