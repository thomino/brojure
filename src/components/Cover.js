
import { useState, useEffect, useMemo, useRef } from 'react'
import { motion, AnimatePresence, useScroll } from "framer-motion"
import { Link } from "react-router-dom";

import SRC_COVER from '../assets/img/cover.png';


export function Cover() {

  return (
    <>

        <motion.div exit={{opacity:0}} className='w-full h-full p-0 no-scrollbar flex items-center justify-center absolute top-0 left-0'>
          <motion.div initial={{opacity:0}} animate={{opacity:1}} className='absolute w-full h-full top-0 left-0 z-20'>
            {/*<motion.div initial={{width:'100%'}} animate={{width:0}} transition={{duration:0.5}} className='absolute left-0 top-0 h-full w-full bg-gray-100 z-30' />*/}
            <div className='absolute left-0 top-0 h-full w-full bg-black/30 z-20' />
            <motion.img initial={{ scale: 1 }} animate={{ scale: 1.1 }} transition={{ duration: 8 }} className='absolute left-0 top-0 w-full h-full object-cover' src={SRC_COVER} />
          </motion.div>
          <motion.div initial={{opacity:1}} exit={{ opacity: 0 }} className='relative z-30 text-white flex flex-col items-center justify-center'>
            <div className='overflow-hidden'>
              <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className='md:text-7xl text-4xl mb-2 font-italiana'>Cover Layout One</motion.div>
            </div>
            <div className='overflow-hidden mb-10'>
              <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }}>This is me. Lorem ipsum dolor sit amet</motion.div>
            </div>
            <motion.div initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.3, delay: 0.8 }}>
              <Link to="/page-one" className='px-6 py-4 bg-white dark:bg-zinc-800 text-zinc-800 dark:text-white uppercase text-sm'>Explore</Link>
            </motion.div>
          </motion.div>

        </motion.div>

    </>

  )
}








