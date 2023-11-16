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

export default function Home({params}: any) {

    const uuid = params.id

    const [data, setData] = useState<Array<any>>()
    const [transcribation, setTranscribation] = useState<{
        createdAt: string,
        model: string,
        result: { text: string },
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
            summaryClient: string
        }
        updatedAt: string
        uuid: string
    }>()
    const [textEmotions, setTextEmotions] = useState<{
        createdAt: string
        model: string
        result: { textEmotions: string }
        updatedAt: string
        uuid: string
    }>()
    const [facts, setFacts] = useState()
    const [tags, setTags] = useState()
    const fetchData = async () => {
        await axios.get(`https://v3.ptq.pw/demo-sales/${uuid}`).then((res) => {
            console.log(res)
            console.log(res.data[2].result.textEmotions?.split(' '))
            res.data.map((model: any) => {
                if (model.model.includes('transcribation')) {
                    setTranscribation(model)
                }
                if (model.model.includes('aicharm-sales')) {
                    setSummary(model)
                }
                if (model.model.includes('aicharm-text-emoton')) {
                    setTextEmotions(model)
                }
                if (model.model.includes('aicharm-facts')) {
                    setFacts(model)
                }
                if (model.model.includes('aicharm-tags')) {
                    setTags(model)
                }

            })
            setData(res.data)
        })
    }

    useEffect(() => {
        fetchData()
    }, []);

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

    if (!data) return null

    return (
        <main className="bg-black w-full">

            {/*ПЕРВЫЙ БЛОК*/}

            <div className={'w-full flex justify-center sm:px-12 bg-white bg-cover relative py-12 sm:py-44'}>
                <div className={'w-full h-full items-center p-2 sm:px-[20px] sm:sm:max-w-[1440px]'}>
                    <div
                        className={'mt-6 grid sm:border-b-2 border-black border-opacity-10 grid-cols-1 sm:grid-cols-2 gap-8'}>
                        <div className={'flex flex-col w-full sm:py-8 '}>
                            <div className={'flex gap-3 items-start'}>
                                <div className={'w-[5%] flex justify-start'}>
                                    <img className={'w-6 aspect-square'} src={'/card/icons/info.svg'}/>
                                </div>
                                <div className={'flex flex-col w-[80%] sm:w-[95%] gap-3'}>
                                    <p className={'text-orange sm:text-2xl leading-[100%] font-bold'}>Call details:</p>
                                    {transcribation ?
                                        <div className={'grid grid-cols-1 sm:grid-cols-7 items-start gap-1'}>
                                            <p className={'text-black sm:col-span-2 sm:text-lg font-bold'}>Call Date and
                                                Time:</p>
                                            <div className={'col-span-5 w-full text-sm'}>
                                                <p className={'sm:text-lg font-light'}>{new Date(transcribation.createdAt).toLocaleDateString()} {new Date(transcribation?.createdAt).toLocaleTimeString()}</p>
                                            </div>
                                        </div> : null}
                                    <div className={'grid grid-cols-1 sm:grid-cols-7 items-start gap-1'}>
                                        <p className={'text-black sm:col-span-2 sm:text-lg font-bold'}>Call
                                            Duration:</p>
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
                                <div className={'flex flex-col w-[80%] sm:w-[95%] gap-3'}>
                                    <p className={'text-orange sm:text-2xl leading-[100%] font-bold'}>Conversation
                                        Summary:</p>
                                    <WrapP
                                        body={summary?.result.summaryClient}
                                        limiter={14} ending={'...'} color={'black'}></WrapP>
                                </div>
                            </div>
                        </div>
                        <div className={'flex flex-col w-full sm:pl-8 sm:py-8 border-black border-opacity-10'}>
                            <div className={'sm:pl-10 sm:py-6 sm:border-2 border-black border-opacity-10 rounded-xl'}>
                                <div className={''}>
                                    <div className={'flex gap-3 items-start'}>
                                        <div className={'w-[5%] flex justify-start'}>
                                            <img className={'w-6 aspect-square'}
                                                 src={'/card/icons/clients_active.svg'}/>
                                        </div>
                                        <div className={'flex flex-col w-[80%] sm:w-[95%] gap-3'}>
                                            <p className={'text-black col-span-2 leading-[100%] text-lg font-bold'}>Client&apos;s
                                                Decision Point:</p>
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
                                            <p className={'text-black col-span-2 leading-[100%] text-lg font-bold'}>Factors
                                                Influencing Client&apos;s Decision:</p>
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
                                <p className={'text-orange sm:text-2xl leading-[100%] font-bold'}>Client Profile and
                                    State:</p>
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
                                    <p className={'text-black sm:col-span-2 sm:text-lg font-bold'}>Client Type:</p>
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
                                    <p className={'text-black sm:col-span-2 sm:text-lg font-bold'}>Call Purpose:</p>
                                    <div className={'col-span-5 w-full text-sm'}>
                                        <p className={'sm:text-lg font-light'}>{summary?.result.clientGoal}</p>
                                    </div>
                                </div>
                                <div className={'grid grid-cols-1 sm:grid-cols-7 items-start gap-1'}>
                                    <p className={'text-black sm:col-span-2 sm:text-lg font-bold'}>MBTI Type:</p>
                                    <div className={'col-span-5 w-full text-sm'}>
                                        <p className={'sm:text-lg font-light'}>{summary?.result.clientMbti?.concat(', confidence:', summary?.result.clientMbtiConfidencePercent, '%')}</p>
                                    </div>
                                </div>
                                <div className={'grid grid-cols-1 sm:grid-cols-7 items-start gap-1'}>
                                    <p className={'text-black sm:col-span-2 sm:text-lg font-bold'}>Client&apos;s
                                        Traits:</p>
                                    <div className={'col-span-5 flex flex-wrap items-center gap-3 w-full text-sm'}>
                                        {summary?.result.clientMbtiTraits?.split(',').map((trait: string, counter: number) => {
                                            return (
                                                <div key={trait}
                                                     className={classList('sm:px-4 p-2 sm:py-1 sm:text-lg lowercase text-xs text-white rounded-full flex items-center justify-center', translateColor(counter + 1))}>
                                                    {trait}
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className={'grid grid-cols-1 mt-8 items-start gap-1'}>
                                    <p className={'text-black sm:text-lg font-bold'}>Psychological Profile of the
                                        Client:</p>
                                    <div className={' w-full text-sm'}>
                                        <p className={'sm:text-lg whitespace-pre-wrap font-light'}>{summary?.result.clientPsyProfile}</p>
                                    </div>
                                </div>
                                <div className={'flex mt-8 items-start flex-col gap-3'}>
                                    <p className={'text-orange sm:text-2xl leading-[100%] font-bold'}>Client
                                        emotions</p>
                                    <div className={'flex items-center gap-5 flex-wrap'}>

                                        {textEmotions?.result.textEmotions?.split(' ').map((emotion: string, key: number) => {
                                            return (
                                                <p className={'p-2 border-orange border-2 rounded-lg cursor-pointer'}
                                                   key={key}>{emotion}</p>
                                            )
                                        })}
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className={'flex flex-col w-full sm:p-8 sm:border-l-2 border-black border-opacity-10'}>
                            <div className={'flex flex-col items-start gap-4'}>
                                <div className={'flex gap-4'}>
                                    <div className={'w-[7%] flex justify-start'}>
                                        <img className={'w-full aspect-square'} src={'/card/icons/client.svg'}/>
                                    </div>
                                    <p className={'text-orange sm:text-2xl whitespace-nowrap leading-[100%] font-bold'}>Managers
                                        Profile and State:</p>
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
                                        <p className={'text-black sm:col-span-2 sm:text-lg font-bold'}>Call Purpose:</p>
                                        <div className={'col-span-5 w-full text-sm'}>
                                            <p className={'sm:text-lg font-light'}>{summary?.result.managerGoal}</p>
                                        </div>
                                    </div>
                                    <div className={'grid grid-cols-1 my-3 sm:grid-cols-7 items-start gap-1'}>
                                        <p className={'text-black sm:col-span-2 sm:text-lg font-bold'}>MBTI Type:</p>
                                        <div className={'col-span-5 w-full text-sm'}>
                                            <p className={'sm:text-lg font-light'}>{summary?.result.managerMbti?.concat(', confidence:', summary?.result.managerMbtiConfidencePercent, '%')}</p>
                                        </div>
                                    </div>
                                    <div className={'grid grid-cols-1 sm:grid-cols-7 mt-3 items-start gap-1'}>
                                        <p className={'text-black sm:col-span-2 sm:text-lg font-bold'}>Manager&apos;s <br/>Traits:
                                        </p>
                                        <div className={'col-span-5 flex items-center gap-3 w-full text-sm'}>
                                            {summary?.result.managerMbtiTraits?.split(',').map((trait: string, counter: number) => {
                                                return (
                                                    <div key={trait}
                                                         className={classList('sm:px-4 p-2 sm:py-1 sm:text-lg lowercase text-xs text-white rounded-full flex items-center justify-center', translateColor(counter + 1))}>
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
                                        <p className={'text-orange sm:text-2xl leading-[100%] font-bold'}>Manager&apos;s
                                            Performance
                                            Assessment:</p>
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
                                            <p className={'text-black col-span-2 leading-[100%] text-lg font-bold'}>Product
                                                Knowledge:</p>
                                            <img className={'sm:w-auto w-16'} src={'/card/icons/stars.svg'}/>
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
                                            <p className={'text-black col-span-2 leading-[100%] text-lg font-bold'}>Listening
                                                Skills:</p>
                                            <img className={'sm:w-auto w-16'} src={'/card/icons/stars.svg'}/>
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
                                        <p className={'text-orange sm:text-2xl leading-[100%] font-bold'}>Psychological
                                            Profile of the Manager:</p>
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
