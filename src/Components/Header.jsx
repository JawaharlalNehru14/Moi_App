import React from 'react'
import { FaHome } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";
import { PiListStarFill } from "react-icons/pi";
import { GiTakeMyMoney } from "react-icons/gi";
import { Link } from 'react-router-dom';
const Header = () => {
  return (
   <>
   <header className='container-fluid headerStyle'>
        <nav className='row'>
            <div className='col-3 text-center headerHover'>
                <Link to="/"><FaHome className='headerIconStyle'/></Link>
                <p className='headerFont'>Home</p>
            </div>
            <div className='col-3 text-center'>
            <Link to="/showlist"><PiListStarFill className='headerIconStyle'/></Link>
                <p className='headerFont'>Guest Lists</p>
            </div>
            <div className='col-3 text-center'>
                <Link to="/addguest"><FaAddressBook className='headerIconStyle'/></Link>
                <p className='headerFont'>Add Guest</p>
            </div>
            <div className='col-3 text-center'>
                <Link to="/total"> <GiTakeMyMoney className='headerIconStyle'/></Link>
                <p className='headerFont'>Total Money</p>
            </div>
        </nav>
   </header>
   </>
  )
}

export default Header