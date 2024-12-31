import React from "react";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div>
      <div className="h-screen bg-cover bg-center bg-[url(https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/c5310f182519763.652f3606b64b0.jpg)] pt-10 w-full flex flex-col justify-between">
        <img
          className="w-40 ml-8"
          src="https://cdn.freelogovectors.net/wp-content/uploads/2023/05/uber-logo-freelogovectors.net_.png"
          alt="uber-logo"
        />
        <div className="bg-white py-4 px-4 pb-8">
          <h2 className="text-2xl font-semibold">Get Started with Uber</h2>
          <Link
            to={"/login"}
            className="w-full block text-center bg-black text-white py-3 text-xl rounded-md mt-4"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Start;
