import React from 'react'
import logo1 from '../assets/logo1.png'
import {HiOutlineExclamationCircle} from "react-icons/hi"
import {AiOutlineCalendar} from "react-icons/ai"
import {BsThreeDots} from "react-icons/bs"
import s, { layout } from '../style'
import { ShowLine } from './ShowLine'
import { ShowDough } from './ShowDough'
//import { Sidebar } from './Sidebar'
//import App from '../App'

export const Analytics = () => {
  return (
    <div className={`${s.anal} `}>
        <div className={`${s.flexStart} my-4 sm:text-xs text-sm text-slate-400`}>
            <p><span className={`text-violet-700 `}>ANALYTICS</span> <span className={`${s.padX}`}>&gt;</span> MERCOR.IO</p>
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
            <p className={` my-2 font-extrabold`}>Daily Users</p>
            <div className="text-slate-300 mx-2 ">
              <HiOutlineExclamationCircle/>
            </div>
          </div>
          <div className={`${s.flexCenter} `}>
            <div className={`bg-gray-100 w-14 h-1 my-auto rounded-xl mr-5 `}></div>
            <p className="text-slate-300 text-xs"> Provisional Month</p>
            <button className={`${layout.bord} `}>
              <p className=" mx-2">March 2023</p>
              <AiOutlineCalendar/>
            </button>
            <button className={`${layout.bord} `}>
              <BsThreeDots/>
            </button>
          </div>
        </div>

        <div className={`${s.flexCenter} mb-6`}>
          <ShowLine/>
        </div>
        <div className={`${s.flexBetween} `} >
          <div>
            <div className={`${s.flexSS} sm:text-sm xl:text-lg `}>
              <p className={`font-extrabold`}>Total Submissions</p>
              <div className="text-slate-300 mx-2 ">
                <HiOutlineExclamationCircle/>
              </div>
            </div>
            <div className="my-6 flex">
              <ShowDough/> 
              <div className="-translate-x-96 translate-y-12">
                <div className="ml-2 text-2xl font-extrabold">507,317</div>
                <div className="text-slate-300 translate-x-7 mt-4 text-sm">Label</div>
              </div>
            </div>
          </div>

          <div >
            <div className={`${s.flexSS} sm:text-sm xl:text-lg `}>
              <p className={` font-extrabold`}>Weekly Active Percentage</p>
              <div className="text-slate-300 mx-2 ">
                <HiOutlineExclamationCircle/>
              </div>
            </div>
            <div className={`mt-6 ${s.flexCenter}`}>
              <div className="text-3xl font-extrabold">594,201</div>
              <div className="text-sm mx-4 text-slate-300">Total</div>
            </div>
            <div className={`my-4 w-96 h-5 rounded-xl bg-lv`}>
              <div className={`w-28 h-5 rounded-xl bg-[#7459D9]`}></div>
            </div>
            <div className="flex justify-between">
              <div className="flex">
                <div className={`bg-[#7459D9] w-14 h-1 my-auto rounded-xl mr-5 `}></div>
                <div className="text-slate-400 text-xs">Active</div>
              </div>
              <div className="flex">
                <div className={`bg-lv w-14 h-1 my-auto rounded-xl mr-5 `}></div>
                <div className="text-slate-400 text-xs">Inactive</div>
              </div>
            </div>
            <div className="flex justify-between my-4">
              <div className="flex">
                <div className="text-slate-400 text-xs">173,016 users</div>
              </div>
              <div className="flex">
                <div className="text-black font-bold text-xs">421,185 users</div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
