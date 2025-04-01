import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Course = () => {
  return <div 
   style={{padding:"0rem 7.5rem"}}
   className=" mt-5"
   >
    <div
    style={{
      margin:"2.5rem 0rem", 
      color:"#4e459a", 
      fontSize:"30px",
      fontFamily:"IBM Plex Sans",
      fontWeight:"900"
    }}
    className="text-center">Course
    </div>
    <div className="container mt-2">
      {/* Heading */}
      <h5 style={{color:"#4e459a"}} className="fw-bold ">LL.B. (BACHELORS OF LAW) 3 YEARS (6 SEMESTERS)</h5>
      <div style={{height: "3px", color: "black", width: "100%"}} className="w-100 border-2  mt-2 mb-4"></div>
      
      {/* Description */}
      <p
      style={{fontSize:"16px"}}
      >
        <strong>LL.B.</strong> in the University of Delhi is a three-year post-graduate programme. 
        Admission to LL.B. is made strictly on the basis of merit in the Entrance Exam conducted 
        by the University of Delhi every year.
      </p>
      
      {/* Admission Heading */}
      <h5 style={{color:"#4e459a", marginTop:"2rem"}} className="fw-bold ">ADMISSION TO LL.B. COURSE</h5>
      <div style={{height: "3px", color: "black", width: "100%"}} className="w-100 border-2  mt-2 mb-4"></div>
      
      {/* Eligibility Section */}
      <p style={{fontSize:"18px"}} className="fw-bold">Eligibility for LL.B. Admission</p>
      <p style={{fontSize:"18px"}} className="fst-italic mt-3"><strong>Course Requirements</strong></p>
      
      {/* List of Requirements */}
      <ul style={{marginLeft:"1rem",fontSize:"16px"}} className="list-unstyled">
        <li className=" mt-2">
          <span className="me-2">&#9679;</span> Graduate/Post Graduate Degree from the University of Delhi or any other Indian or Foreign University recognized <strong>as equivalent</strong> by the University of Delhi.
        </li>
        <li className="mt-2">
          <span className="me-2">&#9679;</span> Candidates <strong>appearing in</strong> the qualifying degree examination are also eligible to appear in the LL.B. Entrance Test.
        </li>
        <li className="mt-2">
          <span className="me-2">&#9679;</span> Candidate who has passed LL.B. course from any University <strong>shall not</strong> be allowed to take admission.
        </li>
        <li className="mt-2 ">
          <span className="me-2">&#9679;</span> Candidate on the rolls of LL.B. or ex-student of any University <strong>shall not</strong> be allowed to take admission in the LL.B. course unless they get their admission cancelled.
        </li>
      </ul>

      {/* Marks Requirements */}
      <p style={{fontSize:"18px"}} className="fst-italic"><strong>Marks Requirements</strong></p>
      <ul style={{marginLeft:"1rem",fontSize:"16px"}} className="list-unstyled">
        <li className="mt-2">
          <span className="me-2">&#9679;</span> Unreserved Category and EWS Category candidates at least <strong>50% marks or an equivalent grade point</strong> in the qualifying degree examination.
        </li>
        <li className="mt-2">
          <span className="me-2">&#9679;</span> OBC/CW/PwD Category Candidates at least <strong>45% marks or an equivalent grade point</strong> in the qualifying degree Examination.
        </li>
        <li className="mt-2">
          <span className="me-2">&#9679;</span> For SC/ST Category candidates at least <strong>40% marks or an equivalent grade point</strong> in the aggregate in the qualifying degree examination.
        </li>
      </ul>

      {/* LL.B. Entrance Test */}
      <h5 style={{color:"#4e459a", marginTop:"2rem"}} className="fw-bold ">LL.B. Entrance Test</h5>
      <div style={{height: "3px", color: "black", width: "100%"}} className="w-100 border-2  mt-2 mb-4"></div>
      <ul style={{marginLeft:"1rem",fontSize:"16px",}} className="list-unstyled">
        <li className="mt-2">
          <span className="me-2">&#9679;</span> The LL.B. Entrance Test 2022 will be held <strong>ONLINE</strong> at various centres as notified in the Post Graduate Admissions (du.ac.in). The Test shall be of two hours duration..
        </li>
        <li className="mt-2">
          <span className="me-2 ">&#9679;</span><strong>The Test Paper will consist of one question paper containing 100 objective-type questions with multiple choice answers relating to English Language Comprehension, Analytical Abilities, Legal Awareness & Aptitude, and General Knowledge.</strong>
        </li>
        <li className="mt-2">
          <span className="me-2">&#9679;</span> The language of the Entrance Test shall be English.
        </li>
        <li className="mt-2">
          <span className="me-2">&#9679;</span> Each question shall carry four marks. For every correct answer, four marks will be awarded and for every incorrect answer, one mark will be deducted. No mark will be awarded or deducted for a question which is left unanswered.
        </li>
        <li className="mt-2">
          <span className="me-2">&#9679;</span>The general instructions to the candidates will be supplied later on the University website.
        </li>
      </ul>
      <div><h5 style={{color:"#4e459a", marginTop:"3rem"}} className="fw-bold text-center">FEE FOR LL.B. ENTRANCE TEST</h5></div>
      <div><p style={{fontSize:"18px"}} className="fst-italic text-center mt-4">As prescribed by the University.</p></div>

    </div>
    
  </div>;
  
};

export default Course;
