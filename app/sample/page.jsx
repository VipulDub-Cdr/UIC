"use client"
import gsap from "gsap"

export default function HelloScroll() {
  
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
