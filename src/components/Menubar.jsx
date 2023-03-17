import React from 'react'
import { TbClockHour3,TbClockHour5,TbWorld } from "react-icons/tb";
import { BiCommand } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineLightMode } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import s, { layout } from '../style'
export const Menubar = () => {
  return (
    <div className={`${layout.menu} ${s.divVer} `}>
        <div className={`${s.flexCenter} `}>
          <button>
            <RxHamburgerMenu/>
          </button>
        </div>
        <div className={`${s.flexCenter} flex-col rounded-lg bg-gray-100 `}>
          <button className={` rounded-lg p-3 bg-white shadow-xl `} >
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
        <div className={`bg-gray-100 rounded-xl `}>
          <button className={` p-3 text-xs`}>
            <FiMessageSquare/>
          </button>
        </div>
    </div>
  )
}
