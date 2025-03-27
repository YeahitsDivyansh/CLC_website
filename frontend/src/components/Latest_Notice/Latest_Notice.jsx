import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const LatestNotices = () => {
  return (
    <div className="container mt-4">
      <h4 className="fw-bold text-uppercase text-center border-bottom pb-2">
        Latest Notices & Announcements
      </h4>
      <div className="bg-light p-2 mt-2">
        <marquee behavior="scroll" direction="left" scrollamount="5">
          <a href="#" className="text-primary fw-bold text-decoration-none mx-3">
            DATE SHEET FOR LL.B. II/IV/VI TERM EXAMINATIONS, JULY-AUGUST 2024
          </a>
          <a href="#" className="text-primary fw-bold text-decoration-none mx-3">
            ADMISSIONS OPEN FOR NEW SESSION 2024-25
          </a>
          <a href="#" className="text-primary fw-bold text-decoration-none mx-3">
            IMPORTANT NOTICE REGARDING EXAM FORM SUBMISSION
          </a>
        </marquee>
      </div>
    </div>
  );
};

export default LatestNotices;