

import { myFontBook } from "../staticFonts/fonts";
import { motion } from 'framer-motion'
const Main = ({ mainref, isScrolling }: any) => {

    const startfree = {
        hover: {
            x: 10,
            scaleX: 1.5,
            // transition: {
            // }
        }
    }


    return (

        <div className="h-min w-full px-6 py-0 flex flex-none justify-center items-center bg-[#fcfcfc] bg-transparent relative z-[2] overflow-hidden">
            <div className="max-w-[1512px] pt-6 h-min ">
                <div className="pt-[160px] flex flex-none items-center flex-col h-min relative">
                    <div className="flex flex-col gap-6 items-center p-0 relative w-min overflow-hidden " >
                        <div className="absolute h-[70px] w-[160px] top-[109px] right-[149px] bg-[#f1fd82] z-[1] opacity-50 rounded-[200px]" ></div>
                        <div ref={mainref} >
                            <div className="relative w-[758px] flex flex-none justify-center items-center flex-col">
                                <h1 className="text-[64px] font-normal tracking-[-0.04em]">
                                    Organize your
                                </h1>
                                <h1 className="text-[64px] font-normal tracking-[-0.04em]">projects in time</h1>
                            </div>
                            <div className={`flex flex-none justify-center items-center flex-col text-[#333333] ${myFontBook.variable} font-anthroBook text-[23px]`}>
                                <h3>Every file, note, convo and to-do.</h3>
                                <h3>In a calendar.</h3>
                            </div>
                        </div>
                        {!isScrolling && <motion.div key={1} whileHover='hover' variants={startfree} className="w-auto sticky top-2  self-stretch h-min flex flex-none justify-center ">
                            <div className="h-auto w-auto relative flex-none z-[5] bg-[#232323]  rounded-[100px]  ">
                                <a href="" className=" block opacity-[1][box-shadow:rgba(0, 0, 0, 0.15)_8px_10px_15px_0px] px-8 py-3 h-min w-min">
                                    <div className="flex items-center gap-3 p-0 relative ">
                                        <div className="bg-[#f1fd82] rounded-[100%] w-2 aspect-square relative flex-none"></div>
                                        <div className="flex-none h-auto relative w-auto whitespace-pre text-[#fff] ">
                                            <p>Start Free</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </motion.div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main