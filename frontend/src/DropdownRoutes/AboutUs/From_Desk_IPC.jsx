import React from "react";

const From_Desk_IPC = () => {
  return (
    <div style={{ backgroundColor: "#f8f8f8", padding: "50px 20px" }}>
      {/* Heading Section */}
      <h1
        className="text-3xl font-bold text-center"
        style={{ color: "#4e459a", marginBottom: "10px" }}
      >
        From the Desk of Professor-In-Charge, CLC
      </h1>
      <h2
        className="text-xl font-semibold text-center"
        style={{ color: "#4e459a", marginBottom: "30px" }}
      >
        Prof. (Dr.) Alka Chawla
      </h2>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-10">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 px-3 flex items-start justify-start">
          <img
            src="http://clc.du.ac.in/wp-content/uploads/2022/10/WhatsApp-Image-2022-10-22-at-9.35.02-PM.jpeg" // Replace with the actual image path
            alt="Professor-In-Charge"
            className="rounded-lg shadow-lg mt-4"
            style={{ width: "100%", maxWidth: "500px" }}
          />
        </div>

        {/* Right: Text Content */}
        <div className="w-full md:w-1/2 text-lg text-gray-800 leading-relaxed">
          <p className="mt-4 font-light">
            Welcome to{" "}
            <span className="font-semibold">
              Campus Law Centre, Faculty of Law, University of Delhi!
            </span>{" "}
            Our's is a motivated community committed to intellectual inquiry and
            I am pleased to introduce you to it.
          </p>

          <p className="mt-4 font-light">
            CLC has completed a remarkable journey of 100 years in 2022. Its
            faculty, students, committees, and associations coaction, as a
            unified strength and pillar, in shaping this deep-rooted legal
            institution having a glorious past and a bright future ahead. I take
            pride in stating that CLC has produced several legal stalwarts who
            have adorned the Parliament as ministers and members, all levels of
            the judiciary from lower to the Supreme Court and bureaucracy thus
            contributing significantly to the field of law.
          </p>

          <p className="mt-4 font-light">
            CLC attracts students from across the globe. The admission process
            is strictly based on the Faculty of Law entrance test and intake
            capacity and allocation of seats are as per the reservation roster
            available at the main website of the Faculty of Law, University of
            Delhi.
          </p>

          <p className="mt-4 font-light">
            CLC is a pioneer in introducing case-studies-based learning methods
            for students thus producing the finest of litigators. The extensive
            curriculum and rigorous evaluation process have prepared our
            students as professionals to handle a myriad of challenges.
            Furthermore, the annual journal titled
            <span className="font-semibold">
              {" "}
              “Campus Law Centre Student Law Review”
            </span>{" "}
            along with various societies is the reflection of assiduous efforts
            put in by the students. Every year, students take up pro-bono
            legal-aid work and contribute to society selflessly by the medium of
            their para-legal services.
          </p>

          <p className="mt-4 font-light">
            We aim at providing quality legal education in the capital at an
            affordable cost. We strive to educate young law students on how to
            reconcile the three most challenging concerns facing society today —
            equality, liberty, and democracy. Besides, we are committed to
            training our students how to ensure equality against a history of
            discrimination, guarantee the fairness of markets, defend our
            constitution, protect the environment in the face of climate change,
            and preserve freedom of faith and conscience.
          </p>

          <p className="mt-4 font-light">
            Being one of the best academic communities in the nation, CLC will
            guide you in your preparation to take the helm of the legal
            profession. High standards are required by our professors, including
            ethics and intellectual openness, in addition to diligence. They
            will assist you in making significant links between legal theory and
            practice.
          </p>

          <p className="mt-4 font-light">
            I invite you to check out more of our website and other portals to
            discover us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default From_Desk_IPC;
