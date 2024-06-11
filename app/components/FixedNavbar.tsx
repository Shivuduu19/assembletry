'use client'
import { AnimatePresence, motion, useScroll } from 'framer-motion'
import { useRef } from 'react'

const FixedNavbar = ({ fullNav }: any) => {
    const NavAnimations = {
        initial: {
            // y: -50,
            x: "-50%",
            opacity: 1,
        },
        animate: {
            // y: 0,
            x: '-50%',
            opacity: 1,
            // transition: {
            //     type: 'spring',
            //     damping: 10,
            //     stiffness: 100
            // }
        },
        linksInitial: {
            // x: "150%",
            opacity: 0,
            // width: 0,

        },
        links: {
            // x: "50%",
            // width: '100%',

            opacity: 1,
            transition: {
                delay: 0.5,


            }
        },
        startInitial: {
            x: '-200%'
        },
        start: {
            x: '0',
            transition: {
                x: { duration: 0.5 }
            }
        },
        NavInitial: {
            scaleX: '70%',
        },
        Nav: {
            scaleX: '100%',
            transition: {
                ease: 'easeOut',
                duration: 0.5
            }
        },
        exit: {
            scaleX: '70%',
        }
    }
    // const ref = useRef(null)
    // const { scrollYProgress } = useScroll({
    //     container: ref
    // }
    // )
    // console.log(scrollYProgress);

    return (
        <AnimatePresence>
            <motion.div key='nav' initial='initial' variants={NavAnimations} animate='animate' className='w-auto fixed  h-auto left-1/2 top-6 opacity-1 z-[7] '>
                {!fullNav ?
                    <div className="w-auto   self-stretch h-min flex flex-none justify-center">
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
                    </div>

                    :
                    <motion.div key='startNav' exit='exit' variants={NavAnimations} initial='NavInitial' animate='Nav' className=" flex gap-3 justify-center items-center px-6 py-3 w-auto h-[43px] [box-shadow:rgba(0, 0, 0, 0.15)_8px_10px_15px_0px] bg-[#232323] text-[#fff]  rounded-[100px] ">
                        <motion.div layout variants={NavAnimations} initial='startInitial' animate='start' className='order-10 text-[#f1fd82]' >
                            <a href="" className='flex flex-none items-center gap-2 h-10 '>
                                <div><p>Start Free</p></div>
                                <div className=''><svg xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }} viewBox="0 0 18 15" preserveAspectRatio="none" width="18" height="15"><defs><svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg" id="svg286516480_576">
                                    <path d="M1 6.5C0.447715 6.5 6.03529e-08 6.94772 0 7.5C-6.03529e-08 8.05228 0.447715 8.5 1 8.5L1 6.5ZM17.7071 8.20711C18.0976 7.81658 18.0976 7.18342 17.7071 6.7929L11.3431 0.428933C10.9526 0.038409 10.3195 0.0384089 9.92893 0.428933C9.53841 0.819457 9.53841 1.45262 9.92893 1.84315L15.5858 7.5L9.92893 13.1569C9.53841 13.5474 9.53841 14.1805 9.92893 14.5711C10.3195 14.9616 10.9526 14.9616 11.3431 14.5711L17.7071 8.20711ZM1 8.5L17 8.5L17 6.5L1 6.5L1 8.5Z" fill="#f1fd82"></path>
                                </svg></defs><use href="#svg286516480_576"></use></svg></div>
                            </a>
                        </motion.div>
                        <div>
                            <a href="" className='flex items-center flex-none gap-2'>
                                <div className="bg-[#f1fd82] rounded-[100%] w-2 aspect-square relative flex-none"></div>
                                <motion.div variants={NavAnimations} initial='linksInitial' animate='links'>
                                    <p>Product</p>
                                </motion.div>
                            </a>
                        </div>
                        <div>
                            <a href="">
                                <motion.div variants={NavAnimations} initial='linksInitial' animate='links'>
                                    <p>Pricing</p>
                                </motion.div>
                            </a>
                        </div>
                        <div>
                            <a href="">
                                <motion.div variants={NavAnimations} initial='linksInitial' animate='links'>
                                    <p>
                                        Login
                                    </p>
                                </motion.div>
                            </a>
                        </div>
                    </motion.div>

                }
            </motion.div>
        </AnimatePresence>
    )
}

export default FixedNavbar