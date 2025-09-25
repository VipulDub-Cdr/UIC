"use client"
import { Saira_Stencil_One } from "next/font/google"
import { useRouter } from "next/navigation"

const rubikDirt = Saira_Stencil_One({
    subsets: ['latin'],
    weight: ["400"]
})
export default function Footer(){

    const router = useRouter();

    return (
        <div className="relative w-full h-60 border-0 border-red-500 flex justify-center items-center overflow-hidden bg-black dark:bg-white select-none">
            <div className="w-full flex justify-center md:justify-end h-full border-0 border-white">
                <div className="w-[20%] border-0 border-white flex flex-row md:flex-col justify-center items-start md:gap-[2px] gap-4">
                    <div onClick={()=>{window.open("www.linkedin.com/in/vipul-dubey-541629256")}} className="text-blue-400 text-2xl font-semibold cursor-pointer hover:underline hover:underline-offset-2">Linkedin</div>
                    <div onClick={()=>{window.open("https://github.com/VipulDub-Cdr/")}} className="text-white dark:text-black text-2xl font-semibold cursor-pointer hover:underline hover:underline-offset-2">Github</div>
                    <div onClick={()=>router.push("/#comps")} className="hidden md:flex text-white dark:text-black text-2xl font-semibold cursor-pointer hover:underline hover:underline-offset-2">Components</div>
                    <div onClick={()=>router.push("/codes")} className="text-white dark:text-black text-2xl font-semibold cursor-pointer hover:underline hover:underline-offset-2">Docs</div>
                    <div onClick={()=>router.push("/#faqs")} className="hidden md:flex text-white dark:text-black text-2xl font-semibold cursor-pointer hover:underline hover:underline-offset-2">FAQs</div>
                </div>
            </div>
            <div className={`cursor-pointer absolute top-[70%] h-full w-[45%] border-0 border-black text-white dark:text-black flex justify-center items-end ${rubikDirt.className} text-[15rem] transition-all delay-100 duration-300 hover:-translate-y-20`}>
                    UIC 
            </div>
        </div>
    )
}