"use client"
import gsap from "gsap"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Marquee from "react-fast-marquee"
import { ArrowRight } from "lucide-react"
import Project1 from "./projects/heropage1"
import Project2 from "./projects/heropage2"
import Project3 from "./projects/metallicButton1"
import Project4 from "./projects/swipebutton"
import Project5 from "./projects/heropage3"
import Project6 from "./projects/template1"
import Project7 from "./projects/expandableButton"
import Darkbg1 from "./projects/darkbg1"
import Darkbg2 from "./projects/darkbg2"
import Project9 from "./projects/heropage4"

// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

export default function Projects() {

    const router = useRouter();

    const [hero, setHero] = useState(true);
    const [buttons, setButtons] = useState(false);
    const [templates, setTemplates] = useState(false);
    const [backgrounds, setBackgrounds] = useState(false);

    const heroList = [Project1, Project2, Project5, Project9];
    const buttonList = [Project3, Project4, Project7];
    const templateList = [Project6];
    const backgroundList = [Darkbg1, Darkbg2];


    const blackTailwind = " text-white bg-black ring-2 ring-neutral-400 border-2 border-neutral-800 inset-shadow-sm inset-shadow-neutral-600"
    const whiteTailwind = " text-black font-semibold bg-white ring-2 ring-neutral-400 border-2 border-neutral-200 inset-shadow-sm inset-shadow-neutral-400 "

    useEffect(()=>{
        gsap.from("#contents",{
            y:15,
            opacity:0,
            duration:0.7,
            delay:0,
        })
    },[hero, buttons, templates, backgrounds])

    return (
        <div id="comps" className="w-full h-full pb-20 border-0 border-red-500 flex flex-col justify-start items-center bg-white relative overflow-hidden dark:bg-black">

            <div id="background2" className="absolute w-full h-full top-[30%] left-[50%] rounded-t-full"></div>

            <div className="w-[90%] md:w-[45%] border-0 border-black h-12 flex flex-row justify-center items-center gap-2 pt-2">
                <div onClick={()=>{setHero(true); setButtons(false); setTemplates(false); setBackgrounds(false)}} className={`w-1/4 md:w-1/6 text-[0.7rem] md:text-[1rem] h-full rounded-3xl flex justify-center items-center cursor-pointer transition-all delay-100 duration-300 ${hero ? whiteTailwind : blackTailwind}`}>Hero Pages</div>
                <div onClick={()=>{setButtons(true);setHero(false);setTemplates(false); setBackgrounds(false)}} className={`w-1/4 md:w-1/6 text-[0.7rem] md:text-[1rem] h-full rounded-3xl flex justify-center items-center cursor-pointer transition-all delay-100 duration-300 ${buttons ? whiteTailwind : blackTailwind}`}>Buttons</div>
                <div onClick={()=>{setTemplates(true);setButtons(false);setHero(false); setBackgrounds(false)}} className={`w-1/4 md:w-1/6 text-[0.7rem] md:text-[1rem] h-full rounded-3xl flex justify-center items-center cursor-pointer transition-all delay-100 duration-300 ${templates ? whiteTailwind : blackTailwind}`}>Templates</div>
                <div onClick={()=>{setBackgrounds(true);setHero(false); setButtons(false); setTemplates(false);}} className={`w-1/4 md:w-1/6 text-[0.7rem] md:text-[1rem] h-full rounded-3xl flex justify-center items-center cursor-pointer transition-all delay-100 duration-300 ${backgrounds ? whiteTailwind : blackTailwind}`}>Backgrounds</div>
            </div>

            <div id="contents" className="w-[90%] md:w-[45%] h-full border-0 border-black flex flex-col justify-start items-center gap-2 py-2">
                    {hero ? (heroList.length==0 ? <NoComponents/> : heroList.map((Comp,index)=>{
                            return <Comp key={index}/>
                    }) ): null}

                    {templates ? (templateList.length==0 ? <NoComponents/> : templateList.map((Comp,index)=>{
                            return <Comp key={index}/>
                    }) ): null}

                    {buttons ? (buttonList.length==0 ? <NoComponents/> : buttonList.map((Comp,index)=>{
                            return <Comp key={index}/>
                    }) ): null}

                    {backgrounds ? (backgroundList.length==0 ? <NoComponents/> : backgroundList.map((Comp,index)=>{
                            return <Comp key={index}/>
                    }) ): null}
            </div>
        </div>
    )
}

function NoComponents({section}){

    return (
        <div className="w-full h-20 text-xl text-black font-medium pt-10 dark:text-white flex justify-center items-center border-0 border-black">
                <div>Coming Soon...</div>            
        </div>
    )
}

function Card({ url, heading, technologies }) {


    return (
        <div id="card" className="w-full h-20 rounded-3xl border-2 border-black p-2 flex flex-row justify-center items-center gap-2 bg-black shadow-lg shadow-neutral-400">
            <div className="w-[10%] h-full bg-orange-600 rounded-2xl"></div>
            <div className="w-[75%] h-full border-0 border-white flex flex-col justify-start">
                <div className="font-semibold w-full border-0 border-white">Lorem, ipsum dolor.</div>
                <div className="font-semibold w-full border-0 border-white text-neutral-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
            </div>
            <div className="w-[15%] h-full border-0 border-white flex justify-center items-center text-neutral-500 font-semibold">3d ago</div>
        </div>
    )
}