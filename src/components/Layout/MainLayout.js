import React from "react";

const MainLayout = ({ authType, children }) => {
  return (
    <main className="flex min-h-screen flex-row flex-start bg-white">
      <div
        className={`${
          authType !== "register" ? "basis-1/4" : "basis-3/5"
        } flex-1 flex-col bg-white px-10`}
      >
        {children}
      </div>
      <div
        className={`... ${
          authType === "register" ? "basis-2/5" : "basis-3/4"
        } flex-1 bg-primary my-8 rounded-l-md`}
      />
    </main>
  );
};

export default MainLayout;
