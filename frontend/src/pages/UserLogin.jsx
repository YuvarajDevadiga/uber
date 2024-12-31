import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import axios from "axios";
const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user, setUser } = useContext(UserDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/login`,
      userData
    );

    if (response.status === 200) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem("token", data.token);
      navigate("/home");
    }
    setEmail("");
    setPassword("");
  };
  return (
    <div className="p-6 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-20 mb-10 "
          src="https://cdn.freelogovectors.net/wp-content/uploads/2023/05/uber-logo-freelogovectors.net_.png"
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
          New here?&nbsp;
          <Link to={"/signup"} className="text-blue-600">
            Create new Account
          </Link>
        </p>
      </div>
      <div>
        <Link
          to={"/captain-login"}
          className="bg-[#0FB660] flex items-center justify-center rounded w-full py-2 px-4 text-xl text-white"
        >
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
