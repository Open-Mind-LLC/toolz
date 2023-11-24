import React, { Fragment, useState } from "react";
import { AuthLayout } from "../../components/Layout";
import { Link } from "react-router-dom";

const LoginView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [activeUser, setActiveUser] = useState(false);

  const toggleUserLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setActiveUser(true);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <AuthLayout url="auth" urlPath="login">
      {/* Form Container */}
      <div className="justify-center items-center px-[40rem] mt-[10rem]">
        <h2 className="text-3xl text-black-100 my-2 font-bold text-center">
          Sign in
        </h2>

        <div className="py-2 flex flex-col space-y-2">
          <div className="flex flex-row justify-center items-center bg-white border-white w-full border-[1px] rounded-md space-x-2">
            <img
              className="m-0 w-[25px] h-[25px] my-3"
              src={require("../../assets/google-logo-icon.png")}
              alt="Google Logo"
            />
            <a
              href="/"
              className=" text-black-100 py-3 text-left text-sm rounded-r-md font-normal"
            >
              Sign in with Google
            </a>
          </div>
        </div>

        <div className="py-2 flex flex-col space-y-2">
          <div className="flex flex-row justify-center items-center bg-white border-white w-full border-[1px] rounded-md space-x-2">
            <img
              className="m-0 w-[25px] h-[25px] my-3"
              src={require("../../assets/office-logo-icon.png")}
              alt="Google Logo"
            />
            <a
              href="/"
              className="text-black-100 py-3 text-left text-sm rounded-r-md font-normal"
            >
              Sign in with Microsoft
            </a>
          </div>
        </div>

        <div className="py-2 justify-center flex flex-row items-center">
          <div className="border-[#f7bd6d] border-[0.5px] w-full basis-2/5" />
          <p className="text-sm text-black-100 basis-1/5 text-center font-semibold px-0.5 uppercase">
            Or
          </p>
          <div className="border-[#f7bd6d] border-[0.5px] w-full basis-2/5" />
        </div>

        <div className="py-4 flex-col">
          <input
            className="border-white bg-white w-full border-[1px] rounded-md py-3 placeholder-[#d2cfcf] px-3 my-2 text-sm focus:border-[#0073ba9f] focus:ring-[#0073ba9f]"
            name="emailAddress"
            type="text"
            placeholder="name@scholemailaddress.com"
          />

          <input
            className="border-white bg-white w-full border-[1px] rounded-md py-3 placeholder-[#d2cfcf] px-3 my-2 text-sm focus:border-[#0073ba9f] focus:ring-[#0073ba9f]"
            name="password"
            type="password"
            placeholder="********"
          />

          <div className="flex justify-end items-end">
            <Link
              to="/account/password-reset/"
              className="text-right text-[#8960A6] text-sm font-normal my-2"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            className="bg-black-100 hover:bg-[#8960A6] py-3 px-8 mt-3 rounded-md text-base text-white w-full text-center font-normal"
            onClick={toggleUserLogin}
          >
            {isLoading && (
              <div
                className="animate-spin inline-block w-4 h-4 border-[2.5px] border-current border-t-transparent text-[#fff] rounded-full dark:text-[#fff] mr-2 -mb-0.5"
                role="status"
                aria-label="loading"
              >
                <span className="sr-only">Loading...</span>
              </div>
            )}
            Continue
          </button>

          {/* <button
            className="bg-black-100 hover:bg-[#8960A6] py-3 px-8 mt-3 rounded-md text-base text-white w-full text-center font-semibold"
            onClick={toggleUserPassword}
          >
            Continue
          </button> */}
        </div>

        <p className="text-black-100 text-sm font-light my-4">
          By continuing to browse our site you are accepting our{" "}
          <Link className="text-[#8960A6] hover:underline font-normal" to="/">
            Cookie Policy
          </Link>{" "}
          and{" "}
          <Link className="text-[#8960A6] hover:underline font-normal" to="/">
            Term's of Use
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default LoginView;
