import React from 'react';

interface qntPickerInterface {
    mutateFunc:(value:any)=>any,
    mutateValue:number,
}
const QntPicker = ({mutateFunc,mutateValue}:qntPickerInterface) => {
    return (
        <div className={'bg-white font-light flex items-center text-xl text-white focus:outline-0 placeholder:text-opacity-50 bg-opacity-10 p-2 rounded-full h-14 justify-between'}>
            <div onClick={()=>{
                if(mutateValue>1) {
                    mutateFunc(mutateValue-1)
                }
            }} className={'flex items-center cursor-pointer  group transition-all duration-300 hover:bg-opacity-50 justify-center h-full aspect-square rounded-full bg-white bg-opacity-10'}>
                <p className={'opacity-50 touch-none select-none group-hover:opacity-100'}>-</p>
            </div>
            <input min={1} value={mutateValue} onChange={(event)=>{mutateFunc(event.target.value)}} type={'number'} aria-controls={'none'} className={'bg-transparent appearance-none text-center w-32 font-light text-xl text-white focus:outline-0 placeholder:text-opacity-50 bg-opacity-10 p-5 rounded-full h-14'}></input>
            <div onClick={()=>{
                mutateFunc(mutateValue+1)
            }} className={'flex items-center cursor-pointer  group transition-all duration-300 hover:bg-opacity-50 justify-center h-full aspect-square rounded-full bg-white bg-opacity-10'}>
                <p className={'opacity-50 touch-none select-none group-hover:opacity-100'}>+</p>
            </div>
        </div>
    );
};

export default QntPicker;