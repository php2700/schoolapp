import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
// import Header from "../component/Header";
// import Header from "../component/Header";
import AboutUs from "./AboutUs/abouttsus";
// import AboutTSUS from "./abouttsus";   // tumhara About Us page about/principals-message
import Navbar from '../component/Navbar'
import Header from "../component/Header";
import LeadershipTeamPage from "./AboutUs/leadership";
import MeaningOfShriPage from './Shreeway/meanningshree'
import ContactUsPage from './Contactus/contact'
import LearningPage from './Learning/learn'
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
// import Footer from "./Footer";

function App() {
  return (
    <Router>
      {/* Navbar har page pe show hoga */}
      {/* <Header /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/tsus-ludhiana" element={<AboutUs />} />
        <Route path="/about/leadership-team" element={< LeadershipTeamPage/>} />
         <Route path="/shriWay" element={< MeaningOfShriPage/>} />
         <Route path="/contact-us" element={< ContactUsPage/>} />
         <Route path="/Learning" element={< LearningPage/>} />
         <Route path="/about/principals-message" element={< Principal/>} />
         <Route path="/about/vision-mission" element={< Mission/>} />  
         <Route path="/about/core-values" element={< Corevalue/>} />  
         <Route path="/about/what-makes-us-different" element={< Different/>} /> 
         <Route path="/about/blog" element={< BlogPage/>} />  
         <Route path="/about/mandats" element={< Mandat/>} />  
         <Route path="/shriWay/legacy" element={<Legacy/>} />
         <Route path="/shriWay/philisophy" element={<Philosophy/>} />
         <Route path="/shriWay/differentiators" element={<Differentiators/>} />
         <Route path="/shriWay/educators" element={<Educators/>} />
         <Route path="/facilities" element={<Facilities/>} />

         </Routes>
         <Route path="/about/mandats" element={< Mandat/>} /> 


          {/*...........................Learning............................  */}
          <Route path="/learning/pedagogy" element={< LearningPage/>} />
          <Route path="/learning/curriculum" element={< Curriculum/>} />
          <Route path="/learning/Art" element={< Art/>} /> 
          <Route path="/learning/Society" element={< Society/>} /> 
          <Route path="/learning/Sports" element={< Sports/>} /> 
          <Route path="/learning/Classroom" element={< Classroom/>} /> 
          <Route path="/learning/Environment" element={< Environment/>} />   









      
      
    </Router>
  );
}

export default App;
