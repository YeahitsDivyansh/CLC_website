import React from 'react'
import { server } from '../main';


const LectureImage = ({ title, date, url }) => {
  return (
    <div className="max-w-7xl mx-auto pt-2 px-6 mt-12 min-h-screen">
      <div className="flex flex-col md:flex-row min-h-screen text-white gap-4">

        {/* Image Viewer Section */}
        <div className="w-full md:w-3/4 p-6 min-h-screen">
          {/* Title and Date */}
          <h1 className="text-black text-2xl font-bold mb-2">{title}</h1>
          <p className="text-black mb-4">{date}</p>

          <div className="relative overflow-hidden px-4 md:px-8">
            <img
              src={`${server}${url}`}
              alt="Document Image"
              className="w-3/4 md:w-2/3 mx-auto border-2 border-gray-700 rounded-lg shadow-lg"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>

        {/* Links Section */}
        <div className="w-full md:w-1/4 p-4 rounded-lg mt-2 cursor-pointer">
          <ul className="space-y-2 text-blue-600">
            <div className="mb-4">
              <li><a href="#" className="block hover:underline mb-2">All Notifications</a></li>
              <li><a href="#" className="block hover:underline mb-2">Latest News</a></li>
              <li><a href="#" className="block hover:underline mb-2">Upcoming Events</a></li>
              <li><a href="#" className="block hover:underline mb-2">Spotlight</a></li>
            </div>
            <li className="font-bold text-black text-xl mb-2">More</li>
            <li><a href="#" className="block hover:underline mb-2">RTI</a></li>
            <li><a href="#" className="block hover:underline mb-2">Sample Page</a></li>
            <li><a href="#" className="block hover:underline mb-2">Grievance</a></li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default LectureImage
