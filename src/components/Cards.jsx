import React from "react";
import {FaCircle,FaRegCircle} from 'react-icons/fa'


export default function Cards(){
    return(
        <div className="absolute top-[3.3rem] left-[3.2rem]">
          <div className={`absolute top-[8.65rem] left-0   sm:relative  bg-[url('./assets/bg-card-front.png')] h-[15.3rem] w-[27.97rem] rounded-lg flex flex-col justify-between p-[1.8rem] right-[2rem]`}>
            <div className="flex items-center gap-3">
              <FaCircle className="w-[3.1rem] h-[3.1rem] text-White"/> 
              <FaRegCircle className="w-[1.3rem] h-[1.3rem] text-Lightgrayishviolet"/>
            </div>
            <div>
              <p className="text-[1.9rem] mb-[1.1rem] tracking-[0.15rem]">0000 0000 0000 0000</p>
              <div className="flex justify-between text-Lightgrayishviolet mb-[0.2rem]">
                <p className="tracking-[0.07rem]">JANE APPLESEED</p>
                <p className="tracking-[0.1rem]">00/00</p>
              </div>
            </div>
          </div>
          <div className={`flex justify-end items-center tracking-[0.14rem] text-White p-[3.8rem] bg-[url('./assets/bg-card-back.png')] h-[15.3rem] w-[27.97rem] rounded-lg ml-[6rem]`}>
           <p className="mb-[0.4rem]">000</p> 
          </div>
        </div>
    )
}