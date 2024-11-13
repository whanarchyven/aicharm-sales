import React from 'react';
import Link from "next/link";
import Button from "@/app/components/UI/Button";

const Navbar = () => {

    const links=[
        {
            name:'Confidentiality \n' +
                'agreement',
            link:'/'
        },
        {
            name:'Data usage \n' +
                'policy',
            link:'/'
        },
    ]

    return (
        <div className={'bg-black  py-8 px-12 flex justify-center w-full'}>
            <div className={'flex justify-between w-full sm:max-w-[1440px]'}>
                <div className={'flex sm:gap-16 sm:flex-nowrap flex-wrap items-center'}>
                    {/*<Link href={'/'}>*/}
                    {/*    <img  src={'/logo2.svg'}/>*/}
                    {/*</Link>*/}
                    {links.map((link)=>{
                        return(
                            <Link key={link.name} className={'text-white text-xs w-full sm:w-auto sm:text-sm leading-tight sm:flex hidden whitespace-pre-wrap font-extralight'} href={link.link}>
                                {link.name}
                            </Link>
                        )
                    })}
                </div>
                {/*<Button shadow>Try demo</Button>*/}
            </div>
        </div>
    );
};

export default Navbar;