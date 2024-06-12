import topRight from '@/public/icons/Yo3Zm3iXmYJ9P3HWO4RHiQfYVPw.png'
import rightMiddle from '@/public/icons/ktMI7cL3AsQSG3r3EJh8BEQceDI.png'
import rightBottom from '@/public/icons/ShCQxjJy61JrGpE5v7es2XlETiU.png'
import topLeft from '@/public/icons/OzBmnUozCSDim9uK8XJysz9oS4.png'
import leftMiddle from '@/public/icons/zvAD09XV1CEm0QIAAU1t9KRAiY.png'
import leftBottom from '@/public/icons/ppPBEZYfJ9hDrLcslqmjrveePk.png'
import Image from 'next/image'

const Boxes = () => {
    return (
        <div className="z-[1] w-[1300px] absolute top-0 max-w-[1300px] h-[1400px] flex-none ">
            <div>
                <div className="absolute h-[112px] w-[112px] top-[50px] right-[449px] sm:w-[149px] sm:h-[149px] sm:right-[109px] sm:top-[170px]">
                    <Image
                        src={topRight}
                        alt="dots square"

                    />
                </div>
            </div>
            <div>
                <div className="absolute h-[112px] w-[112px] top-[278px] right-[472px] sm:right-[282px] sm:w-[149px] sm:h-[149px] sm:top-[422px]">
                    <Image
                        src={rightMiddle}
                        alt="three circles"

                    />
                </div>
            </div>
            <div>
                <div className="absolute h-[112px] w-[112px]  sm:right-[-12px] sm:w-[149px] sm:h-[149px] sm:top-[552px]">
                    <Image
                        src={rightBottom}
                        alt="dots square"

                    />
                </div>
            </div>
            <div>
                <div className="absolute h-[112px] w-[112px] top-[46px] left-[440px]  sm:left-[90px] sm:w-[149px] sm:h-[149px] sm:top-[126px]">
                    <Image
                        src={topLeft}
                        alt="dots square"

                    />
                </div>
            </div>
            <div>
                <div className="absolute h-[112px] w-[112px] top-[251px] left-[430px]  sm:left-[260px] sm:w-[149px] sm:h-[149px] sm:top-[391px]">
                    <Image
                        src={leftMiddle}
                        alt="dots square"

                    />
                </div>
            </div>
            <div>
                <div className="absolute h-[112px] w-[112px]  sm:left-[-13px] sm:w-[149px] sm:h-[149px] sm:top-[531px]">
                    <Image
                        src={leftBottom}
                        alt="dots square"

                    />
                </div>
            </div>
        </div>
    )
}

export default Boxes