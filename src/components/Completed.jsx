import React from "react";
import icon from '../assets/icon-complete.svg'
import {Link} from 'react-router-dom'


export default function Completed (){
    return(
        <div className="mt-[8.88rem] px-[1.2rem] mb-[4rem]">
          <div className="flex flex-col justify-center items-center text-center">
          <img className="mb-[3rem] md:mb-[2rem] h-[7rem]" src={icon} alt="" />
          <h1 className="text-Verydarkviolet text-[2.6rem] tracking-[0.4rem] mb-5 md:mb-4">THANK YOU!</h1>
          <p className="text-[1.8rem] md:text-[1.6rem] text-Darkgrayishviolet mb-4 md:mb-3">We've added your card details</p>
          </div>
          <Link to='/' className="text-[1.6rem] md:text-[1rem] h-[4.25rem] md:h-[3rem] rounded-md bg-Verydarkviolet text-white mt-[2.85rem] md:mt-[1.9rem] flex justify-center md:w-[26.3rem]">
             <button>Continue</button>
          </Link>
        </div>
    )
}