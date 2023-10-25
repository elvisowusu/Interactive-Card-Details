import React from "react";
import {FaCircle,FaRegCircle} from 'react-icons/fa'


export default function Cards(){
    return(
        <div className="bg-green-600 w-[35rem] flex flex-col">
          <div className={`bg-[url('./assets/bg-card-front.png')] h-[15.3rem] w-[27.97rem] rounded-lg`}>
            <div><FaCircle/> <FaRegCircle/></div>
          </div>
          <div className={`bg-[url('./assets/bg-card-back.png')] h-[15.3rem] w-[27.97rem] rounded-lg`}>
  
          </div>
        </div>
    )
}