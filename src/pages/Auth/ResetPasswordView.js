import React, { useState } from "react";
import { AuthLayout } from "../../components/Layout";

const ResetPasswordView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [activeReset, setActiveReset] = useState(false);

  const toggleResetPassword = () => {
    setIsLoading(true);
    setTimeout(() => {
      setActiveReset(true);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <AuthLayout url="auth" urlPath="register">
      {/* Form Container */}
      <div className="justify-center items-center px-[30rem] mt-[15rem]">
        <h2 className="text-6xl text-black-100 my-2 font-bold text-left">
          Reset Password ?
        </h2>

        {activeReset ? (
          <div className="py-4 flex-col space-y-3 mr-10">
            <p className="text-black-100 text-lg font-normal">
              We've have sent a link to reset your password to{" "}
              <strong className="font-bold">name@mailaddress.com</strong>{" "}
            </p>
            <p className="text-black-100 text-base font-normal">
              Check your email (including spam) and click black button. If no
              email arrives within a minute, try another email address or
              contact support via contact form or Intercom
            </p>
          </div>
        ) : (
          <div className="py-4 flex-col mr-[18rem]">
            <input
              className="border-white bg-white w-full border-[1px] rounded-md py-3 placeholder-[#d2cfcf] px-3 my-2 text-sm focus:border-[#0073ba9f] focus:ring-[#0073ba9f]"
              name="emailAddress"
              type="text"
              placeholder="name@mailaddress.com"
            />

            <button
              className="bg-black-100 hover:bg-[#8960A6] py-3 px-8 mt-3 rounded-md text-base text-white w-full text-center font-semibold"
              onClick={toggleResetPassword}
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
              Send reset link
            </button>
          </div>
        )}
      </div>
    </AuthLayout>
  );
};

export default ResetPasswordView;
