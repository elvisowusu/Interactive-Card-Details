import React from "react";
import logo from '../assets/card-logo.svg'
import mark from '../assets/icon-complete.svg'

export default function Form(){
    return(
        
        <form className="mt-[8.88rem] px-[1.2rem] flex flex-col ">
            <div>
                <label className="tracking-[0.2rem] font-bold text-[1.05rem] text-Verydarkviolet" >CARDHOLDER NAME</label>
                <input className="border border-Lightgrayishviolet outline-none focus:border-Darkgrayishviolet block mt-[0.8rem] h-[4.2rem] rounded-xl text-[1.6rem] placeholder:text-[1.6rem] placeholder:text-Darkgrayishviolet pt-2 px-[1.5rem] w-[33rem]" type="text" placeholder="e.g Jane Appleased"/>
            </div>
            <div className="mt-[2.05rem]">
                <label className="tracking-[0.2rem] font-bold text-[1.05rem] text-Verydarkviolet">CARD NUMBER</label>
                <input className="border border-Lightgrayishviolet outline-none focus:border-Darkgrayishviolet block mt-[0.8rem] h-[4.25rem] rounded-xl text-[1.6rem] placeholder:text-[1.6rem] placeholder:text-Darkgrayishviolet pt-2 px-[1.5rem] w-[33rem]" type="text" placeholder="e.g. 1234 5678 9123 0000"/>
            </div>
            <div className="mt-[2.05rem] flex gap-[1rem]">
               <div>
                        <label className="tracking-[0.16rem] font-bold text-[1.05rem] text-Verydarkviolet">EXP. DATE (MM/YY)</label>
                        <div className="flex gap-3">
                            <input className="border border-Lightgrayishviolet outline-none focus:border-Darkgrayishviolet block mt-[0.8rem] h-[4.25rem] w-[6.1rem] rounded-xl text-[1.6rem] placeholder:text-[1.6rem] placeholder:text-Darkgrayishviolet pt-2 px-[1.5rem]" type="text" placeholder="MM" />
                            <input className="border border-Lightgrayishviolet outline-none focus:border-Darkgrayishviolet block mt-[0.8rem] h-[4.25rem] w-[6.1rem] rounded-xl text-[1.6rem] placeholder:text-[1.6rem] placeholder:text-Darkgrayishviolet pt-2 px-[1.5rem]" type="text" placeholder="YY"/>
                        </div>
                </div> 
                <div>
                    <label className="tracking-[0.16rem] font-bold text-[1.05rem] text-Verydarkviolet">CVC</label>
                    <input className="border border-Lightgrayishviolet outline-none focus:border-Darkgrayishviolet block mt-[0.8rem] h-[4.25rem] w-[19rem] rounded-xl text-[1.6rem] placeholder:text-[1.6rem] placeholder:text-Darkgrayishviolet pt-2 px-[1.5rem]" type="text" placeholder="e.g. 123" />
                </div>
            </div>
            <button className="text-[1.6rem] h-[4.25rem] rounded-xl bg-Verydarkviolet text-white mt-[2.85rem]">Confirm</button>

        </form>
        
    )
}