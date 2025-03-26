import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const NotificationsSection = () => {
  return (
    <div  
    className="container mt-5">
      <h3 className="text-center fw-bold mb-4">LATEST NOTIFICATIONS & EVENTS</h3>
      <div className="row">
        {/* Examinations Column */}
        <div className="col-md-4">
          <h5 className="fw-bold text-center">Examinations</h5>
          <div className="bg-light p-3">
            <a className="text-primary mb-1">Revised Date sheet for LL.B. II/IV/VI Term Examinations, July-August 2024</a>
            <p className="text-muted">July 4, 2024</p>
            <a className="text-primary mb-1">Examination Forms for the Even Semester Examination, LL.B. & LL.M NOTIFICATION</a>
            <p className="text-muted">May 28, 2024</p>
            <a className="text-primary mb-1">Centenary Chance Special Examination Phase-II</a>
            <p className="text-muted">April 3, 2024</p>
            <a className="text-primary mb-1">Re-Admission Semester- II, IV and VI for Academic Year 2023-24</a>
            <p className="text-muted">January 25, 2024</p>
          </div>
        </div>

        {/* Notifications Column */}
        <div className="col-md-4">
          <h5 className="fw-bold text-center">Notifications</h5>
          <div className="p-3">
            <a className="text-primary mb-1">LAS: INVITING APPLICATIONS FOR VOLUNTEERS FOR TIHAR JAIL VISIT</a>
            <p className="text-muted">June 10, 2024</p>
            <a className="text-primary mb-1">Enrollment Notice</a>
            <p className="text-muted">June 4, 2024</p>
            <a className="text-primary mb-1">LAS: LIST OF SELECTED STUDENTS FOR NCW VISIT</a>
            <p className="text-muted">May 28, 2024</p>
            <a className="text-primary mb-1">EU: BREAST CANCER AWARENESS DRIVE & FREE BREAST CANCER SCREENING</a>
            <p className="text-muted">May 23, 2024</p>
          </div>
        </div>

        {/* Lectures & Seminars Column */}
        <div className="col-md-4">
          <h5 className="fw-bold text-center">Lectures & Seminars</h5>
          <div className="p-3">
            <a className="text-primary mb-1">DDS: The CLC Opinion Project (TCOP) 6.0</a>
            <p className="text-muted">May 31, 2024</p>
            <a className="text-primary mb-1">LECTURE ON ANTI-DISCRIMINATION LABOUR LAWS IN INDIA</a>
            <p className="text-muted">May 4, 2024</p>
            <a className="text-primary mb-1">IPR: INTELLECTUAL PROPERTY RIGHTS AND SUSTAINABLE DEVELOPMENT GOALS</a>
            <p className="text-muted">April 25, 2024</p>
            <a className="text-primary mb-1">LAS: Seminar on "Empowering Through Law: A First-Generation Lawyer's Journey and Legal Aid Initiatives"</a>
            <p className="text-muted">April 25, 2024</p>
          </div>
        </div>
      </div>

      {/* View Archives Button */}
      <div className="text-center mt-4">
        <button className="btn btn-secondary">View archives</button>
      </div>
    </div>
  );
};

export default NotificationsSection;
