import React from 'react';
import './Navbar.css';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import CommentIcon from '@mui/icons-material/Comment';
import NotificationsIcon from '@mui/icons-material/Notifications';
import image from "../../Assets/images/image.jpg"
import {Link}  from 'react-router-dom'

export default function Navbar() {
    return(
      <>
      <div className='navbar bg-blue-900 text-white py-5 fixed w-[100%] z-50'>
      <div className="container mx-auto px-4 md:flex justify-between gap-10 items-center">
        <div className="left flex-[3]">
           <h2 className="font-bold">SANA</h2>
        </div>
        <div className="center flex-[4] invisible md:visible">
          <div  classNmae=""><SearchIcon className="text-black absolute z-10 top-[33px] ml-2"/></div> 
          <input className="w-[100%] rounded-[40px] py-3 pl-[40px] pr-3 relative " type="search"placeholder="Search for friend , post or video" />

        </div>
        <div className="right flex flex-[5] justify-between">
          <div className="links flex items-center gap-5">
            <a href="#" className='font-semibold'>HomePage</a>
            <a href="#" className='font-semibold'>Timeline</a>
          </div>
          <div className="icons flex gap-5 items-center">
            <div className="relative">
            <PersonIcon/>
            <div className="text-xs bg-red-600 rounded-[50%] w-[20px] h-[20px] flex justify-center items-center absolute -top-[7px] left-[12px]">5</div>
            </div>
            <div className="relative">
            <CommentIcon/>
            <div className="text-xs bg-red-600 rounded-[50%] w-[20px] h-[20px] flex justify-center items-center absolute -top-[7px] left-[12px]">5</div>
            </div>
            <div className="relative">
            <NotificationsIcon/>
            <div className="text-xs bg-red-600 rounded-[50%] w-[20px] h-[20px] flex justify-center items-center absolute -top-[7px] left-[12px]">5</div>
            </div>
          </div>
          <div className="image">
           <Link to="/profile">
           <img src={image} alt="profile's picture" className="w-[50px] h-[50px] p-1 bg-white rounded-[50%] object-cover"/>
            </Link> 
            </div>
        </div>
      </div>
      </div>
   
      </>
      );
}
// export default Navbar;

