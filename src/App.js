import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from "./feature/Home/Home"
import Room from "./feature/Room/Room"
import About from "./feature/About/About"
import ContactUs from "./feature/ContactUs/ContactUs"
import Login from "./feature/Login/Login"
import Applayout from './feature/Applayout/Applayout';
import Admin from './feature/Admin/Admin';
import { ProtectedRoute } from './feature/ProtectedRoot/ProtectedRoot';
import LoginAdmin from './feature/Admin/LoginAdmin';
import Booking from './feature/Admin/Booking';
import Addroom from './feature/Admin/Addroom';
import RoomDetail from './feature/Room/RoomDetail';
import User from './feature/User/User';
import Chat from './feature/Chat/Chat';
import { AuthContext } from './Context/AuthContext';
import { useContext } from 'react';
import SignUp from './feature/Login/Signup';

function App() {
  const { user } = useContext(AuthContext)
  return (

    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="*" element={<SignUp />}></Route>
        <Route path="/loginadmin" element={<LoginAdmin />}></Route>
        <Route path="/" element={<Applayout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/room" element={<Room />}></Route>
          <Route path={`/${user.displayName}`} element={<User />}></Route>
          <Route path="/room/:nameRoom" element={<RoomDetail />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contactus" element={<ContactUs />}></Route>
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/admin" element={<Admin />}>
            <Route path="/admin" element={<Booking />}></Route>
            <Route path="/admin/room" element={<Addroom />}></Route>
            <Route path="/admin/chat" element={<Chat />}></Route>
          </Route>
        </Route>


      </Routes>


    </div >
  );
}

export default App;
