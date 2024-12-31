import React from "react";

const VehiclePanel = ({ setvehiclePanelOpen, setconfirmRidePanel }) => {
  return (
    <div>
      <h5
        onClick={() => setvehiclePanelOpen(false)}
        className="p-1 w-[93%] text-center absolute top-0 "
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle </h3>
      <div
        onClick={() => {
          setconfirmRidePanel(true);
        }}
        className="flex w-full mb-2 border-2  bg-gray-50 active:border-black rounded-xl items-center justify-between p-2"
      >
        <img
          className="h-16"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1568134115/assets/6d/354919-18b0-45d0-a151-501ab4c4b114/original/XL.png"
          alt=""
        />
        <div className=" w-1/2">
          <h4 className="font-medium text-lg">
            UberGo
            <span>
              <i className="ri-user-fill">4</i>
            </span>
          </h4>
          <h5 className="font-medium text-md">2 mins away </h5>
          <p className="font-normal text-sm text-gray-600">
            Affordable, compact rides
          </p>
        </div>
        <h2 className="text-xl font-semibold">₹193.20</h2>
      </div>
      <div
        onClick={() => {
          setconfirmRidePanel(true);
        }}
        className="flex w-full mb-2 border-2 bg-gray-50 active:border-black rounded-xl items-center justify-between p-2"
      >
        <img
          className="h-16"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQTJw6dzEo1MYXOAbONCG1oL82rxU_Bitb-g&s"
          alt=""
        />
        <div className=" w-1/2">
          <h4 className="font-medium text-lg">
            Moto
            <span>
              <i className="ri-user-fill">1</i>
            </span>
          </h4>
          <h5 className="font-medium text-md">3 mins away </h5>
          <p className="font-normal text-sm text-gray-600">
            Affordable, motorcycle rides
          </p>
        </div>
        <h2 className="text-xl font-semibold">₹103.20</h2>
      </div>
      <div
        onClick={() => {
          setconfirmRidePanel(true);
        }}
        className="flex w-full mb-2 border-2 bg-gray-50 active:border-black rounded-xl items-center justify-between p-2"
      >
        <img
          className="h-16"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsFabRnJZ8deGXJSKA1QjN45920WytRrdFsA&s"
          alt=""
        />
        <div className=" w-1/2">
          <h4 className="font-medium text-lg">
            UberAuto
            <span>
              <i className="ri-user-fill">3</i>
            </span>
          </h4>
          <h5 className="font-medium text-md">2 mins away </h5>
          <p className="font-normal text-sm text-gray-600">Affordable, rides</p>
        </div>
        <h2 className="text-xl font-semibold">₹113.20</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
