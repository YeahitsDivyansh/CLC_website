import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Admin from "./pages/Admin";
import About_CLC from "./DropdownRoutes/AboutUs/About_CLC";
import From_Desk_IPC from "./DropdownRoutes/AboutUs/From_Desk_IPC";
import Campus from "./DropdownRoutes/AboutUs/Campus";
import Course from "./DropdownRoutes/Being At CLC/Academics/Course";
import ExamAndSyll from "./DropdownRoutes/Being At CLC/Academics/ExamAndSyll";
import TimeTable from "./DropdownRoutes/Being At CLC/Student_Corner/TimeTable";
import CaseMaterial from "./DropdownRoutes/Being At CLC/Student_Corner/case_material";
import Results from "./DropdownRoutes/Being At CLC/Student_Corner/Results";
import Imp_Rules from "./DropdownRoutes/Being At CLC/Student_Corner/Imp_Rules";
import Services_for_Students from "./DropdownRoutes/Forms/Services_for_Students";
import Faculty_mem from "./DropdownRoutes/Faculty_N_Staff/Faculty_mem";
import Guest_fac from "./DropdownRoutes/Faculty_N_Staff/Guest_fac";
import Library_Staff from "./DropdownRoutes/Faculty_N_Staff/Library_Staff";
import Admin_staff from "./DropdownRoutes/Faculty_N_Staff/Admin_staff";
import ADR from "./DropdownRoutes/Committees_And_Societies/ADR";
import International_Collab from "./DropdownRoutes/Committees_And_Societies/International_Collab";
import Criminal_Law_Society from "./DropdownRoutes/Committees_And_Societies/Criminal_Law_Society";
import Cultural_Law_Society from "./DropdownRoutes/Committees_And_Societies/Cultural_Law_Society";
import Debate_and_Discussions_Society from "./DropdownRoutes/Committees_And_Societies/Debate_and_Discussions_Society";
import Legal_aid_society from "./DropdownRoutes/Committees_And_Societies/Legal_aid_society";
import Moot_court_society from "./DropdownRoutes/Committees_And_Societies/Moot_court_society";
import Placement_assistance_council from "./DropdownRoutes/Committees_And_Societies/Placement_assistance_council";
import IPR from "./DropdownRoutes/Committees_And_Societies/IPR";
import Quiz_Society from "./DropdownRoutes/Committees_And_Societies/Quiz_Society";
import Other_committees from "./DropdownRoutes/Committees_And_Societies/Other_committees";
import Journal from "./DropdownRoutes/Journal";
import Achievements from "./DropdownRoutes/Achievements";
import Alumni from "./DropdownRoutes/Alumni";
import ContactUs from "./DropdownRoutes/ContactUs";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about_clc",
      element: <About_CLC />,
    },
    {
      path: "/from_desk_ipc",
      element: <From_Desk_IPC />,
    },
    {
      path: "/campus",
      element: <Campus />,
    },
    {
      path: "/being_at_clc/academics/course",
      element: <Course />,
    },
    {
      path: "/being_at_clc/academics/examination_syllabus",
      element: <ExamAndSyll />,
    },
    {
      path: "being_at_clc/student_corner/timetable",
      element: <TimeTable />,
    },
    {
      path: "/being_at_clc/student_corner/case_material",
      element: <CaseMaterial />,
    },
    {
      path: "/being_at_clc/student_corner/results",
      element: <Results />,
    },
    {
      path: "/being_at_clc/student_corner/imp_rules",
      element: <Imp_Rules />,
    },
    {
      path: "/forms/services_for_students",
      element: <Services_for_Students />,
    },
    {
      path: "/faculty_and_staff/faculty_members",
      element: <Faculty_mem />,
    },
    {
      path: "/faculty_and_staff/guest_faculty",
      element: <Guest_fac />,
    },
    {
      path: "/faculty_and_staff/library_faculty",
      element: <Library_Staff />,
    },
    {
      path: "/faculty_and_staff/admin_staff",
      element: <Admin_staff />,
    },
    {
      path: "/committees_and_societies/adr",
      element: <ADR />,
    },
    {
      path: "/committees_and_societies/international_collaborations",
      element: <International_Collab />,
    },
    {
      path: "/committees_and_societies/corporate_law_society",
      element: <International_Collab />,
    },
    {
      path: "/committees_and_societies/criminal_law_society",
      element: <Criminal_Law_Society />,
    },
    {
      path: "/committees_and_societies/cultural_law_society",
      element: <Cultural_Law_Society />,
    },
    {
      path: "/committees_and_societies/debate_and_discussions_society",
      element: <Debate_and_Discussions_Society />,
    },
    {
      path: "/committees_and_societies/legal_aid_society",
      element: <Legal_aid_society />,
    },
    {
      path: "/committees_and_societies/moot_court_society",
      element: <Moot_court_society />,
    },
    {
      path: "/committees_and_societies/placement_assistance_council",
      element: <Placement_assistance_council />,
    },
    {
      path: "/committees_and_societies/ipr_society",
      element: <IPR />,
    },
    {
      path: "/committees_and_societies/quiz_society",
      element: <Quiz_Society />,
    },
    {
      path: "/committess_and_societies/other_committees",
      element: <Other_committees />,
    },
    {
      path: "/journal",
      element: <Journal />,
    },
    {
      path: "/achievements",
      element: <Achievements />,
    },
    {
      path: "/alumni",
      element: <Alumni />,
    },
    {
      path: "/contact",
      element: <ContactUs />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/signin",
      element: <SignIn />,
    },
    {
      path: "/admin",
      element: <Admin />,
    },
  ]);

  return <RouterProvider router={router}> </RouterProvider>;
};

export default App;
