import React from 'react'
import s, { layout } from '../style'
import {HiOutlineExclamationCircle} from "react-icons/hi"
export const Sidebar = () => {
  return (
    <div className={`${layout.sideB} `}>
        <div>
            <div className={`${s.flexCenter}`}>
                <p className={` my-10 text-lg font-bold`}>Integrations</p>
                <HiOutlineExclamationCircle className="text-slate-300 "/>
            </div>
            <div className={`w-11/12 h-11/12 rounded-xl bg-white`}>
                <div className="">
                    <div className="">
                        <p>Authentication</p>
                        <h3>Google</h3>
                    </div>
                </div>
                <div className="">
                    <div className="">
                        <p>Marketing</p>
                        <h3>Fourspace</h3>
                    </div>
                </div>
                <div className="">
                    <div className="">
                        <p>Fundraising</p>
                        <h3>Google</h3>
                    </div>
                </div>
            </div>
        </div>
        <div>

        </div>
    </div>
  )
}
