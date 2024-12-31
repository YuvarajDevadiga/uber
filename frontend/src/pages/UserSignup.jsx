import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/UserContext";
const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const navigate = useNavigate();
  const { user, setUser } = useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
    };
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/register`,
      newUser
    );

    if (response.status === 201) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem("token", data.token);
      navigate("/home");
    }

    setFirstName("");
    setLastName("");
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
          <button className="bg-[#111] mb-3 rounded w-full py-2 px-4 text-xl text-white">
            Create account
          </button>
        </form>
        <p className="text-center font-semibold">
          Already have a account?&nbsp;
          <Link to={"/signup"} className="text-blue-600">
            Login
          </Link>
        </p>
      </div>
      <div>
        <p className="text-[12px] leading-tight ">
          This site is protected by reCAPTCHA and the
          <span className="underline">Google Privacy Policy</span> and{" "}
          <span className="underline">Terms of Service apply</span>
        </p>
      </div>
    </div>
  );
};

export default UserSignup;
