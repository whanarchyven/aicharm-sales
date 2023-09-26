import React from 'react';
import Link from "next/link";
import Button from "@/app/components/UI/Button";

const Navbar = () => {

    const links=[
        {
            name:'Соглашение \n' +
                'о конфиденциальности',
            link:'/'
        },
        {
            name:'Политика \n' +
                'использования данных',
            link:'/'
        },
    ]

    return (
        <div className={'bg-black  py-8 px-12 flex justify-center w-full'}>
            <div className={'flex justify-between w-full max-w-[1440px]'}>
                <div className={'flex gap-16 items-center'}>
                    <Link href={'/'}>
                        <img  src={'/logo2.svg'}/>
                    </Link>
                    {links.map((link)=>{
                        return(
                            <Link key={link.name} className={'text-white text-sm leading-tight whitespace-pre-wrap font-extralight'} href={link.link}>
                                {link.name}
                            </Link>
                        )
                    })}
                </div>
                <Button shadow>Try demo</Button>
            </div>
        </div>
    );
};

export default Navbar;