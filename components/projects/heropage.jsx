"use client"
import { useState, useEffect } from "react";
import gsap from "gsap";
import {LensDemoThird} from "@/components/imageLens.jsx";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ['latin'],
    weight: ["400"]
})

export default function Project9() {

    const [card9Expand, setcard9Expand] = useState(false);

    useEffect(() => {
        gsap.from("#card9", {
            y: 40,
            opacity: 1,
            duration: 2,
            delay: 1,
            scrollTrigger: {
                trigger: "#card9",
                start: "top bottom",
                end: "top 20%",
                scrub: 3,
                markers: false
            },
        })

    }, [])

    useEffect(() => {
        if (card9Expand) {
            gsap.to("#card9, #insidecard9", {
                height: 450,
                duration: 2,
                delay: 0,
            })
            gsap.to("#insidecard9", {
                opacity: 1,
                duration: 1,
                delay: 0,
            })
        }
        else {
            gsap.to("#card9", {
                height: 85,
                duration: 1,
                delay: 0,
            })
            gsap.to("#insidecard9", {
                height: 0,
                opacity: 0,
                duration: 1,
                delay: 0,
            })
        }
    }, [card9Expand])


    return (

        <div onClick={() => setcard9Expand(!card9Expand)} id="card9" className="relative ring-2 ring-neutral-400 inset-shadow-sm inset-shadow-neutral-500 cursor-pointer hover:bg-neutral-950 w-full h-20 rounded-3xl border-2 border-neutral-700 p-2 flex flex-row justify-center items-start gap-2 bg-black shadow-lg shadow-neutral-400 dark:shadow-neutral-900  dark:inset-shadow-neutral-700">
            {/* flex justify-center items-center */}
            <div className="relative w-[25%] md:w-[10%] h-15 bg-white text-white rounded-2xl inset-shadow-sm inset-shadow-black/70 overflow-hidden flex justify-center items-center">

                <div className={`w-full h-full ${poppins.className} text-black text-[2rem] flex justify-center items-center p-2`}>
                    <div className="text-shadow-neutral-400 text-shadow-sm">a</div>
                </div>

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
                <div className="font-semibold w-full border-0 border-white text-white">Poppins Hero Layout</div>
                <div className="font-semibold w-full border-0 border-white text-neutral-600 text-sm">Tech Stack: JSX, Tailwind CSS</div>

                <div id="insidecard9" className={`w-full border-0 border-yellow-400 pt-4 h-0 overflow-hidden text-white flex flex-col justify-center items-start`}>
                    <div className="">Description</div>
                    <div className="font-semibold w-full border-0 border-white text-neutral-600 text-sm">This design presents a clean layout with balanced spacing. The hero content is centered on the left, while a smooth, rounded card styled in dark purple rests on the right. Navigation remains fixed at the top, with supporting text and interactive elements arranged neatly below the main content.</div>
                    <div className="w-full h-full overflow-hidden border-0 border-red-500 mt-2 bg-black mb-[3px] rounded-2xl">
                        {/* <img className="w-full h-full object-cover rounded-lg" src="./heropage2.png" alt="" /> */}

                        <LensDemoThird urlImage="/heropage4.png" />

                        {/* <video src="/heropage3.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover object-bottom"/> */}



                    </div>
                </div>

            </div>

            <div className="w-[15%] h-16 border-0 border-white flex justify-center items-center text-neutral-500 font-semibold">3d ago</div>

        </div>

    )
}