import React from "react";

const AboutCLC = () => {
  return (
    <div style={{ backgroundColor: "#f8f8f8", padding: "50px 20px" }}>
      <h1
        className="text-3xl font-bold text-center mb-4"
        style={{ color: "#4e459a", marginBottom: "30px" }}
      >
        About Campus Law Centre
      </h1>
      <div className="max-w-5xl mx-auto text-lg text-gray-800 leading-relaxed">
        <p className="font-light mt-4">
          <span className="font-semibold">Campus Law Centre</span> fondly known
          as <span className="font-semibold">CLC</span> is one of the premier
          legal education centers of the country. It was established in 1922,
          under the aegis of University of Delhi in its foundation year. In
          1975, the day classes of LL.B. of the Faculty of Law were rechristened
          as Campus Law Centre. The Campus Law Centre or CLC, known for its
          great achievements, has the distinction of being one of the oldest and
          most prestigious institutions, which continues to preserve its 100
          years of rich heritage and legacy of yielding profound lawyers,
          academicians, Union Cabinet Ministers, Chief Justices, and judges.
        </p>
        <p className="mt-4 font-light">
          Being a part of Faculty of Law, the CLC offers a three-year LL.B
          (Bachelor of Law) programme of study, and LL.M., MCL and Ph.D.
          programmes of studies managed by the Faculty of Law. The unique
          pedagogy of the CLC is the case-based study and the institute provides
          the case materials which are regularly revised to incorporate
          contemporary developments in the field of law. The primary focus of
          the ‘case-study’ based curriculum, to enrich our students aiming to
          inculcate a deep understanding of theoretical legal knowledge along
          with the understanding of case laws. In furtherance of its mission to
          foster effective learning and easier access to all, the case materials
          are available on its website in downloadable format.
        </p>
        <p className="mt-4 font-light">
          <span className="font-semibold">CLC</span> is a renowned institution
          of legal education due to its great faculty staff and the centre is
          known for having the best teachers of the country. The current
          academic staff is exceptionally competent and well-versed, and CLC is
          proud of its vibrant academic fraternity, which includes members from
          practically every region of the nation. Some of the faculty members
          have made significant contributions to the intellectual richness of
          the country as top scholars in their specialised fields-IPR, Criminal
          Law, Environment Law, and Constitutional Law.
        </p>
        <p className="mt-4 font-light">
          Drawing strength from the vast interdisciplinary credentials of our
          erudite students, distinguished faculty, and illustrious alumni, CLC
          nurtures an intellectual powerhouse. Qualitative and comprehensive
          teaching, moot-court competitions, campus placements, legal-aid
          services, regular discussions, workshops and seminars, multiple
          scholarships, unparallel opportunities, research endeavors, a
          state-of-the-art library and other essential, co-curricular and extra
          co-curricular facilities help our fraternity at CLC to stay close to
          the pulse of law. Besides, these features ensure a rigorous, vibrant,
          and collaborative environment for our students to be ready for
          engaging with the world across borders, sectors, and industries,
          embodying CLC as a Centre of Excellence.
        </p>

        {/* New Section: Journey and Evolution of Courses */}
        <h2 className="text-2xl font-bold mt-4">Journey</h2>
        <p className="mt-3 font-light">
          The <span className="font-semibold">University of Delhi</span> is a
          collegiate central university located in New Delhi, India. It was
          founded in 1922 by an Act of the Central Legislative Assembly. It is
          recognized as an Institute of Eminence by the University Grants
          Commission and as an institution of national importance by the
          Constitution of India (Seventh Schedule, List-I, Entry-63).
        </p>
        <p className="mt-4 font-light">
          The Faculty of Law was established in 1922 by the University of Delhi
          and is an accredited legal institution by the Bar Council of India.
          LL.B. is a full-time professional course recognized and regulated by
          the Legal Education Rules 2008 of the Bar Council of India.
        </p>

        <h4 className="text-2xl font-bold mt-4">
          Evolution of the courses at CLC
        </h4>
        <ul className="mt-4 space-y-3">
          <li className="font-light">
            <span className="font-semibold">1922:</span> Bachelor of Laws
            (LL.B.) was initially commenced as a two-year part-time Course with
            ten teachers as morning classes.
          </li>
          <li className="font-light">
            <span className="font-semibold">1942:</span> The evening classes
            commenced. Two full-time courses, viz. Degree of Bachelor of Civil
            Laws (B.C.L.) and Certificate of Proficiency (Law), were introduced.
          </li>
          <li className="font-light">
            <span className="font-semibold">1944:</span> One-year Master of Laws
            (LL.M.) was introduced which was made a full-time two-year Course in
            1947. Around the same time, a three-year LL.M. degree was introduced
            for working professionals wherein the same curriculum, as the
            two-year LL.M., is spread over a span of three years.
          </li>
          <li className="font-light">
            <span className="font-semibold">1961:</span> With the enactment of
            the Advocates Act, 1961, the Certificate of Proficiency (Law) Course
            was abolished.
          </li>
          <li className="font-light">
            <span className="font-semibold">1966:</span> The B.C.L. Degree
            Course was discontinued.
          </li>
          <li className="font-light">
            <span className="font-semibold">1966:</span> This year marked a
            moment of triumph in the history of the Faculty of Law and legal
            education in the country. The then Dean, Prof. P.K. Tripathi and his
            team of dedicated teachers adopted and implemented almost all the
            recommendations of the Gajendragadkar Committee on Legal Education
            (1964) appointed by the then Vice-Chancellor, Dr. C.D. Deshmukh. The
            two-year LL.B. was remodelled into a three-year (six semesters)
            course.
          </li>
          <li className="font-light">
            <span className="font-semibold">1975:</span> With Prof. Upendra Baxi
            joining the Faculty of Law, it became the hub of the social-legal
            approach to the study of law promoting understanding of the
            interplay of law and society.
          </li>
        </ul>

        <img
          className="mt-5"
          src="https://clc.du.ac.in/wp-content/uploads/2023/03/Location-Infrastructure-800-%C3%97-600px-1-2048x1536.jpg"
        />
      </div>
    </div>
  );
};

export default AboutCLC;
