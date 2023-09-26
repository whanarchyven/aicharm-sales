import React from 'react';
import Link from "next/link";
import Button from "@/app/components/UI/Button";

const Navbar = () => {

    const links=[
        {
            name:'About Us',
            link:'/'
        },
        {
            name:'Advantages',
            link:'/'
        },
        {
            name:'How it works',
            link:'/'
        },
        {
            name:'Try beta',
            link:'/'
        },
        {
            name:'Cases',
            link:'/'
        },
        {
            name:'Contact Us',
            link:'/'
        },
    ]

    return (
        <div className={'bg-black fixed z-50 left-0 top-0 py-8 px-12 flex justify-center w-full'}>
            <div className={'flex justify-between w-full max-w-[1440px]'}>
                <div className={'flex gap-16 items-center'}>
                    <Link href={'/'}>
                        <img src={'/logo.svg'}/>
                    </Link>
                    {links.map((link)=>{
                        return(
                            <Link key={link.name} className={'text-white text-lg whitespace-nowrap font-extralight'} href={link.link}>
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