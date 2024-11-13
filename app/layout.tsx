import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import Navbar from "@/app/components/Navbar";
import {classList} from "@/app/helpers/classList";
import Footer from "@/app/components/Footer";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'sales-calls-demo',
    description: '',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={classList(inter.className,'flex bg-white scroll-smooth flex-col justify-center w-full')}>
        {/*<Navbar></Navbar>*/}
        {children}
        {/*<Footer></Footer>*/}
        </body>
        </html>
    )
}
