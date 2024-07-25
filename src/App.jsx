import { Routes, Route} from "react-router-dom";
import { HashRouter } from "react-router-dom";

import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import WhatWeDo from "./Components/WhatWeDo";
import WhoWeAre from "./Components/WhoWeAre";
import Insights from "./Components/Insights";
import Career from "./Components/Career";
import ContactUs from "./Components/ContactUs";
import ReadMore from "./Components/ReadMore";
import FooterWithSocialLinks from "./Components/Footer";
// import CareerPortal from "./Components/CareerPortal";
// import CareerPortalLayout from './layouts/CareerPortalLayout';
import Login from "./Components/Login";
import DashBoard from "./layouts/DashBoard";
import Profile from "./layouts/Profile";
import Overview from './Components/Products/Overview';

import StudentSignup from './pages/StudentSignup';
import StudentVerify from './pages/StudentVerify';
import StudentProfile from './pages/StudentProfile';
import ProtectedRoute from './Components/ProtectedRoute';
import Newsroom from "./Components/Newsroom";
import Resume from "./Components/Resume";


const App = () => {
  

  return (
    <div>
       <HashRouter>
        <Navbar/>
        <Routes>
          <Route index path="/" element={<Home/>} />
          <Route index path="/what-we-do" element={<WhatWeDo/>} />
          <Route index path="/who-we-are" element={<WhoWeAre/>} />
          <Route index path="/insights" element={<Insights/>} />
          <Route index path="/newsroom" element={<Newsroom/>} />
          <Route index path="/career" element={<Career/>} />
          <Route index path="/contact-us" element={<ContactUs/>} />
          <Route index path="/read-more" element={<ReadMore/>} />
          <Route index path="/login" element={<Login/>} />
          <Route index path ="/Resume" element={<Resume/>}/>
          <Route index path="/DashBoard" element={<DashBoard/>}/>
          <Route path="/Profile" element={<Profile/>}/>
          <Route path="/Overview" element={<Overview/>}/>
          <Route path="/StudentSignup" element={<StudentSignup/>} />
        <Route path="/StudentVerify" element={<StudentVerify />} />
        <Route path="/StudentProfile" element={
          <ProtectedRoute>
            <StudentProfile />
          </ProtectedRoute>
        } />
        </Routes>
        <FooterWithSocialLinks/>
      </HashRouter>
    </div>
  )
}

export default App;



