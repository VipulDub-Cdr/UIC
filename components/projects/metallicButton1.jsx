import { useState, useEffect } from "react";
import gsap from "gsap";

export default function Project3() {

    const [card3Expand, setcard3Expand] = useState(false);

    useEffect(() => {
        gsap.from("#card3", {
            y: 40,
            opacity: 1,
            duration: 2,
            delay: 1,
            scrollTrigger: {
                trigger: "#card3",
                start: "top bottom",
                end: "top 20%",
                scrub: 3,
                markers: false
            },
        })

    }, [])

    useEffect(() => {
        if (card3Expand) {
            gsap.to("#card3, #insidecard3", {
                height: 450,
                duration: 2,
                delay: 0,
            })
            gsap.to("#insidecard3", {
                opacity: 1,
                duration: 1,
                delay: 0,
            })
        }
        else {
            gsap.to("#card3", {
                height: 85,
                duration: 1,
                delay: 0,
            })
            gsap.to("#insidecard3", {
                height: 0,
                opacity: 0,
                duration: 1,
                delay: 0,
            })
        }
    }, [card3Expand])


    return (

        <div onClick={() => setcard3Expand(!card3Expand)} id="card3" className="relative ring-2 ring-neutral-400 inset-shadow-sm inset-shadow-neutral-500 cursor-pointer hover:bg-neutral-950 w-full h-20 rounded-3xl border-2 border-neutral-700 p-2 flex flex-row justify-center items-start gap-2 bg-black shadow-lg shadow-neutral-400 dark:shadow-neutral-900  dark:inset-shadow-neutral-700">
            {/* flex justify-center items-center */}
            <div className="relative w-[25%] md:w-[10%] h-15 bg-[#688273] text-white rounded-2xl inset-shadow-sm inset-shadow-black/60 overflow-hidden flex justify-center items-end">

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
                <div className="font-semibold w-full border-0 border-white text-white">Metallic Navbar 1</div>
                <div className="font-semibold w-full border-0 border-white text-neutral-600 text-sm">Tech Stack: JSX, Tailwind CSS</div>

                <div id="insidecard3" className={`w-full border-0 border-yellow-400 pt-4 h-0 overflow-hidden text-white flex flex-col justify-center items-start`}>
                    <div className="">Description</div>
                    <div className="font-semibold w-full border-0 border-white text-neutral-600 text-sm">This design features a full-screen layout with a centered hero section. The heading is prominently centered, with supporting content stacked vertically below it. Navigation elements are fixed at the top, and interactive buttons or cards are positioned below the main content.</div>
                    <div className="w-full h-full rounded-xl overflow-hidden border-0 border-red-500 mt-2 bg-white mb-[3px] flex justify-center items-center">
                        {/* <img className="w-full h-full object-cover rounded-lg" src="./metallicButton1.png" alt="" /> */}

                        <div className="flex h-14 md:w-[73%] p-2 md:p-0 items-center justify-start rounded-full border-2 border-black/10 bg-green-950/60 shadow-md/10 inset-shadow-2xs inset-ring-2 inset-shadow-white inset-ring-neutral-400">
                            <div className="relative z-100 md:ml-2 flex h-10 w-18 cursor-pointer items-center justify-center rounded-full border-2 border-white bg-white text-[0.8rem] text-black/60 shadow-md/30 inset-shadow-sm inset-ring-2 inset-shadow-neutral-400 inset-ring-neutral-300 transition-all delay-100 duration-300 hover:bg-black/30 hover:text-white hover:inset-shadow-white">
                                <div className="z-10 font-semibold hover:text-white">Home</div>
                            </div>
                            <div className="hidden md:flex relative z-100 ml-2 h-10 w-18 cursor-pointer items-center justify-center rounded-full border-2 border-white bg-white text-[0.8rem] text-black/60 shadow-md/30 inset-shadow-sm inset-ring-2 inset-shadow-neutral-400 inset-ring-neutral-300 transition-all delay-100 duration-300 hover:bg-black/30 hover:text-white hover:inset-shadow-white">
                                <div className="z-10 font-semibold hover:text-white">Services</div>
                            </div>
                            <div className="hidden md:flex relative z-100 ml-2 h-10 w-18 cursor-pointer items-center justify-center rounded-full border-2 border-white bg-white text-[0.8rem] text-black/60 shadow-md/30 inset-shadow-sm inset-ring-2 inset-shadow-neutral-400 inset-ring-neutral-300 transition-all delay-100 duration-300 hover:bg-black/30 hover:text-white hover:inset-shadow-white">
                                <div className="z-10 font-semibold hover:text-white">Products</div>
                            </div>
                            <div className="hidden md:flex relative z-100 ml-2 h-10 w-18 cursor-pointer items-center justify-center rounded-full border-2 border-white bg-white text-[0.8rem] text-black/60 shadow-md/30 inset-shadow-sm inset-ring-2 inset-shadow-neutral-400 inset-ring-neutral-300 transition-all delay-100 duration-300 hover:bg-black/30 hover:text-white hover:inset-shadow-white">
                                <div className="z-10 font-semibold hover:text-white">Pricing</div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <div className="w-[15%] h-16 border-0 border-white flex justify-center items-center text-neutral-500 font-semibold">3d ago</div>

        </div>

    )
}