"use client"
import { useState, useEffect } from "react"
import { Navbar } from "../page"
import gsap from "gsap";
import { CodeBlock } from "@/components/ui/code-block";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useRouter } from "next/navigation";
import Image from "next/image";
// heading , tags array,  codeString

export default function Codes() {

  const [dark, setDark] = useState(false);

  const poppinsCode = `
import { Poppins } from "next/font/google"

const poppins = Poppins({
    subsets: ['latin'],
    weight: ["400"]
})

export default function PoppinsPage(){
    return (
        <div className={\`w-full h-screen \${poppins.className} bg-[#EFEFEF] text-neutral-400 px-10\`}>

            <div className="w-full h-[10%] border-0 border-black flex justify-center items-center">
                <div className="w-[70%] h-full text-black text-[0.8rem] flex justify-start items-center">
                    <div className="font-medium">Vipul Dubey ©</div>
                </div>
                <div className="w-[30%] h-full px-8 py-4 flex justify-center items-center">
                    <div className="w-full h-full bg-white/60 backdrop-blur-2xl flex flex-row justify-around items-center gap-4 text-[0.7rem] text-black rounded-sm">
                        <div className="w-1/5 h-full bg-neutral-800 p-2 flex justify-center items-center"></div>
                        <div className="w-1/5 h-full flex justify-center items-center hover:text-neutral-500 transition-all cursor-pointer"><div>About</div></div>
                        <div className="w-1/5 h-full flex justify-center items-center hover:text-neutral-500 transition-all cursor-pointer"><div>Projects</div></div>
                        <div className="w-1/5 h-full flex justify-center items-center hover:text-neutral-500 transition-all cursor-pointer"><div>Capabilities</div></div>
                        <div className="w-1/5 h-full flex justify-center items-center hover:text-neutral-500 transition-all cursor-pointer"><div>Contact</div></div>
                    </div>
                </div>
            </div>

            <div className="w-full h-[90%] text-[40px] flex justify-between items-center">
                <div className="w-[70%] h-full flex flex-col justify-start items-start">
                    <div className="w-full h-8/13 text-[40px]/11 flex justify-start items-center">
                        <div>
                            I am Vipul Dubey, a <span className="text-black">UI/UX designer</span> with a background in web and <span className="text-black">front-end development</span>. My work merges design, usability, and strategy...
                        </div>
                    </div>
                    <div className="w-full h-5/13 flex flex-row justify-start items-start">
                        <div className="w-[60%] h-full flex flex-col justify-center items-start gap-2">
                            <div className="text-black text-[0.8rem]">I grew up with a strong curiosity for how things work...</div>
                            <div className="text-black text-[0.8rem]">Since then, I have collaborated with diverse clients...</div>
                        </div>
                        <div className="w-[40%] h-full"></div>
                    </div>
                </div>

                <div className="w-[30%] h-full flex flex-row justify-center items-center">
                    <div className="w-[50%] h-full"></div>
                    <div className="w-[50%] h-full flex flex-col justify-center items-center gap-2 px-4 pt-8 pb-2">
                        <div className="h-1/2 w-full bg-black">
                            <img className="w-full h-full object-cover" src="https://plus.unsplash.com/premium_photo-1721994124600-7a541bf7ca5c" alt="" />
                        </div>
                        <div className="h-1/2 w-full bg-black">
                            <img className="w-full h-full object-cover" src="https://plus.unsplash.com/premium_photo-1686727103139-2824d4fa46a3" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}` 
const heroPage2Code = `"use client"

export default function HeroPage2() {

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-[#131313]">

      <div
        className="absolute inset-0 z-0"
        style={{
          background: "
            radial-gradient(circle at 50% 50%, 
              rgba(226, 232, 240, 0.2) 0%, 
              rgba(226, 232, 240, 0.1) 25%, 
              rgba(226, 232, 240, 0.05) 35%, 
              transparent 50%
            )
          ",
        }}
      />

      <div className="w-full h-12 border-0 border-white flex flex-row justify-center items-center z-20">

        <div className="w-full md:w-[61vw] h-full border-0 border-white flex flex-row justify-between items-center text-white px-4">
          <div className="w-1/4 md:w-1/3 text-[1rem] md:text-[1rem]">Logo</div>
          <div className="w-3/4 md:w-2/3 text-[0.7rem] md:text-[1rem] flex justify-end items-center gap-4 border-0 border-yellow-400">
            <div>Services</div>
            <div>Career</div>
            <div>About Us</div>
            <div className=" border-2 border-neutral-500 rounded-xl px-2 flex justify-center items-center hover:bg-white hover:text-black transition-colors delay-100 duration-300 cursor-pointer">
              <div>Register</div>
            </div>
          </div>
        </div>

      </div>

      <div className="flex h-[40%] w-full flex-col items-center justify-center gap-4 z-10">
        <button className="w-40 h-8 border-2 border-neutral-700 rounded-full text-[0.8rem] text-white inset-shadow-sm ring-2 ring-neutral-800 bg-gradient-to-br from-zinc-800 to-zinc-950">Lorem at ipsum dolor.
        </button>
        <div className="w-full md:w-[80%] text-center text-[2rem] md:text-[3rem]/12 tracking-wide text-neutral-200 font-light">Lorem ipsum dolor sit amet consectetur.</div>
        <div className="w-full md:w-[80%] text-center text-[1rem] tracking-wide text-neutral-200 font-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ullam itaque neque.</div>
        <button className="cursor-pointer rounded-full border-2 border-white px-6 py-2 font-semibold text-white transition-colors delay-100 duration-200 hover:text-black hover:bg-white text-[0.8rem]">Get Started</button>
      </div>
      <div className="relative h-[60%] w-full md:w-[50vw] border-0 border-white">
        <div className="absolute h-full w-full rounded-t-full bg-[#37272C]/40"></div>
        <div className="absolute top-[10%] left-[5%] h-[90%] w-[90%] rounded-t-full bg-[#EF8AB6] inset-shadow-sm"></div>
        <div className="absolute top-[20%] left-[10%] h-[80%] w-[80%] rounded-t-full bg-[#C15D89] inset-shadow-sm"></div>
        <div className="absolute top-[30%] left-[15%] h-[70%] w-[70%] rounded-t-full bg-[#252525] inset-shadow-sm"></div>
        <div className="absolute top-[40%] left-[20%] h-[60%] w-[60%] rounded-t-full bg-[#191919] inset-shadow-sm "></div>

        <div className="absolute top-[15%] left-[68%] h-[30%] w-[28%] rounded-xl bg-[#131313] ring-8 ring-neutral-400/30 overflow-hidden">
          {/* <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1509023464722-18d996393ca8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
        </div>

        <div className="absolute top-[30%] left-[5%] h-[17%] w-[17%] rounded-xl bg-[#131313] ring-8 ring-neutral-400/30 overflow-hidden">
          {/* <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1511576661531-b34d7da5d0bb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
        </div>
        
        <div className="absolute top-[65%] left-[30%] h-[35%] w-[40%] rounded-2xl bg-[#131313] border-12 border-neutral-400/20 overflow-hidden">
          {/* <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1477346611705-65d1883cee1e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
        </div>
        <div className="absolute top-[50%] h-[50%] w-full bg-linear-to-t from-[#131313] to-[#232222]/0"></div>
      </div>
    </div>
  )
}
`
  const morningButtonCode = `"use client"
import gsap from "gsap"

export default function MorningButton() {
  
    function handleEnter(){
      gsap.to("#samplefirstButton",{
        scale:20,
        backgroundColor:"#FF983B",
        borderColor:"black",
        duration:0.8,
        delay:0,
      })
  
      gsap.to("#samplefirstText",{
        color:"black",
        duration:0.8,
        delay:0,
      })
    }
    
    function handleLeave(){
      gsap.to("#samplefirstButton",{
        scale:0,
        backgroundColor:"black",
        borderColor:"white",
        duration:0.8,
        delay:0
      })
  
      gsap.to("#samplefirstText",{
        color:"white",
        duration:0.8,
        delay:0,
      })
    }

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-[#131313]">

          <div className="w-full h-full overflow-hidden border-0 border-red-500 mt-2 bg-white mb-[3px] rounded-2xl flex justify-center items-center">
                        {/* <img className="w-full h-full object-cover rounded-lg" src="./heropage2.png" alt="" /> */}

                        <div onMouseEnter={handleEnter} onMouseLeave={handleLeave} className="relative overflow-hidden h-[20%] w-[24%] border-0 bg-[#010203] ring-2 ring-black/20 rounded-2xl flex justify-center items-center cursor-pointer">
                            <div id="samplefirstText" className="text-2xl font-extrabold tracking-tighter text-white z-30">Button</div>
                            <div id="samplefirstButton" className="absolute top-[90%] left-[45%] w-2 h-2 bg-black z-20 rounded-t-full"></div>
                        </div>

          </div>
      
    </div>
  )
}
`

  useEffect(() => {
    gsap.to("#introCodesLeft", {
      width: 0,
      duration: 2,
      ease: "power2.out"
    })

    gsap.to("#introCodesRight", {
      width: 0,
      duration: 2,
      ease: "power2.out"
    })
  }, [])


  useEffect(() => {
    if (dark) {
      gsap.from("#toggle", {
        y: 40,
        duration: 0.5,
      })
    }
    else {
      gsap.from("#toggle", {
        y: -40,
        duration: 0.5,
      })
    }
  }, [dark])

  return (
    <div className={`relative w-full h-full text-3xl text-black flex flex-row justify-start items-start transition-all delay-100 ${dark ? "bg-black" : "bg-white"}`}>

      <div id="introCodesLeft" className="absolute h-full w-[50%] left-0 bg-black z-100 flex justify-center items-start pt-[20%] text-[3rem] text-white font-semibold "></div>
      <div id="introCodesRight" className="absolute h-full w-[50%] right-0 bg-black z-100 flex justify-center items-start pt-[20%] text-[3rem] text-white font-semibold"></div>

      {/* <Navbar dark={dark} setDark={setDark}/> */}

      {/* yahaan sidebar hai */}

      <div className="fixed hidden md:flex md:w-1/4 h-screen border-0 shadow-neutral-800 border-neutral-900 flex-col justify-start items-start text-black p-2 pt-4 bg-neutral-100 m-1 rounded-xl">
        <div className="w-full px-4 bg-neutral-900 rounded-xl text-xl font-semibold py-2 flex justify-start items-center text-white"><div>Components</div></div>
        <Acc />
      </div>

      <div className=""></div>

      <div className="w-full md:pl-90 h-full border-2 border-black flex flex-col justify-center items-center">

        <Box id="HeroPage1" imageurl="/heropage1.png" heading="Centered Hero Layout" tags={["JSX", "Tailwind CSS"]} codeString={`<div class="flex h-screen w-screen flex-row items-center justify-center">
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

            `} />
        <Box id="HeroPage2" imageurl="/heropage2.png" heading="Centered Hero Layout 2" tags={["JSX", "Tailwind CSS"]} codeString={heroPage2Code} />

        <Box id="poppinsHero" imageurl="/heropage4.png" heading="Poppins Hero Layout" tags={["JSX", "Tailwind CSS"]} codeString={poppinsCode} />

        <Box id="HeroPage3" imageurl="/heropage3img.png" heading="Hero Layout 3" tags={["JSX", "Tailwind CSS"]} codeString={`<div class="flex h-screen w-screen flex-row items-center justify-center">
  <div class="flex h-[80%] w-[60%] flex-col">
    <div class="flex h-full w-full items-start justify-end pb-10 text-right text-[9rem]/30 font-bold tracking-tight">Visual Poetry</div>
    <div class="h-full w-full pl-[40%] text-right text-[1.5rem]/6 text-neutral-900">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates exercitationem minima, sapiente molestiae corporis nisi alias</div>
    <div class="flex h-full w-full flex-row items-center justify-start -space-x-2 pl-6">
      <div class="flex h-12 w-12 items-center justify-center rounded-full border-2 border-black">X</div>
      <div class="flex h-12 w-12 items-center justify-center rounded-full border-2 border-black">Y</div>
      <div class="flex h-12 w-12 items-center justify-center rounded-full border-2 border-black">Z</div>
      <div class="flex h-12 w-12 items-center justify-center rounded-full border-2 border-black">A</div>
    </div>
    <div class="flex h-full w-full flex-row items-center justify-between gap-4 px-2 ring-lime-400">
      <div class="h-full w-1/2 flex-col items-end justify-end gap-0 rounded-2xl border-0 border-[#FBAF42] p-4">
        <div class="text-right text-[4rem] font-bold italic">+200K</div>
        <div class="h-[2px] w-full bg-black"></div>
        <div class="w-[100%] text-right text-[1rem] font-semibold italic">Lorem ipsum dolor sit amet consectetur, adipisicing elit. sum dolor sit amet consectetur, adipisicing elit.</div>
      </div>
      <div class="h-full w-1/2 flex-col items-end justify-end gap-2 rounded-2xl border-0 border-[#FBAF42] p-4">
        <div class="text-right text-[4rem] font-bold italic">+450K</div>
        <div class="h-[2px] w-full bg-black"></div>
        <div class="w-[100%] text-right text-[1rem] font-semibold italic">Lorem ipsum dolor sit amet consectetur, adipisicing elit. sum dolor sit amet consectetur, adipisicing elit.</div>
      </div>
    </div>
  </div>
  <div class="flex h-[80%] w-[40%] flex-row bg-white px-8">
    <div class="flex h-full w-1/7 flex-col border-0 border-red-400">
      <div class="h-[60%] w-full rounded-l-3xl bg-[#FBAF42]"></div>
      <div class="h-[60%] w-full bg-[#FBAF42]">
        <div class="flex h-full w-full flex-col items-center justify-center gap-[10px] rounded-tr-3xl bg-white">
          <div class="h-12 w-12 rounded-full bg-[#FBAF42]"></div>
          <div class="h-12 w-12 rounded-full bg-[#FBAF42]"></div>
          <div class="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border-4 border-[#FBAF42] bg-white object-cover p-[3px]">
            <img class="h-full w-full rounded-full transition-all delay-100 duration-700 hover:-rotate-410" src="https://img.icons8.com/?size=100&id=99982&format=png&color=000000" alt="" />
          </div>
          <div class="flex h-12 w-12 items-center justify-center rounded-full border-4 border-[#FBAF42] bg-white p-[4px]">
            <img class="h-full w-full" src="https://img.icons8.com/?size=100&id=A3c04Fnghx1E&format=png&color=000000" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="h-full w-1/7 border-0 border-red-400 bg-white">
      <div class="h-full w-full rounded-bl-3xl bg-[#FBAF42]"></div>
    </div>
    <div class="flex h-full w-4/7 flex-col border-0 border-blue-400">
      <div class="h-[13%] w-full border-0 border-black">
        <div class="h-full w-full rounded-tr-2xl bg-[#FBAF42]"></div>
      </div>
      <div class="h-[90%] w-full bg-[#FBAF42]">
        <!-- <img class="h-full w-full" src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAxL3Jhd3BpeGVsb2ZmaWNlMTlfYXNpYW5fd29tYW5fbGF3eWVyX2lzb2xhdGVkX3doaXRlX2JhY2tncm91bmRfYzhmZjViZjItMzY4NC00OGFkLThjYTYtNTgxMGQ5NWFhNmE2LnBuZw.png" alt=""> -->
      </div>
    </div>
    <div class="flex h-full w-1/7 flex-col border-0 border-red-400">
      <div class="h-[14%] w-full border-0 border-black bg-[#FBAF42]">
        <div class="flex h-full w-full items-center justify-start rounded-bl-3xl bg-white pl-[10px]">
          <div class="h-10 w-10 animate-spin rounded-full bg-black p-2 transition-all delay-100 duration-600 hover:translate-x-20 hover:rotate-360">
            <div class="h-2 w-2 rounded-full bg-white"></div>
          </div>
        </div>
      </div>
      <div class="h-full w-full border-0 border-black bg-white">
        <div class="h-full w-full rounded-r-3xl bg-[#FBAF42]"></div>
      </div>
    </div>
  </div>
        </div>`} />

          <Box id="metallicNavBar" imageurl="/metallicNavBar.png" heading="Metallic Navbar 1" tags={["JSX","Tailwind CSS"]} 
codeString={`export default function metallicNavBar(){
  return  <div className="flex h-14 md:w-[73%] p-2 md:p-0 items-center justify-start rounded-full border-2 border-black/10 bg-green-950/60 shadow-md/10 inset-shadow-2xs inset-ring-2 inset-shadow-white inset-ring-neutral-400">
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
}`}/>

        <Box id="morningButton" imageurl="/morningButton.png" tags={["React","GSAP","Tailwind CSS"]} heading="Morning Button" codeString={morningButtonCode}/>

        <Box id="darkbg1" imageurl="/darkbg1.png" tags={["JSX","Tailwind CSS"]} heading="N-500 Vertical Lines" codeString={`"use client"

export default function VerticaLinesBg() {
  
  return (
    <div className="w-screen h-screen overflow-hidden border-2 border-white/10 bg-black flex justify-around items-center">

          <div className=" h-full w-[1px] bg-neutral-500/15"></div>
          <div className=" h-full w-[1px] bg-neutral-500/15"></div>
          <div className=" h-full w-[1px] bg-neutral-500/15"></div>
          <div className=" h-full w-[1px] bg-neutral-500/15"></div>
          <div className=" h-full w-[1px] bg-neutral-500/15"></div>
          <div className=" h-full w-[1px] bg-neutral-500/15"></div>
          <div className=" h-full w-[1px] bg-neutral-500/15"></div>
          <div className=" h-full w-[1px] bg-neutral-500/15"></div>

      </div>
  )
}
`}/>

      </div>
    </div>
  )
}

function Box({ id, heading, tags, filename, codeString, imageurl }) {

  const [preview, setPreview] = useState(false);

  return (
    <div id={id} className="w-full h-full border-0 border-black flex flex-row p-4 gap-2">

      <div className={`w-full flex-col justify-cemter items-start gap-2`}>


        <div className="w-full h-10 text-[1.8rem]  border-0 border-black md:text-4xl text-black dark:text-white font-medium">{heading}</div>

        <div className="w-38 h-8 my-2 flex justify-start items-center text-[1rem] gap-0 border-2 border-neutral-900 rounded-lg bg-neutral-800 overflow-hidden">
          <button onClick={() => setPreview(true)} className={`w-1/2 h-full ${preview ? "bg-white text-black" : "bg-transparent text-white"} w-1/2 border-r-2 border-black cursor-pointer transition-colors delay-100 duration-300`}>Preview</button>
          <button onClick={() => setPreview(false)} className={`w-1/2 h-full ${!preview ? "bg-white text-black" : "bg-transparent text-white"} w-1/2 cursor-pointer transition-colors delay-100 duration-300`}>Code</button>

        </div>

        <div className={`${preview ? "flex" : "hidden"} flex justify-center items-center h-100 w-full md:w-[80%] rounded-xl border-4 border-neutral-900 overflow-hidden pt-2 pb-2 bg-neutral-900`}>

          <Image width={900} height={900} className="w-full h-full object-contain md:object-cover rounded-t-lg rounded-b-lg" src={imageurl} alt="cannot load image" />

        </div>

        <div className={`${preview ? "hidden" : ""} w-full md:w-[80%] h-100 border-black bg-neutral-800 text-blue-400 text-sm overflow-scroll p-0 rounded-xl overflow-y-scroll no-scrollbar pt-2`}>

          <div className="w-full h-8 border-0 border-black my-1 flex flex-row justify-start items-start gap-[3px] px-2">

            {
              tags.map((item, index) => {
                return <div key={index} className="w-28 md:w-24 h-full rounded-3xl bg-neutral-900 text-white text-sm flex justify-center items-center">
                  <div>{item}</div>
                </div>
              })
            }

          </div>

          <pre className="w-full h-full">
            <CodeBlock language="jsx" filename={filename} code={codeString} />

          </pre>
        </div>

      </div>
    </div>
  )
}

function Acc() {

  const router = useRouter();

  return (
    <Accordion className="w-full px-2" type="single" collapsible>

      <AccordionItem value="item-1">
        <AccordionTrigger>Hero Pages</AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col justify-start items-start gap-2 text-neutral-800">
            <button onClick={() => router.push("/codes#HeroPage1")} className="cursor-pointer font-medium hover:text-black">Centered Hero Layout</button>
            <button onClick={() => router.push("/codes#HeroPage2")} className="cursor-pointer font-medium hover:text-black">Centered Hero Layout 2</button>
            <button onClick={() => router.push("/codes#poppinsHero")} className="cursor-pointer font-medium hover:text-black">Poppins Hero Layout</button>
            <button onClick={() => router.push("/codes#HeroPage3")} className="cursor-pointer font-medium hover:text-black">Hero Layout 3</button>

          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>Buttons</AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col justify-start items-start gap-2 px- text-neutral-800">
            <button onClick={() => router.push("/codes#metallicNavBar")} className="cursor-pointer font-medium py-1 hover:text-black">Metallic Navbar 1</button>
            <button onClick={() => router.push("/codes#morningButton")} className="cursor-pointer font-medium hover:text-black">Morning Button</button>
            {/* <button onClick={() => router.push("/codes#HeroPage1")} className="cursor-pointer font-medium hover:text-black">Drop Down button</button> */}
            {/* <button onClick={() => router.push("/codes#HeroPage1")} className="cursor-pointer font-medium hover:text-black">Toggle Button</button> */}

          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>Templates</AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col justify-start items-start gap-2 px- text-neutral-800">
            {/* <button onClick={() => router.push("/codes#HeroPage1")} className="cursor-pointer font-medium hover:text-black">Dark Template 1</button> */}
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger>Backgrounds</AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col justify-start items-start gap-2 px- text-neutral-800">
            <button onClick={() => router.push("/codes#darkbg1")} className="cursor-pointer font-medium hover:text-black">Neutral-500 Vertical Lines</button>
            {/* <button onClick={() => router.push("/codes#HeroPage1")} className="cursor-pointer font-medium hover:text-black">SpotLight</button> */}
          </div>
        </AccordionContent>
      </AccordionItem>

    </Accordion>
  )
}