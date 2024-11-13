"use client";
import React, { useState } from 'react';
import { classList } from "@/app/helpers/classList";

interface wrapPInterface {
    body?: string;
    limiter: number;
    ending: string;
    color: 'white' | 'black';
}

const WrapP = ({ body = '', limiter, ending, color }: wrapPInterface) => {
    const [isOpen, setIsOpen] = useState(false);

    const textIsShort = body.split(' ').length <= limiter; // Проверяем, помещается ли текст

    return (
        <div className="flex w-full items-end justify-between sm:text-lg text-xs gap-6">
            <p className={classList('sm:w-[80%] whitespace-pre-wrap font-light', color === 'black' ? 'text-black' : 'text-white')}>
                {isOpen || textIsShort
                    ? body
                    : `${body.split(' ').slice(0, limiter).join(' ')}${ending}`}
            </p>
            {!textIsShort && (
                <div onClick={() => setIsOpen(!isOpen)} className="sm:w-[20%] flex gap-3 cursor-pointer items-center">
                    <img
                        className={classList('opacity-30 transition-all duration-300', isOpen ? 'rotate-180' : '')}
                        src={color === 'black' ? '/details_black.svg' : '/details_white.svg'}
                    />
                    <p className={classList('font-extralight opacity-30', color === 'black' ? 'text-black' : 'text-white')}>Details</p>
                </div>
            )}
        </div>
    );
};

export default WrapP;
