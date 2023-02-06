

import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
import {Routes , Route } from 'react-router-dom'
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>

  <Routes>
    <Route path="/" element={<Home/>} exact ></Route>
    <Route path="/profile" element ={<Profile/>} exact></Route>
  </Routes>
    </>
  );
}

export default App;
