"use client"
import { useEffect, useState } from "react"

export default function Sample(){

    const [expandBar1, setexpandBar1] = useState(false);

    return (
        <div className="h-full w-screen flex flex-col justify-center items-center text-3xl bg-white">

            <div className="w-90 h-10 border-2 border-black relative overflow-hidden z-0 flex flex-start items-start">

                <button onClick={()=> setexpandBar1(!expandBar1)} className="h-full w-full bg-black text-white text-sm cursor-pointer">Click to expand the bar below</button>
                
            
            </div>
            <div className={`h-30 scale-y-0 origin-top w-90 bg-black transition-all delay-100 duration-400 flex flex-col justify-center items-center text-white text-2xl ${expandBar1 ? " scale-y-100" : " "}`}>
                <div>Content 1</div>
                <div>Content 2</div>
                <div>Content 3</div>
            </div>

        </div>
    )
}