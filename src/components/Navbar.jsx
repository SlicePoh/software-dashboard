import React from 'react'
import {Link} from "react-router-dom"
import pic1 from "../assets/pic1.png"
import { FiSearch } from "react-icons/fi"
import { AiOutlineDown } from "react-icons/ai"
import { MdOutlineDarkMode,MdOutlineLightMode } from "react-icons/md"
import s from '../style'

export const Navbar = () => {

  const switchToggle=document.querySelector('#switch-toggle');
  const html=document.querySelector('html');
  let isDarkMode=false;

  const darkIcon=`<MdOutlineDarkMode />`
  const lightIcon=`<MdOutlineLightMode/>`

  function toggleTheme(){
    isDarkMode=!isDarkMode
    switchTheme()
  }

  function switchTheme(){
    if(!isDarkMode){
      html.classList.add('dark');
      switchToggle.classList.remove('bg-yellow-500','-transition-x-2')
      switchToggle.classList.add('bg-sky-900','-transition-x-full')
      setTimeout(()=>{
        switchToggle.innerHTML=darkIcon
      },250);
    } else{
      html.classList.remove('dark');
      switchToggle.classList.add('bg-yellow-500','-transition-x-2')
      switchToggle.classList.remove('bg-sky-900','-transition-x-full')
      setTimeout(()=>{
        switchToggle.innerHTML=lightIcon
      },250);
    }
  }


  return (
    <div className={`${s.flexBetween} bg-white dark:bg-gray-700 ml-16 h-16 w-auto static ${s.divHor} `}>
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
          <img className={`w-10 mx-2 rounded-md`} src={pic1} alt="my pic" />
          <button className={`w-2 font-extrabold text-xs `}>
            <AiOutlineDown  />
          </button>


          <button onClick={toggleTheme} className={` mx-6 w-10 h-5  rounded-2xl bg-white ${s.flexCenter} transition duration-300 focus:outline-none shadow-2xl `}>
            <div
              id="switch-toggle"
              className="w-6 h-6  rounded-full transition duration-500 transform bg-yellow-500 -translate-x-2 p-1 text-white"
            >
              <MdOutlineLightMode/>
            </div>
            <div
              id="switch-toggle"
              className="w-6 h-6  rounded-full transition duration-500 transform bg-sky-900 -translate-x-2 p-1 text-white"
            >
              <MdOutlineDarkMode />
            </div>
          </button>
        </div>
    </div>
  )
}
