
import Image from "next/image";
import { myFontSemi } from "../staticFonts/fonts";
import { myFontBook } from "../staticFonts/fonts";
import { motion } from 'framer-motion'
const Main = ({ mainref, isScrolling }: any) => {

    const startfree = {
        hover: {
            // x: 10,
            width: '24%',
            transition: {
                duration: 0.5
            }

        },

    }
    const textMove = {
        hover: {
            x: 3,
            transition: {
                duration: 0.5
            }

        }
    }
    const dotMove = {
        hover: {
            x: -3,
            transition: {
                duration: 0.5
            }

        }
    }


    return (

        <div className="h-min w-full px-6  flex flex-none justify-center items-center  bg-transparent relative z-[2] overflow-hidden">

            <div className="max-w-[1512px] pt-6 h-min flex flex-col justify-center items-center ">
                <div className=" flex w-full flex-none justify-center items-center z-[12]">
                    <Image src="/assemblelogo.png" alt=" assemble logo" width={100} height={24} />
                </div>
                <div className="pt-[80px] sm:pt-[160px] flex flex-none items-center flex-col h-min relative">
                    <div className="flex flex-col gap-6 items-center p-0 relative w-min overflow-hidden " >
                        <div className="absolute h-[38px] w-[90px] sm:h-[70px] sm:w-[160px] sm:top-[64px] top-[33px] right-[254px] sm:right-[147px] bg-[#f1fd82] z-[0] opacity-50 rounded-[200px]" ></div>
                        <div ref={mainref} className="flex flex-col flex-none gap-3 sm:gap-4">
                            <div className={`relative w-[758px] ${myFontSemi.variable} font-anthroBold text-[#000] flex flex-none font-normal   leading-[1] justify-center items-center flex-col`}>
                                <h1 className="text-[34px] sm:text-[64px] w-full flex flex-none justify-center items-center font-normal tracking-[-0.04em]">
                                    Organize your
                                </h1>
                                <h1 className="text-[34px] sm:text-[64px] w-full flex items-center justify-center  font-normal tracking-[-0.04em]">projects in time.</h1>
                            </div>
                            <div className={`flex flex-none justify-center items-center flex-col text-[#333333] ${myFontBook.variable} font-anthroBook text-[17px] sm:text-[23px]`}>
                                <h3>Every file, note, convo and to-do.</h3>
                                <h3>In a calendar.</h3>
                            </div>
                        </div>
                        <div className="flex flex-none gap-4 sm:hidden flex-col justify-center items-center">

                            <div className="w-auto  top-2  self-stretch h-min flex flex-none justify-center ">
                                <div className="h-auto w-auto relative flex items-center justify-center flex-none z-[5] bg-[#232323]  rounded-[100px]  ">
                                    <a href="" className=" block opacity-[1][box-shadow:rgba(0, 0, 0, 0.15)_8px_10px_15px_0px] px-8 py-3 h-min w-min">
                                        <div className="flex items-center gap-3 p-0 relative ">
                                            <div className="bg-[#f1fd82] rounded-[100%] w-2 aspect-square relative flex-none"></div>
                                            <div className="flex-none h-auto relative w-auto whitespace-pre text-[#fff] leading-[1.3]">
                                                <p >Start Free</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className=" flex    h-[40px]   ">
                                <a href="" className="flex  hover:text-[#111]   justify-center w-[70px] items-center">
                                    <p>Pricing</p>
                                </a>
                            </div>
                        </div>
                        {!isScrolling && <div className="hidden sm:block">

                            <div className="w-auto sticky top-2  self-stretch h-min flex flex-none justify-center ">
                                <motion.div whileHover='hover' variants={startfree} className="h-auto w-auto relative flex items-center justify-center flex-none z-[5] bg-[#232323]  rounded-[100px]  ">
                                    <motion.a href="" className=" block opacity-[1][box-shadow:rgba(0, 0, 0, 0.15)_8px_10px_15px_0px] px-8 py-3 h-min w-min">
                                        <div className="flex items-center gap-3 p-0 relative ">
                                            <motion.div variants={dotMove} className="bg-[#f1fd82] rounded-[100%] w-2 aspect-square relative flex-none"></motion.div>
                                            <div className="flex-none h-auto relative w-auto whitespace-pre text-[#fff] ">
                                                <motion.p variants={textMove}>Start Free</motion.p>
                                            </div>
                                        </div>
                                    </motion.a>
                                </motion.div>
                            </div>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main