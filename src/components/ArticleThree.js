
import { useState, useEffect, useMemo, useRef } from 'react'
import { motion, AnimatePresence, useScroll } from "framer-motion"
import { Link } from "react-router-dom";

import SRC_COVER from '../assets/img/cover.png';
import SRC_CHEV from '../assets/img/chevron.svg';
import SRC_IMGONE from '../assets/img/image-1.jpg';
import SRC_IMGTWO from '../assets/img/image-2.png';
import SRC_IMGTHREE from '../assets/img/image-3.png';


export function ArticleThree() {

    return (
        <>
            <motion.div initial={{ opacity: 0, y: 0 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className='w-full relative z-20 md:py-32 min-h-1/2 top-0 left-0 flex gap-10 px-20 no-scrollbar overflow-auto items-center justify-center bg-gray-100'>
                <motion.div initial={{ y: 200, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4 }} className='w-1/2 pr-10 flex-shrink-0'>
                    <div className='text-8xl font-italiana'>This is an article example</div>
                </motion.div>
                <motion.div layoutId='athree' className='w-1/2 h-full relative overflow-hidden flex-shrink-0'>
                    {/*<motion.div initial={{ width: '100%' }} animate={{ width: 0 }} transition={{ duration: 0.5 }} className='absolute right-0-0 top-0 h-full w-full bg-gray-100 z-30' />*/}
                    <motion.img  initial={{ scale: 1 }} animate={{ scale: 1.2 }} transition={{ duration: 3 }} src={SRC_IMGTHREE} className='w-full h-full object-cover' />
                </motion.div>
            </motion.div>
            <div className='max-w-xl mx-auto'>
                <div className='text-base'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</div>
            </div>
        </>

    )
}










