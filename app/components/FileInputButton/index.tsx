"use client"
import React, {FC, useEffect} from 'react';
import axios from "axios";

interface FileUploadButtonProps {
    files: File[];
    setFiles: (files: File[]) => void;
}

const FileUploadButton: FC<FileUploadButtonProps> = ({ files, setFiles }) => {
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setFiles([...files, ...Array.from(event.target.files)]);
        }
    };

    const handleButtonClick = () => {
        document.getElementById('fileInput')?.click();
    };

    useEffect(() => {
        axios.get('/api/upload-files').then((res)=>{
            console.log(res.data)
        })
    }, []);

    return (
        <div className={'my-4'}>
            <button className={'text-white bg-orange p-4 rounded-xl text-xl '} onClick={handleButtonClick}>
                Загрузить файлы
            </button>
            <input
                type="file"
                id="fileInput"
                accept=".mp3, .wav, .m4a, .aac, .ogg, .flac"
                multiple
                onChange={handleFileChange}
                style={{ display: 'none' }}
            />
        </div>
    );
};

export default FileUploadButton;
