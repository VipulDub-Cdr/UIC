import { useState, useEffect } from "react";
import gsap from "gsap";
import {LensDemoThird} from "@/components/imageLens";

export default function Project1(){

    const [card1Expand,setcard1Expand] = useState(false);

    useEffect(() => {
        gsap.from("#card1", {
            y: 40,
            opacity: 1,
            duration: 2,
            delay: 1,
            scrollTrigger: {
                trigger: "#card1",
                start: "top bottom",
                end: "top 20%",
                scrub: 3,
                markers: false
            },
        })

    }, [])

    useEffect(()=>{
        if(card1Expand){
            gsap.to("#card1, #insidecard1",{
                height:450,
                duration:2,
                delay:0,
            })
            gsap.to("#insidecard1",{
                opacity:1,
                duration:1,
                delay:0,
            })
        }
        else{
            gsap.to("#card1",{
                height:85,
                duration:1,
                delay:0,
            })
            gsap.to("#insidecard1",{
                height:0,
                opacity:0,
                duration:1,
                delay:0,
            })
        }
    },[card1Expand])


    return (

        <div onClick={()=>setcard1Expand(!card1Expand)} id="card1" className="relative ring-2 ring-neutral-400 inset-shadow-sm inset-shadow-neutral-500 cursor-pointer hover:bg-neutral-950 w-full h-20 rounded-3xl border-2 border-neutral-700 p-2 flex flex-row justify-center items-start gap-2 bg-black shadow-lg shadow-neutral-400 dark:shadow-neutral-900  dark:inset-shadow-neutral-700">
                    {/* flex justify-center items-center */}
                    <div className="w-[25%] md:w-[10%] h-15 bg-white text-white rounded-2xl inset-shadow-sm inset-shadow-black/70 overflow-hidden">
                            

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
                        <div className="font-semibold w-full border-0 border-white text-white">Centered Hero Layout</div>
                        <div className="font-semibold w-full border-0 border-white text-neutral-600 text-sm">Tech Stack: JSX, Tailwind CSS</div>
                        
                        <div id="insidecard1" className={`w-full border-0 border-yellow-400 pt-4 h-0 overflow-hidden text-white flex flex-col justify-center items-start`}>
                            <div className="">Description</div>
                            <div className="font-semibold w-full border-0 border-white text-neutral-600 text-sm">This design features a full-screen layout with a centered hero section. The heading is prominently centered, with supporting content stacked vertically below it. Navigation elements are fixed at the top, and interactive buttons or cards are positioned below the main content.</div>
                            
                            <div className="w-full h-full rounded-2xl overflow-hidden border-0 border-red-500 mt-2 bg-black mb-[3px]">
                                <LensDemoThird urlImage="/heropage1.png"/>
                            </div>

                        </div>

                    </div>
                    
                    <div className="w-[15%] h-16 border-0 border-white flex justify-center items-center text-neutral-500 font-semibold">3d ago</div>
                
                </div>  

    )
}