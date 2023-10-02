import Image from 'next/image'
import Button from "@/app/components/UI/Button";
import WrapP from "@/app/components/UI/wrapP";
import AccordeonTab from "@/app/components/UI/AccordeonTab";
import QntPicker from "@/app/components/UI/QntPicker";
import Form from "@/app/components/Form";

export default function Home() {
    return (
        <main className="bg-black w-full">

            {/*ПЕРВЫЙ БЛОК*/}

            <div className={'w-full flex justify-center sm:px-12 bg-white bg-cover relative py-12 sm:py-44'}>
                <div className={'w-full h-full items-center p-2 sm:px-[20px] sm:sm:max-w-[1440px]'}>

                    <div className={'mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8'}>
                        <div className={'flex flex-col w-full '}>
                            <div className={'flex gap-3 items-start'}>
                                <div className={'w-[5%] flex justify-start'}>
                                    <img className={'w-6 aspect-square'} src={'/card/icons/info.svg'}/>
                                </div>
                                <div className={'flex flex-col w-[80%] sm:w-[95%] gap-3'}>
                                    <p className={'text-orange sm:text-2xl leading-[100%] font-bold'}>Call details:</p>
                                    <div className={'grid grid-cols-1 sm:grid-cols-7 items-start gap-1'}>
                                        <p className={'text-black sm:col-span-2 sm:text-lg font-bold'}>Call Date and Time:</p>
                                        <div className={'col-span-5 w-full text-sm'}>
                                            <p className={'sm:text-lg font-light'}>[Date and Time]</p>
                                        </div>
                                    </div>
                                    <div className={'grid grid-cols-1 sm:grid-cols-7 items-start gap-1'}>
                                        <p className={'text-black sm:col-span-2 sm:text-lg font-bold'}>Call Duration:</p>
                                        <div className={'col-span-5 w-full text-sm'}>
                                            <p className={'sm:text-lg font-light'}>[Duration]</p>
                                        </div>
                                    </div>
                                    <div className={'grid grid-cols-1 sm:grid-cols-7 items-start gap-1'}>
                                        <p className={'text-black sm:col-span-2 sm:text-lg font-bold'}>Call Purpose:</p>
                                        <div className={'col-span-5 w-full text-sm'}>
                                            <p className={'sm:text-lg font-light'}>[Purpose of the Call]</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className={'flex gap-3 mt-6 items-start'}>
                                <div className={'w-[5%] flex justify-start'}>
                                    <img className={'w-6 aspect-square'} src={'/card/icons/conversation.svg'}/>
                                </div>
                                <div className={'flex flex-col w-[80%] sm w-[80%]:sm:w-[95%] gap-3'}>
                                    <p className={'text-orange sm:text-2xl leading-[100%] font-bold'}>Conversation Summary:</p>
                                    <WrapP
                                        body={'The call began with a brief introduction and a friendly exchange of pleasantries, establishing rapport.\n' +
                                            '\n' +
                                            'The manager effectively presented the product features and benefits, addressing the clients questions and concerns along the way.\n' +
                                            '\n' +
                                            'Throughout the call, the manager actively listened to the client, making them feel valued and understood.\n' +
                                            '\n' +
                                            'The closing stage was reached when [specific point in the conversation], and the manager confidently asked for the sale.'}
                                        limiter={14} ending={'...'} color={'black'}></WrapP>
                                </div>
                            </div>
                            <div className={'sm:pl-10 mt-4 sm:py-6 sm:border-2 border-black border-opacity-10 rounded-xl'}>
                                <div className={''}>
                                    <div className={'flex gap-3 items-start'}>
                                        <div className={'w-[5%] flex justify-start'}>
                                            <img className={'w-6 aspect-square'} src={'/card/icons/clients_active.svg'}/>
                                        </div>
                                        <div className={'flex flex-col w-[80%] sm:w-[95%] gap-3'}>
                                            <p className={'text-black sm:col-span-2 leading-[100%] sm:text-lg font-bold'}>Client&apos;s Decision Point:</p>
                                            <WrapP
                                                body={'The clients decision was likely influenced by [key factors, e.g., price, product fit, trust in the manager].'}
                                                limiter={15} ending={'...'} color={'black'}></WrapP>
                                        </div>
                                    </div>
                                </div>
                                <div className={'mt-6'}>
                                    <div className={'flex gap-3 items-start'}>
                                        <div className={'w-[5%] flex justify-start'}>
                                            <img className={'w-6 aspect-square'} src={'/card/icons/factors_active.svg'}/>
                                        </div>
                                        <div className={'flex flex-col w-[80%] sm:w-[95%] gap-3'}>
                                            <p className={'text-black sm:col-span-2 leading-[100%] sm:text-lg font-bold'}>Factors Influencing Client&apos;s Decision:</p>
                                            <WrapP
                                                body={'The clients decision was likely influenced by [key factors, e.g., price, product fit, trust in the manager].'}
                                                limiter={15} ending={'...'} color={'black'}></WrapP>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={'flex mt-6 gap-3 items-start'}>
                                <div className={'w-[5%] flex justify-start'}>
                                    <img className={'w-6 aspect-square'} src={'/card/icons/client.svg'}/>
                                </div>
                                <div className={'flex flex-col w-[80%] sm:w-[95%] gap-3'}>
                                    <p className={'text-orange sm:text-2xl leading-[100%] font-bold'}>Client Profile and State:</p>
                                    <div className={'flex gap-4  items-center'}>
                                        <p className={'text-black sm:text-3xl font-bold'}>Client Name</p>
                                        <div className={'sm:px-4 sm:py-2 p-1 gap-3 flex items-center rounded-full bg-[#1DAEFF]'}>
                                            <p className={'text-white sm:text-lg text-xs font-bold'}>ENTJ</p>
                                            <img className={'opacity-50 cursor-pointer hover:opacity-100 duration-300 transition-all'} src={'/card/icons/info_white.svg'}/>
                                        </div>
                                    </div>
                                    <div className={'grid grid-cols-1 sm:grid-cols-7 items-start gap-1'}>
                                        <p className={'text-black sm:col-span-2 sm:text-lg font-bold'}>Client Type:</p>
                                        <div className={'col-span-5 w-full text-sm'}>
                                            <p className={'sm:text-lg font-light'}>[New/Returning Client]</p>
                                        </div>
                                    </div>
                                    <div className={'grid grid-cols-1 sm:grid-cols-7 items-start gap-1'}>
                                        <p className={'text-black sm:col-span-2 sm:text-lg font-bold'}>Client&apos;s Needs:</p>
                                        <div className={'col-span-5 w-full text-sm'}>
                                            <WrapP
                                                body={'[Clients Needs and Preferences]'}
                                                limiter={6} ending={'...'} color={'black'}></WrapP>
                                        </div>
                                    </div>
                                    <div className={'grid grid-cols-1 sm:grid-cols-7 items-start gap-1'}>
                                        <p className={'text-black sm:col-span-2 sm:text-lg font-bold'}>Emotional State:</p>
                                        <div className={'col-span-5 w-full text-sm'}>
                                            <p className={'sm:text-lg font-light'}>[Client&apos;s Emotional State, e.g., Interested, Curious]</p>
                                        </div>
                                    </div>
                                    <div className={'grid grid-cols-1 sm:grid-cols-7 items-start gap-1'}>
                                        <p className={'text-black sm:col-span-2 sm:text-lg font-bold'}>Call Purpose:</p>
                                        <div className={'col-span-5 w-full text-sm'}>
                                            <p className={'sm:text-lg font-light'}>[Purpose of the Call]</p>
                                        </div>
                                    </div>
                                    <div className={'grid grid-cols-1 sm:grid-cols-7 items-start gap-1'}>
                                        <p className={'text-black sm:col-span-2 sm:text-lg font-bold'}>MBTI Type:</p>
                                        <div className={'col-span-5 w-full text-sm'}>
                                            <WrapP
                                                body={'[Clients MBTI Type, if known, e.g., "ISFP"]'}
                                                limiter={6} ending={'...'} color={'black'}></WrapP>
                                        </div>
                                    </div>
                                    <div className={'grid grid-cols-1 sm:grid-cols-7 items-start gap-1'}>
                                        <p className={'text-black sm:col-span-2 sm:text-lg font-bold'}>Client&apos;s Traits:</p>
                                        <div className={'col-span-5 flex items-center gap-3 w-full text-sm'}>
                                            <div className={'sm:px-4 p-2 sm:py-1 bg-[#1DAEFF] sm:text-lg text-xs text-white rounded-full flex items-center justify-center'}>
                                                Trait #1
                                            </div>
                                            <div className={'sm:px-4 p-2 sm:py-1 bg-[#71E884] sm:text-lg text-xs text-white rounded-full flex items-center justify-center'}>
                                                Trait #2
                                            </div>
                                            <div className={'sm:px-4 p-2 sm:py-1 bg-[#FF7B7B] sm:text-lg text-xs text-white rounded-full flex items-center justify-center'}>
                                                Trait #3
                                            </div>
                                        </div>
                                    </div>
                                    <div className={'grid grid-cols-1 items-start gap-1'}>
                                        <p className={'text-black sm:text-lg font-bold'}>Psychological Profile of the Client:</p>
                                        <div className={' w-full text-sm'}>
                                            <p className={'sm:text-lg whitespace-pre-wrap font-light'}>1.Some text that explains Psychological Profile of the Client <br/>
                                                2.Some text that explains Psychological Profile of the Client <br/>
                                                3.Some text that explains Psychological Profile of the Client <br/>
                                                4.Some text that explains Psychological Profile of the Client <br/>
                                                5.Some text that explains Psychological Profile of the Client</p>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>
                        <div className={'flex flex-col w-full sm:p-8 sm:border-l-2 border-black border-opacity-10'}>
                            <div className={'flex items-start gap-4'}>
                                <img className={'sm:w-12 w-9 aspect-square'} src={'/card/temp_avatar.png'}/>
                                <div className={'flex flex-col'}>
                                    <div className={'flex gap-3'}>
                                        <p className={'font-bold sm:text-3xl'}>Manager Name</p>
                                        <div className={'sm:px-4 sm:py-2 p-1 gap-3 flex items-center rounded-full bg-[#1DAEFF]'}>
                                            <p className={'text-white sm:text-lg text-xs font-bold'}>ENTJ</p>
                                            <img className={'opacity-50 cursor-pointer hover:opacity-100 duration-300 transition-all'} src={'/card/icons/info_white.svg'}/>
                                        </div>
                                    </div>
                                    <div className={'grid grid-cols-1 sm:grid-cols-7 mt-3 items-start gap-1'}>
                                        <p className={'text-black sm:col-span-2 sm:text-lg font-bold'}>Client&apos;s Traits:</p>
                                        <div className={'col-span-5 flex items-center gap-3 w-full text-sm'}>
                                            <div className={'sm:px-4 p-2 sm:py-1 bg-[#1DAEFF] sm:text-lg text-xs text-white rounded-full flex items-center justify-center'}>
                                                Trait #1
                                            </div>
                                            <div className={'sm:px-4 p-2 sm:py-1 bg-[#71E884] sm:text-lg text-xs text-white rounded-full flex items-center justify-center'}>
                                                Trait #2
                                            </div>
                                            <div className={'sm:px-4 p-2 sm:py-1 bg-[#FF7B7B] sm:text-lg text-xs text-white rounded-full flex items-center justify-center'}>
                                                Trait #3
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <div className={'mt-6'}>
                                <div className={'flex gap-3 items-start'}>
                                    <div className={'w-[5%] flex justify-start'}>
                                        <img className={'w-6 aspect-square'} src={'/card/icons/performance.svg'}/>
                                    </div>
                                    <div className={'flex flex-col w-[80%] sm:w-[95%] gap-3'}>
                                        <p className={'text-orange sm:text-2xl leading-[100%] font-bold'}>Manager&apos;s Performance
                                            Assessment:</p>
                                    </div>
                                </div>
                            </div>
                            <div className={'mt-6'}>
                                <div className={'flex gap-3 items-start'}>
                                    <div className={'w-[5%] flex justify-start'}>
                                        <img className={'w-6 aspect-square'} src={'/card/icons/communication_active.svg'}/>
                                    </div>
                                    <div className={'flex flex-col w-[80%] sm:w-[95%] gap-3'}>
                                        <p className={'text-black sm:col-span-2 leading-[100%] sm:text-lg font-bold'}>Communication
                                            Skills:</p>
                                        <WrapP
                                            body={'The manager demonstrated effective communication skills throughout the call. They were articulate and used appropriate language to convey information.'}
                                            limiter={15} ending={'...'} color={'black'}></WrapP>
                                    </div>
                                </div>
                            </div>
                            <div className={'mt-6'}>
                                <div className={'flex gap-3 items-start'}>
                                    <div className={'w-[5%] flex justify-start'}>
                                        <img className={'w-6 aspect-square'} src={'/card/icons/product_active.svg'}/>
                                    </div>
                                    <div className={'flex flex-col w-[80%] sm:w-[95%] gap-3'}>
                                        <div className={'flex items-center gap-3'}>
                                            <p className={'text-black sm:col-span-2 leading-[100%] sm:text-lg font-bold'}>Product Knowledge:</p>
                                            <img className={"sm:w-auto w-16"} src={'/card/icons/stars.svg'}/>
                                        </div>
                                        <WrapP
                                            body={'The manager displayed a strong understanding of the product or service being discussed and effectively communicated its benefits.'}
                                            limiter={15} ending={'...'} color={'black'}></WrapP>
                                    </div>
                                </div>
                            </div>
                            <div className={'mt-6'}>
                                <div className={'flex gap-3 items-start'}>
                                    <div className={'w-[5%] flex justify-start'}>
                                        <img className={'w-6 aspect-square'} src={'/card/icons/listenning_active.svg'}/>
                                    </div>
                                    <div className={'flex flex-col w-[80%] sm:w-[95%] gap-3'}>
                                        <div className={'flex items-center gap-3'}>
                                            <p className={'text-black sm:col-span-2 leading-[100%] sm:text-lg font-bold'}>Listening Skills:</p>
                                            <img className={"sm:w-auto w-16"} src={'/card/icons/stars.svg'}/>
                                        </div>
                                        <WrapP
                                            body={'The manager displayed a strong understanding of the product or service being discussed and effectively communicated its benefits.'}
                                            limiter={15} ending={'...'} color={'black'}></WrapP>
                                    </div>
                                </div>
                            </div>

                            <div className={'mt-6'}>
                                <div className={'flex gap-3 items-start'}>
                                    <div className={'w-[5%] flex justify-start'}>
                                        <img className={'w-6 aspect-square'} src={'/card/icons/closing_active.svg'}/>
                                    </div>
                                    <div className={'flex flex-col w-[80%] sm:w-[95%] gap-3'}>
                                        <div className={'flex items-center gap-3'}>
                                            <p className={'text-black sm:col-span-2 leading-[100%] sm:text-lg font-bold'}>Closing Techniques: </p>
                                            <img className={"sm:w-auto w-16"} src={'/card/icons/stars.svg'}/>
                                        </div>
                                        <WrapP
                                            body={'The manager utilized closing techniques appropriately and at the right moments in the conversation.'}
                                            limiter={15} ending={'...'} color={'black'}></WrapP>
                                    </div>
                                </div>
                            </div>

                            <div className={'mt-6'}>
                                <div className={'flex gap-3 items-start'}>
                                    <div className={'w-[5%] flex justify-start'}>
                                        <img className={'w-6 aspect-square'} src={'/card/icons/psychological.svg'}/>
                                    </div>
                                    <div className={'flex flex-col w-[80%] sm:w-[95%] gap-3'}>
                                        <p className={'text-orange sm:text-2xl leading-[100%] font-bold'}>Psychological Profile of the Manager:</p>
                                        <WrapP
                                            body={'The manager exhibited confidence and enthusiasm during the call, which likely positively influenced the clients perception.\n' +
                                                '\n' +
                                                'Their tone was friendly and professional, creating a comfortable atmosphere for the client.\n' +
                                                '\n' +
                                                'The manager appeared motivated and goal-oriented, aiming to achieve a successful outcome.'}
                                            limiter={15} ending={'...'} color={'black'}></WrapP>
                                        <div className={'flex mt-4 items-center gap-3'}>
                                            <p className={'text-orange sm:text-2xl leading-[100%] font-bold'}>Client-Manager Match</p>
                                            <img className={'opacity-20 hover:opacity-100 cursor-pointer duration-300 transition-all'} src={'/card/icons/info_black.svg'}/>
                                        </div>
                                        <img className={'w-full sm:w-4/5'} src={'/card/match.svg'}/>
                                        <div className={'flex mt-8 items-center gap-3'}>
                                            <p className={'text-orange sm:text-2xl leading-[100%] font-bold'}>Client emotions</p>
                                            <img className={'opacity-20 hover:opacity-100 cursor-pointer duration-300 transition-all'} src={'/card/icons/info_black.svg'}/>
                                        </div>
                                        <img className={'w-full sm:w-3/5'} src={'/card/emotions.svg'}/>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>


                </div>
            </div>

        </main>
    )
}
