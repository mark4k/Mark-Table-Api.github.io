import { Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from './navbar';
import User from './user';
import UserCreate from "./userCreate";
import UserUpdate from "./userUpdate";
function App() {
  return (
    <div >
     <Navbar/>
     <Routes>
      <Route path="/" element={<User/>}></Route>
      <Route path="/create" element={<UserCreate/>}></Route>
      <Route path="/update/:id" element={<UserUpdate/>}></Route>
     </Routes>
     
    </div>
  );
}

export default App;
