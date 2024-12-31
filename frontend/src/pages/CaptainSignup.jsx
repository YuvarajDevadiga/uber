import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";

const CaptainSignup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const { captain, setCaptain } = useContext(CaptainDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType,
      },
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/register`,
      captainData
    );

    if (response.status === 201) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate("/captain-home");
    }

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setVehicleColor("");
    setVehicleCapacity("");
    setVehiclePlate("");
    setVehicleType("");
  };
  return (
    <div className="p-6 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-20 mb-10 "
          src="https://pngimg.com/d/uber_PNG24.png"
          alt="uber-logo"
        />
        <form onSubmit={submitHandler} action="">
          <h3 className="text-xl mb-2 font-medium">What's your name</h3>
          <div className="flex gap-2">
            <input
              onChange={(e) => setFirstName(e.target.value)}
              className="bg-[#EDEDED] w-1/2 mb-6 rounded px-4 py-2 border  text-lg placeholder:text-base"
              type="text"
              name=""
              placeholder="First Name"
              required
              value={firstName}
            />
            <input
              onChange={(e) => setLastName(e.target.value)}
              className="bg-[#EDEDED] w-1/2 mb-6 rounded px-4 py-2 border  text-lg placeholder:text-base"
              type="text"
              name=""
              placeholder="Last Name"
              value={lastName}
            />
          </div>
          <h3 className="text-xl mb-2 font-medium">What's your email</h3>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#EDEDED] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            name=""
            placeholder="email@example.com"
            required
            value={email}
          />
          <h3 className="text-xl mb-2 font-medium">Enter Password</h3>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#EDEDED] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            name=""
            placeholder="password"
            id=""
            value={password}
            required
          />

          <h3 className="text-xl mb-2 font-medium">Vehicle Information</h3>
          <div className="flex gap-2">
            <input
              onChange={(e) => setVehicleColor(e.target.value)}
              className="bg-[#EDEDED] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
              type="text"
              name=""
              placeholder="Vehicle Color"
              required
              value={vehicleColor}
            />
            <input
              onChange={(e) => setVehiclePlate(e.target.value)}
              className="bg-[#EDEDED] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
              type="text"
              name=""
              placeholder="Vehicle Plate"
              required
              value={vehiclePlate}
            />
          </div>
          <div className="flex gap-4 ">
            <input
              onChange={(e) => setVehicleCapacity(e.target.value)}
              className="bg-[#EDEDED] mb-6  rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base"
              type="number"
              name=""
              placeholder="Vehicle Capacity"
              required
              value={vehicleCapacity}
            />
            <select
              className="bg-[#EDEDED]   mb-6 w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base "
              name=""
              id=""
              required
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
            >
              <option
                className="text-sm px-0 leading-tighter"
                value=""
                disabled
              >
                Select Vehicle Type
              </option>
              <option className="text-sm px-0 " value="motorcycle">
                Moto
              </option>
              <option className="text-sm px-0 " value="auto">
                Auto
              </option>
              <option className="text-sm px-0" value="car">
                Car
              </option>
            </select>
          </div>

          <button className="bg-[#111] mb-3 rounded w-full py-2 px-4 text-xl text-white">
            Create Captain Account
          </button>
        </form>
        <p className="text-center font-semibold">
          Already have a account?&nbsp;
          <Link to={"/captain-login"} className="text-blue-600">
            Login here
          </Link>
        </p>
      </div>
      <div>
        <p className="text-[12px] leading-tight ">
          This site is protected by reCAPTCHA and the{" "}
          <span className="underline">Google Privacy Policy</span> and{" "}
          <span className="underline">Terms of Service apply</span>
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;
