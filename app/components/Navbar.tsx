"use client"
import React, {useState} from 'react';
import Link from "next/link";
import Button from "@/app/components/UI/Button";
import {classList} from "@/app/helpers/classList";
import {usePathname} from "next/navigation";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        {
            name: 'About Us',
            link: '#main'
        },
        {
            name: 'Advantages',
            link: '#advantages'
        },
        {
            name: 'How it works',
            link: '#hiw'
        },
        {
            name: 'Try beta',
            link: '#try'
        },
        {
            name: 'Cases',
            link: '#cases'
        },
        {
            name: 'Contact Us',
            link: '#form'
        },
    ]

    const pathname=usePathname();

    return (
        <div
            className={classList('bg-black fixed z-50 left-0 top-0 py-2 sm:py-8 sm:px-12 flex flex-col items-center w-full', isOpen ? 'h-full' : 'h-12 sm:h-auto justify-center')}>
            <div className={'hidden sm:flex justify-between w-full sm:max-w-[1440px]'}>
                <div className={'flex gap-16 items-center'}>
                    {/*<Link href={'/'}>*/}
                    {/*    <img src={'/logo.svg'}/>*/}
                    {/*</Link>*/}
                    {links.map((link) => {
                        if(pathname=='/'){
                            return (
                                <Link key={link.name} className={'text-white scroll-smooth text-lg whitespace-nowrap font-extralight'}
                                      href={link.link}>
                                    {link.name}
                                </Link>
                            )
                        }
                    })}
                </div>
                {pathname=='/'?<Button shadow><a href={'#form'}>Try demo</a></Button>:null}
            </div>
            <div className={'flex w-full justify-between items-start sm:hidden px-[20px]'}>
                <img className={'w-32'} src={'/logo.svg'}/>
                <img onClick={() => {
                    setIsOpen(!isOpen)
                }} className={'aspect-square w-6'} src={!isOpen ? '/icons/burger.svg' : '/icons/burger_close.svg'}/>
            </div>
            {isOpen ?
                <div className={'flex w-full px-[20px] mt-12 flex-col gap-12'}>
                    {links.map((link) => {
                        return (
                            <Link onClick={()=>{setIsOpen(false)}} key={link.name} className={'text-white scroll-smooth text-2xl whitespace-nowrap font-extralight'}
                                  href={link.link}>
                                {link.name}
                            </Link>
                        )
                    })}
                    <Button shadow><a href={'#form'}>Try demo</a></Button>
                </div> : null}

        </div>
    );
};

export default Navbar;