import React from "react";

const CountBox = ({ count, type }) => {
  let boxColor;

  // Determine the color based on the criteria
  if (type === "notifications" || type === "supportTickets") {
    boxColor = "bg-blue-500";
  } else {
    boxColor = count <= 10 ? "bg-red-500" : "bg-green-500";
  }

  return (
    <div
      className={`rounded-md text-xs w-auto px-2 text-white text-center ${boxColor}`}
    //   style={{ width: "50px" }}
    >
      {count}
    </div>
  );
};

export default CountBox;
