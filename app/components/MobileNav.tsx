import { motion } from 'framer-motion'

const MobileNav = ({ scroll }: any) => {



    return (
        <motion.div style={{ y: scroll }} className=" flex sm:hidden gap-4  justify-between font-[16px] items-center p-3 z-[8] w-full h-[72px] fixed bottom-0 [box-shadow:rgba(0, 0, 0, 0.15)_8px_10px_15px_0px] bg-[#232323] text-[#fff]   ">
            <div>
                <a href="" className='flex items-center flex-none w-min px-1 gap-2'>
                    <div className="bg-[#f1fd82] rounded-[100%] w-2 aspect-square relative flex-none"></div>
                    <div >
                        <p>Product</p>
                    </div>
                </a>
            </div>
            <div>
                <a href="" className='w-min px-1 text-[#b3b3b3]'>
                    <div >
                        <p>Pricing</p>
                    </div>
                </a>
            </div>
            <div>
                <a href="" className='w-min px-1 text-[#b3b3b3]'>
                    <div >
                        <p>
                            Login
                        </p>
                    </div>
                </a>
            </div>
            <div className=' text-[#f1fd82]' >
                <a href="" className='flex flex-none items-center gap-2 h-10  '>
                    <div><p>Start Free</p></div>
                    <div className=''><svg xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }} viewBox="0 0 18 15" preserveAspectRatio="none" width="18" height="15"><defs><svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg" id="svg286516480_576">
                        <path d="M1 6.5C0.447715 6.5 6.03529e-08 6.94772 0 7.5C-6.03529e-08 8.05228 0.447715 8.5 1 8.5L1 6.5ZM17.7071 8.20711C18.0976 7.81658 18.0976 7.18342 17.7071 6.7929L11.3431 0.428933C10.9526 0.038409 10.3195 0.0384089 9.92893 0.428933C9.53841 0.819457 9.53841 1.45262 9.92893 1.84315L15.5858 7.5L9.92893 13.1569C9.53841 13.5474 9.53841 14.1805 9.92893 14.5711C10.3195 14.9616 10.9526 14.9616 11.3431 14.5711L17.7071 8.20711ZM1 8.5L17 8.5L17 6.5L1 6.5L1 8.5Z" fill="#f1fd82"></path>
                    </svg></defs><use href="#svg286516480_576"></use></svg></div>
                </a>
            </div>
        </motion.div>
    )
}

export default MobileNav