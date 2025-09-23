"use client"
import { useState, useEffect } from "react";
import gsap from "gsap";
import { LensDemoThird } from "@/components/imageLens.jsx";

export default function Darkbg2() {

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
            <div className="relative w-[25%] md:w-[10%] h-15 bg-radial-[at_50%_1px] from-white/20 to-black text-white rounded-2xl inset-shadow-sm inset-shadow-black/70 overflow-hidden flex justify-around items-center">

            </div>

            <div className="w-[75%] h-full border-0 border-white flex flex-col justify-start overflow-hidden">
                <div className="font-semibold w-full border-0 border-white text-white">SpotLight</div>
                <div className="font-semibold w-full border-0 border-white text-neutral-600 text-sm">Tech Stack: JSX, Tailwind CSS</div>

                <div id="insidecard9" className={`w-full border-0 border-yellow-400 pt-4 h-0 overflow-hidden text-white flex flex-col justify-center items-start`}>
                    <div className="">Description</div>
                    <div className="font-semibold w-full border-0 border-white text-neutral-600 text-sm">This design features a full-screen layout with a centered hero section. The heading is prominently centered, with supporting content stacked vertically below it. Navigation elements are fixed at the top, and interactive buttons or cards are positioned below the main content.</div>
                    <div className="relative w-full h-full overflow-hidden border-2 border-white/10 mt-2 bg-radial-[at_50%_10px] from-white/15 to-black rounded-2xl flex justify-around items-center">
                        {/* <img className="w-full h-full object-cover rounded-lg" src="./heropage2.png" alt="" /> */}

                        <div className=" h-full w-[1px] bg-neutral-900/18"></div>
                        <div className=" h-full w-[1px] bg-neutral-900/18"></div>
                        <div className=" h-full w-[1px] bg-neutral-900/18"></div>
                        <div className=" h-full w-[1px] bg-neutral-900/18"></div>
                        <div className=" h-full w-[1px] bg-neutral-900/18"></div>
                        <div className=" h-full w-[1px] bg-neutral-900/18"></div>
                        <div className=" h-full w-[1px] bg-neutral-900/18"></div>
                        <div className=" h-full w-[1px] bg-neutral-900/18"></div>
                        <div className=" h-full w-[1px] bg-neutral-900/18"></div>
                        <div className=" h-full w-[1px] bg-neutral-900/18"></div>
                        <div className=" h-full w-[1px] bg-neutral-900/18"></div>
                        <div className=" h-full w-[1px] bg-neutral-900/18"></div>
                        <div className=" h-full w-[1px] bg-neutral-900/18"></div>

                        <div className=" absolute top-10 h-[2px] w-full bg-neutral-900/18"></div>
                        <div className=" absolute top-20 h-[2px] w-full bg-neutral-900/18"></div>
                        <div className=" absolute top-30 h-[2px] w-full bg-neutral-900/18"></div>
                        <div className=" absolute top-40 h-[2px] w-full bg-neutral-900/18"></div>
                        <div className=" absolute top-50 h-[2px] w-full bg-neutral-900/18"></div>
                        <div className=" absolute top-60 h-[2px] w-full bg-neutral-900/18"></div>
                        <div className=" absolute top-70 h-[2px] w-full bg-neutral-900/18"></div>
                        <div className=" absolute top-80 h-[2px] w-full bg-neutral-900/18"></div>

                        {/* <video src="/heropage3.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover object-bottom"/> */}

                    </div>
                </div>

            </div>

            <div className="w-[15%] h-16 border-0 border-white flex justify-center items-center text-neutral-500 font-semibold">3d ago</div>

        </div>

    )
}