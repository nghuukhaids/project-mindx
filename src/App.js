import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from "./feature/Home/Home"
import Room from "./feature/Room/Room"
import About from "./feature/About/About"
import Blog from "./feature/Blog/Blog"
import ContactUs from "./feature/ContactUs/ContactUs"
import Login from "./feature/Login/Login"
import Applayout from './feature/Applayout/Applayout';
import { useContext } from "react"
import Admin from './feature/Admin/Admin';
import { ProtectedRoute } from './feature/ProtectedRoot/ProtectedRoot';
import LoginAdmin from './feature/Admin/LoginAdmin';
import Booking from './feature/Admin/Booking';
import Addroom from './feature/Admin/Addroom';
import { db } from './firebase/config';
function App() {

  return (

    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/loginadmin" element={<LoginAdmin />}></Route>
        <Route path="/" element={<Applayout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/room" element={<Room />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/contactus" element={<ContactUs />}></Route>
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/admin" element={<Admin />}>
            <Route path="/admin" element={<Booking />}></Route>
            <Route path="/admin/room" element={<Addroom />}></Route>
          </Route>
        </Route>


      </Routes>


    </div >
  );
}

export default App;
