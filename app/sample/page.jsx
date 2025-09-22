"use client"
import { useEffect, useState } from "react"

export default function Sample(){

    const [expandBar1, setexpandBar1] = useState(false);

    return (
        <div className="h-full w-full flex flex-col justify-center items-center text-3xl bg-white pt-[10%]">

            <div className={`w-28 h-10 border-2 border-black relative overflow-hidden z-0 flex flex-row flex-start items-start transition-all delay-100 duration-900 ${expandBar1 ? "rounded-t-sm border-b-0" : "rounded-sm"}`}>

                <button onClick={()=> setexpandBar1(!expandBar1)} className={`h-full w-full ${expandBar1 ? "bg-white text-black" : "bg-black text-white"} cursor-pointer border-0 border-white flex flex-row items-center justify-center text-xl px-2 transition-all delay-100 duration-500`}><div>Home</div></button>
                
            
            </div>
            <div className={`h-26 w-28 scale-y-0 origin-top bg-white border-2 border-t-0 border-black rounded-b-sm transition-all delay-100 duration-400 flex flex-col justify-center items-center text-black text-lg px-0 ${expandBar1 ? " scale-y-100" : " "}`}>
                <div className="w-full h-full border-b-2 border-neutral-400 cursor-pointer transition-colors delay-100 duration-300 hover:bg-black hover:text-white text-center">Content 1</div>
                <div className="w-full h-full border-b-2 border-neutral-400 cursor-pointer transition-colors delay-100 duration-300 hover:bg-black hover:text-white text-center">Content 1</div>
                <div className="w-full h-full border-b-0 border-neutral-400 cursor-pointer transition-colors delay-100 duration-300 hover:bg-black hover:text-white text-center">Content 1</div>
            </div>

        </div>
    )
}