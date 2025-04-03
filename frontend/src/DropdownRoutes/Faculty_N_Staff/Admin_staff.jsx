import React from "react";

const Admin_staff = () => {
  return (
    <div className="bg-white">
      <div
        style={{
          margin: "2.5rem 0rem",
          color: "#4e459a",
          fontSize: "30px",
          fontFamily: "IBM Plex Sans",
          fontWeight: "900",
        }}
        className="rounded-xl mt-5 mx-auto text-center items-center justify-center bg-gray-100 w-1/2 py-3"
      >
        <p className="px-5 font-semibold">Administrative Staff</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center">
        {/* Card 1 */}
        <div className="flex flex-col items-center">
          <img
            className="w-36 h-36 object-cover rounded-lg shadow-md"
            src="https://clc.du.ac.in/wp-content/uploads/2020/03/Pradeep_K-300x300.jpg"
            alt="Mr. Pradeep Kumar Kundra"
          />
          <p className="font-bold mt-1">Mr. Pradeep Kumar Kundra</p>
          <p className="text-gray-600 text-sm">Section Officer</p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center">
          <img
            className="w-36 h-36 object-cover rounded-lg shadow-md"
            src="https://clc.du.ac.in/wp-content/uploads/2022/09/WhatsApp-Image-2022-09-20-at-1.33.10-PM-297x300.jpeg"
            alt="Mr. Pravesh"
          />
          <p className="font-bold mt-1">Mr. Pravesh</p>
          <p className="text-gray-600 text-sm">Sr. Assistant</p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center">
          <img
            className="w-36 h-36 object-cover rounded-lg shadow-md"
            src="https://clc.du.ac.in/wp-content/uploads/2020/03/V_Manjhi-300x300.jpg"
            alt="Mr. Vishwanath Manjhi"
          />
          <p className="font-bold mt-1">Mr. Vishwanath Manjhi</p>
          <p className="text-gray-600 text-sm">Sr. Assistant</p>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-center">
          <img
            className="w-36 h-36 object-cover rounded-lg shadow-md"
            src="https://clc.du.ac.in/wp-content/uploads/2020/03/Ankit_K-300x300.jpg"
            alt="Mr. Ankit Kapoor"
          />
          <p className="font-bold mt-1">Mr. Ankit Kapoor</p>
          <p className="text-gray-600 text-sm">Assistant</p>
        </div>

        {/* Card 5 */}
        <div className="flex flex-col items-center">
          <img
            className="w-36 h-36 object-cover rounded-lg shadow-md"
            src="https://clc.du.ac.in/wp-content/uploads/2021/02/mhsh.jpg"
            alt="Mr. Mahesh Kumar"
          />
          <p className="font-bold mt-1">Mr. Mahesh Kumar</p>
          <p className="text-gray-600 text-sm">Assistant</p>
        </div>

        {/* Card 6 */}
        <div className="flex flex-col items-center">
          <img
            className="w-36 h-36 object-cover rounded-lg shadow-md"
            src="https://clc.du.ac.in/wp-content/uploads/2020/03/Brijesh_K-300x300.jpg"
            alt="Mr. Brijesh Kumar Singh"
          />
          <p className="font-bold mt-1">Mr. Brijesh Kumar Singh</p>
          <p className="text-gray-600 text-sm">Office Attendant</p>
        </div>
      </div>
    </div>
  );
};

export default Admin_staff;
