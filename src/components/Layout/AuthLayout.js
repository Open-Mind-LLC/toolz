import React from "react";
import Header from "./commons/Header";

const AuthLayout = ({ children, url, urlPath }) => {
  return (
    <main className="flex min-h-screen flex-row flex-start bg-white">
      <div className={`flex-1 flex-col bg-orange-100 px-10`}>
        <Header typeUrl={url} path={urlPath} />
        {children}
      </div>
    </main>
  );
};

export default AuthLayout;
