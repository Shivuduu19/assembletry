'use client'
import { color, motion, useScroll, useTransform } from "framer-motion"
import React, { useEffect, useRef } from "react"
import { myFont, myFontBook } from "../staticFonts/fonts"


const Textscroll = () => {
    const element = useRef(null)
    const paragraph = `At some point along the way project management tools got too complex  instead of simplifying work  they did the opposite So we stripped it all away  and chose to organize everything by the most basic fundamental concept: time 
 `
    const { scrollYProgress } = useScroll({
        target: element,
        offset: ['start start', 'end end'],
    })

    // useEffect(() => {
    //     scrollYProgress.on('change', e => console.log(e))

    // }, [])
    const words = paragraph.split(' ')
    return (
        <>
            <div ref={element} className=" rounded-l-[50px] h-[300vh] w-full rounded-r-[50px] mx-6 px-6  py-0 bg-[#111] z-[6] ">
                <div className="flex flex-none sticky top-0 h-screen w-full justify-center items-center" >

                    <div className={` w-[50%] text-[45px] ${myFontBook.variable} font-anthroBook sticky max-w-[971px] top-[25vh] flex flex-wrap flex-none  items-center mx-auto   leading-[1] z-[1] p-0 break-words whitespace-normals `}>
                        {
                            words.map((word, i) => {
                                const start = i / words.length
                                const end = start + 1 / words.length
                                // console.log(start, end);

                                return <Word key={i} range={[start, end]} progress={scrollYProgress}>{word}</Word>
                            })
                        }
                    </div>
                </div>
            </div>

        </>
    )
}

const Word = ({ children, range, progress }: any) => {
    const colorValue = useTransform(progress, range, ['#737373', '#ffffff'])
    // console.log(colorValue);


    return (
        <div className="mr-3 mt-3 relative text-[#737373] ">
            {/* <p className=" absolute " >{children}</p> */}
            <motion.p style={{ color: colorValue }}   >{children}</motion.p>
        </div >
    )
}


export default Textscroll