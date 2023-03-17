import React from 'react'
import logo1 from '../assets/logo1.png'
import {HiOutlineExclamationCircle} from "react-icons/hi"
import {AiOutlineCalendar} from "react-icons/ai"
import {BsThreeDots} from "react-icons/bs"
import s, { layout } from '../style'
import {LineChart} from './LineChart'
//import SparkLine from './SparkLine'
export const Analytics = () => {
  return (
    <div className={`${s.anal} `}>
        <div className={`${s.flexStart} my-4 sm:text-xs text-sm text-slate-400`}>
            <p><span className={`text-violet-700`}>ANALYTICS</span> <span className={`${s.padX}`}>&gt;</span> MERCOR.IO</p>
        </div>
        <div className={`${s.flexStart}  `}>
          <div className={`${s.flexCenter}`}>
              <img width="60" src={logo1} alt="mercor logo" />
              <h2 className={` sm:text-2xl xl:text-3xl font-extrabold sm:px-2 px-4`}>Company Dashboard</h2>
              <div className={` bg-slate-100 ${s.borderNorm} w-10 h-10 ${s.flexCenter} `}>
                <h2 className={`text-violet-700 text-2xl font-extrabold px-4 `}>+</h2>
              </div>
          </div>
        </div>
        <div className={`${s.flexBetween}`} >
          <div className={`${s.flexCenter} sm:text-sm xl:text-lg `}>
            <p className={` my-10 font-extrabold`}>Daily Users</p>
            <HiOutlineExclamationCircle/>
          </div>
          <div className={`${s.flexCenter} `}>
            <div className={`bg-gray-100 w-14 h-1 my-auto rounded-xl mr-5 `}></div>
            <p className="text-slate-300 text-xs"> Provisional Month</p>
            <button className={`${layout.bord} `}>
              <p>March 2023</p>
              <AiOutlineCalendar/>
            </button>
            <button className={`${layout.bord} `}>
              <BsThreeDots/>
            </button>
          </div>
        </div>

        <div className="line">
          <LineChart/>
        </div>
        

        <div className={`${s.flexStart} flex-col`} >
          <div className={`${s.flexCenter} sm:text-sm xl:text-lg `}>
            <p className={`font-extrabold`}>Total Submissions</p>
            <HiOutlineExclamationCircle/>
          </div>
          <div className={`${s.flexCenter} sm:text-sm xl:text-lg `}>
            <p className={` font-extrabold`}>Weekly Active Percentage</p>
            <HiOutlineExclamationCircle/>
          </div>
          <div className={`${s.flexStart}`}>
            <div className={`bg-violet-700 w-7 h-1 my-auto rounded-xl mr-3 `}></div>
            <p className="text-slate-300 text-xs"> Coding Competitions</p>
          </div>
        </div>
    </div>
  )
}