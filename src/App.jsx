import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs/abouttsus";
import Navbar from "../component/Navbar";
import Header from "../component/Header";
import LeadershipTeamPage from "./AboutUs/leadership";
import MeaningOfShriPage from './Shreeway/meanningshree';
import ContactUsPage from './Contactus/contact';
import LearningPage from './Learning/learn';
import Principal from "./AboutUs/Principal";
import Mission from "./AboutUs/mission";
import Corevalue from "./AboutUs/corevalue";
import Different from "./AboutUs/diffrentother";
import BlogPage from "./AboutUs/blog";
import Mandat from "./AboutUs/mandatory";
import Legacy from "./Shreeway/legacy";
import Philosophy from "./Shreeway/philosophy";
import Differentiators from "./Shreeway/differentiators";
import Educators from "./Shreeway/educators";
import Facilities from "./Facilities/facilities";
import Curriculum from "./Learning/curriculum";
import Art from "./Learning/arts";
import Society from "./Learning/societies";
import Sports from "./Learning/sports";
import Classroom from "./Learning/beyondClassroom";
import Environment from "./Learning/environment";
import Admissionprocess from './Admission/admissionProcess'
import AdmissionForm from './Admission/admissionForm'
import Schedule from './Admission/ScheduleVisit'
import Faq from './Admission/faq'
// import allery from './Gallery/gallery'
import Gallery from "./Gallery/gallery";

function App() {
  return (
    <Router>
      {/* Navbar visible on all pages */}

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* About Us */}
        <Route path="/about/tsus-ludhiana" element={<AboutUs />} />
        <Route path="/about/leadership-team" element={<LeadershipTeamPage />} />
        <Route path="/about/principals-message" element={<Principal />} />
        <Route path="/about/vision-mission" element={<Mission />} />
        <Route path="/about/core-values" element={<Corevalue />} />
        <Route path="/about/what-makes-us-different" element={<Different />} />
        <Route path="/about/blog" element={<BlogPage />} />
        <Route path="/about/mandats" element={<Mandat />} />

        {/* Shri Way */}
        <Route path="/shriWay" element={<MeaningOfShriPage />} />
        <Route path="/shriWay/legacy" element={<Legacy />} />
        <Route path="/shriWay/philisophy" element={<Philosophy />} />
        <Route path="/shriWay/differentiators" element={<Differentiators />} />
        <Route path="/shriWay/educators" element={<Educators />} />

        {/* Contact */}
        <Route path="/contact-us" element={<ContactUsPage />} />

        {/* Facilities */}
        <Route path="/facilities" element={<Facilities />} />

        {/* Learning */}
        <Route path="/learning" element={<LearningPage />} />
        <Route path="/learning/pedagogy" element={<LearningPage />} />
        <Route path="/learning/curriculum" element={<Curriculum />} />
        <Route path="/learning/art" element={<Art />} />
        <Route path="/learning/society" element={<Society />} />
        <Route path="/learning/sports" element={<Sports />} />
        <Route path="/learning/classroom" element={<Classroom />} />
        <Route path="/learning/environment" element={<Environment />} />


        {/* Admission */}

        <Route path="/admission/process" element={<Admissionprocess />} />
        <Route path="/admission/form" element={<AdmissionForm />} />
        <Route path="/admission/visit" element={<Schedule />} />
        <Route path="/admission/Faq" element={<Faq />} />
        <Route path="/gallery" element={<Gallery />} />








      </Routes>
    </Router>
  );
}

export default App;
