'use client'
import { motion, useScroll, useTransform } from "framer-motion"
import React, { useEffect, useRef } from "react"


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
            <div ref={element} className=" rounded-l-[50px] h-[300vh] rounded-r-[50px] mx-6 px-6  py-0 bg-[#111] z-[6] ">
                <div className="sticky top-12 flex pt-56 px-20 pb-20 flex-none flex-wrap items-center mx-auto text-[40px] text-gray-300">
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
            <div className="h-screen"></div>
        </>
    )
}

const Word = ({ children, range, progress }: any) => {
    const opacity = useTransform(progress, range, [0, 1])
    return (
        <div className="mr-3 mt-3 relative">
            <p className="opacity-30 absolute" >{children}</p>
            <motion.p style={{ opacity }} className="" >{children}</motion.p>
        </div>
    )
}


export default Textscroll