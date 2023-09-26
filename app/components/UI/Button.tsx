import React from 'react';
import {classList} from "@/app/helpers/classList";

const Button = (props: any) => {
    return (
        <div className={classList('relative',props.className?props.className:'')}>
            {props.shadow ? <div
                className={'absolute transition-all animate-pulse left-0 top-0 w-full h-full bg-orange rounded-full z-[0] blur-xl '}>
            </div>:null}
            <div className={'flex relative justify-center text-center whitespace-nowrap  cursor-pointer rounded-full text-white font-bold bg-orange items-center py-4 px-12'}>
                {props.children}
            </div>

        </div>
    );
};

export default Button;