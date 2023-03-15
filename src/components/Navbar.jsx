import React from 'react'
import {Link} from "react-router-dom"
import pic1 from "../assets/pic1.png"
import { FiSearch } from "react-icons/fi"
import { AiOutlineDown } from "react-icons/ai"
import { MdOutlineDarkMode } from "react-icons/md"
import s from '../style'
export const Navbar = () => {
  return (
    <div className={`${s.flexBetween} h-16 w-auto relative `}>
        <div className="headings">
          <ul className={`${s.flexStart} p-4`}>
            <li className={`${s.navHead}`}>
              <Link to="/">Analytics</Link>
            </li>
            <li className={`${s.navHead}`}>
              <Link to="/codingcomp">Coding Competitions</Link>
            </li>
            <li className={`${s.navHead} `}>
              <Link to="/projects">Projects</Link>
            </li>
            <li className={`${s.navHead} m-auto `}>
              <FiSearch/>
            </li>
          </ul>
        </div>
        <div className={`${s.flexCenter} `}>
          <h2 className={` ${s.navEnd}`}>Company Dashboard</h2>
          <img className={`w-10 rounded-md`} src={pic1} alt="my pic" />
          <AiOutlineDown className={`w-2`} />
          <MdOutlineDarkMode />
        </div>
    </div>
  )
}
