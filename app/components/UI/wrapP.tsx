"use client"
import React, {useState} from 'react';
import {classList} from "@/app/helpers/classList";

interface wrapPInterface {
    body:string,
    limiter:number,
    ending:string,
    color:'white'|'black'
}
const WrapP = ({body,limiter,ending,color}:wrapPInterface) => {

    const [isOpen,setIsOpen]=useState(false)
    return (
        <div className={'flex items-end justify-between sm:text-lg text-xs gap-6'}>
            <p className={classList('sm:w-[90%] whitespace-pre-wrap font-extralight',color=='black'?'text-black':'text-white')}>{isOpen?body:body.split(' ').splice(0,limiter).join(' ').concat(ending)}</p>
            <div onClick={()=>{setIsOpen(!isOpen)}} className={'sm:w-[10%] flex gap-3 cursor-pointer items-center'}>
                {color=='black'?<img className={classList('opacity-30 transition-all duration-300',isOpen?'rotate-180':'')} src={'/details_black.svg'}/>:<img className={classList('opacity-30 transition-all duration-300',isOpen?'rotate-180':'')} src={'/details_white.svg'}/>}
                <p className={classList('font-extralight opacity-30',color=='black'?'text-black':'text-white')}>Details</p>
            </div>
        </div>
    );
};

export default WrapP;