"use client"
import { useState, useEffect } from "react";
import gsap from "gsap";
import {LensDemoThird} from "@/components/imageLens.jsx";
export default function Project6() {

    const [card6Expand, setcard6Expand] = useState(false);

    useEffect(() => {
        gsap.from("#card6", {
            y: 40,
            opacity: 1,
            duration: 2,
            delay: 1,
            scrollTrigger: {
                trigger: "#card6",
                start: "top bottom",
                end: "top 20%",
                scrub: 3,
                markers: false
            },
        })

    }, [])

    useEffect(() => {
        if (card6Expand) {
            gsap.to("#card6, #insidecard6", {
                height: 450,
                duration: 2,
                delay: 0,
            })
            gsap.to("#insidecard6", {
                opacity: 1,
                duration: 1,
                delay: 0,
            })
        }
        else {
            gsap.to("#card6", {
                height: 85,
                duration: 1,
                delay: 0,
            })
            gsap.to("#insidecard6", {
                height: 0,
                opacity: 0,
                duration: 1,
                delay: 0,
            })
        }
    }, [card6Expand])


    return (

        <div onClick={() => setcard6Expand(!card6Expand)} id="card6" className="relative ring-2 ring-neutral-400 inset-shadow-sm inset-shadow-neutral-500 cursor-pointer hover:bg-neutral-950 w-full h-20 rounded-3xl border-2 border-neutral-700 p-2 flex flex-row justify-center items-start gap-2 bg-black shadow-lg shadow-neutral-400 dark:shadow-neutral-900  dark:inset-shadow-neutral-700">
            {/* flex justify-center items-center */}
            <div className="relative w-[25%] md:w-[10%] h-15 bg-radial-[at_50%_10%] from-[#3a3e92] to-black/10 text-white rounded-2xl inset-shadow-sm inset-shadow-black/70 overflow-hidden flex justify-center items-center">


                {/* <div className="h-[70%] w-full rounded-t-full border-0 border-black bg-[#C15D89]"></div>
                <div className="absolute h-[60%] w-[90%] rounded-t-full border-0 border-black bg-[#41373b]"></div>
                <div className="absolute h-[45%] w-[75%] rounded-t-full border-0 border-black bg-[#252525]"></div> */}

                {/* <div id="marq" className="h-full w-120 border-0 border-white flex flex-row justify-center items-center gap-4 overflow-hidden text-[1rem]">

                                    <div className="w-1/5 h-full border-0 border-black flex justify-center items-center font-semibold">
                                        <div>Next.js</div>
                                    </div>
                                    <div className="w-1/5 h-full border-0 border-black flex justify-center items-center font-semibold">
                                        <div>Tailwind</div>
                                    </div>
                                    <div className="w-1/5 h-full border-0 border-black flex justify-center items-center font-semibold">
                                        <div>GSAP</div>
                                    </div>
                                    
                                
                            </div> */}
            </div>

            <div className="w-[75%] h-full border-0 border-white flex flex-col justify-start overflow-hidden">
                <div className="font-semibold w-full border-0 border-white text-white">Dark Template 1</div>
                <div className="font-semibold w-full border-0 border-white text-neutral-600 text-sm">Tech Stack: Next.js, Tailwind CSS</div>

                <div id="insidecard6" className={`w-full border-0 border-yellow-400 pt-4 h-0 overflow-hidden text-white flex flex-col justify-center items-start`}>
                    <div className="">Description</div>
                    <div className="font-semibold w-full border-0 border-white text-neutral-600 text-sm">This template features a dark layout with a top navigation bar, a central hero section containing a headline and call-to-action buttons, and a code editor demo at the bottom. Live link: <span className="underline transition-colors delay:100 duration:300 hover:text-[#313474]" onClick={()=>window.open("https://refrax-ai.vercel.app","_blank")}>https://refrax-ai.vercel.app</span></div>
                    <div className="w-full h-full overflow-hidden border-0 border-red-500 mt-2 bg-black mb-[3px] rounded-2xl">
                        {/* <img className="w-full h-full object-cover rounded-lg" src="./heropage2.png" alt="" /> */}

                        <LensDemoThird urlImage="/template1.png" />

                        <video src="/heropage3.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover object-bottom"/>



                    </div>
                </div>

            </div>

            <div className="w-[15%] h-16 border-0 border-white flex justify-center items-center text-neutral-500 font-semibold">3d ago</div>

        </div>

    )
}