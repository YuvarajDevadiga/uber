import React, { useState, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitForDriver from "../components/WaitingForDriver";
const Home = () => {
  const [pickup, setpickup] = useState("");
  const [destination, setdestination] = useState("");
  const [panelOpen, setpanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const [vehiclePanelOpen, setvehiclePanelOpen] = useState(false);
  const vehiclePanelRef = useRef(null);
  const [confirmRidePanel, setconfirmRidePanel] = useState(false);
  const confirmRidePanelRef = useRef(null);

  const [vehicleFound, setVehicleFound] = useState(false);
  const vehicleFoundRef = useRef(null);

  const [waitingForDriver, setWaitingForDriver] = useState(false);
  const waitingForDriverRef = useRef(null);

  const submitHandler = () => {
    e.preventDefault();
  };

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: "75%",
        padding: 16,
        // opacity: 1,
      });
      gsap.to(panelCloseRef.current, {
        opacity: 1,
      });
    } else {
      gsap.to(panelRef.current, {
        height: "0%",
        // opacity: 0,
        padding: 0,
      });
      gsap.to(panelCloseRef.current, {
        opacity: 0,
      });
    }
  }, [panelOpen]);

  useGSAP(() => {
    if (vehiclePanelOpen) {
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [vehiclePanelOpen]);

  useGSAP(() => {
    if (confirmRidePanel) {
      gsap.to(confirmRidePanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(confirmRidePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [confirmRidePanel]);

  useGSAP(() => {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [vehicleFound]);

  useGSAP(() => {
    if (waitingForDriver) {
      gsap.to(waitingForDriverRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(waitingForDriverRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [waitingForDriver]);

  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-16 absolute left-5 top-5"
        src="https://cdn.freelogovectors.net/wp-content/uploads/2023/05/uber-logo-freelogovectors.net_.png"
        alt=""
      />
      <div className="h-screen w-screen">
        {/* image for teporary use */}
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className=" flex flex-col justify-end absolute h-screen top-0 w-full ">
        <div className="h-[25%] p-5 bg-white relative">
          <h5
            ref={panelCloseRef}
            onClick={() => setpanelOpen(false)}
            className="absolute right-5 top-5 text-2xl opacity-0"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-3xl font-semibold mb-2">Find a trip</h4>
          <form onSubmit={(e) => submitHandler(e)}>
            <div className="line absolute h-16 w-1 top-[47%] left-10 rounded-full bg-gray-900"></div>
            <input
              onClick={() => setpanelOpen(true)}
              onChange={(e) => setpickup(e.target.value)}
              className="bg-[#eee] px-10 py-2 text-lg rounded-lg w-full mt-4"
              type="text"
              placeholder="Add a pick-up location"
              name=""
              id=""
              value={pickup}
            />
            <input
              onClick={() => setpanelOpen(true)}
              onChange={(e) => setdestination(e.target.value)}
              className="bg-[#eee] px-10 py-2 text-lg rounded-lg w-full mt-4"
              type="text"
              placeholder="Enter your destination"
              name=""
              id=""
              value={destination}
            />
          </form>
        </div>
        <div ref={panelRef} className=" bg-white  h-0 ">
          <LocationSearchPanel
            setpanelOpen={setpanelOpen}
            setvehiclePanelOpen={setvehiclePanelOpen}
          />
        </div>
      </div>

      <div
        ref={vehiclePanelRef}
        className="fixed z-10 bottom-0 translate-y-full bg-white w-full px-2 py-8"
      >
        <VehiclePanel
          setconfirmRidePanel={setconfirmRidePanel}
          setvehiclePanelOpen={setvehiclePanelOpen}
        />
      </div>
      <div
        ref={confirmRidePanelRef}
        className="fixed z-10 bottom-0 translate-y-full bg-white w-full px-2 py-6"
      >
        <ConfirmRide
          setconfirmRidePanel={setconfirmRidePanel}
          setVehicleFound={setVehicleFound}
        />
      </div>
      <div
        ref={vehicleFoundRef}
        className="fixed z-10 bottom-0 translate-y-full bg-white w-full px-2 py-6"
      >
        <LookingForDriver setVehicleFound={setVehicleFound} />
      </div>

      <div
        ref={waitingForDriverRef}
        className="fixed z-10 bottom-0 translate-y-full  bg-white w-full px-2 py-6"
      >
        <WaitForDriver waitingForDriver={waitingForDriver} />
      </div>
    </div>
  );
};

export default Home;
