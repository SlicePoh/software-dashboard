import React from 'react'
import s, { layout } from '../style'
import four from "../assets/fourspace.png"
import goo from "../assets/google.png"
import kick from "../assets/kickstarter.png"
import {HiOutlineExclamationCircle} from "react-icons/hi"
export const Sidebar = () => {
    return (
        <div className={`${layout.sideB} `}>
            <div>
                <div className={`${s.flexCenter} `}>
                    <p className={` my-10 text-lg font-bold`}>Integrations</p>
                    <HiOutlineExclamationCircle className="text-slate-300 mx-4 "/>
                </div>
                <div className={`w-56 rounded-xl bg-white`}>
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
            </div>
            <div>
                <p className="text-lg font-bold">Growth</p>
                <img src="/" alt="growth pic" />
            </div>
            <div>

            </div>
        </div>
    )
}
