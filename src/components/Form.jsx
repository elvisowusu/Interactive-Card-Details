import React from "react";
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import logo from '../assets/card-logo.svg'
import mark from '../assets/icon-complete.svg'

export default function Form({name,updateContent}){
    
    const schema =yup.object().shape({
        name:yup
        .string()
        .required("Can't be blank"),
        Number:yup
        .number('Wrong format, numbers only')
        .typeError("Can't be blank")
        .required("Can't be blank"),
        MM:yup
        .number('Should be numeric')
        .typeError('Requires')
        .required("Can't be blank"),
        YY:yup
        .number('YY is required')
        .typeError("Can't be blank")
        .required("Can't be blank"),
        cvc:yup
        .number()
        .typeError("Can't be blank")
        .required("Can't be blank"),
        
    })
    const {register,handleSubmit,reset,formState:{errors}}=useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit=(data)=>{
        console.log(data);
        updateContent(data.name)
        reset();
    }
    return(
        
        <form onSubmit={handleSubmit(onSubmit)} className="mt-[8.88rem] px-[1.2rem] flex flex-col ">
            <div>
                <label className="tracking-[0.2rem] font-bold text-[1.05rem] md:text-[0.6rem] text-Verydarkviolet" >CARDHOLDER NAME</label>
                <input className={`border border-Lightgrayishviolet outline-none focus:border-Darkgrayishviolet ${errors.name? 'border-inputerrors focus:border-inputerrors':''} block mt-[0.8rem] md:mt-[0.2rem] h-[4.2rem] md:h-[3rem] rounded-xl text-[1.6rem] placeholder:text-[1.6rem] md:placeholder:text-[1rem] placeholder:text-Darkgrayishviolet pt-2 px-[1.5rem] w-[33rem] md:px-5 md:pb-2  md:w-[26rem]`}
                       type="text" 
                       placeholder="e.g Jane Appleased"
                       {...register("name")}
                />
                <p className="text-inputerrors mt-3 ">{errors.name?.message}</p>
            </div>
            <div className="mt-[2.05rem] md:mt-1">
                <label className="tracking-[0.2rem] font-bold text-[1.05rem] md:text-[0.6rem] text-Verydarkviolet">CARD NUMBER</label>
                <input className={`border border-Lightgrayishviolet outline-none focus:border-Darkgrayishviolet ${errors.Number? 'border-inputerrors focus:border-inputerrors':''} block mt-[0.8rem] md:mt-[0.2rem] h-[4.25rem] md:h-[3rem] rounded-xl text-[1.6rem] placeholder:text-[1.6rem] md:placeholder:text-[1.2rem] placeholder:text-Darkgrayishviolet pt-2 px-[1.5rem] w-[33rem] md:px-5 md:pb-2  md:w-[26rem]`}
                        type="number" 
                        placeholder="e.g. 1234 5678 9123 0000"
                        onInput={()=>{
                            let value = parseInt(e.target.value);
                            if(!isNaN(value)|| value < 1 || value > 16){
                                value ='';
                            }else if (value === Math.floor(value)){
                                value = value.toString();
                            }
                            e.target.value = value;
                        } 
                        }
                        {...register('Number')}
                />
                <p className="text-inputerrors mt-3">{errors.Number?.message}</p>
            </div>
            <div className="mt-[2.05rem] flex gap-[1rem]">
               <div>
                        <label className="tracking-[0.16rem] font-bold text-[1.05rem] md:text-[0.6rem] text-Verydarkviolet">EXP. DATE (MM/YY)</label>
                        <div className="flex gap-3">
                            <div>
                            <input className={`border border-Lightgrayishviolet outline-none focus:border-Darkgrayishviolet ${errors.MM? 'border-inputerrors focus:border-inputerrors':''} block mt-[0.8rem] md:mt-[0.2rem] h-[4.25rem] md:h-[3rem] w-[6.1rem] rounded-xl text-[1.6rem] placeholder:text-[1.6rem] md:placeholder:text-[1.5rem] text-center placeholder:text-Darkgrayishviolet pt-2 px-[1.5rem] md:px-0 md:pl-2 md:pb-2  md:w-[4.5rem]`}
                                    type="number" 
                                    placeholder="MM" 
                                    onInput={()=>{
                                        let value = parseInt(e.target.value);
                                        if(!isNaN(value)|| value < 1 || value >= 13){
                                            value ='';
                                        }else if (value === Math.floor(value)){
                                            value = value.toString();
                                        }
                                        e.target.value = value;
                                    } 
                                    }
                                    {...register('MM')}
                            />
                            <p className="text-inputerrors mt-3">{errors.MM?.message}</p>
                            </div>
                            <div>
                            <input className={`border border-Lightgrayishviolet outline-none focus:border-Darkgrayishviolet ${errors.YY? 'border-inputerrors focus:border-inputerrors':''} block mt-[0.8rem] md:mt-[0.2rem] h-[4.25rem] md:h-[3rem] w-[6.1rem] rounded-xl text-[1.6rem] placeholder:text-[1.6rem] md:placeholder:text-[1.5rem] text-center placeholder:text-Darkgrayishviolet pt-2 px-[1.5rem] md:px-3 md:pb-2  md:w-[4.5rem]`}
                                    type="text" 
                                    placeholder="YY"
                                    onInput={()=>{
                                        let value = parseInt(e.target.value);
                                        if(!isNaN(value)|| value < 1 || value >= 2023){
                                            value ='';
                                        }else if (value === Math.floor(value)){
                                            value = value.toString();
                                        }
                                        e.target.value = value;
                                    } 
                                    }
                                    {...register('YY')}
                            />
                            <p className="text-inputerrors mt-3">{errors.YY?.message}</p>
                            </div>
                        </div>
                </div> 
                <div>
                    <label className="tracking-[0.16rem] font-bold text-[1.05rem] md:text-[0.6rem] text-Verydarkviolet">CVC</label>
                    <input className={`border border-Lightgrayishviolet outline-none focus:border-Darkgrayishviolet ${errors.cvc? 'border-inputerrors focus:border-inputerrors':''} block mt-[0.8rem] md:mt-[0.2rem] h-[4.25rem] md:h-[3rem] w-[19rem] rounded-xl text-[1.6rem] placeholder:text-[1.6rem] md:placeholder:text-[1.2rem] placeholder:text-Darkgrayishviolet pt-2 px-[1.5rem] md:px-3 md:pb-3  md:w-[15rem]`}
                            type="text" 
                            placeholder="e.g. 123" 
                            {...register('cvc')}
                    />
                    <p className="text-inputerrors mt-3">{errors.cvc?.message}</p>
                </div>
            </div>
            <button className="text-[1.6rem] md:text-[1rem] h-[4.25rem] md:h-[3rem] rounded-xl bg-Verydarkviolet text-white mt-[2.85rem]">Confirm</button>

        </form>
        
    )
}