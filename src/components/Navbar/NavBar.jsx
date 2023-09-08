import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import womanImg from '../../assets/woman.jpg'
import { useState } from "react";
import Login from "../login/Login";
import { useSelector , useDispatch } from "react-redux";
import { logout } from '../../redux/authSlice'


const NavBar = () => {
  const dispatch = useDispatch();
  const [showModal,setShowModal]=useState(false)
  const userToken = useSelector((state)=>state.auth.token)

  const handleLogout = ()=>{
    dispatch(logout())
  }

  return (
    <div className="container">
      <div className="wrapper">
        <div className="left">
          <Link to ='/'>Personal Blog</Link>
        </div>
        <ul className="center">
          <li className="listItem"  >Home</li>
          <li className="listItem">About</li>
          <li className="listItem">Contacts</li>
          <li className="listItem">Categories</li>
          <li className="listItem">
            
          </li>
          

        </ul>
        {!userToken ? (
          <>
        <div className="btn" style={{ marginRight: '40px' }}>
        <Link to="/register">Register</Link>
        </div>
        <div className="btn">
          <Link to="/login">Login</Link>
          </div>
          </>
       ) : (
        <div className="btn" onClick={handleLogout}>
        <Link to="/login">Logout</Link>
        </div>
       )}
       
        <div className="right">
          <img onClick={()=>setShowModal(prev => !prev)} className="img" src={womanImg} alt="womanimage"/>
          {showModal && 
          <div className="modal">
          <Link to ='/create'>Create</Link>
          <span>Logout</span>
          </div>
          }
          
        </div>

      </div>
   
    </div>
  );
};

export default NavBar;
