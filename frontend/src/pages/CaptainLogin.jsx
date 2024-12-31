import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
const CaptainLogin = () => {
  const navigate = useNavigate();
  const { captain, setCaptain } = useContext(CaptainDataContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    const captain = { email: email, password: password };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/login`,
      captain
    );
    if (response.status == 200) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate("/captain-home");
    }
    setEmail("");
    setPassword("");
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
          <button className="bg-[#111] mb-3 rounded w-full py-2 px-4 text-xl text-white">
            Login
          </button>
        </form>
        <p className="text-center font-semibold">
          Join a fleet? &nbsp;
          <Link to={"/captain-signup"} className="text-blue-600">
            Register as a Captain
          </Link>
        </p>
      </div>
      <div>
        <Link
          to={"/login"}
          className="bg-[#C05B3B] flex items-center justify-center rounded w-full py-2 px-4 text-xl text-white"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
