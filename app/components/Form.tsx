"use client"
import React, {useState} from 'react';
import QntPicker from "@/app/components/UI/QntPicker";
import Button from "@/app/components/UI/Button";
import axios from "axios";

const Form = () => {

    const [employers,setEmployers]=useState(1);
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [phone,setPhone]=useState('');
    const [company,setCompany]=useState('')
    const [loadingStatus,setLoadingStatus]=useState('Submit')


    return (
        <div className={'w-full rounded-lg p-3 sm:p-8 flex flex-col gap-5 form-bg'}>
            <div className={'flex flex-col gap-2'}>
                <p className={'pl-5 text-white font-light opacity-50 text-md'}>Your Name</p>
                <input onChange={(event)=>{setName(event.target.value)}} placeholder={'Your Name'} className={'bg-white sm:text-xl font-light text-sm text-white focus:outline-0 placeholder:text-opacity-50 bg-opacity-10 p-5 rounded-full h-14'}></input>
            </div>
            <div className={'flex flex-col gap-2'}>
                <p className={'pl-5 text-white font-light opacity-50 text-md'}>Email</p>
                <input onChange={(event)=>{setEmail(event.target.value)}} placeholder={'Your Email'} className={'bg-white sm:text-xl font-light text-sm text-white focus:outline-0 placeholder:text-opacity-50 bg-opacity-10 p-5 rounded-full h-14'}></input>
            </div>
            <div className={'flex flex-col gap-2'}>
                <p className={'pl-5 text-white font-light opacity-50 text-md'}>Phone</p>
                <input onChange={(event)=>{setPhone(event.target.value)}} placeholder={'Your Phone'} className={'bg-white sm:text-xl font-light text-sm text-white focus:outline-0 placeholder:text-opacity-50 bg-opacity-10 p-5 rounded-full h-14'}></input>
            </div>
            <div className={'flex flex-col gap-2'}>
                <p className={'pl-5 text-white font-light opacity-50 text-md'}>Company</p>
                <input onChange={(event)=>{setCompany(event.target.value)}} placeholder={'Company name'} className={'bg-white sm:text-xl font-light text-sm text-white focus:outline-0 placeholder:text-opacity-50 bg-opacity-10 p-5 rounded-full h-14'}></input>
            </div>
            <div className={'flex flex-col gap-2'}>
                <p className={'pl-5 text-white font-light opacity-50 text-md'}>Salesmen in your team</p>
                <div className={'grid gap-12 grid-cols-1 sm:grid-cols-2'}>
                    <QntPicker mutateFunc={setEmployers} mutateValue={employers}></QntPicker>
                    <Button onClick={() => {
                        setLoadingStatus('pending');
                        axios.post(`https://script.google.com/macros/s/AKfycbzIyhYXCIRfJFe_HJaN9CiLH3HBXX-UC_AUXysZPsm0HycDOGp0DtAypGStjpp2HIqC1g/exec?p1=${name}&p2=${email}&p3=${phone}&p4=${company}&p5=${employers}`, {}, {
                            headers: {
                                'Content-Type': 'text/plain;charset=utf-8',
                            },
                        }).then((res) => {
                            setLoadingStatus('Successfully sent !');
                        })
                    }} shadow>{loadingStatus=='pending'?<img src={'/card/icons/loading.svg'} className={'animate-spin w-7 aspect-square'}/>:<p>{loadingStatus}</p>}</Button>
                </div>
            </div>
        </div>
    );
};

export default Form;