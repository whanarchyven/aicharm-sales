"use client"
import Image from 'next/image'
import Button from "@/app/components/UI/Button";
import WrapP from "@/app/components/UI/wrapP";
import AccordeonTab from "@/app/components/UI/AccordeonTab";
import QntPicker from "@/app/components/UI/QntPicker";
import Form from "@/app/components/Form";
import axios from "axios";
import {useEffect, useState} from "react";
import {classList} from "@/app/helpers/classList";
import ClientEmotions from "@/app/components/ClientEmotions";
import {stat} from "fs";
import {ClipLoader} from "react-spinners";

export default function Home({params}: any) {

    const uuid = params.id

    const mockData = {
        "isSalesCallAtAll": false,
        "attentionComment": "Клиент был недоволен отказом в бонусе, несмотря на то, что является хорошим клиентом.",
        "attentionLevel": "Средний",
        "clientDecisionFactors": "Менеджер предложил бонус в виде 25 евро и двух золотых уценок.",
        "clientDecisionPoint": "Клиент успокоился после получения бонуса и выразил благодарность.",
        "clientGoal": "Клиент хотел получить бонус или подарок за лояльность.",
        "clientMbti": "ISFJ",
        "clientMbtiConfidencePercent": "85%",
        "clientMbtiTraits": "#Лояльный #Чувствительный",
        "clientName": "Жаклин Бишар",
        "clientPsyProfile": "Клиент ценит лояльность и ожидает взаимности от компании в виде бонусов или подарков.",
        "clientRecognized": "Чувствительный и немного разочарованный.",
        "clientStatus": "Существующий",
        "managerGoal": "Успокоить клиента и предложить ему подходящий бонус для сохранения лояльности.",
        "managerListeningSkills": "Менеджер внимательно выслушал клиента и выяснил причину недовольства.",
        "managerMbti": "ESTJ",
        "managerMbtiConfidencePercent": "90%",
        "managerMbtiTraits": "#Эффективность #Решительность #Уверенность",
        "managerProductKnowledge": "Менеджер хорошо знает политику компании относительно бонусов и может оперативно принимать решения.",
        "managerPsyProfile": "Менеджер ориентируется на быстрое решение проблем клиента и поддержание хороших отношений.",
        "summaryClient": "Клиент был недоволен из-за отказа в бонусе, но менеджер смог удовлетворить его запрос, предоставив бонус."
    }

    const [data, setData] = useState<Array<any>>()
    const [transcribation, setTranscribation] = useState<{
        createdAt: string,
        model: string,
        result: {
            text: string
        },
        updatedAt: string,
        uuid: string
    }>()
    const [summary, setSummary] = useState<{
        createdAt: string
        model: string
        result: {
            attentionComment: string
            attentionLevel: string
            clientDecisionFactors: string
            clientDecisionPoint: string
            clientGoal: string
            clientMbti: string
            clientMbtiConfidencePercent: string
            clientMbtiTraits: string
            clientName: string
            clientPsyProfile: string
            clientRecognized: string
            clientStatus: string
            managerGoal: string
            managerListeningSkills: string
            managerMbti: string
            managerMbtiConfidencePercent: string
            managerMbtiTraits: string
            managerProductKnowledge: string
            managerPsyProfile: string
            summaryClient: string;
            top_five_emotions?: {
                "emoticon": string,
                "rank": number,
                "name": string
            }[]
        }
        updatedAt: string
        uuid: string
    }>()
    const [textEmotions, setTextEmotions] = useState<{
        createdAt: string
        model: string
        result: {
            textEmotions: string
        }
        updatedAt: string
        uuid: string
    }>()
    const [facts, setFacts] = useState()
    const [tags, setTags] = useState()

    const [status,setStatus]=useState('')
    const [isLoading,setIsLoading]=useState(true)
    const fetchData = async () => {
        try {
            const res = await axios.get(`/api/get-report/${uuid}`);
            console.log(res.data.result);

            setSummary(res.data);
            setStatus(res.data.status);
            setIsLoading(false);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        // Функция для выполнения fetchData каждые 5 секунд, пока статус не будет завершён
        const intervalId = setInterval(() => {
            if (status !== 'Обработка завершена') {
                fetchData();
            } else {
                clearInterval(intervalId); // Очищаем интервал, если статус достиг нужного значения
            }
        }, 5000);

        // Выполнение fetchData сразу при монтировании
        fetchData();

        // Очищаем интервал при размонтировании компонента
        return () => clearInterval(intervalId);
    }, [status]); // Следим за изменением `status`

    const translateColor = (counter: number) => {
        switch (counter) {
            case 1:
                return 'bg-[#1DAEFF]'
            case 2:
                return 'bg-[#71E884]'
            case 3:
                return 'bg-[#FF7B7B]'
            default:
                return 'bg-[#1DAEFF]'
        }
    }

    if(isLoading){
        return <div className={'h-screen flex items-center justify-center'}>
            <ClipLoader/>
        </div>
    }

    // if (!data) return null
    if (!summary||status!='Обработка завершена') return <div className={'h-screen flex items-center justify-center'}>
        <p>{status}</p>
    </div>

    return (
        <main className="bg-black w-full">

            {/*ПЕРВЫЙ БЛОК*/}

            <div className={'w-full flex justify-center sm:px-12 bg-white bg-cover relative py-12 sm:py-10'}>
                <div className={'w-full h-full items-center p-2 sm:px-[20px] sm:sm:max-w-[1440px]'}>
                    <div
                        className={'mt-6 grid sm:border-b-2 border-black border-opacity-10 grid-cols-1 sm:grid-cols-2 gap-8'}>
                        <div className={'flex flex-col w-full sm:py-8 '}>
                            {/*<div className={'flex gap-3 items-start'}>*/}
                            {/*    <div className={'w-[5%] flex justify-start'}>*/}
                            {/*        <img className={'w-6 aspect-square'} src={'/card/icons/info.svg'}/>*/}
                            {/*    </div>*/}
                            {/*    <div className={'flex flex-col w-[80%] sm:w-[95%] gap-3'}>*/}
                            {/*        <p className={'text-orange sm:text-2xl leading-[100%] font-bold'}>Детали звонка:</p>*/}
                            {/*        {transcribation || true ?*/}
                            {/*            <div className={'grid grid-cols-1 sm:grid-cols-7 items-start gap-1'}>*/}
                            {/*                <p className={'text-black sm:col-span-2 sm:text-lg font-bold'}>Дата и*/}
                            {/*                    время:</p>*/}
                            {/*                <div className={'col-span-5 w-full text-sm'}>*/}
                            {/*                    <p className={'sm:text-lg font-light'}>{new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}</p>*/}
                            {/*                </div>*/}
                            {/*            </div> : null}*/}
                            {/*        <div className={'grid grid-cols-1 sm:grid-cols-7 items-start gap-1'}>*/}
                            {/*            <p className={'text-black sm:col-span-2 sm:text-lg font-bold'}>Длительность</p>*/}
                            {/*            <div className={'col-span-5 w-full text-sm'}>*/}
                            {/*                <p className={'sm:text-lg font-light'}>[Duration]</p>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*        <div className={'grid grid-cols-1 sm:grid-cols-7 items-start gap-1'}>*/}
                            {/*            <p className={'text-black sm:col-span-2 sm:text-lg font-bold'}>Причина:</p>*/}
                            {/*            <div className={'col-span-5 w-full text-sm'}>*/}
                            {/*                <p className={'sm:text-lg font-light'}>[Purpose of the Call]</p>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}

                            {/*    </div>*/}
                            {/*</div>*/}
                            <div className={'flex gap-3 mt-6 items-start'}>
                                <div className={'w-[5%] flex justify-start'}>
                                    <img className={'w-6 aspect-square'} src={'/card/icons/conversation.svg'}/>
                                </div>
                                <div className={'flex flex-col w-[80%] sm:w-[95%] gap-3'}>
                                    <p className={'text-orange sm:text-2xl leading-[100%] font-bold'}>Резюме
                                        разговора</p>
                                    <WrapP
                                        body={summary?.result.summaryClient}
                                        limiter={14} ending={'...'} color={'black'}></WrapP>
                                </div>
                            </div>
                        </div>
                        <div className={'flex flex-col w-full sm:pl-8 sm:py-8 border-black border-opacity-10'}>
                            <div
                                className={'sm:pl-10 sm:py-6 bg-[#FFE0CE] sm:border-2 border-black border-opacity-10 rounded-xl'}>
                                <div className={''}>
                                    <div className={'flex gap-3 items-start'}>
                                        <div className={'w-[5%] flex justify-start'}>
                                            <img className={'w-6 aspect-square'}
                                                 src={'/card/icons/clients_active.svg'}/>
                                        </div>
                                        <div className={'flex flex-col w-[80%] sm:w-[95%] gap-3'}>
                                            <p className={'text-black col-span-2 leading-[100%] text-lg font-bold'}>Decision
                                                Point клиента</p>
                                            <WrapP
                                                body={summary?.result.clientDecisionPoint}
                                                limiter={15} ending={'...'} color={'black'}></WrapP>
                                        </div>
                                    </div>
                                </div>
                                <div className={'mt-6'}>
                                    <div className={'flex gap-3 items-start'}>
                                        <div className={'w-[5%] flex justify-start'}>
                                            <img className={'w-6 aspect-square'}
                                                 src={'/card/icons/factors_active.svg'}/>
                                        </div>
                                        <div className={'flex flex-col w-[80%] sm:w-[95%] gap-3'}>
                                            <p className={'text-black col-span-2 leading-[100%] text-lg font-bold'}>Главные
                                                факторы принятия решения:</p>
                                            <WrapP
                                                body={summary?.result.clientDecisionFactors}
                                                limiter={15} ending={'...'} color={'black'}></WrapP>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*<div className={'mt-4 sm:pl-20'}>*/}
                            {/*    <div className={'flex mt-4 items-center gap-3'}>*/}
                            {/*        <p className={'text-orange sm:text-2xl leading-[100%] font-bold'}>Client-Manager*/}
                            {/*            Match</p>*/}
                            {/*        <img*/}
                            {/*            className={'opacity-20 hover:opacity-100 cursor-pointer duration-300 transition-all'}*/}
                            {/*            src={'/card/icons/info_black.svg'}/>*/}
                            {/*    </div>*/}
                            {/*    <img className={'sm:w-4/5 w-full'} src={'/card/match.svg'}/>*/}
                            {/*</div>*/}
                        </div>
                    </div>


                    <div className={'grid border-black border-opacity-10 grid-cols-1 sm:grid-cols-2 gap-8'}>
                        <div className={'flex mt-8 gap-3 items-start'}>
                            <div className={'w-[5%] flex justify-start'}>
                                <img className={'w-6 aspect-square'} src={'/card/icons/client.svg'}/>
                            </div>
                            <div className={'flex flex-col w-[80%] sm:w-[95%] gap-3'}>
                                <p className={'text-orange sm:text-2xl leading-[100%] font-bold'}>Профиль клиента</p>
                                <div className={'flex gap-4  items-center'}>
                                    <p className={'text-black sm:text-3xl font-bold'}>{summary?.result.clientName}</p>
                                    <div
                                        className={'sm:px-4 sm:py-2 p-1 gap-3 flex items-center rounded-full bg-[#1DAEFF]'}>
                                        <p className={'text-white sm:text-lg text-xs font-bold'}>{summary?.result.clientMbti}</p>
                                        <img
                                            className={'opacity-50 cursor-pointer hover:opacity-100 duration-300 transition-all'}
                                            src={'/card/icons/info_white.svg'}/>
                                    </div>
                                </div>
                                <div className={'grid grid-cols-1 sm:grid-cols-7 items-start gap-1'}>
                                    <p className={'text-black sm:col-span-2 sm:text-lg font-bold'}>Тип клиента:</p>
                                    <div className={'col-span-5 w-full text-sm'}>
                                        <p className={'sm:text-lg font-light'}>{summary?.result.clientStatus}</p>
                                    </div>
                                </div>
                                {/*<div className={'grid grid-cols-1 sm:grid-cols-7 items-start gap-1'}>*/}
                                {/*    <p className={'text-black sm:col-span-2 sm:text-lg font-bold'}>Client&apos;s Needs:</p>*/}
                                {/*    <div className={'col-span-5 w-full text-sm'}>*/}
                                {/*        <WrapP*/}
                                {/*            body={'[Clients Needs and Preferences]'}*/}
                                {/*            limiter={6} ending={'...'} color={'black'}></WrapP>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                {/*<div className={'grid grid-cols-1 sm:grid-cols-7 items-start gap-1'}>*/}
                                {/*    <p className={'text-black sm:col-span-2 sm:text-lg font-bold'}>Emotional State:</p>*/}
                                {/*    <div className={'col-span-5 w-full text-sm'}>*/}
                                {/*        <p className={'sm:text-lg font-light'}>[Client&apos;s Emotional State, e.g., Interested,*/}
                                {/*            Curious]</p>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                <div className={'grid grid-cols-1 sm:grid-cols-7 items-start gap-1'}>
                                    <p className={'text-black sm:col-span-2 sm:text-lg font-bold'}>Запрос клиента:</p>
                                    <div className={'col-span-5 w-full text-sm'}>
                                        <p className={'sm:text-lg font-light'}>{summary?.result.clientGoal}</p>
                                    </div>
                                </div>
                                <div className={'grid grid-cols-1 sm:grid-cols-7 items-start gap-1'}>
                                    <p className={'text-black sm:col-span-2 sm:text-lg font-bold'}>MBTI тип:</p>
                                    <div className={'col-span-5 w-full text-sm'}>
                                        <p className={'sm:text-lg font-light'}>{summary?.result.clientMbti?.concat(', confidence:', summary?.result.clientMbtiConfidencePercent)}</p>
                                    </div>
                                </div>
                                <div className={'grid grid-cols-1 sm:grid-cols-7 items-start gap-1'}>
                                    <p className={'text-black sm:col-span-2 sm:text-lg font-bold'}>Теги:</p>
                                    <div className={'col-span-5 flex flex-wrap items-center gap-3 w-full text-sm'}>
                                        {summary?.result.clientMbtiTraits?.split('#').splice(1, 100).map((trait: string, counter: number) => {
                                            return (
                                                <div key={trait}
                                                     className={classList('sm:px-4 p-2 sm:py-1 sm:text-lg !leading-[110%] lowercase text-xs text-white rounded-full flex items-center justify-center', translateColor(counter + 1))}>
                                                    {trait}
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className={'grid grid-cols-1 mt-8 items-start gap-1'}>
                                    <p className={'text-black sm:text-lg font-bold'}>Психологическая характеристика:</p>
                                    <div className={' w-full text-sm'}>
                                        <p className={'sm:text-lg whitespace-pre-wrap font-light'}>{summary?.result.clientPsyProfile}</p>
                                    </div>
                                </div>
                                {summary.result.top_five_emotions ?
                                    <div className={'flex mt-8 items-start flex-col gap-3'}>
                                        <p className={'text-orange sm:text-2xl leading-[100%] font-bold'}>Эмоции
                                            клиента:</p>
                                        <ClientEmotions emotions={summary.result.top_five_emotions}/>
                                    </div> : null}

                            </div>
                        </div>

                        <div className={'flex flex-col w-full sm:p-8 sm:border-l-2 border-black border-opacity-10'}>
                            <div className={'flex flex-col items-start gap-4'}>
                                <div className={'flex gap-4'}>
                                    <div className={'w-[7%] flex justify-start'}>
                                        <img className={'w-full aspect-square'} src={'/card/icons/client.svg'}/>
                                    </div>
                                    <p className={'text-orange sm:text-2xl whitespace-nowrap leading-[100%] font-bold'}>Профиль
                                        менеджера:</p>
                                </div>
                                <div className={'flex pl-[7%] flex-col'}>
                                    <div className={'flex gap-3'}>
                                        <p className={'font-bold sm:text-3xl'}>Manager</p>
                                        <div
                                            className={'sm:px-4 sm:py-2 p-1 gap-3 flex items-center rounded-full bg-[#1DAEFF]'}>
                                            <p className={'text-white sm:text-lg text-xs font-bold'}>{summary?.result.managerMbti}</p>
                                            <img
                                                className={'opacity-50 cursor-pointer hover:opacity-100 duration-300 transition-all'}
                                                src={'/card/icons/info_white.svg'}/>
                                        </div>
                                    </div>
                                    <div className={'grid grid-cols-1 my-3 sm:grid-cols-7 items-start gap-1'}>
                                        <p className={'text-black sm:col-span-2 sm:text-lg font-bold'}>Цель
                                            менеджера:</p>
                                        <div className={'col-span-5 w-full text-sm'}>
                                            <p className={'sm:text-lg font-light'}>{summary?.result.managerGoal}</p>
                                        </div>
                                    </div>
                                    <div className={'grid grid-cols-1 my-3 sm:grid-cols-7 items-start gap-1'}>
                                        <p className={'text-black sm:col-span-2 sm:text-lg font-bold'}>MBTI тип:</p>
                                        <div className={'col-span-5 w-full text-sm'}>
                                            <p className={'sm:text-lg font-light'}>{summary?.result.managerMbti?.concat(', confidence:', summary?.result.managerMbtiConfidencePercent)}</p>
                                        </div>
                                    </div>
                                    <div className={'grid grid-cols-1 sm:grid-cols-7 mt-3 items-start gap-1'}>
                                        <p className={'text-black sm:col-span-2 sm:text-lg font-bold'}>Теги:</p>
                                        <div className={'col-span-5 flex items-center gap-3 w-full text-sm'}>
                                            {summary?.result.managerMbtiTraits?.split('#').splice(1, 100).map((trait: string, counter: number) => {
                                                return (
                                                    <div key={trait}
                                                         className={classList('sm:px-4 p-2 sm:py-1 sm:text-lg !leading-[110%] lowercase text-xs text-white rounded-full flex items-center justify-center', translateColor(counter + 1))}>
                                                        {trait}
                                                    </div>
                                                )
                                            })}

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
                                        <p className={'text-orange sm:text-2xl leading-[100%] font-bold'}>Оценка
                                            эффективности</p>
                                    </div>
                                </div>
                            </div>
                            {/*<div className={'mt-6'}>*/}
                            {/*    <div className={'flex gap-3 items-start'}>*/}
                            {/*        <div className={'w-[5%] flex justify-start'}>*/}
                            {/*            <img className={'w-6 aspect-square'}*/}
                            {/*                 src={'/card/icons/communication_active.svg'}/>*/}
                            {/*        </div>*/}
                            {/*        <div className={'flex flex-col w-[80%] sm:w-[95%] gap-3'}>*/}
                            {/*            <p className={'text-black col-span-2 leading-[100%] text-lg font-bold'}>Communication*/}
                            {/*                Skills:</p>*/}
                            {/*            <WrapP*/}
                            {/*                body={'The manager demonstrated effective communication skills throughout the call. They were articulate and used appropriate language to convey information.'}*/}
                            {/*                limiter={15} ending={'...'} color={'black'}></WrapP>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            <div className={'mt-6'}>
                                <div className={'flex gap-3 items-start'}>
                                    <div className={'w-[5%] flex justify-start'}>
                                        <img className={'w-6 aspect-square'} src={'/card/icons/product_active.svg'}/>
                                    </div>
                                    <div className={'flex flex-col w-[80%] sm:w-[95%] gap-3'}>
                                        <div className={'flex items-center gap-3'}>
                                            <p className={'text-black col-span-2 leading-[100%] text-lg font-bold'}>Знание
                                                продукта</p>
                                            {/*<img className={'sm:w-auto w-16'} src={'/card/icons/stars.svg'}/>*/}
                                        </div>
                                        <WrapP
                                            body={summary?.result.managerProductKnowledge}
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
                                            <p className={'text-black col-span-2 leading-[100%] text-lg font-bold'}>Умение
                                                слышать клиента:</p>
                                            {/*<img className={'sm:w-auto w-16'} src={'/card/icons/stars.svg'}/>*/}
                                        </div>
                                        <WrapP
                                            body={summary?.result.managerListeningSkills}
                                            limiter={15} ending={'...'} color={'black'}></WrapP>
                                    </div>
                                </div>
                            </div>

                            {/*<div className={'mt-6'}>*/}
                            {/*    <div className={'flex gap-3 items-start'}>*/}
                            {/*        <div className={'w-[5%] flex justify-start'}>*/}
                            {/*            <img className={'w-6 aspect-square'} src={'/card/icons/closing_active.svg'}/>*/}
                            {/*        </div>*/}
                            {/*        <div className={'flex flex-col w-[80%] sm:w-[95%] gap-3'}>*/}
                            {/*            <div className={'flex items-center gap-3'}>*/}
                            {/*                <p className={'text-black col-span-2 leading-[100%] text-lg font-bold'}>Closing*/}
                            {/*                    Techniques: </p>*/}
                            {/*                <img className={'sm:w-auto w-16'} src={'/card/icons/stars.svg'}/>*/}
                            {/*            </div>*/}
                            {/*            <WrapP*/}
                            {/*                body={'The manager utilized closing techniques appropriately and at the right moments in the conversation.'}*/}
                            {/*                limiter={15} ending={'...'} color={'black'}></WrapP>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}

                            <div className={'mt-6'}>
                                <div className={'flex gap-3 items-start'}>
                                    <div className={'w-[5%] flex justify-start'}>
                                        <img className={'w-6 aspect-square'} src={'/card/icons/psychological.svg'}/>
                                    </div>
                                    <div className={'flex flex-col w-[80%] sm:w-[95%] gap-3'}>
                                        <p className={'text-orange sm:text-2xl leading-[100%] font-bold'}>Психологический
                                            профиль менеджера</p>
                                        <WrapP
                                            body={summary?.result.managerPsyProfile}
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
