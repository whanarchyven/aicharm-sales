import Image from 'next/image'
import Button from "@/app/components/UI/Button";
import WrapP from "@/app/components/UI/wrapP";
import AccordeonTab from "@/app/components/UI/AccordeonTab";
import QntPicker from "@/app/components/UI/QntPicker";
import Form from "@/app/components/Form";
import ProfilesList from "@/app/components/ProfilesList";

export default function Home() {
    return (
        <main className="bg-black w-full">

            <div className={'w-full flex flex-col items-center sm:px-12 bg-white bg-cover relative min-h-screen py-16 sm:py-44'}>
                <p className={'text-2xl font-bold mb-5'}>Загрузка профайла пользователей</p>
                <ProfilesList/>
            </div>

        </main>
    )
}
