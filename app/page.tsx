'use client'

import Image from "next/image";
import Header from "./components/Header";
import Main from "./components/Main";
import { myFontBook } from "./staticFonts/fonts";
import { useEffect, useRef, useState } from "react";
import FixedNavbar from "./components/FixedNavbar";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const mainref: any = useRef()
  const [isScrolling, setIsScolling] = useState(false)
  const [fullNav, setFullNav] = useState(false)

  const handleScroll = () => {
    if (mainref.current) {
      const mainTop = mainref.current.getBoundingClientRect().bottom
      console.log(isScrolling);
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
      <div className="relative w-auto min-h-[250vh] flex justify-center overflow-hidden ">
        <AnimatePresence>

          {isScrolling && <FixedNavbar fullNav={fullNav} />}
          <Header key='header' />
          <Main key='main' mainref={mainref} isScrolling={isScrolling} />
        </AnimatePresence>
        <div className="z-[1] w-[1300px] absolute top-0 max-w-[1300px] h-[1400px] flex-none ">
          <div>
            <div className="absolute right-[109px] top-[170px]">
              <Image
                src='/icons/Yo3Zm3iXmYJ9P3HWO4RHiQfYVPw.png'
                alt="dots square"
                width={149}
                height={149}
              />
            </div>
          </div>
          <div>
            <div className="absolute right-[282px] top-[422px]">
              <Image
                src='/icons/ktMI7cL3AsQSG3r3EJh8BEQceDI.png'
                alt="three circles"
                width={149}
                height={149}
              />
            </div>
          </div>
          <div>
            <div className="absolute right-[-12px] top-[552px]">
              <Image
                src='/icons/ShCQxjJy61JrGpE5v7es2XlETiU.png'
                alt="dots square"
                width={149}
                height={149}
              />
            </div>
          </div>
          <div>
            <div className="absolute left-[90px] top-[126px]">
              <Image
                src='/icons/OzBmnUozCSDim9uK8XJysz9oS4.png'
                alt="dots square"
                width={149}
                height={149}
              />
            </div>
          </div>
          <div>
            <div className="absolute left-[260px] top-[391px]">
              <Image
                src='/icons/zvAD09XV1CEm0QIAAU1t9KRAiY.png'
                alt="dots square"
                width={149}
                height={149}
              />
            </div>
          </div>
          <div>
            <div className="absolute left-[-13px] top-[531px]">
              <Image
                src='/icons/ppPBEZYfJ9hDrLcslqmjrveePk.png'
                alt="dots square"
                width={149}
                height={149}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>

        </div>
      </div>
    </>
  );
}
