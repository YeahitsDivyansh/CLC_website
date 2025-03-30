import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NotificationsData } from '../../context/NotificationContext';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const NotificationsSection = () => {
  const { Announcements, fetchAnnouncements, Examinations, fetchExaminations, Lectures, fetchLectures } = NotificationsData();

  useEffect(() => {
    fetchExaminations();
    fetchAnnouncements();
    fetchLectures();
  }, []);



  return (
    <div
      className="container mt-5">
      <h3 className="text-center fw-bold mb-4">LATEST NOTIFICATIONS & EVENTS</h3>
      <div className="row">
        {/* Examinations Column */}
        <div className="col-md-4">
          <h5 className="fw-bold text-center">Examinations</h5>
          <div className="bg-light p-3">

          {Examinations && Examinations.length > 0 ? (
              Examinations.map((e) => (
                <div key={e.id} >
                  <Link to={`/examinations/${e.documentId}`}  className="text-primary mb-1">{e.Title}</Link>
                  <p className="text-muted">
                    {new Date(e.Published_Date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600 dark:text-gray-300 col-span-full text-lg">
                No Examinations Available
              </p>
            )}



            {/* <a className="text-primary mb-1">Revised Date sheet for LL.B. II/IV/VI Term Examinations, July-August 2024</a>
            <p className="text-muted">July 4, 2024</p>
            <a className="text-primary mb-1">Examination Forms for the Even Semester Examination, LL.B. & LL.M NOTIFICATION</a>
            <p className="text-muted">May 28, 2024</p>
            <a className="text-primary mb-1">Centenary Chance Special Examination Phase-II</a>
            <p className="text-muted">April 3, 2024</p>
            <a className="text-primary mb-1">Re-Admission Semester- II, IV and VI for Academic Year 2023-24</a>
            <p className="text-muted">January 25, 2024</p> */}
          </div>
        </div>

        {/* Notifications Column */}
        <div className="col-md-4">
          <h5 className="fw-bold text-center">Notifications</h5>
          <div className="p-3">

            {Announcements && Announcements.length > 0 ? (
              Announcements.map((e) => (
                <div key={e.id} >
                  <Link to={`/announcements/${e.documentId}`} className="text-primary mb-1">{e.Title}</Link>
                  <p className="text-muted">
                    {new Date(e.Published_Date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600 dark:text-gray-300 col-span-full text-lg">
                No Notifications Available
              </p>
            )}

          </div>
        </div>

        {/* Lectures & Seminars Column */}
        <div className="col-md-4">
          <h5 className="fw-bold text-center">Lectures & Seminars</h5>
          <div className="p-3">

          {Lectures && Lectures.length > 0 ? (
              Lectures.map((e) => (
                <div key={e.id} >
                  <Link to={`/lectures/${e.documentId}`} className="text-primary mb-1">{e.Title}</Link>
                  <p className="text-muted">
                    {new Date(e.Published_Date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600 dark:text-gray-300 col-span-full text-lg">
                No Lectures & Seminars Available
              </p>
            )}




            {/* <a className="text-primary mb-1">DDS: The CLC Opinion Project (TCOP) 6.0</a>
            <p className="text-muted">May 31, 2024</p>
            <a className="text-primary mb-1">LECTURE ON ANTI-DISCRIMINATION LABOUR LAWS IN INDIA</a>
            <p className="text-muted">May 4, 2024</p>
            <a className="text-primary mb-1">IPR: INTELLECTUAL PROPERTY RIGHTS AND SUSTAINABLE DEVELOPMENT GOALS</a>
            <p className="text-muted">April 25, 2024</p>
            <a className="text-primary mb-1">LAS: Seminar on "Empowering Through Law: A First-Generation Lawyer's Journey and Legal Aid Initiatives"</a>
            <p className="text-muted">April 25, 2024</p> */}
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
