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

// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

export default function Projects() {

    const router = useRouter();


    return (
        <div className="w-full h-[130vh] border-0 border-red-500 flex justify-center items-start bg-white relative overflow-hidden dark:bg-black">

            <div id="background2" className="absolute w-full h-full top-[30%] left-[50%] rounded-t-full"></div>

            <div className="w-[90%] md:w-[45%] h-full border-0 border-black flex flex-col justify-start items-center gap-2 py-2">
                    <Project1/>
                    <Project2/>
                    <Project3/>
                    <Project4/>
                    <Project5/>
            </div>
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