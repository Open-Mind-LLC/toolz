import React, { Fragment, useState } from "react";
import { AuthLayout } from "../../components/Layout";

const LoginView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [activePass, setActivePass] = useState(false);

  const toggleUserPassword = () => {
    setIsLoading(true);
    setTimeout(() => {
      setActivePass(true);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <AuthLayout>
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
            <a
              href="/account/password-reset/"
              className="text-right text-[#8960A6] text-sm font-normal my-2"
            >
              Forgot Password?
            </a>
          </div>

          <button
            className="bg-black-100 hover:bg-[#8960A6] py-3 px-8 mt-3 rounded-md text-base text-white w-full text-center font-semibold"
            onClick={toggleUserPassword}
          >
            Continue
          </button>
        </div>

        <p className="text-black-100 text-sm font-light my-4">
          By continuing to browse our site you are accepting our{" "}
          <a className="text-[#8960A6] hover:underline font-normal" href="/">
            Cookie Policy
          </a>{" "}
          and{" "}
          <a className="text-[#8960A6] hover:underline font-normal" href="/">
            Term's of Use
          </a>
        </p>
      </div>
    </AuthLayout>
  );
};

export default LoginView;

/* Color Theme Swatches in Hex */
// .Color-de-la-marca-1-hex { color: #109BBD; }
// .Color-de-la-marca-2-hex { color: #4EBFAB; }
// .Color-de-la-marca-3-hex { color: #8960A6; }
// .Color-de-la-marca-4-hex { color: #F6B224; }
// .Color-de-la-marca-5-hex { color: #F7C86D; }

// /* Color Theme Swatches in RGBA */
// .Color-de-la-marca-1-rgba { color: rgba(16, 154, 188, 1); }
// .Color-de-la-marca-2-rgba { color: rgba(77, 191, 170, 1); }
// .Color-de-la-marca-3-rgba { color: rgba(137, 96, 165, 1); }
// .Color-de-la-marca-4-rgba { color: rgba(246, 177, 35, 1); }
// .Color-de-la-marca-5-rgba { color: rgba(246, 200, 109, 1); }

// /* Color Theme Swatches in HSLA */
// .Color-de-la-marca-1-hsla { color: hsla(191, 84, 40, 1); }
// .Color-de-la-marca-2-hsla { color: hsla(169, 46, 52, 1); }
// .Color-de-la-marca-3-hsla { color: hsla(275, 28, 51, 1); }
// .Color-de-la-marca-4-hsla { color: hsla(40, 92, 55, 1); }
// .Color-de-la-marca-5-hsla { color: hsla(39, 89, 69, 1); }
