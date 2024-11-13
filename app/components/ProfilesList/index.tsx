"use client"
import React, {useState} from 'react';
import FileInputButton from "@/app/components/FileInputButton";
import ProfileRow from "@/app/components/ProfilesList/ui/ProfileRow";

const ProfilesList = () => {

    const [files,setFiles]=useState<File[]>([])

    return (
        <div className={'flex flex-col gap-2 items-center'}>
            {files.map((file,counter)=><ProfileRow key={counter} file={file}/>)}
            <FileInputButton files={files} setFiles={setFiles}/>
        </div>
    );
};

export default ProfilesList;