"use client"
import React, {useState} from 'react';
import {classList} from "@/app/helpers/classList";

interface wrapPInterface {
    title:string,
    description:string,
}
const WrapP = ({title,description}:wrapPInterface) => {

    const [isOpen,setIsOpen]=useState(false)
    return (
        <div className={'flex flex-col cursor-pointer w-full gap-6'} onClick={()=>{setIsOpen(!isOpen)}}>
            <div className={'border-b-[1px] gap-20 flex w-full justify-between items-center border-white pb-5'}>
                <p className={'text-white text-sm sm:text-xl font-bold'}>{title}</p>
                <img className={classList('w-4 sm:w-7 transition-all duration-300 aspect-square',isOpen?'rotate-45':'')} src={'/icons/accordeon_tab.svg'}/>
            </div>
            {isOpen?
                <div className={'flex sm:text-lg text-xs text-white font-light'}>
                    {description}
                </div>
                :null}
        </div>
    );
};

export default WrapP;