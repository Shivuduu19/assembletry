'use client'

import Image from "next/image";
import Header from "./components/Header";
import Main from "./components/Main";
import { myFontBook } from "./staticFonts/fonts";
import { useEffect, useRef, useState } from "react";
import FixedNavbar from "./components/FixedNavbar";
import { AnimatePresence } from "framer-motion";
import Textscroll from "./components/Textscroll";
import Boxes from "./components/Boxes";

export default function Home() {
  const mainref: any = useRef()
  const [isScrolling, setIsScolling] = useState(false)
  const [fullNav, setFullNav] = useState(false)

  const handleScroll = () => {
    if (mainref.current) {
      const mainTop = mainref.current.getBoundingClientRect().bottom
      // console.log(isScrolling);
      if (mainTop < 0) {
        setIsScolling(true)
      } else {
        setIsScolling(false)
      }
      if (window.scrollY >= window.innerHeight) {
        setFullNav(true)
      } else {
        setFullNav(false)
      }
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  // useEffect(() => {

  //   if (mainref.current) {
  //     const mainTop = mainref.current.getBoundingClientRect().bottom
  //     console.log(isScrolling);
  //     if (mainTop <= 0) {
  //       setIsScolling(true)
  //     } else {
  //       setIsScolling(false)
  //     }
  //   }
  // }, [])

  return (
    <>
      <div className="relative w-auto min-h-[250vh] flex justify-center overflow-hidden bg-[#fcfcfc]">
        <AnimatePresence>

          {isScrolling && <FixedNavbar fullNav={fullNav} />}
          <Header key='header' />
          <Main key='main' mainref={mainref} isScrolling={isScrolling} />
        </AnimatePresence>
        <Boxes />
      </div>
      <Textscroll />
    </>
  );
}
