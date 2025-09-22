"use client"
import { useState, useEffect } from "react"
import { Navbar } from "../page"
import gsap from "gsap";
// heading , tags array,  codeString

export default function Codes(){

    const [dark, setDark] = useState(false);

     useEffect(()=>{
        gsap.to("#introCodesLeft",{
          width:0,
          duration:2,
          ease:"power2.out"
        })
        
        gsap.to("#introCodesRight",{
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
      gsap.from("#toggle",{
          y:40,
          duration:0.5,
      })
    },[dark])

    return (
        <div className={`relative w-full h-full text-3xl text-black flex flex-col justify-start items-center ${dark ? "bg-black" : "bg-white"}`}>

          <div id="introCodesLeft" className="absolute h-full w-[50%] left-0 bg-black z-100 flex justify-center items-start pt-[20%] text-[3rem] text-white font-semibold "></div>
          <div id="introCodesRight" className="absolute h-full w-[50%] right-0 bg-black z-100 flex justify-center items-start pt-[20%] text-[3rem] text-white font-semibold"></div>

            <Navbar dark={dark} setDark={setDark}/>

            <div className="w-full h-full mt-20 md:mt-0 border-0 border-black flex flex-col justify-center items-center">

                <Box heading="Centered Hero Layout" tags={["JSX", "Tailwind CSS"]} codeString={`<div class="flex h-screen w-screen flex-row items-center justify-center">
  <!-- navbar -->
  <div class="fixed top-0 left-0 flex h-full w-full flex-row items-start justify-between p-3 text-lg font-semibold">
    <div>Logo</div>
    <div class="flex flex-row items-center justify-between gap-4">
      <div class="collapse text-yellow-400 md:visible">Premium</div>
      <div>Register</div>
      <div class="rounded-xl border-1 border-black px-4">Sign in</div>
    </div>
  </div>

  <div class="mt-20 flex flex-col items-center justify-center gap-2 p-1">
    <div class="rounded-full border-1 border-red-500 bg-red-500 p-1 px-2 font-medium text-white">Product hunt</div>
    <div class="px-10 text-center text-4xl font-semibold">Intelligent Code Formatter That Mirrors Your Personal Style</div>
    <div class="px-[15%] text-center font-medium text-neutral-600">Refrax AI intelligently reformats your code to match your unique coding style, preserving your logic and personal programming patterns.</div>
    <div class="my-2 rounded-full border-1 border-neutral-500 p-1 px-3 py-1 font-medium text-black">Get Started</div>
    <div class="mt-10 flex h-[37vh] w-[80%] flex-col rounded-t-xl border-1 border-t-10 border-r-10 border-l-10 border-neutral-700/30 bg-neutral-950">
      <div class="flex flex-row justify-start gap-2 p-2">
        <div class="rounded-full border-1 border-blue-400 p-1 px-2 text-[0.7rem] text-white">Log out</div>
        <div class="rounded-full border-1 border-blue-400 p-1 text-[0.7rem] text-white">Get Started</div>
      </div>
      <div class="flex h-full w-full flex-row">
        <div class="flex h-full w-full flex-col items-center justify-center">
          <div class="mt-10 px-7 text-center text-3xl font-semibold text-white">ReFrax AI</div>
          <div class="text-center text-sm font-semibold text-neutral-400">Reshapes your code effortlessly!</div>
        </div>
        <div class="h-full w-full bg-neutral-900 p-2 overflow-hidden text-white font-normal text-[0.7rem]">
            <pre>
<code>function fxn(candidate){
  istrue = true;
  for(var i = 2; i < candidate && isPrime; i++){
    if(candidate%i === 0){
      int x = 10;  
  }
  for(let i = 0;i<10;i++){
  </code>
            </pre>
        </div>
      </div>
    </div>
  </div>
</div>

            `}/>
            <Box heading="Centered Hero Layout 2" tags={["JSX", "Tailwind CSS"]} codeString={`<div class="flex h-screen w-screen flex-col items-center justify-center bg-[#131313]">
  <div class="flex h-[40%] w-full flex-col items-center justify-center gap-4">
    <div class="absolute md:top-[10.5%] md:left-[35%] top-[7.5%] left-[22%] w-30 h-[0.1rem] bg-gradient-to-r from-bg-neutral-950/40 to-neutral-600">
    </div>
    <div class="absolute md:top-[10.5%] md:right-[35%] top-[7.5%] right-[22%] w-30 h-[0.1rem] bg-gradient-to-l from-bg-neutral-950/40 to-neutral-600">
    </div>
    <button class="w-40 h-8 border-2 border-neutral-700 rounded-full text-[0.8rem] text-white inset-shadow-sm ring-2 ring-neutral-800 bg-gradient-to-br from-zinc-800 to-zinc-950">Simplify your workflow
    </button>
    <div class="w-[80%] text-center text-[3rem]/12 tracking-wide text-neutral-200 font-light">Enhance your financial control with Nexio</div>
    <button class="cursor-pointer rounded-2xl border-2 border-white px-4 py-1 font-semibold text-white transition-colors delay-100 duration-200 hover:bg-white hover:text-black text-[0.8rem]">Get Started</button>
  </div>
  <div class="relative h-[60%] w-full md:w-[55%]">
    <div class="absolute h-full w-full rounded-t-full bg-[#37272C]/40"></div>
    <div class="absolute top-[10%] left-[5%] h-[90%] w-[90%] rounded-t-full bg-[#EF8AB6] inset-shadow-sm"></div>
    <div class="absolute top-[20%] left-[10%] h-[80%] w-[80%] rounded-t-full bg-[#C15D89] inset-shadow-sm"></div>
    <div class="absolute top-[30%] left-[15%] h-[70%] w-[70%] rounded-t-full bg-[#252525] inset-shadow-sm"></div>
    <div class="absolute top-[40%] left-[20%] h-[60%] w-[60%] rounded-t-full bg-[#191919] inset-shadow-sm "></div>
    <div class="absolute top-[15%] left-[68%] h-[30%] w-[28%] rounded-xl bg-[#131313]/90 ring-8 ring-neutral-400/30"></div>
    <div class="absolute top-[30%] left-[5%] h-[17%] w-[17%] rounded-xl bg-[#131313]/90 ring-8 ring-neutral-400/30"></div>
    <div class="absolute top-[65%] left-[30%] h-[35%] w-[40%] rounded-2xl bg-[#131313]/90 border-12 border-neutral-400/20"></div>
    <div class="absolute top-[50%] h-[50%] w-full bg-linear-to-t from-[#131313] to-[#232222]/0"></div>
  </div>
</div>

<div class="h-[30vh] w-screen px-[20%] bg-[#131313] flex flex-row justify-center items-center gap-4">
  <button class="text-white border-t-2 ring-2 ring-neutral-700 border-neutral-400/60 px-4 py-2 flex flex-row rounded-2xl items-center justify-center">
    <div class="text-center font-semibold">Logoipsum</div></button>
  <button class="text-white border-t-2 ring-2 ring-neutral-700 border-neutral-400/60 px-4 py-2 flex flex-row rounded-2xl items-center justify-center">
    <div class="text-center font-semibold">Logoipsum</div></button>
  <button class="text-white border-t-2 ring-2 ring-neutral-700 border-neutral-400/60 px-4 py-2 flex flex-row rounded-2xl items-center justify-center">
    <div class="text-center font-semibold">Logoipsum</div></button>
  <button class="text-white border-t-2 ring-2 ring-neutral-700 border-neutral-400/60 px-4 py-2 flex flex-row rounded-2xl items-center justify-center">
    <div class="text-center font-semibold">Logoipsum</div></button>
</div>`}/>

              <Box heading="Metallic Navbar 1" tags={["JSX", "Tailwind CSS"]} codeString={`<div class="flex h-screen w-screen items-center justify-center">
  <div class="flex h-14 w-[46%] items-center justify-start rounded-full border-2 border-black/10 bg-green-950/60 shadow-md/10 inset-shadow-2xs inset-ring-2 inset-shadow-white inset-ring-neutral-400">
    <div class="relative z-100 ml-2 flex h-10 w-18 cursor-pointer items-center justify-center rounded-full border-2 border-white bg-white text-[0.8rem] text-black/60 shadow-md/30 inset-shadow-sm inset-ring-2 inset-shadow-neutral-400 inset-ring-neutral-300 transition-all delay-100 duration-300 hover:bg-black/30 hover:text-white hover:inset-shadow-white">
      <div class="z-10 font-semibold hover:text-white">Home</div>
      <!-- <div class="absolute h-2 w-full rounded-full bg-white transition-all delay-100 duration-400 hover:h-full hover:bg-green-950/60"></div> -->
    </div>
  </div>
</div>`}/>

            </div>
        </div>
    )
}

function Box({heading, tags, codeString}){

    return(
        <div className="w-full md:w-[50%] bg-white h-full border-0 border-black flex flex-col p-4 gap-2">
                
                <div className="w-full h-[8%] border-0 border-black text-4xl text-black dark:text-white font-medium">{heading}</div>
                <div className="w-full h-8 border-0 border-black mb-2 flex flex-row justify-start items-start gap-[3px]">

                    {
                        tags.map((item,index)=>{
                            return <div className="w-[30%] md:w-[18%] h-full rounded-3xl bg-neutral-900 text-white text-sm flex justify-center items-center">
                                <div>{item}</div>
                            </div>
                        })
                    }
                    {/* <div className="w-1/12 h-full rounded-3xl bg-black text-white text-sm flex justify-center items-center">
                        <div>JSX</div>
                    </div>
                    <div className="w-1/12 h-full rounded-3xl bg-black text-white text-sm flex justify-center items-center">
                        <div>GSAP</div>
                    </div>
                    <div className="w-1/12 h-full rounded-3xl bg-black text-white text-sm flex justify-center items-center">
                        <div>JSX</div>
                    </div> */}
                </div>
                <div className="w-full h-100 border-black bg-neutral-900 text-blue-400 text-sm overflow-scroll p-2">
                    <pre className="w-full h-full">
                        <code>
{codeString}
                        </code>
                    </pre>
                </div>
            </div>
    )
}