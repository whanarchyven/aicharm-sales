import React, {FC} from 'react';
import {classList} from "@/app/helpers/classList";


interface emotionsInterface {
    emotions:{
        "emoticon": string,
        "rank": number,
        "name": string
    }[]
}
const ClientEmotions:FC<emotionsInterface> = ({emotions}) => {
    const maxRank = Math.max(...emotions.map(emotion => emotion.rank));
    return (
        <div className={'h-[400px] w-full flex items-end gap-4'}>
            {emotions.map((emotion,counter)=>{
                const isTop = emotion.rank === maxRank;
                return(
                    <div key={counter} className={'flex flex-col items-center w-1/5 gap-4'} style={{height:`${emotion.rank}%`}}>
                        <p>{emotion.rank}%</p>
                        <div className={classList('flex-grow rounded-xl w-full',isTop?'bg-orange':'bg-gray-400')}>

                        </div>
                        <p className={'text-4xl'}>{emotion.emoticon}</p>
                        <p className={'text-sm'}>{emotion.name}</p>
                    </div>
                )
            })}
        </div>
    );
};

export default ClientEmotions;