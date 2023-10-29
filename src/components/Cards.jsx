import React from "react";
import {FaCircle,FaRegCircle} from 'react-icons/fa'


export default function Cards({name,cardNumber,expDate,year, cvc}){
    return(
        <div className="absolute top-[3.3rem] left-[0.75rem]">
          <div className={`absolute top-[8.65rem] lg:top-[4rem] xl:top-[8rem] left-0 xl:left-[14.6rem] lg:left-[9rem]   sm:relative  bg-[url('./assets/bg-card-front.png')] h-[15.3rem] w-[27.97rem] rounded-lg flex flex-col justify-between p-[1.8rem] right-[2rem]`}>
            <div className="flex items-center gap-3">
              <FaCircle className="w-[3.1rem] h-[3.1rem] text-White"/> 
              <FaRegCircle className="w-[1.3rem] h-[1.3rem] text-Lightgrayishviolet"/>
            </div>
            <div>
              <p className="text-[1.9rem] mb-[1rem] tracking-[0.15rem]">{cardNumber}</p>
              <div className="flex justify-between text-Lightgrayishviolet mb-[0.05rem]">
                <p className="tracking-[0.07rem]">{name}</p>
                <p className="tracking-[0.1rem]">{expDate}/{year}</p>
              </div>
            </div>
          </div>
          <div className={`flex justify-end items-center tracking-[0.14rem] text-White p-[3.8rem] bg-[url('./assets/bg-card-back.png')] h-[15.3rem] w-[27.97rem] rounded-lg ml-[6rem] lg:ml-[15rem] xl:ml-[21rem] xl:mt-[10rem] lg:mt-[6rem]`}>
           <p className="mb-[0.4rem]">{cvc}</p> 
          </div>
        </div>
    )
}