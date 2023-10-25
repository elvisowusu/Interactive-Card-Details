import React from "react";
import {FaCircle,FaRegCircle} from 'react-icons/fa'


export default function Cards(){
    return(
        <div className="bg-green-600 w-[35rem] flex flex-col">
          <div className={`bg-[url('./assets/bg-card-front.png')] h-[15.3rem] w-[27.97rem] rounded-lg flex flex-col justify-between p-[1.65rem]`}>
            <div className="flex items-center gap-3">
              <FaCircle className="w-[3.1rem] h-[3.1rem]"/> 
              <FaRegCircle className="w-[1.3rem] h-[1.3rem]"/>
            </div>
            <div>
              <p className="text-[1.9rem] mb-[1.1rem]">9591 -6489 -6389 -1011</p>
              <div className="flex justify-between text-Lightgrayishviolet mb-[0.2rem]">
                <p className="text-[]">FELICIA LEIRE</p>
                <p>09/26</p>
              </div>
            </div>
          </div>
          <div className={`bg-[url('./assets/bg-card-back.png')] h-[15.3rem] w-[27.97rem] rounded-lg`}>
  
          </div>
        </div>
    )
}