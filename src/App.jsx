import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
// import Header from "../component/Header";
// import Header from "../component/Header";
import AboutUs from "./AboutUs/abouttsus";
// import AboutTSUS from "./abouttsus";   // tumhara About Us page
import Navbar from '../component/Navbar'
import Header from "../component/Header";
import LeadershipTeamPage from "./AboutUs/leadership";
// import Footer from "./Footer";

function App() {
  return (
    <Router>
      {/* Navbar har page pe show hoga */}
      {/* <Header /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/shree" element={<AboutUs />} /> */}
        <Route path="/about" element={< LeadershipTeamPage/>} />

        {/* aur pages add kar sakte ho */}
      </Routes>

      {/* Footer har page pe show hoga */}
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
