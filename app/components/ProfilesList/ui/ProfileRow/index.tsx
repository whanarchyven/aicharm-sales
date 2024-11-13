"use client"
import React, {FC, useEffect, useState} from 'react';
import {ClipLoader} from "react-spinners";
import Link from "next/link";
import axios from "axios";

interface ProfileRowInterface {
    file: File
}

const StatusBar: FC<{ status: 'loading' | 'success' | 'error', link: string }> = ({status, link}) => {
    return <div className={'flex items-center gap-2'}>
        {status == 'loading' ? <ClipLoader color={'#FF7E36'} size={20}/> : <img src={`/icons/${status}.svg`}/>}
        <p>{status == 'loading' ? 'try to summarize...' : <>{status == 'error' ? 'Error' :
            <Link className={'text-[#2CB144] underline'} target={'_blank'} href={link}>Check summary</Link>}</>}</p>
    </div>
}

const ProfileRow: FC<ProfileRowInterface> = ({file}) => {

    const [isLoading, setIsLoading] = useState(true)
    const [link,setLink]=useState('')

    useEffect(() => {
        axios.get('/api/upload-files').then((res)=>{
            // setTimeout(()=>{
            //     console.log(res.data)
            //     setIsLoading(false);
            //     setLink(res.data)
            // },2000)

            console.log(res.data)
            setIsLoading(false);
            setLink(res.data)
        })
    }, []);

    const getStatus=()=>{
        if(isLoading){
            return 'loading'
        }
        if(link.length>0){
            return 'success'
        }
        return 'error'
    }

    return (
        <div className={'flex items-center gap-3'}>
            <div className={'w-12 aspect-square p-3 bg-orange flex items-center justify-center rounded-xl'}>
                <img className={'w-full h-full'} src={'/icons/doc.svg'}/>
            </div>
            <p className={'w-64 truncate'}>{file.name}</p>
            <StatusBar status={getStatus()} link={link}/>
        </div>
    );
};

export default ProfileRow;