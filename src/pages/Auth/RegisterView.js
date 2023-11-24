import React, { Fragment, useState } from "react";
import { AuthLayout } from "../../components/Layout";
import { Link } from "react-router-dom";

const RegisterView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [onboardUser, setOnboardUser] = useState(false);

  const toggleOnboardUser = () => {
    setIsLoading(true);
    setTimeout(() => {
      setOnboardUser(true);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <AuthLayout url="auth" urlPath="register">
      {/* Form Container */}
      <div
        className={`justify-center items-center ${
          onboardUser ? "px-[30rem] mt-[12rem]" : "px-[40rem] mt-[10rem]"
        } `}
      >
        <h2
          className={`${
            onboardUser ? "text-6xl text-left" : "text-3xl text-center"
          } text-black-100 my-2 font-bold`}
        >
          Sign Up
        </h2>

        {onboardUser ? (
          <div className="py-4 mr-10">
            <div className="space-y-3">
              <p className="text-black-100 text-xl font-normal">
                We've have sent a link to reset your password to{" "}
                <strong className="font-bold">name@mailaddress.com</strong>{" "}
              </p>

              <p className="text-black-100 text-base font-normal">
                Check your email (including spam) and click black button. If no
                email arrives within a minute, try another email address or
                contact support via contact form or Intercom
              </p>
            </div>

            <div className="py-2 justify-center flex flex-row items-center mr-[14rem]">
              <div className="border-[#f7bd6d] border-[0.5px] w-full basis-2/5" />
              <p className="text-sm text-black-100 basis-1/5 text-center font-semibold px-0.5 uppercase">
                Or
              </p>
              <div className="border-[#f7bd6d] border-[0.5px] w-full basis-2/5" />
            </div>

            <div className="py-2 flex flex-col space-y-3 mr-[14rem]">
              <div className="flex flex-row justify-center items-center border-white bg-white hover:bg-[#8960A6] hover:border-[#8960A6] w-full border-[1px] rounded-md space-x-2">
                <img
                  className="m-0 w-[25px] h-[25px] my-3"
                  src={require("../../assets/google-logo-icon.png")}
                  alt="Google Logo"
                />
                <Link
                  to="/"
                  className="text-black-100 hover:text-white py-3 text-left text-sm rounded-r-md"
                >
                  Open Gmail
                </Link>
              </div>

              <div className="flex flex-row justify-center items-center border-white bg-white hover:bg-[#8960A6] hover:border-[#8960A6] w-full border-[1px] rounded-md space-x-2">
                <img
                  className="m-0 w-[25px] h-[25px] my-3"
                  src={require("../../assets/office-logo-icon.png")}
                  alt="Google Logo"
                />
                <Link
                  to="/"
                  className=" text-black-100 py-3 text-left text-sm rounded-r-md hover:text-white"
                >
                  Open Microsoft
                </Link>
              </div>

              <div className="flex flex-row justify-center items-center border-black-100 bg-black-100 hover:bg-[#8960A6] hover:border-[#8960A6] w-full border-[1px] rounded-md space-x-2">
                <Link
                  to="/"
                  className=" text-white py-3 text-left text-sm rounded-r-md"
                >
                  Resend Verification email
                </Link>
              </div>

              {/* <div className="flex flex-row justify-center items-center border-white bg-white w-full border-[1px] rounded-md space-x-2">
                <Link
                  href="/"
                  className=" text-[#757575] py-3 text-left text-sm rounded-r-md"
                >
                  Contact Support
                </Link>
              </div> */}
            </div>
          </div>
        ) : (
          <Fragment>
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
                  Sign up with Google
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
                  Sign up with Microsoft
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
                placeholder="name@emailaddress.com"
              />

              <input
                className="border-white bg-white w-full border-[1px] rounded-md py-3 placeholder-[#d2cfcf] px-3 my-2 text-sm focus:border-[#0073ba9f] focus:ring-[#0073ba9f]"
                name="password"
                type="password"
                placeholder="********"
              />

              <button
                className="bg-black-100 hover:bg-[#8960A6] py-3 px-8 mt-3 rounded-md text-base text-white w-full text-center font-normal"
                onClick={toggleOnboardUser}
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
                Get Started
              </button>

              <p className="text-black-100 text-sm font-light my-4">
                By continuing to browse our site you are accepting our{" "}
                <Link
                  className="text-[#8960A6] hover:underline font-normal"
                  to="/"
                >
                  Cookie Policy
                </Link>{" "}
                and{" "}
                <Link
                  className="text-[#8960A6] hover:underline font-normal"
                  to="/"
                >
                  Term's of Use
                </Link>
              </p>
            </div>
          </Fragment>
        )}
      </div>
    </AuthLayout>
  );
};

export default RegisterView;
