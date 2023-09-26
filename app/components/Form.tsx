"use client"
import React, {useState} from 'react';
import QntPicker from "@/app/components/UI/QntPicker";
import Button from "@/app/components/UI/Button";

const Form = () => {

    const [employers,setEmployers]=useState(1);

    return (
        <div className={'w-full rounded-lg p-8 flex flex-col gap-5 form-bg'}>
            <div className={'flex flex-col gap-2'}>
                <p className={'pl-5 text-white font-light opacity-50 text-md'}>Your Name</p>
                <input placeholder={'Your Name'} className={'bg-white font-light text-xl text-white focus:outline-0 placeholder:text-opacity-50 bg-opacity-10 p-5 rounded-full h-14'}></input>
            </div>
            <div className={'flex flex-col gap-2'}>
                <p className={'pl-5 text-white font-light opacity-50 text-md'}>Email</p>
                <input placeholder={'Your Email'} className={'bg-white font-light text-xl text-white focus:outline-0 placeholder:text-opacity-50 bg-opacity-10 p-5 rounded-full h-14'}></input>
            </div>
            <div className={'flex flex-col gap-2'}>
                <p className={'pl-5 text-white font-light opacity-50 text-md'}>Phone</p>
                <input placeholder={'Your Name'} className={'bg-white font-light text-xl text-white focus:outline-0 placeholder:text-opacity-50 bg-opacity-10 p-5 rounded-full h-14'}></input>
            </div>
            <div className={'flex flex-col gap-2'}>
                <p className={'pl-5 text-white font-light opacity-50 text-md'}>Company</p>
                <input placeholder={'Company name'} className={'bg-white font-light text-xl text-white focus:outline-0 placeholder:text-opacity-50 bg-opacity-10 p-5 rounded-full h-14'}></input>
            </div>
            <div className={'flex flex-col gap-2'}>
                <p className={'pl-5 text-white font-light opacity-50 text-md'}>Company</p>
                <div className={'grid gap-12 grid-cols-2'}>
                    <QntPicker mutateFunc={setEmployers} mutateValue={employers}></QntPicker>
                    <Button shadow>Submit</Button>

                </div>
            </div>
        </div>
    );
};

export default Form;