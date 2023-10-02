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

            <div className={'w-full flex justify-center sm:px-12 bg-white bg-cover relative py-16 sm:py-44'}>
                <div className={'w-full h-full items-center p-2 sm:px-[20px] sm:max-w-[1440px]'}>
                    <div className={'flex items-center gap-4'}>
                        <img className={'w-8 sm:w-12 aspect-square'} src={'/card/temp_avatar.png'}/>
                        <p className={'font-bold text-xl sm:text-3xl'}>Manager Name</p>
                    </div>
                    <div className={'mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8'}>
                        <div className={'flex flex-col w-full p-1 sm:p-8'}>
                            <div className={'flex gap-3 items-start'}>
                                <img className={'w-6 aspect-square'} src={'/card/icons/info.svg'}/>
                                <div className={'flex flex-col w-full gap-3'}>
                                    <p className={'text-orange sm:text-2xl leading-[100%] font-bold'}>Call details:</p>
                                    <div className={'grid grid-cols-1 sm:grid-cols-7 items-start gap-1'}>
                                        <p className={'text-black sm:col-span-2 leading-[100%] sm:leading-normal sm:text-lg font-bold'}>Client Name:</p>
                                        <div className={'sm:col-span-5 sm:w-full w-[90%] text-xs sm:text-sm'}>
                                            <p className={'text-xs sm:text-lg font-light'}>[Client&apos;s Name]</p>
                                        </div>
                                    </div>
                                    <div className={'grid grid-cols-1 sm:grid-cols-7 items-start gap-1'}>
                                        <p className={'text-black sm:col-span-2 leading-[100%] sm:leading-normal sm:text-lg font-bold'}>Call Date and Time:</p>
                                        <div className={'sm:col-span-5 sm:w-full w-[90%] text-sm'}>
                                            <p className={'sm:text-lg text-xs font-light'}>[Date and Time]</p>
                                        </div>
                                    </div>
                                    <div className={'grid grid-cols-1 sm:grid-cols-7 items-start gap-1'}>
                                        <p className={'text-black sm:col-span-2 leading-[100%] sm:leading-normal sm:text-lg font-bold'}>Call Duration:</p>
                                        <div className={'sm:col-span-5 sm:w-full w-[90%] text-sm'}>
                                            <p className={'sm:text-lg text-xs font-light'}>[Duration]</p>
                                        </div>
                                    </div>
                                    <div className={'grid grid-cols-1 sm:grid-cols-7 items-start gap-1'}>
                                        <p className={'text-black sm:col-span-2 leading-[100%] sm:leading-normal sm:text-lg font-bold'}>Call Purpose:</p>
                                        <div className={'sm:col-span-5 sm:w-full w-[90%] text-sm'}>
                                            <p className={'sm:text-lg text-xs font-light'}>[Purpose of the Call]</p>
                                        </div>
                                    </div>
                                    <div className={'grid grid-cols-1 sm:grid-cols-7 items-start gap-1'}>
                                        <p className={'text-black sm:col-span-2 leading-[100%] sm:leading-normal sm:text-lg font-bold'}>MBTI Type:</p>
                                        <div className={'sm:col-span-5 sm:w-full w-[90%] text-sm'}>
                                            <WrapP
                                                body={'[Managers MBTI Type, e.g., "ENTJ", "ENTJ", "ENTJ", "ENTJ", "ENTJ"]'}
                                                limiter={6} ending={'...'} color={'black'}></WrapP>
                                        </div>
                                    </div>
                                    <div className={'grid grid-cols-1 sm:grid-cols-7 items-start gap-1'}>
                                        <p className={'text-black sm:col-span-2 leading-[100%] sm:leading-normal sm:text-lg font-bold'}>Manager&apos;s Traits:</p>
                                        <div className={'sm:col-span-5 sm:w-full w-[90%] text-sm'}>
                                            <WrapP
                                                body={'[Brief Description of Managers Traits Based on MBTI of Managers Traits Based on MBTI of Managers Traits Based on MBTI]'}
                                                limiter={6} ending={'...'} color={'black'}></WrapP>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={'mt-6'}>
                                <div className={'flex gap-3 items-start'}>
                                    <img className={'w-6 aspect-square'} src={'/card/icons/performance.svg'}/>
                                    <div className={'flex flex-col w-full gap-3'}>
                                        <p className={'text-orange sm:text-2xl leading-[100%] font-bold'}>Manager&apos;s Performance
                                            Assessment:</p>
                                    </div>
                                </div>
                            </div>
                            <div className={'mt-6'}>
                                <div className={'flex gap-3 items-start'}>
                                    <img className={'w-6 aspect-square'} src={'/card/icons/communication.svg'}/>
                                    <div className={'flex flex-col w-[80%] sm:w-full gap-3'}>
                                        <p className={'text-black col-span-2 leading-[100%] sm:text-lg font-bold'}>Communication
                                            Skills:</p>
                                        <WrapP
                                            body={'The manager demonstrated effective communication skills throughout the call. They were articulate and used appropriate language to convey information.'}
                                            limiter={15} ending={'...'} color={'black'}></WrapP>
                                    </div>
                                </div>
                            </div>
                            <div className={'mt-6'}>
                                <div className={'flex gap-3 items-start'}>
                                    <img className={'w-6 aspect-square'} src={'/card/icons/product.svg'}/>
                                    <div className={'flex flex-col w-[80%] sm:w-full gap-3'}>
                                        <p className={'text-black col-span-2 leading-[100%] sm:text-lg font-bold'}>Product Knowledge:</p>
                                        <WrapP
                                            body={'The manager displayed a strong understanding of the product or service being discussed and effectively communicated its benefits.'}
                                            limiter={15} ending={'...'} color={'black'}></WrapP>
                                    </div>
                                </div>
                            </div>
                            <div className={'mt-6'}>
                                <div className={'flex gap-3 items-start'}>
                                    <img className={'w-6 aspect-square'} src={'/card/icons/listenning.svg'}/>
                                    <div className={'flex flex-col w-[80%] sm:w-full gap-3'}>
                                        <p className={'text-black col-span-2 leading-[100%] sm:text-lg font-bold'}>Listening Skills:</p>
                                        <WrapP
                                            body={'The manager displayed a strong understanding of the product or service being discussed and effectively communicated its benefits.'}
                                            limiter={15} ending={'...'} color={'black'}></WrapP>
                                    </div>
                                </div>
                            </div>

                            <div className={'mt-6'}>
                                <div className={'flex gap-3 items-start'}>
                                    <img className={'w-6 aspect-square'} src={'/card/icons/closing.svg'}/>
                                    <div className={'flex flex-col w-[80%] sm:w-full gap-3'}>
                                        <p className={'text-black col-span-2 leading-[100%] sm:text-lg font-bold'}>Closing Techniques: </p>
                                        <WrapP
                                            body={'The manager utilized closing techniques appropriately and at the right moments in the conversation.'}
                                            limiter={15} ending={'...'} color={'black'}></WrapP>
                                    </div>
                                </div>
                            </div>

                            <div className={'mt-6'}>
                                <div className={'flex gap-3 items-start'}>
                                    <img className={'w-6 aspect-square'} src={'/card/icons/psychological.svg'}/>
                                    <div className={'flex flex-col w-[80%] sm:w-full gap-3'}>
                                        <p className={'text-orange sm:text-2xl leading-[100%] font-bold'}>Psychological Profile of the Manager:</p>
                                        <WrapP
                                            body={'The manager exhibited confidence and enthusiasm during the call, which likely positively influenced the clients perception.\n' +
                                                '\n' +
                                                'Their tone was friendly and professional, creating a comfortable atmosphere for the client.\n' +
                                                '\n' +
                                                'The manager appeared motivated and goal-oriented, aiming to achieve a successful outcome.'}
                                            limiter={15} ending={'...'} color={'black'}></WrapP>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'flex flex-col w-full p-1 sm:p-8 sm:border-l-2 border-orange border-opacity-10'}>
                            <div className={'flex gap-3 items-start'}>
                                <img className={'w-6 aspect-square'} src={'/card/icons/client.svg'}/>
                                <div className={'flex flex-col w-full gap-3'}>
                                    <p className={'text-orange sm:text-2xl leading-[100%] font-bold'}>Client Profile and State:</p>
                                    <div className={'grid grid-cols-1 sm:grid-cols-7 items-start gap-1'}>
                                        <p className={'text-black sm:col-span-2 leading-[100%] sm:leading-normal sm:text-lg font-bold'}>Client Type:</p>
                                        <div className={'sm:col-span-5 sm:w-full w-[90%] text-sm'}>
                                            <p className={'text-xs sm:text-lg font-light'}>[New/Returning Client]</p>
                                        </div>
                                    </div>
                                    <div className={'grid grid-cols-1 sm:grid-cols-7 items-start gap-1'}>
                                        <p className={'text-black sm:col-span-2 leading-[100%] sm:leading-normal sm:text-lg font-bold'}>Client&apos;s Needs:</p>
                                        <div className={'sm:col-span-5 sm:w-full w-[90%] text-sm'}>
                                            <WrapP
                                                body={'[Clients Needs and Preferences]'}
                                                limiter={6} ending={'...'} color={'black'}></WrapP>
                                        </div>
                                    </div>
                                    <div className={'grid grid-cols-1 sm:grid-cols-7 items-start gap-1'}>
                                        <p className={'text-black sm:col-span-2 leading-[100%] sm:leading-normal sm:text-lg font-bold'}>Emotional State:</p>
                                        <div className={'sm:col-span-5 sm:w-full w-[90%] text-sm'}>
                                            <p className={'text-xs sm:text-lg font-light'}>[Client&apos;s Emotional State, e.g., Interested, Curious]</p>
                                        </div>
                                    </div>
                                    <div className={'grid grid-cols-1 sm:grid-cols-7 items-start gap-1'}>
                                        <p className={'text-black sm:col-span-2 leading-[100%] sm:leading-normal sm:text-lg font-bold'}>Call Purpose:</p>
                                        <div className={'sm:col-span-5 sm:w-full w-[90%] text-sm'}>
                                            <p className={'text-xs sm:text-lg font-light'}>[Purpose of the Call]</p>
                                        </div>
                                    </div>
                                    <div className={'grid grid-cols-1 sm:grid-cols-7 items-start gap-1'}>
                                        <p className={'text-black sm:col-span-2 leading-[100%] sm:leading-normal sm:text-lg font-bold'}>MBTI Type:</p>
                                        <div className={'sm:col-span-5 sm:w-full w-[90%] text-sm'}>
                                            <WrapP
                                                body={'[Clients MBTI Type, if known, e.g., "ISFP"]'}
                                                limiter={6} ending={'...'} color={'black'}></WrapP>
                                        </div>
                                    </div>
                                    <div className={'grid grid-cols-1 sm:grid-cols-7 items-start gap-1'}>
                                        <p className={'text-black sm:col-span-2 leading-[100%] sm:leading-normal sm:text-lg font-bold'}>Client&apos;s Traits:</p>
                                        <div className={'sm:col-span-5 sm:w-full w-[90%] text-sm'}>
                                            <WrapP
                                                body={'[Brief Description of Clients Traits Based on MBTI]'}
                                                limiter={6} ending={'...'} color={'black'}></WrapP>
                                        </div>
                                    </div>
                                    <div className={'grid grid-cols-1 items-start gap-1'}>
                                        <p className={'text-black sm:text-lg font-bold'}>Psychological Profile of the Client:</p>
                                        <div className={' w-full text-sm'}>
                                            <p className={'sm:text-lg whitespace-pre-wrap font-light'}>1. <br/>
                                                2. <br/>
                                                3. <br/>
                                                4. <br/>
                                                5.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={'mt-6'}>
                                <div className={'flex gap-3 items-start'}>
                                    <img className={'w-6 aspect-square'} src={'/card/icons/conversation.svg'}/>
                                    <div className={'flex flex-col w-[80%] sm:w-full gap-3'}>
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
                            </div>
                            <div className={'mt-6'}>
                                <div className={'flex gap-3 items-start'}>
                                    <img className={'w-6 aspect-square'} src={'/card/icons/clients.svg'}/>
                                    <div className={'flex flex-col w-[80%] sm:w-full gap-3'}>
                                        <p className={'text-black sm:col-span-2 leading-[100%] sm:text-lg font-bold'}>Client&apos;s Decision Point:</p>
                                        <WrapP
                                            body={'The client [accepted/declined] the offer at [specific point in the conversation].'}
                                            limiter={15} ending={'...'} color={'black'}></WrapP>
                                    </div>
                                </div>
                            </div>
                            <div className={'mt-6'}>
                                <div className={'flex gap-3 items-start'}>
                                    <img className={'w-6 aspect-square'} src={'/card/icons/factors.svg'}/>
                                    <div className={'flex flex-col w-[80%] sm:w-full gap-3'}>
                                        <p className={'text-black sm:col-span-2 leading-[100%] sm:text-lg font-bold'}>Factors Influencing Client&apos;s Decision:</p>
                                        <WrapP
                                            body={'The clients decision was likely influenced by [key factors, e.g., price, product fit, trust in the manager].'}
                                            limiter={15} ending={'...'} color={'black'}></WrapP>
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
