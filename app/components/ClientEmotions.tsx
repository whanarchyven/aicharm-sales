import React, {FC} from 'react';
import {classList} from "@/app/helpers/classList";


interface emotionsInterface {
    emotions: {
        "emoticon": string,
        "rank": number,
        "name": string
    }[]
}

const ClientEmotions: FC<emotionsInterface> = ({emotions}) => {
    const maxRank = Math.max(...emotions.map(emotion => emotion.rank));
    return (
        <div className={'w-full'}>
            <div className={'w-full h-[400px] hidden sm:flex items-end gap-4'}>
                {emotions.map((emotion,counter)=>{
                    const isTop = emotion.rank === maxRank;
                    return(
                        <div key={counter} className={'flex flex-col items-center w-1/5 gap-4'} style={{height:`${emotion.rank}%`}}>
                            <p>{emotion.rank}%</p>
                            <div className={classList('flex-grow rounded-xl w-full',isTop?'bg-orange':'bg-gray-400')}>

                            </div>
                            <p className={'text-lg sm:text-4xl'}>{emotion.emoticon}</p>
                            <p className={'text-xs hidden sm:flex sm:text-sm'}>{emotion.name}</p>
                        </div>
                    )
                })}
            </div>
            <div className={'w-full flex flex-col sm:hidden items-start gap-4'}>
                {emotions.map((emotion,counter)=>{
                    const isTop = emotion.rank === maxRank;
                    return(
                        <div className={'flex flex-col w-full gap-2'}>
                            <div key={counter} className={'flex flex-row-reverse items-center w-full gap-4'} style={{width:`${emotion.rank+25}%`}}>
                                <p>{emotion.rank}%</p>
                                <div className={classList('flex-grow rounded-xl h-12 w-full',isTop?'bg-orange':'bg-gray-400')}>

                                </div>
                                <p className={'text-lg  sm:text-4xl'}>{emotion.emoticon}</p>
                            </div>
                            <p className={'text-sm font-bold'}>{emotion.name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default ClientEmotions;