import React, { useState } from 'react'
import { TbClockHour3,TbClockHour5,TbWorld } from "react-icons/tb";
import { BiCommand } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineLightMode } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import s, { layout } from '../style'

import { motion } from 'framer-motion';


export const Menubar = () => {
  
  const [isAnimate,setIsAnimate]=useState(false);

  return (
    <div className={`${layout.menu} bg-white ${s.divVer} `}>
        <div className={`${s.flexCenter} my-4 `}>
          <button>
            <RxHamburgerMenu/>
          </button>
        </div>
        <div className={`${s.flexCenter} flex-col rounded-lg bg-gray-100 `}>
          <motion.button 
            className="rounded-lg bg-white shadow-xl p-3 "
            animate={{
              rotate: !isAnimate ? 0 : 360,
            }}
            initial={{
            
            }}
            transition={{
              duration: 1,
              type:"spring",
              stiffness: 50
            }}
            onClick={(()=>setIsAnimate(!isAnimate))}
            >
            <BiCommand />
            
          </motion.button>
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
