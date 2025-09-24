"use client"
import { Info } from "lucide-react";
import Heropage from "@/components/heroPage";
import Projects from "@/components/components";
import gsap from "gsap"
import { useEffect, useState } from "react";
import Link from "next/link";
import {Moon, Sun} from "lucide-react"
import Faqs from "@/components/faqs";
import Footer from "@/components/footer";

export default function Home(){

  const [dark, setDark] = useState(false);

  useEffect(()=>{
    gsap.to("#introLeft",{
      width:0,
      duration:2,
      ease:"power2.out"
    })
    
    gsap.to("#introRight",{
      width:0,
      duration:2,
      ease:"power2.out"
    })

    // gsap.to("introText",{
    //   opacity:0,
    //   duration:2,
    // })
  },[])

  useEffect(()=>{
    if(dark){
      gsap.from("#toggle",{
        y:40,
        duration:0.5,
      })
    }
    else{
      gsap.from("#toggle",{
        y:-40,
        duration:0.5,
      })
    }
  },[dark])

  return (
        <div className={`bg-white min-h-screen w-full relative ${dark ? "dark" : "" }`}>
          <div id="introLeft" className="absolute h-full w-[50%] left-0 bg-black z-100 flex justify-center items-start pt-[20%] text-[3rem] text-white font-semibold"></div>
          <div id="introRight" className="absolute h-full w-[50%] right-0 bg-black z-100 flex justify-center items-start pt-[20%] text-[3rem] text-white font-semibold"></div>
          
          {/* <div
          className="dark:hidden absolute inset-0 z-0"
          style={{
          backgroundImage: `
          linear-gradient(to right, rgba(229,231,235,0.3) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(229,231,235,0.3) 1px, transparent 1px),
          radial-gradient(circle 500px at 50% 20%, rgba(201, 197, 197, 0.1), transparent)
          `,
          backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
          }}
          /> */}


          {/* <div id="introText" className="absolute h-full w-full bg-black z-100 flex justify-center items-start pt-[20%] text-[3rem] text-white font-semibold">Welcome to UIC</div> */}
          <Navbar dark={dark} setDark={setDark}/>
          <Heropage/>
          <Projects/>
          <Faqs/>
          <Footer/>
          {/* <div className="h-screen w-full bg-neutral-400"></div> */}
        </div>
  )
}

export function Navbar({dark,setDark}){

  function handleEnter(){
    gsap.to("#firstbutton",{
      scale:20,
      backgroundColor:"white",
      borderColor:"black",
      duration:0.8,
      delay:0,
    })

    gsap.to("#firsttext",{
      color:"black",
      duration:0.8,
      delay:0,
    })
  }
  
  function handleLeave(){
    gsap.to("#firstbutton",{
      scale:0,
      backgroundColor:"black",
      borderColor:"white",
      duration:0.8,
      delay:0
    })

    gsap.to("#firsttext",{
      color:"white",
      duration:0.8,
      delay:0,
    })
  }

  useEffect(()=>{
    gsap.to("#githublogo",{
      scale:1.1,
      duration:2,
      delay:0,
      repeat:-1,
      yoyo:true,
    })
  },[])

  return (
    <div className={`w-full fixed h-20 flex flex-row justify-between items-center p-4 z-10 gap-2 md:gap-0 ${dark ? "bg-black" : "bg-white"} md:bg-transparent`}>

      <div className="w-[80%] md:w-[22%] h-full flex flex-row justify-center item-center gap-[2px]">
        {/* transition-all delay-100 duration-300 hover:scale-95 */}
            <Link href={"/"} onMouseEnter={handleEnter} onMouseLeave={handleLeave} className="relative overflow-hidden h-full w-[24%] border-2 bg-[#010203] rounded-2xl flex justify-center items-center cursor-pointer">
              <div id="firsttext" className="text-2xl font-extrabold tracking-tighter text-white z-30">UIC</div>
              <div id="firstbutton" className="absolute top-[90%] left-[45%] w-2 h-2 bg-black z-20 rounded-t-full"></div>
            </Link>

            <div onClick={()=> window.open("https://github.com/VipulDub-Cdr/UIC","_blank")} className="h-full w-[25%] hover:bg-neutral-300 border-2 bg-[#EBEBEB] rounded-2xl flex justify-center items-center gap-[3px]  transition-width delay-100 duration-300 hover:scale-95 cursor-pointer">
              {/* <div className="text-lg text-neutral-950">Github</div> */}
              <img id="githublogo" src="https://img.icons8.com/?size=100&id=12599&format=png&color=000000" className="h-8 w-8"></img>
              {/* <Info className="stroke-black/30 h-4 w-4"/> */}
            </div>
            
              <Link href="/codes" className="h-full w-[24%] border-2 bg-[#010203] dark:bg-white rounded-2xl flex justify-center items-center  transition-all delay-100 duration-300 hover:scale-95 cursor-pointer">
                      <div className="text-lg tracking-tighter text-neutral-200 dark:text-black">Codes</div>
              </Link>

            <div className="h-full w-[24%] border-2 bg-[#010203] dark:bg-white rounded-2xl flex justify-center items-center transition-all delay-100 duration-300 hover:scale-95 cursor-pointer">
              <div className="text-lg tracking-tighter text-neutral-200 dark:text-black">FAQS</div>
            </div>
      </div>

      <button onClick={()=>{setDark(!dark)}} className="overflow-hidden flex py-2 md:py-0 w-12 h-12 border-2 border-black flex-row justify-center items-center text-white bg-[#010203] dark:bg-white rounded-2xl md:rounded-2xl transition-all delay-100 duration-300 hover:scale-95 cursor-pointer">
        <div id="toggle" className="text-[0.8rem] md:text-lg text-center">
          { dark ? <Sun className="dark:stroke-black"/> : <Moon/> }
        </div>
      </button>

    </div>
  )
}