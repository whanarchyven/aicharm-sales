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

            <div className={'w-full flex justify-center px-12 bg-[url("/main_bg.svg")] bg-cover relative h-screen'}>
                <div className={'w-full h-full pt-32 grid grid-cols-12 items-center max-w-[1440px]'}>
                    <div className={'col-span-4 flex flex-col gap-6'}>
                        <p className={'font-bold text-white text-5xl leading-tight'}>Elevate your
                            client service & sales <br/>
                            <span className={'text-orange'}>using AI</span></p>
                        <p className={'text-white font-extralight text-xl font-inter'}>Наша технология голосового и
                            текстового распознавания позволяет вам анализировать клиентов и менеджеров по продажам,
                            предоставляя вам ценные инсайты для оптимизации вашего бизнеса.</p>
                        <Button className={'mt-5 text-2xl'} shadow>Попробовать бесплатно</Button>
                    </div>
                    <div className={'col-end-13 col-span-7 relative flex items-center justify-center'}>
                        <img src={'/main_tabs.svg'}/>
                        <div className={'absolute w-full h-full'}>

                        </div>
                    </div>
                </div>
            </div>

            {/*ВТОРОЙ БЛОК*/}

            <div className={'w-full py-12 bg-white flex justify-center items-center px-12 relative'}>
                <div className={'w-full flex flex-col gap-10 max-w-[1440px]'}>
                    <p className={'font-bold text-center text-black text-4xl'}>Попробуй прямо сейчас беспатно</p>
                    <div className={'grid grid-cols-2 gap-12'}>
                        <div className={'p-12 w-full  rounded-xl flex flex-col gap-4 black-grad'}>
                            <img src={'/conversation.svg'} className={'w-full'}/>
                            <div className={'flex items-start gap-4'}>
                                <img className={'w-9 aspect-square'} src={'/conversation_icon.svg'}/>
                                <div className={'flex flex-col gap-4'}>
                                    <p className={'font-bold text-2xl text-white'}>Conversation Summary:</p>
                                    <WrapP body={'The call began with a brief introduction and a friendly exchange of pleasantries, establishing rapport.\n' +
                                        '\n' +
                                        'The manager effectively presented the product features and benefits, addressing the client\'s questions and concerns along the way'} limiter={20} ending={'...'} color={'white'}></WrapP>
                                </div>
                            </div>
                        </div>
                        <div className={'p-12 w-full rounded-xl flex flex-col items-center justify-center gap-4 black-grad'}>
                            <img src={'/dialog.svg'} className={'w-full'}/>
                        </div>
                    </div>
                    <div className={'grid grid-cols-2 gap-12'}>
                        <div className={'flex flex-col items-center gap-5'}>
                            <p className={'text-center text-lg px-12'}>Просто загрузите запись разговора с вашим менеджером по продажам и получите  полный отчет по звонку.</p>
                            <Button shadow className={'w-1/2'}>
                                <div className={'flex items-center justify-center gap-4'}>
                                    <img src={'/icons/download.svg'}/>
                                    <p className={'text-white'}>Загрузить запись</p>
                                </div>
                            </Button>
                        </div>
                        <div className={'flex flex-col items-center gap-5'}>
                            <p className={'text-center text-lg px-12'}>Воспользуйтесь нашим ИИ-менеджером, поговорите с ним и получите анализ вашего звонка</p>
                            <Button shadow className={'w-1/2'}>
                                <div className={'flex items-center justify-center gap-4'}>
                                    <img src={'/icons/speak.svg'}/>
                                    <p className={'text-white'}>Пообщаться</p>
                                </div>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/*ТРЕТИЙ БЛОК*/}

            <div className={'w-full flex justify-center items-center h-[700px] px-12 bg-[url("/main_bg.svg")] bg-cover relative'}>
                <div className={'w-full h-full py-12 flex flex-col gap-3 justify-center items-center max-w-[1440px]'}>
                    <p className={'text-5xl mb-20 font-bold text-white'}>Как это работает</p>
                    <div className={'grid w-full items-center justify-center place-items-center relative grid-cols-3 gap-4'}>
                        <img className={'absolute'} src={'/icons/steps_dash.svg'}/>
                        <div className={'flex flex-col items-center'}>
                            <div className={'w-40 aspect-square rounded-full flex items-center justify-center step-bg'}>
                                <img src={'/icons/step1.svg'}/>
                            </div>
                        </div>
                        <div className={'flex flex-col items-center'}>
                            <div className={'w-40 aspect-square rounded-full flex items-center justify-center step-bg'}>
                                <img src={'/icons/step2.svg'}/>
                            </div>
                        </div>
                        <div className={'flex flex-col items-center'}>
                            <div className={'w-40 aspect-square rounded-full flex items-center justify-center step-bg'}>
                                <img src={'/icons/step3.svg'}/>
                            </div>
                        </div>
                    </div>
                    <div className={'grid w-full mt-5 items-start justify-center relative grid-cols-3 gap-4'}>
                        <div className={'flex flex-col gap-2 items-center'}>
                            <p className={'font-bold text-center text-white text-2xl'}>Шаг 1</p>
                            <p className={'font-light text-center text-white '}>Загружаете звонки мендежров/ <br/> подключаете к своей CRM</p>
                        </div>
                        <div className={'flex flex-col gap-2 items-center'}>
                            <p className={'font-bold text-center text-white text-2xl'}>Шаг 2</p>
                            <p className={'font-light text-center text-white '}>Смотрите аналитику по каждому звонку <br/> отдельно и по всем звонкам вместе</p>
                        </div>
                        <div className={'flex flex-col gap-2 items-center'}>
                            <p className={'font-bold text-center text-white text-2xl'}>Готово!</p>
                            <p className={'font-light text-center text-white '}>Увеличивайте эффективность <br/> продаж с AICHARM Sales</p>
                        </div>
                    </div>
                </div>
            </div>


            {/*ЧЕТВЕРТЫЙ БЛОК*/}

            <div className={'bg-white flex justify-center py-12'}>
                <div className={'w-full flex justify-center px-12 items-center py-12 flex-col gap-10 max-w-[1440px]'}>
                    <p className={'text-5xl  font-bold text-black'}>Примеры успешных кейсов</p>
                    <p className={'text-xl text-center font-normal text-black'}>Просмотрите истории успеха наших клиентов, которые достигли <br/> значительного роста благодаря AICharm Sales</p>
                    <div className={'grid grid-cols-4 w-full gap-20 items-start'}>
                        <div className={'flex flex-col w-full gap-5'}>
                            <div className={'w-full rounded-xl h-60 bg-[#19191B]'}></div>
                            <p className={'text-center text-lg font-light'}>Увеличение продаж и клиентской удовлетворенности</p>
                        </div>
                        <div className={'flex flex-col w-full gap-5'}>
                            <div className={'w-full rounded-xl h-60 bg-[#19191B]'}></div>
                            <p className={'text-center text-lg font-light'}>Оптимизация <br/>
                                бизнес-процессов</p>
                        </div>
                        <div className={'flex flex-col w-full gap-5'}>
                            <div className={'w-full rounded-xl h-60 bg-[#19191B]'}></div>
                            <p className={'text-center text-lg font-light'}>Максимальная <br/>
                                точность анализа</p>
                        </div>
                        <div className={'flex flex-col w-full gap-5'}>
                            <div className={'w-full rounded-xl h-60 bg-[#19191B]'}></div>
                            <p className={'text-center text-lg font-light'}>Простота <br/>
                                использования</p>
                        </div>
                    </div>
                </div>
            </div>


            {/*ПЯТЫЙ БЛОК*/}

            <div className={'w-full py-20 flex justify-center items-center bg-center px-12 bg-[url("/abilities_bg.svg")] bg-cover relative'}>
                <div className={'w-full h-full grid grid-cols-2 items-center max-w-[1440px]'}>
                    <div className={'flex gap-16 flex-col'}>
                        <p className={'text-5xl  font-bold text-white'}>Возможности <br/>
                            AICharm Sales:</p>
                        <div className={'flex items-start gap-8'}>
                            <img className={'w-12 aspect-square'} src={'/icons/abilitiy1.svg'}/>
                            <AccordeonTab title={'Голосовой и текстовый анализ клиентов.'} description={'Наша технология голосового и текстового распознавания позволяет вам анализировать клиентов и менеджеров по продажам, предоставляя вам ценные инсайты для оптимизации вашего бизнеса.'}></AccordeonTab>
                        </div>
                        <div className={'flex items-start gap-8'}>
                            <img className={'w-12 aspect-square'} src={'/icons/abilitiy2.svg'}/>
                            <AccordeonTab title={'Оценка эмоциональной реакции клиентов.'} description={'Наша технология голосового и текстового распознавания позволяет вам анализировать клиентов и менеджеров по продажам, предоставляя вам ценные инсайты для оптимизации вашего бизнеса.'}></AccordeonTab>
                        </div>
                        <div className={'flex items-start gap-8'}>
                            <img className={'w-12 aspect-square'} src={'/icons/abilitiy3.svg'}/>
                            <AccordeonTab title={'Анализ менеджеров и выдача рекомендаций.'} description={'Наша технология голосового и текстового распознавания позволяет вам анализировать клиентов и менеджеров по продажам, предоставляя вам ценные инсайты для оптимизации вашего бизнеса.'}></AccordeonTab>
                        </div>
                        <div className={'flex items-start gap-8'}>
                            <img className={'w-12 aspect-square'} src={'/icons/abilitiy4.svg'}/>
                            <AccordeonTab title={'Персонализированный отчет для вашего бизнеса.'} description={'Наша технология голосового и текстового распознавания позволяет вам анализировать клиентов и менеджеров по продажам, предоставляя вам ценные инсайты для оптимизации вашего бизнеса.'}></AccordeonTab>
                        </div>
                    </div>
                    <div className={'w-full flex items-center justify-center'}>
                        <img src={'/abilities.png'}/>
                    </div>
                </div>
            </div>

            {/*ШЕСТОЙ БЛОК*/}

            <div className={'bg-white flex justify-center py-12'}>
                <div className={'w-full flex justify-center px-12 items-center py-12 flex-col gap-10 max-w-[1440px]'}>
                    <p className={'text-5xl text-center font-bold text-black'}>Основные преимущества <br/>
                        AICharm Sales:</p>
                    <div className={'grid grid-cols-3 mt-16 w-4/5 gap-20 items-start'}>
                        <div className={'flex flex-col items-center w-full gap-5'}>
                            <img className={'w-20 aspect-square'} src={'/icons/features1.svg'}/>
                            <p className={'text-center text-lg font-light'}>Анализ эмоций и удовлетворенности клиентов</p>
                        </div>
                        <div className={'flex flex-col items-center w-full gap-5'}>
                            <img className={'w-20 aspect-square'} src={'/icons/features2.svg'}/>
                            <p className={'text-center text-lg font-light'}>Оценка пригодности менеджера для конкретного направления</p>
                        </div>
                        <div className={'flex flex-col items-center w-full gap-5'}>
                            <img className={'w-20 aspect-square'} src={'/icons/features3.svg'}/>
                            <p className={'text-center text-lg font-light'}>Контроль и оценка работы менеджеров по продажам</p>
                        </div>

                    </div>
                    <div className={'grid grid-cols-2 mt-16 w-1/2 gap-20 items-start'}>
                        <div className={'flex flex-col items-center w-full gap-5'}>
                            <img className={'w-20 aspect-square'} src={'/icons/features4.svg'}/>
                            <p className={'text-center text-lg font-light'}>Рекомендации по улучшению скрипта продаж</p>
                        </div>
                        <div className={'flex flex-col items-center w-full gap-5'}>
                            <img className={'w-20 aspect-square'} src={'/icons/features5.svg'}/>
                            <p className={'text-center text-lg font-light'}>Определение психотипа вашей аудитории</p>
                        </div>
                    </div>
                </div>
            </div>


            {/*СЕДЬМОЙ БЛОК*/}

            <div className={'w-full py-20 flex justify-center items-center bg-center px-12 bg-[url("/form_bg.svg")] bg-cover relative'}>
                <div className={'w-full h-full grid grid-cols-2 gap-32 items-center max-w-[1440px]'}>
                    <div className={'w-full flex items-center justify-center'}>
                        <Form></Form>
                    </div>
                    <div className={'flex gap-16 flex-col'}>
                        <p className={'text-5xl  font-bold text-white'}>Свяжитесь с нами</p>
                        <p className={'text-xl  font-light  text-white'}>Предоставьте нам контактные данные, чтобы мы могли связаться с вами и предложить решение, наилучшим образом соответствующее вашим потребностям.</p>
                    </div>
                </div>
            </div>

        </main>
    )
}
