import React from "react";
import logo from '../assets/card-logo.svg'
import mark from '../assets/icon-complete.svg'

export default function Form(){
    return(
        
        <form className="mt-[8.88rem] bg-red-300 px-[2.3rem] flex flex-col ">
            <div>
                <label className="tracking-[0.2rem] font-bold text-[1.05rem]" >CARDHOLDER NAME</label>
                <input className="border block mt-[0.8rem] h-[4.2rem] rounded-xl placeholder:text-[1.6rem] pt-2 px-[2rem]" type="text" placeholder="e.g Jane Appleased"/>
            </div>
            <div className="mt-[2.03rem]">
                <label className="tracking-[0.2rem] font-bold text-[1.05rem]">CARD NUMBER</label>
                <input className="border block mt-[0.8rem] h-[4.2rem] rounded-xl placeholder:text-[1.6rem] pt-2 px-[2rem]" type="text" />
            </div>

            

        </form>
        
    )
}