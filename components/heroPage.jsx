"use client"
import { Check } from "lucide-react"
import gsap from "gsap"
import { useEffect } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Heropage({dark}){

    useEffect(()=>{

        gsap.to("#bigcard",{
            y:8,
            duration:2,
            repeat:-1,
            yoyo:true,
            ease:"power2.inOut"
        })

        gsap.from("#leftbar",{
            height:0,
            duration:1,
            delay:2
        })

        gsap.from("#welcome",{
            opacity:0,
            delay:2,
            duration:2,
        })

        gsap.to("#leftbar, #welcome",{
            opacity:0,
            height:0,
            delay:6,
            duration:2,
        })
    },[])

    return (
        <div className="w-full pt-20 h-screen border-0 border-red-500 text-black flex flex-row justify-center items-center dark:bg-black select-none">

            <div className="hidden absolute top-[8%] left-[1%] w-[90%] md:w-[20%] h-[5%] border-0 border-black md:flex flex-row justify-start items-start gap-2">
                
                <div id="leftbar" className="h-full absolute w-[3px] bg-neutral-700 rounded-lg"></div>
                
                <div id="welcome" className="h-full w-full px-2 flex flex-col justify-start items-start">
                    <div className="text-xl font-semibold text-neutral-800 dark:text-neutral-400">Su Swagatam aapka</div>
                    <div className="text-sm/4 font-semibold text-black/40 dark:text-neutral-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente mollitia eum at</div>
                
                </div>
            </div>

            <div className="w-full md:w-[30%] h-full border-0 border-black flex flex-col justify-center items-center p-4 gap-6">
                {/* transition-all delay-100 duration-300 hover:rotate-0 */}
                <div id="bigcard" className="w-[76%] h-[85%] rounded-4xl ring-4 ring-neutral-700 inset-shadow-sm inset-shadow-white/30 border-2 border-white/80 -rotate-5 bg-black flex flex-col justify-center items-start p-[7px]">

                        <div className="w-full h-2/9 border-0 border-white text-[3rem] text-white px-2 font-extrabold tracking-tighter">UIC</div>
                        <div className="w-[95%] h-3/9 border-0 border-white text-white text-[1.3rem md:text-[1.3rem]/6 p-2 font-semibold text-left">Creative components designed to enhance your React web applications with modern design.</div>
                        <div className="w-full h-5/9 border-2 border-white bg-white rounded-3xl flex flex-col ring-2 ring-neutral-200 inset-shadow-sm inset-shadow-neutral-400">

                                <div className="h-full w-full flex flex-row justify-start items-start p-2 gap-2">
                                    <div className="h-full w-[16%] border-0 border-blue-400 flex justify-center items-center p-2">
                                        <div className="w-full h-full rounded-lg bg-black flex justify-center items-center"><Check className="stroke-white w-[70%] h-[70%] rounded-xl bg-black" /></div>
                                    </div>
                                    <div className="h-full w-[85%] border-0 border-blue-400 flex flex-col justify-start items-start line">
                                        <div className="text-[0.9rem] md:text-[0.9rem] font-semibold text-neutral-900">Use the components for free</div>
                                        <div className="text-[0.8rem] font-semibold text-neutral-400 tracking-tight">Free to use in your projects</div>
                                    </div>
                                </div>
                                <div className="h-full w-full flex flex-row justify-start items-start p-2 gap-2">
                                    <div className="h-full w-[16%] border-0 border-blue-400 flex justify-center items-center p-2">
                                        <div className="w-full h-full rounded-lg bg-black flex justify-center items-center"><Check className="stroke-white w-[70%] h-[70%] rounded-xl bg-black" /></div>
                                    </div>
                                    <div className="h-full w-[85%] border-0 border-blue-400 flex flex-col justify-start items-start line">
                                        <div className="text-[0.9rem] md:text-[0.9rem] font-semibold text-neutral-900">Open-source collection of comps</div>
                                        <div className="text-[0.8rem] font-semibold text-neutral-400 tracking-tight">Aim to enhance your React web app</div>
                                    </div>
                                </div>

                                <div className="h-full w-full flex flex-row justify-start items-start p-2 gap-2">
                                    {/* <div className="h-full w-[14%] border-0 border-blue-400 flex justify-center items-center p-2">
                                        <div className="w-full h-full rounded-lg bg-black flex justify-center items-center"><Check className="stroke-white w-[70%] h-[70%] rounded-xl bg-black" /></div>
                                    </div>
                                    <div className="h-full w-[85%] border-0 border-blue-400 flex flex-col justify-start items-start line">
                                        <div className="text-[0.9rem] font-semibold text-neutral-900">1x Lorem ipsum dolor sit amet.</div>
                                        <div className="text-[0.8rem] font-semibold text-neutral-600">Featured for 30 days.</div>
                                    </div> */}
                                </div>
                                <div className="h-full w-full flex flex-row justify-start items-start p-2 gap-2">
                                    {/* <div className="h-full w-[14%] border-0 border-blue-400 flex justify-center items-center p-2">
                                        <div className="w-full h-full rounded-lg bg-black flex justify-center items-center"><Check className="stroke-white w-[70%] h-[70%] rounded-xl bg-black" /></div>
                                    </div>
                                    <div className="h-full w-[85%] border-0 border-blue-400 flex flex-col justify-start items-start line">
                                        <div className="text-[0.9rem] font-semibold text-neutral-900">1x Lorem ipsum dolor sit amet.</div>
                                        <div className="text-[0.8rem] font-semibold text-neutral-600">Featured for 30 days.</div>
                                    </div> */}
                                </div>
                        </div>


                </div>
                
                
                <div className="h-[9%] w-[76%] flex justify-center items-center ">
                    <div className="w-[85%] md:w-[70%] h-full rounded-full bg-black ring-2 ring-neutral-400 border-2 border-neutral-800 inset-shadow-sm inset-shadow-white/30 text-neutral-100 flex justify-center items-center text-[1rem] font-medium cursor-pointer ">
                        <div className="px-2 md:px-0">Custom Comps at $29 <span className="text-neutral-500 line-through">$49</span></div>
                    </div>
                </div>
                <div className="h-[10%] w-[80%] border-0 border-black font-semibold text-neutral-500 text-[0.8rem]/4 text-center">The custom template starts from $59. For inquiries, contact us at vipuldubey041@gmail.com</div>

            </div>

        </div>
    )
}