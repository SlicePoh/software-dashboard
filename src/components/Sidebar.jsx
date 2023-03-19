import React from 'react'
import s, { layout } from '../style'
import four from "../assets/fourspace.png"
import goo from "../assets/google.png"
import kick from "../assets/kickstarter.png"
import {HiOutlineExclamationCircle} from "react-icons/hi"
import { Show2Dough } from './Show2Dough'
export const Sidebar = () => {
    return (
        <div className={`${layout.sideB} `}>
            <div className={`${s.flexBetween} flex-col`}>
                <div className={`${s.flexCenter} `}>
                    <p className={` my-10 text-lg font-bold`}>Integrations</p>
                    <HiOutlineExclamationCircle className="text-slate-300 mx-4 "/>
                </div>
                <div className={`w-56 rounded-xl bg-white shadow-xl`}>
                    <div className={`${s.flexSS}`}>
                        <img className={`w-8`} src={goo} alt="google logo" />
                        <div className=" mx-4 ">
                            <p className="text-slate-300 text-base">Authentication</p>
                            <h3 className="font-bold">Google</h3>
                        </div>
                    </div>
                    <div className={`${s.flexSS} border-y-2 border-gray-200`}>
                        <img className={`w-8`} src={four} alt="fourspace logo" />
                        <div className=" ml-4 py-2 ">
                            <p className="text-slate-300 text-base">Marketing</p>
                            <h3 className="font-bold">Fourspace</h3>
                        </div>
                    </div>
                    <div className={`${s.flexSS}`}>
                        <img className={`w-8`} src={kick} alt="kickstarter logo" />
                        <div className=" mx-4 ">
                            <p className="text-slate-300 text-base">Fundraising</p>
                            <h3 className="font-bold">Kickstarter</h3>
                        </div>
                    </div>
                </div>
                <div className='mt-40 flex flex-col'>
                    <div className={`${s.flexStart}`}> 
                        <div className={`text-lg font-bold`}>
                            Growth
                        </div>
                        <div className="text-slate-300 mx-2 ">
                            <HiOutlineExclamationCircle />
                        </div>
                    </div>
                    <div className={`${s.flexBetween} bg-white w-56 h-16 mt-6 rounded-xl shadow-lg`}>
                        <div className={`${s.flexCenter} bg-white h-20 w-20 mx-4 rounded-full`}>
                            <Show2Dough/>
                        </div>
                        <div className='text-sm text-slate-300' >Monthly</div>
                        <div className='text-sm text-violet-700 mx-4' >+25%</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
