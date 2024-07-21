import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About} from "./components/about";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import StaffList from "./page/StaffList";
import {Routes,Route} from 'react-router-dom'
import EditProfile from './page/EditProfile';
import StaffDetail from './page/StaffDetail';
import "./App.css";
import * as PropTypes from "prop-types";
import {Gallery} from "./components/gallery";
import {Contact} from "./components/contact";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

function Features(props) {
    return null;
}

Features.propTypes = {data: PropTypes.any};
const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Gallery data={landingPageData.Gallery} />
      <Routes>
      <Route path="/" element={<StaffList/>} />
          <Route path="/edit/:id" element={<EditProfile/>} />
          <Route path="/staff/:id" element={<StaffDetail/>} />
          <Route path="/stafflist" element={<StaffList/>} />
      </Routes>
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
