import React from "react";

export default function Divider({ bgColor }) {
  return (
    <div>
      {bgColor == "white" ? (
        <div className="h-[2px] w-[90%] mx-auto bg-gradient-to-r from-secondary via-primary to-secondary rounded-full my-6"></div>
      ) : (
        <div className="h-[2px] w-[90%] mx-auto bg-gradient-to-r from-primary via-secondary to-primary rounded-full my-6"></div>
      )}
    </div>
  );
}
