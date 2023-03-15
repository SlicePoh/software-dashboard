import React from 'react'
import { TbClockHour3,TbClockHour5,TbWorld } from "react-icons/tb";
import { BiCommand } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineLightMode } from "react-icons/md";
import s from '../style'
export const Menubar = () => {
  return (
    <div className={`${s.menu} ${s.divVer} `}>
        <div className={`${s.flexCenter} `}>
        <RxHamburgerMenu/>
        </div>
        <div className={`${s.flexCenter} flex-col mt-20 bg-gray-100 `}>
          <button className={` rounded-lg p-3 shadow-lg `} >
            <BiCommand/>
          </button>
          <button className={`my-4`} >
            <TbClockHour3/>
          </button>
          <button className={`my-4`} >
            <TbClockHour5/>
          </button>
          <button className={`my-4`} >
            <TbWorld/>
          </button>
          <button className={`my-4`} >
            <MdOutlineLightMode/>
          </button>
        </div>
    </div>
  )
}
