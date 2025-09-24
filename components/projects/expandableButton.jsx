"use client"
import { useState, useEffect } from "react";
import gsap from "gsap";
import {LensDemoThird} from "@/components/imageLens.jsx";
export default function Project7() {

    const [card7Expand, setcard7Expand] = useState(false);
    const [expandBar1, setexpandBar1] = useState(false);

    useEffect(() => {
        gsap.from("#card7", {
            y: 40,
            opacity: 1,
            duration: 2,
            delay: 1,
            scrollTrigger: {
                trigger: "#card7",
                start: "top bottom",
                end: "top 20%",
                scrub: 3,
                markers: false
            },
        })

    }, [])

    useEffect(() => {
        if (card7Expand) {
            gsap.to("#card7, #insidecard7", {
                height: 450,
                duration: 2,
                delay: 0,
            })
            gsap.to("#insidecard7", {
                opacity: 1,
                duration: 1,
                delay: 0,
            })
        }
        else {
            gsap.to("#card7", {
                height: 85,
                duration: 1,
                delay: 0,
            })
            gsap.to("#insidecard7", {
                height: 0,
                opacity: 0,
                duration: 1,
                delay: 0,
            })
        }
    }, [card7Expand])

    // useEffect(()=>{
    //     gsap.to("#dropdown",{
    //         scaleY:20,
    //         duration:2,
    //         repeat:-1,
    //         yoyo:true,
    //     })
    // },[])


    return (

        <div onClick={() => setcard7Expand(!card7Expand)} id="card7" className="relative ring-2 ring-neutral-400 inset-shadow-sm inset-shadow-neutral-500 cursor-pointer hover:bg-neutral-950 w-full h-20 rounded-3xl border-2 border-neutral-700 p-2 flex flex-row justify-center items-start gap-2 bg-black shadow-lg shadow-neutral-400 dark:shadow-neutral-900  dark:inset-shadow-neutral-700">
            {/* flex justify-center items-center */}
            <div className="relative w-[25%] md:w-[10%] h-15 bg-white text-white rounded-2xl inset-shadow-sm inset-shadow-black/70 overflow-hidden flex justify-center items-center">


                <div id="dropdown" className="mx-4 w-full h-full border-l-2 border-r-2 border-white ring-2 ring-black bg-black/95"></div>

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
                <div className="font-semibold w-full border-0 border-white text-white">Drop-Down Button</div>
                <div className="font-semibold w-full border-0 border-white text-neutral-600 text-sm">Tech Stack: Next.js, Tailwind CSS</div>

                <div id="insidecard7" className={`w-full border-0 border-yellow-400 pt-4 h-0 overflow-hidden text-white flex flex-col justify-center items-start`}>
                    <div className="">Description</div>
                    <div className="font-semibold w-full border-0 border-white text-neutral-600 text-sm">This design features a sleek dropdown button with smooth expand animation. On click, options slide down with rounded edges and subtle shadows. The dark backdrop with soft highlights creates a modern, interactive feel.</div>
                    <div className="w-full h-full overflow-hidden border-0 border-red-500 mt-2 bg-black mb-[3px] rounded-2xl">


                        {/* <LensDemoThird urlImage="/template1.png" /> */}

                        <video src="/expandableButton.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover object-center"/>



                    </div>
                </div>

            </div>

            <div className="w-[15%] h-16 border-0 border-white flex justify-center items-center text-neutral-500 font-semibold">3d ago</div>

        </div>

    )
}