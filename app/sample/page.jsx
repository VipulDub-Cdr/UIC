"use client"
import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function HelloScroll() {

  return (
    <div className="w-full h-full bg-black"></div>
  )
}
