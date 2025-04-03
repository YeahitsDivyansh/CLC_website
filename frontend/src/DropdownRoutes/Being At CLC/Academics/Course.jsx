import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Course = () => {
  return <div 
  className="outer-div mt-5 px-3 "
  
   >
    <div
    style={{
      margin:"2.5rem 0rem", 
      color:"#4e459a", 
      fontSize:"30px",
      fontFamily:"IBM Plex Sans",
      fontWeight:"900"
    }}
    className="text-center"
    >  Course
    </div>
    <div
    style={{padding:"0rem 1rem",
      
    }}
    className="container px-sm-5 px-md-5 px-lg-7 px-xl-7 mt-2">
      {/* Heading */}
      <div><h5 style={{color:"#4e459a"}} className="fw-bold ">LL.B. (BACHELORS OF LAW) 3 YEARS (6 SEMESTERS)</h5>
      <div style={{height: "3px", color: "black", width: "100%"}} className="w-100 border-2  mt-2 mb-4"></div></div>
      
      {/* Description */}
      <div><p
      style={{fontSize:"16px"}}
      >
        <strong>LL.B.</strong> in the University of Delhi is a three-year post-graduate programme. 
        Admission to LL.B. is made strictly on the basis of merit in the Entrance Exam conducted 
        by the University of Delhi every year.
      </p></div>
      
      {/* Admission Heading */}
      <div><h5 style={{color:"#4e459a", marginTop:"2rem"}} className="fw-bold ">ADMISSION TO LL.B. COURSE</h5>
      <div style={{height: "3px", color: "black", width: "100%"}} className="w-100 border-2  mt-2 mb-4"></div></div>
      
      {/* Eligibility Section */}
      <div><p style={{fontSize:"18px"}} className="fw-bold">Eligibility for LL.B. Admission</p>
      <p style={{fontSize:"18px"}} className="fst-italic mt-3"><strong>Course Requirements</strong></p></div>
      
      {/* List of Requirements */}
      <div><ul style={{marginLeft:"1rem",fontSize:"16px"}} className="list-unstyled">
        <li className=" mt-2 d-flex">
          <span className="me-2">&#9679;</span> <div>Graduate/Post Graduate Degree from the University of Delhi or any other Indian or Foreign University recognized <strong>as equivalent</strong> by the University of Delhi.</div>
        </li>
        <li className=" mt-2 d-flex">
          <span className="me-2">&#9679;</span> <div>Candidates <strong>appearing in</strong> the qualifying degree examination are also eligible to appear in the LL.B. Entrance Test.</div>
        </li>
        <li className=" mt-2 d-flex">
          <span className="me-2">&#9679;</span> <div>Candidate who has passed LL.B. course from any University <strong>shall not</strong> be allowed to take admission.</div>
        </li>
        <li className=" mt-2 d-flex">
          <span className="me-2">&#9679;</span> <div>Candidate on the rolls of LL.B. or ex-student of any University <strong>shall not</strong> be allowed to take admission in the LL.B. course unless they get their admission cancelled.</div>
        </li>
      </ul></div>

      {/* Marks Requirements */}
      <div><p style={{fontSize:"18px"}} className="fst-italic"><strong>Marks Requirements</strong></p>
      <ul style={{marginLeft:"1rem",fontSize:"16px"}} className="list-unstyled">
        <li className=" mt-2 d-flex">
          <span className="me-2">&#9679;</span> <div>Unreserved Category and EWS Category candidates at least <strong>50% marks or an equivalent grade point</strong> in the qualifying degree examination.</div>
        </li>
        <li className=" mt-2 d-flex">
          <span className="me-2">&#9679;</span> <div>OBC/CW/PwD Category Candidates at least <strong>45% marks or an equivalent grade point</strong> in the qualifying degree Examination.</div>
        </li>
        <li className=" mt-2 d-flex">
          <span className="me-2">&#9679;</span> <div>For SC/ST Category candidates at least <strong>40% marks or an equivalent grade point</strong> in the aggregate in the qualifying degree examination.</div>
        </li>
      </ul></div>

      {/* LL.B. Entrance Test */}
      <div><h5 style={{color:"#4e459a", marginTop:"2rem"}} className="fw-bold ">LL.B. Entrance Test</h5>
      <div style={{height: "3px", color: "black", width: "100%"}} className="w-100 border-2  mt-2 mb-4"></div></div>


      <div><ul style={{marginLeft:"1rem",fontSize:"16px",}} className="list-unstyled">
        <li className="mt-2 d-flex">
          <span className="me-2">&#9679;</span> <div>The LL.B. Entrance Test 2022 will be held <strong>ONLINE</strong> at various centres as notified in the Post Graduate Admissions (du.ac.in). The Test shall be of two hours duration.</div>
        </li>
        <li className=" mt-2 d-flex">
          <span className="me-2">&#9679;</span><div><strong>The Test Paper will consist of one question paper containing 100 objective-type questions with multiple choice answers relating to English Language Comprehension, Analytical Abilities, Legal Awareness & Aptitude, and General Knowledge.</strong></div>
        </li>
        <li className=" mt-2 d-flex">
          <span className="me-2">&#9679;</span> <div>The language of the Entrance Test shall be English.</div>
        </li>
        <li className=" mt-2 d-flex">
          <span className="me-2">&#9679;</span> <div>Each question shall carry four marks. For every correct answer, four marks will be awarded and for every incorrect answer, one mark will be deducted. No mark will be awarded or deducted for a question which is left unanswered.</div>
        </li>
        <li className=" mt-2 d-flex">
          <span className="me-2">&#9679;</span><div>The general instructions to the candidates will be supplied later on the University website.</div>
        </li>
      </ul></div>


      <div><h5 style={{color:"#4e459a", marginTop:"3rem"}} className="fw-bold text-center">FEE FOR LL.B. ENTRANCE TEST</h5></div>
      <div><p style={{fontSize:"18px"}} className="fst-italic text-center mt-4">As prescribed by the University.</p></div>

    </div>
    
  </div>;
  
};

export default Course;
