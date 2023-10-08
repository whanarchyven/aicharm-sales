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

            <div className={'w-full flex justify-center sm:px-12 bg-[url("/main_bg.svg")] bg-cover relative sm:h-screen'}>
                <div className={'w-full h-full pt-32 grid grid-cols-1 sm:grid-cols-12 items-center px-[20px] sm:sm:max-w-[1440px]'}>
                    <div className={'sm:col-span-4 flex flex-col gap-6'}>
                        <p className={'font-bold text-white text-3xl sm:text-5xl leading-tight'}>Elevate your
                            client service & sales <br/>
                            <span className={'text-orange'}>using AI</span></p>
                        <p className={'text-white font-extralight text-sm sm:text-xl font-inter'}>Our voice and text recognition technology allows you to analyze customers and sales managers, providing you with valuable insights to optimize your business.</p>
                        <Button className={'mt-5 sm:text-2xl'} shadow><a href={'#form'}>Try for free</a></Button>
                    </div>
                    <div className={'sm:col-end-13 sm:col-span-7 my-6 sm:my-0 relative flex items-center justify-center'}>
                        <img src={'/main_tabs_eng.svg'}/>
                        <div className={'absolute w-full h-full'}>

                        </div>
                    </div>
                </div>
            </div>

            {/*ВТОРОЙ БЛОК*/}

            <div className={'w-full py-12 bg-white flex justify-center items-center px-[20px] sm:px-12 relative'}>
                <a className={'absolute -top-28'} id={'try'}></a>
                <div className={'w-full flex flex-col gap-10 sm:max-w-[1440px]'}>
                    <p className={'font-bold text-center text-black text-3xl sm:text-4xl'}>Try right now</p>
                    <div className={'grid grid-cols-1 sm:grid-cols-2 gap-12'}>
                        <div>
                            <div className={'p-6 sm:p-12 w-full  rounded-xl flex flex-col gap-4 black-grad'}>
                                <img src={'/conversation.svg'} className={'w-full'}/>
                                <div className={'flex items-start gap-4'}>
                                    <img className={'w-9 aspect-square'} src={'/conversation_icon.svg'}/>
                                    <div className={'flex flex-col gap-4'}>
                                        <p className={'font-bold text-xl sm:leading-normal leading-tight sm:text-2xl text-white'}>Conversation Summary:</p>
                                        <WrapP body={'The call began with a brief introduction and a friendly exchange of pleasantries, establishing rapport.\n' +
                                            '\n' +
                                            'The manager effectively presented the product features and benefits, addressing the client\'s questions and concerns along the way'} limiter={20} ending={'...'} color={'white'}></WrapP>
                                    </div>
                                </div>
                            </div>
                            <div className={'flex sm:hidden flex-col mt-5 items-center gap-5'}>
                                <p className={'text-center text-xs sm:text-lg px-[20px] sm:px-12'}>Simply upload the conversation recording with your sales manager, and you will receive a comprehensive call report.</p>
                                <Button shadow className={'sm:w-1/2'}>
                                    <div className={'flex items-center justify-center gap-4'}>
                                        <img src={'/icons/download.svg'}/>
                                        <a href={'#form'} className={' text-white'}>Drop audio file</a>
                                    </div>
                                </Button>
                            </div>
                        </div>
                        <div>
                            <div className={'p-6 sm:p-12 w-full rounded-xl flex flex-col items-center justify-center gap-4 black-grad'}>
                                <img src={'/dialog.svg'} className={'w-full'}/>
                            </div>
                            <div className={'flex sm:hidden flex-col mt-5 items-center gap-5'}>
                                <p className={'text-center text-xs sm:text-lg px-[20px] sm:px-12'}>Simply upload the conversation recording with your sales manager, and you will receive a comprehensive call report.</p>
                                <Button shadow className={'sm:w-1/2'}>
                                    <div className={'flex items-center justify-center gap-4'}>
                                        <img src={'/icons/speak.svg'}/>
                                        <a href={'#form'} className={' text-white'}>Try</a>
                                    </div>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className={'hidden sm:grid grid-cols-2 gap-12'}>
                        <div className={'flex flex-col items-center gap-5'}>
                            <p className={'text-center text-lg px-12'}>Simply upload the conversation recording with your sales manager, and you will receive a comprehensive call report.</p>
                            <Button shadow className={'w-1/2'}>
                                <div className={'flex items-center justify-center gap-4'}>
                                    <img src={'/icons/download.svg'}/>
                                    <a href={'#form'} className={'text-white'}>Drop audio file</a>
                                </div>
                            </Button>
                        </div>
                        <div className={'flex flex-col items-center gap-5'}>
                            <p className={'text-center text-lg px-12'}>Please use our AI manager, engage in a conversation with it, and receive an analysis of your call.</p>
                            <Button shadow className={'w-1/2'}>
                                <div className={'flex items-center justify-center gap-4'}>
                                    <img src={'/icons/speak.svg'}/>
                                    <a href={'#form'} className={'text-white'}>Try</a>
                                </div>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/*ТРЕТИЙ БЛОК*/}

            <div className={'w-full flex justify-center items-center px-[20px] sm:h-[700px] sm:px-12 bg-[url("/main_bg.svg")] bg-cover relative'}>
                <a className={'absolute -top-28'} id={'hiw'}></a>
                <div className={'w-full h-full py-12 flex flex-col gap-3 justify-center items-center sm:max-w-[1440px]'}>
                    <p className={'text-2xl sm:text-5xl mb-20 font-bold text-white'}>How it works</p>
                    <div className={'grid w-full items-center justify-center place-items-center relative grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-4'}>
                        <img className={'sm:flex hidden absolute'} src={'/icons/steps_dash.svg'}/>
                        <div className={'flex flex-col gap-5 items-center'}>
                            <div className={'w-40 aspect-square rounded-full flex items-center justify-center step-bg'}>
                                <img src={'/icons/step1.svg'}/>
                            </div>
                            <div className={'flex sm:hidden flex-col gap-2 items-center'}>
                                <p className={'font-bold text-center text-white text-2xl'}>Step 1</p>
                                <p className={'font-light text-center text-white '}>Upload managers &apos; call recordings and connect <br/> them to your CRM system.</p>
                            </div>
                        </div>
                        <div className={'flex flex-col gap-5 items-center'}>
                            <div className={'w-40 aspect-square rounded-full flex items-center justify-center step-bg'}>
                                <img src={'/icons/step2.svg'}/>
                            </div>
                            <div className={'flex sm:hidden flex-col gap-2 items-center'}>
                                <p className={'font-bold text-center text-white text-2xl'}>Step 2</p>
                                <p className={'font-light text-center text-white '}>Review analytics for each call individually <br/> and for all calls collectively.</p>
                            </div>
                        </div>
                        <div className={'flex flex-col gap-5 items-center'}>
                            <div className={'w-40 aspect-square rounded-full flex items-center justify-center step-bg'}>
                                <img src={'/icons/step3.svg'}/>
                            </div>
                            <div className={'flex sm:hidden flex-col gap-2 items-center'}>
                                <p className={'font-bold text-center text-white text-2xl'}>Done!</p>
                                <p className={'font-light text-center text-white '}>Increase sales efficiency <br/> with AICHARM Sales.</p>
                            </div>
                        </div>
                    </div>
                    <div className={'hidden sm:grid w-full mt-5 items-start justify-center relative grid-cols-3 gap-4'}>
                        <div className={'flex flex-col gap-2 items-center'}>
                            <p className={'font-bold text-center text-white text-2xl'}>Step 1</p>
                            <p className={'font-light text-center text-white '}>Upload managers&apos; call recordings and connect <br/> them to your CRM system.</p>
                        </div>
                        <div className={'flex flex-col gap-2 items-center'}>
                            <p className={'font-bold text-center text-white text-2xl'}>Step 2</p>
                            <p className={'font-light text-center text-white '}>Review analytics for each call individually <br/> and for all calls collectively.</p>
                        </div>
                        <div className={'flex flex-col gap-2 items-center'}>
                            <p className={'font-bold text-center text-white text-2xl'}>Done!</p>
                            <p className={'font-light text-center text-white '}>Increase sales efficiency <br/> with AICHARM Sales.</p>
                        </div>
                    </div>
                </div>
            </div>


            {/*ЧЕТВЕРТЫЙ БЛОК*/}

            <div className={'bg-white flex justify-center relative py-12'}>
                <a className={'absolute -top-28'} id={'cases'}></a>
                <div className={'w-full flex justify-center px-[20px] sm:px-12 items-center py-12 flex-col gap-10 sm:max-w-[1440px]'}>
                    <p className={'text-2xl sm:text-5xl text-center font-bold text-black'}>Review success stories of our clients who have achieved significant growth thanks to AICharm Sales</p>
                    {/*<p className={'text-xl text-center font-normal text-black'}>Просмотрите истории успеха наших клиентов, которые достигли <br/> значительного роста благодаря AICharm Sales</p>*/}
                    {/*<div className={'grid grid-cols-4 w-full gap-20 items-start'}>*/}
                    {/*    <div className={'flex flex-col w-full gap-5'}>*/}
                    {/*        <div className={'w-full rounded-xl h-60 bg-[#19191B]'}></div>*/}
                    {/*        <p className={'text-center text-lg font-light'}>Увеличение продаж и клиентской удовлетворенности</p>*/}
                    {/*    </div>*/}
                    {/*    <div className={'flex flex-col w-full gap-5'}>*/}
                    {/*        <div className={'w-full rounded-xl h-60 bg-[#19191B]'}></div>*/}
                    {/*        <p className={'text-center text-lg font-light'}>Оптимизация <br/>*/}
                    {/*            бизнес-процессов</p>*/}
                    {/*    </div>*/}
                    {/*    <div className={'flex flex-col w-full gap-5'}>*/}
                    {/*        <div className={'w-full rounded-xl h-60 bg-[#19191B]'}></div>*/}
                    {/*        <p className={'text-center text-lg font-light'}>Максимальная <br/>*/}
                    {/*            точность анализа</p>*/}
                    {/*    </div>*/}
                    {/*    <div className={'flex flex-col w-full gap-5'}>*/}
                    {/*        <div className={'w-full rounded-xl h-60 bg-[#19191B]'}></div>*/}
                    {/*        <p className={'text-center text-lg font-light'}>Простота <br/>*/}
                    {/*            использования</p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>


            {/*ПЯТЫЙ БЛОК*/}

            <div className={'w-full py-20 flex justify-center items-center bg-center px-[20px] sm:px-12 bg-[url("/abilities_bg.svg")] bg-cover relative'}>
                <div className={'w-full h-full grid grid-cols-1 sm:grid-cols-2 items-center sm:max-w-[1440px]'}>
                    <div className={'flex gap-16 flex-col'}>
                        <p className={'sm:text-5xl text-2xl font-bold text-white'}>AICharm Sales offers<br/>
                            the following capabilities:</p>
                        <div className={'flex items-start gap-8'}>
                            <img className={'w-6 sm:w-12 aspect-square'} src={'/icons/abilitiy1.svg'}/>
                            <AccordeonTab title={'Voice and text analysis of customers'} description={'Our voice and text recognition technology allows you to analyze customers and sales managers, providing valuable insights for optimizing your business.'}></AccordeonTab>
                        </div>
                        <div className={'flex items-start gap-8'}>
                            <img className={'w-6 sm:w-12 aspect-square'} src={'/icons/abilitiy2.svg'}/>
                            <AccordeonTab title={'Assessment of customer emotional reactions'} description={'Our voice and text recognition technology enables you to analyze customers and sales managers, providing you with valuable insights for optimizing your business.'}></AccordeonTab>
                        </div>
                        <div className={'flex items-start gap-8'}>
                            <img className={'w-6 sm:w-12 aspect-square'} src={'/icons/abilitiy3.svg'}/>
                            <AccordeonTab title={'Manager analysis and recommendations'} description={'Our voice and text recognition technology allows you to analyze customers and sales managers, providing valuable insights for optimizing your business.'}></AccordeonTab>
                        </div>
                        <div className={'flex items-start gap-8'}>
                            <img className={'w-6 sm:w-12 aspect-square'} src={'/icons/abilitiy4.svg'}/>
                            <AccordeonTab title={'Personalized reports for your business'} description={'Our voice and text recognition technology allows you to analyze customers and sales managers, providing valuable insights for optimizing your business.'}></AccordeonTab>
                        </div>
                    </div>
                    <div className={'w-full flex items-center justify-center'}>
                        <img src={'/abilities.png'}/>
                    </div>
                </div>
            </div>

            {/*ШЕСТОЙ БЛОК*/}

            <div className={'bg-white flex justify-center relative py-12'}>
                <a className={'absolute -top-28'} id={'advantages'}></a>
                <div className={'w-full flex justify-center px-[20px] sm:px-12 items-center py-12 flex-col gap-10 sm:max-w-[1440px]'}>
                    <p className={'sm:text-5xl  text-2xl text-center font-bold text-black'}>The key advantages <br/> of AICharm Sales include:</p>
                    <div className={'grid grid-cols-1 sm:grid-cols-3 mt-16 sm:w-4/5 gap-20 items-start'}>
                        <div className={'flex flex-col items-center w-full gap-12 sm:gap-5'}>
                            <img className={'w-20 aspect-square'} src={'/icons/features1.svg'}/>
                            <p className={'text-center text-lg font-light'}><span className={'font-bold'}>Analysis of customer emotions and satisfaction:</span><br/> Evaluating customer emotions and satisfaction levels.</p>
                        </div>
                        <div className={'flex flex-col items-center w-full gap-12 sm:gap-5'}>
                            <img className={'w-20 aspect-square'} src={'/icons/features2.svg'}/>
                            <p className={'text-center text-lg font-light'}><span className={'font-bold'}>Assessment of manager suitability for specific roles:</span><br/> Determining a manager&apos;s suitability for a particular direction or task.</p>
                        </div>
                        <div className={'flex flex-col items-center w-full gap-12 sm:gap-5'}>
                            <img className={'w-20 aspect-square'} src={'/icons/features3.svg'}/>
                            <p className={'text-center text-lg font-light'}><span className={'font-bold'}>Monitoring and evaluation of sales manager performance:</span><br/> Keeping track of and assessing the performance of sales managers.</p>
                        </div>

                    </div>
                    <div className={'grid grid-cols-1 sm:grid-cols-2 mt-16 sm:w-1/2 gap-20 items-start'}>
                        <div className={'flex flex-col items-center w-full gap-5'}>
                            <img className={'w-20 aspect-square'} src={'/icons/features4.svg'}/>
                            <p className={'text-center text-lg font-light'}><span className={'font-bold'}>Recommendations for sales script improvement:</span><br/> Providing suggestions for enhancing sales scripts.</p>
                        </div>
                        <div className={'flex flex-col items-center w-full gap-5'}>
                            <img className={'w-20 aspect-square'} src={'/icons/features5.svg'}/>
                            <p className={'text-center text-lg font-light'}><span className={'font-bold'}>Identification of your audience&apos;s psychotype:</span><br/> Determining the psychological profile of your audience.</p>
                        </div>
                    </div>
                </div>
            </div>


            {/*СЕДЬМОЙ БЛОК*/}

            <div className={'w-full py-20 flex justify-center items-center bg-center  px-[20px] sm:px-12 bg-[url("/form_bg.svg")] bg-cover relative'}>
                <a className={'absolute -top-28'} id={'form'}></a>
                <div className={'w-full h-full grid grid-cols-1 sm:grid-cols-2 gap-32 items-center sm:max-w-[1440px]'}>
                    <div className={'w-full flex items-center justify-center'}>
                        <Form></Form>
                    </div>
                    <div className={'flex gap-16 sm:row-auto row-start-1 flex-col'}>
                        <p className={'text-5xl  font-bold text-white'}>Contact us</p>
                        <p className={'text-xl  font-light  text-white'}>Please contact us with your contact information so that we can get in touch with you and offer a solution that best meets your needs.</p>
                    </div>
                </div>
            </div>

        </main>
    )
}
