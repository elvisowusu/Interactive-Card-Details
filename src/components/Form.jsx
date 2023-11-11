import React from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';

export default function Form({ updateContent }) {
  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Can't be blank"),
    Number: yup
      .string()
      .matches(/^\d{16}$/, 'Card number must be 16 digits')
      .required("Can't be blank"),
    MM: yup
      .number('Should be numeric')
      .typeError('Requires')
      .min(1, 'MM is 1 or more')
      .max(12, "MM can't exceed 12")
      .required("Can't be blank"),
    YY: yup
      .number('YY is required')
      .typeError("Can't be blank")
      .min(1, 'MM is 1 or more')
      .max(2023, "MM can't exceed 2023")
      .required("Can't be blank"),
    cvc: yup
      .number()
      .min(1, 'MM is 1 or more')
      .max(3, "MM can't exceed 3")
      .typeError("Can't be blank")
      .required("Can't be blank"),
  });

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  let navigate = useNavigate();

  const formatCardNumber = (value) => {
    // Remove non-numeric characters
    const numericValue = value.replace(/\D/g, '');

    // Format the value as four groups of four digits
    const formattedValue = numericValue
      .match(/\d{1,4}/g)
      .join(' ');

    return formattedValue;
  };

  const onSubmit = (data) => {
    console.log(data);
    updateContent('name', data.name);
    updateContent('cardNumber', data.Number);
    updateContent('expDate', data.MM);
    updateContent('year', data.YY);
    updateContent('cvc', data.cvc);
    reset();
    navigate("/Completed");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-[8.88rem] px-[1.2rem] flex flex-col mb-[4rem]">
      <div>
        <label className="tracking-[0.2rem] font-bold text-[1.05rem] md:text-[0.7rem] text-Verydarkviolet">CARDHOLDER NAME</label>
        <input className={`border border-Lightgrayishviolet outline-none focus-border-Darkgrayishviolet ${errors.name ? 'border-inputerrors focus-border-inputerrors' : ''} block mt-[0.8rem] md:mt-[0.2rem] h-[4.2rem] md:h-[3rem] rounded-md text-[1.6rem] md:text-[1.4rem] placeholder:text-[1.6rem] md:placeholder:text-[1rem] placeholder:text-Darkgrayishviolet pt-2 px-[1.5rem] w-[33rem] md:px-5 md:pb-2  md:w-[26rem]`}
          type="text"
          placeholder="e.g Jane Appleased"
          {...register("name")}
        />
        <p className="text-inputerrors mt-3 text-[0.7rem] md:mt-1">{errors.name?.message}</p>
      </div>
      <div className="mt-[2.05rem] md:mt-4">
        <label className="tracking-[0.2rem] font-bold text-[1.05rem] md:text-[0.7rem] text-Verydarkviolet">CARD NUMBER</label>
        <input
       
          className={`border border-Lightgrayishviolet outline-none focus-border-Darkgrayishviolet ${errors.Number ? 'border-inputerrors focus-border-inputerrors' : ''} block mt-[0.8rem] md:mt-[0.2rem] h-[4.25rem] md:h-[3rem] rounded-md text-[1.6rem] md:text-[1.4rem] placeholder:text-[1.6rem] md:placeholder:text-[1.2rem] placeholder:text-Darkgrayishviolet pt-2 px-[1.5rem] w-[33rem] md:px-5 md:pb-2  md:w-[26rem]`}
          type="text"
          placeholder="e.g. 1234 5678 9123 0000"
          {...register('Number')}
          maxLength={19}
          onChange={(e) => {
              e.target.value = formatCardNumber(e.target.value);
            
          }}
        />
        <p className="text-inputerrors mt-3 text-[0.7rem] md:mt-1">{errors.Number?.message}</p>
      </div>
      <div className="mt-[2.05rem] md:mt-4 flex gap-[1rem] md:gap-[0.5rem]">
        <div>
          <label className="tracking-[0.16rem] font-bold text-[1.05rem] md:text-[0.7rem] text-Verydarkviolet">EXP. DATE (MM/YY)</label>
          <div className="flex gap-3 md:gap-2">
            <div>
              <input
                className={`border border-Lightgrayishviolet outline-none focus-border-Darkgrayishviolet ${errors.MM ? 'border-inputerrors focus-border-inputerrors' : ''} block mt-[0.8rem] md:mt-[0.2rem] h-[4.25rem] md:h-[3rem] w-[6.1rem] rounded-md text-[1.6rem] md:text-[1.4rem] placeholder:text-[1.6rem] md:placeholder:text-[1.5rem] placeholder:text-Darkgrayishviolet pt-2 px-[1.5rem] md:px-0 md:pl-2 md:pb-2  md:w-[5rem]`}
                type="number"
                placeholder="MM"
                {...register('MM')}
                maxLength={2}
                onChange={(e) => {
                  if (e.target.value > 12) {
                    e.target.value = 12;
                  }
                }}     
              />
              <p className="text-inputerrors mt-3 text-[0.7rem] md:mt-1">{errors.YY?.message}</p>
                </div>
                <div>
                  <input
                    className={`border border-Lightgrayishviolet outline-none focus-border-Darkgrayishviolet ${errors.YY ? 'border-inputerrors focus-border-inputerrors' : ''} block mt-[0.8rem] md:mt-[0.2rem] h-[4.25rem] md:h-[3rem] w-[6.1rem] rounded-md text-[1.6rem] md:text-[1.4rem] placeholder:text-[1.6rem] md:placeholder:text-[1.5rem] placeholder:text-Darkgrayishviolet pt-2 px-[1.5rem] md:px-0 md:pl-2 md:pb-2  md:w-[5rem]`}
                    type="number"
                    placeholder="YY"
                    {...register('YY')}
                    maxLength={4}
                    onChange={(e) => {
                      if (e.target.value > 2023) {
                        e.target.value = 2023;
                      }
                    }}
                  />
              <p className="text-inputerrors mt-3 text-[0.7rem] md:mt-1">{errors.YY?.message}</p>
            </div>
          </div>
        </div>
        <div>
          <label className="tracking-[0.16rem] font-bold text-[1.05rem] md:text-[0.7rem] text-Verydarkviolet">CVC</label>
          <input
            className={`border border-Lightgrayishviolet outline-none focus-border-Darkgrayishviolet ${errors.cvc ? 'border-inputerrors focus-border-inputerrors' : ''} block mt-[0.8rem] md:mt-[0.2rem] h-[4.25rem] md:h-[3rem] w-[19rem] rounded-md text-[1.6rem] md:text-[1.4rem] placeholder:text-[1.6rem] md:placeholder:text-[1.2rem] placeholder:text-Darkgrayishviolet pt-2 px-[1.5rem] md:px-3 md:pb-3  md:w-[15rem]`}
            type="number"
            placeholder="e.g. 123"
            {...register('cvc')}
            maxLength={3}
            onChange={(e) => {
              if (e.target.value > 999) {
                e.target.value = 999;
              }
            
            }}
          />
          <p className="text-inputerrors mt-3 text-[0.7rem] md:mt-1">{errors.cvc?.message}</p>
        </div>
      </div>
      <button className="text-[1.6rem] md:text-[1rem] h-[4.25rem] md:h-[3rem] rounded-md bg-Verydarkviolet text-white mt-[2.85rem] md:mt-[1.9rem]">Confirm</button>
    </form>
  );
}