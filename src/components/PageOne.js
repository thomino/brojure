
import { useState, useEffect, useMemo, useRef } from 'react'
import { motion, AnimatePresence, useScroll } from "framer-motion"
import { Link } from "react-router-dom";

import SRC_COVER from '../assets/img/cover.png';
import SRC_CHEV from '../assets/img/chevron.svg';
import SRC_IMGONE from '../assets/img/image-1.jpg';
import SRC_IMGTWO from '../assets/img/image-2.png';
import SRC_IMGTHREE from '../assets/img/image-3.png';


export function PageOne() {

    return (
        <>
            <motion.div initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 1 }} className='w-full h-full absolute top-0 left-0 grid grid-cols-3 gap-10 no-scrollbar items-center justify-center pt-header p-6'>
                <Article link="/article" id="articleimage" img={SRC_IMGONE} title="Article title" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
                <Article link="/article-two" id="atwo" img={SRC_IMGTWO} title="Article title" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
                <Article link="/article-three" id="athree" img={SRC_IMGTHREE} title="Article title" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
            </motion.div>
        </>

    )
}


export function Article(props) {
    const { img, title, desc, id, link } = props;
    return (
        <Link to={link} className='w-full h-full flex flex-col group'>
            <motion.div layoutId={id} initial={{scale:1, opacity:0}} animate={{scale:1, opacity:1}} transition={{duration:0.3}} className='h-2/3 w-full mb-6 rounded-xl relative overflow-hidden'>
                <div className='w-full h-full absolute z-20 flex items-center justify-center'>
                    <div className='size-14 bg-white shadow-xl backdrop-blur-md dark:bg-zinc-800/80 dark:text-white flex items-center justify-center rounded-full opacity-0 scale-75 rotate-90 transition-all duration-200 group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-0'>+</div>
                </div>
                <motion.img src={img} className='h-full w-full object-cover group-hover:scale-110 transition-all duration-700' />
            </motion.div>
            <motion.div className='w-full' initial={{ y: 100 }} animate={{ y: 0 }} exit={{opacity:0, y:50}} transition={{ duration: 0.3 }}>
                <div className='text-3xl font-italiana mb-2 dark:text-white'>{title}</div>
                <div className='text-base text-gray-500 pr-10'>{desc}</div>
                <div className='flex items-center gap-x-2 text-sm text-gray-500 mt-6 dark:text-zinc-100'>

                    <div className='size-6 rounded-full border border-gray-500 dark:border-white flex items-center justify-center'>
                        <img className='dark:invert' src={SRC_CHEV} />
                    </div>
                    Read More
                </div>
            </motion.div>
        </Link>
    )
}







