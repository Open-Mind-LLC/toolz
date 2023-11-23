import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <main className="flex min-h-screen flex-row flex-start bg-white">
      <div className={`flex-1 flex-col bg-white px-10`}>{children}</div>
      <div className={`flex-1 bg-primary my-8 rounded-l-md`} />
    </main>
  );
};

export default AuthLayout;
