import React from "react";

const Guest_fac = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div
        style={{
          margin: "2.5rem 0rem",
          color: "#4e459a",
          fontSize: "30px",
          fontFamily: "IBM Plex Sans",
          fontWeight: "900",
        }}
        className="text-center"
      >
        Guest Faculty
      </div>

      <div className="mt-10 w-1/4 border-2 flex items-center justify-center rounded-2xl">
        <button
          className="px-4 py-2 font-light rounded-2xl text-black"
          onClick={() =>
            window.open(
              "https://clc.du.ac.in/wp-content/uploads/2023/12/CLC-GUEST-FACULTYc.pdf",
              "_blank"
            )
          }
        >
          Click here to view the list of Guest Faculty
        </button>
      </div>
    </div>
  );
};

export default Guest_fac;
