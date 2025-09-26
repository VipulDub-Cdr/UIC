"use client"
import { useState, useEffect } from "react";
import gsap from "gsap";
import { LensDemoThird } from "@/components/imageLens.jsx";
import { Moon, Sun, LaptopMinimal } from "lucide-react";
export default function Project10() {

    const [card10Expand, setcard10Expand] = useState(false);


    useEffect(() => {
        gsap.from("#card10", {
            y: 40,
            opacity: 1,
            duration: 2,
            delay: 1,
            scrollTrigger: {
                trigger: "#card10",
                start: "top bottom",
                end: "top 20%",
                scrub: 3,
                markers: false
            },
        })

    }, [])

    useEffect(() => {
        if (card10Expand) {
            gsap.to("#card10, #insidecard10", {
                height: 450,
                duration: 2,
                delay: 0,
            })
            gsap.to("#insidecard10", {
                opacity: 1,
                duration: 1,
                delay: 0,
            })
        }
        else {
            gsap.to("#card10", {
                height: 85,
                duration: 1,
                delay: 0,
            })
            gsap.to("#insidecard10", {
                height: 0,
                opacity: 0,
                duration: 1,
                delay: 0,
            })
        }
    }, [card10Expand])

    function handleEnter() {
        gsap.to("#samplefirstButton", {
            scale: 20,
            backgroundColor: "#FF983B",
            borderColor: "black",
            duration: 0.8,
            delay: 0,
        })

        gsap.to("#samplefirstText", {
            color: "black",
            duration: 0.8,
            delay: 0,
        })
    }

    function handleLeave() {
        gsap.to("#samplefirstButton", {
            scale: 0,
            backgroundColor: "black",
            borderColor: "white",
            duration: 0.8,
            delay: 0
        })

        gsap.to("#samplefirstText", {
            color: "white",
            duration: 0.8,
            delay: 0,
        })
    }


    return (

        <div onClick={() => setcard10Expand(!card10Expand)} id="card10" className="relative ring-2 ring-neutral-400 inset-shadow-sm inset-shadow-neutral-500 cursor-pointer hover:bg-neutral-950 w-full h-20 rounded-3xl border-2 border-neutral-700 p-2 flex flex-row justify-center items-start gap-2 bg-black shadow-lg shadow-neutral-400 dark:shadow-neutral-900  dark:inset-shadow-neutral-700">
            {/* flex justify-center items-center bg-radial-[at_50%_99%] from-white to-yellow-500*/}
            <div className="relative w-[25%] md:w-[10%] h-15 bg-neutral-100 dark:bg-black text-white rounded-2xl inset-shadow-sm inset-shadow-black/60 overflow-hidden flex justify-center items-center">

                
                <Sun className="stroke-black"/>

            </div>

            <div className="w-[75%] h-full border-0 border-white flex flex-col justify-start overflow-hidden">
                <div className="font-semibold w-full border-0 border-white text-white">Toggle Button</div>
                <div className="font-semibold w-full border-0 border-white text-neutral-600 text-sm">Tech Stack: JSX, Tailwind CSS</div>

                <div id="insidecard10" className={`w-full border-0 border-yellow-400 pt-4 h-0 overflow-hidden text-white flex flex-col justify-center items-start`}>
                    <div className="">Description</div>
                    <div className="font-semibold w-full border-0 border-white text-neutral-600 text-sm">This design introduces a unique button with a sunrise animation. As users scroll or interact, a glowing orb rises smoothly from the bottom, mimicking the morning sun. The light background enhances contrast, while the motion adds a warm, natural feel to the button.</div>
                    <div className="w-full h-full overflow-hidden border-0 border-red-500 mt-2 bg-white mb-[3px] rounded-2xl flex justify-center items-center gap-10">
                        {/* <img className="w-full h-full object-cover rounded-lg" src="./heropage2.png" alt="" /> */}

                        <div className="w-30 md:w-24 border-2 dark:border-neutral-500 rounded-lg flex justify-center items-center gap-2 px-[4px] py-[4px] bg-teal-500 dark:bg-transparent overflow-hidden">
                            <Sun id="sun" className={`p-[3px] rounded-sm bg-white stroke-black `} />
                            <Moon id="moon" className={`p-[3px] `} />
                            <LaptopMinimal className={`p-[3px]`}/>
                        </div>
                        <div className="w-30 md:w-24 border-2 border-neutral-500 rounded-lg flex justify-center items-center gap-2 px-[4px] py-[4px] bg-black overflow-hidden">
                            <Sun id="sun" className={`p-[3px] `} />
                            <Moon id="moon" className={`p-[3px] bg-white stroke-black rounded-sm `} />
                            <LaptopMinimal className={`p-[3px]`}/>
                        </div>

                    </div>
                </div>

            </div>

            <div className="w-[15%] h-16 border-0 border-white flex justify-center items-center text-neutral-500 font-semibold">3d ago</div>

        </div>

    )
}