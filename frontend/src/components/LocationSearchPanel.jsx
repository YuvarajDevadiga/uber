import React from "react";

const LocationSearchPanel = ({ setpanelOpen, setvehiclePanelOpen }) => {
  const locations = [
    "24B, Near Bengalur, HSR Layout, Kudlu road 560056 road side",
    "22A, Near Bengalur, HSR Layout, Kudlu road 560056 road side",
    "20U, Near Bengalur, HSR Layout, Kudlu road 560056 road side",
  ];
  return (
    <div className="">
      {locations.map((location,idx) => (
        <div key={idx}
          onClick={() => {
            setvehiclePanelOpen(true);
            setpanelOpen(false);
          }}
          className="flex justify-start border-2  p-2 rounded-xl border-gray-50 active:border-black  gap-4 items-center my-2"
        >
          <h2>
            <i className="ri-map-pin-fill text-2xl bg-gray-200 rounded-full p-2"></i>
          </h2>
          <h4 className="text-lg font-medium">{location}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
