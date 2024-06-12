import Image from "next/image";
import { motion } from 'framer-motion'
import { myFont } from "../staticFonts/fonts";

const Header = () => {
    const arrowMotion = {
        hover: {
            x: 10,
            transition: {
                duration: 0.4,
                type: 'tween',
                ease: 'easeOut'

            }
        }
    }
    return (
        <>

            <div className="absolute flex items-center left-[-1px] w-full justify-between bg-[#fcfcfc] h-[70px] flex-none flex-nowrap px-6 py-0 overflow-visible top-0 z-[8]">
                <div>
                    <Image src="/assemblelogo.png" alt=" assemble logo" width={120} height={24} />
                </div>


                <div className={`flex  items-center justify-center gap-6  h-full  ${myFont.variable} font-sans text-[16px] leading-[1.2] text-[#757575]`}>
                    <div className=" flex    h-[40px]   ">
                        <a href="" className="flex  hover:text-[#111]   justify-center w-[70px] items-center">
                            <p>Pricing</p>
                        </a>
                    </div>
                    <div className=" flex    h-[40px]    " >
                        <a href="" className="flex w-[70px] hover:text-[#111]  justify-center  items-center">
                            <p>Log In</p>
                        </a>
                    </div>

                    <motion.div key={3} whileHover='hover' className=" flex  items-center relative h-auto w-[140px]  px-6 py-3 bg-[#232323] rounded-[100px]">
                        <a href="" className="w-[140px] ">
                            <div className="flex items-center justify-center flex-none gap-2 h-min ">
                                <div className="text-[#fff]">Sign Up</div>
                                <motion.div key={4} variants={arrowMotion}>
                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }} viewBox="0 0 18 15" preserveAspectRatio="none" width="18" height="15"><defs><svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg" id="svg286516480_576">
                                        <path d="M1 6.5C0.447715 6.5 6.03529e-08 6.94772 0 7.5C-6.03529e-08 8.05228 0.447715 8.5 1 8.5L1 6.5ZM17.7071 8.20711C18.0976 7.81658 18.0976 7.18342 17.7071 6.7929L11.3431 0.428933C10.9526 0.038409 10.3195 0.0384089 9.92893 0.428933C9.53841 0.819457 9.53841 1.45262 9.92893 1.84315L15.5858 7.5L9.92893 13.1569C9.53841 13.5474 9.53841 14.1805 9.92893 14.5711C10.3195 14.9616 10.9526 14.9616 11.3431 14.5711L17.7071 8.20711ZM1 8.5L17 8.5L17 6.5L1 6.5L1 8.5Z" fill="#FFFFFF"></path>
                                    </svg></defs><use href="#svg286516480_576"></use></svg>
                                </motion.div>
                            </div>
                        </a>
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default Header