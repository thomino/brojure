
import { useState, useEffect, useMemo } from 'react'
import { AnimatePresence, motion, useAnimate, stagger } from "framer-motion"
import { Link, ScrollRestoration, useLocation, useNavigate } from 'react-router-dom';

import SRC_CHEV from '../assets/img/chevron.svg';
import SRC_BURGER from '../assets/img/burger.svg';
import SRC_TOMAS from '../assets/img/tomas.jpg';
import SRC_EMAIL from '../assets/img/email.svg';
import SRC_MOON from '../assets/img/moon.svg';
import SRC_CLOSE from '../assets/img/close.svg';

import SRC_IMGONE from '../assets/img/image-1.jpg';
import SRC_IMGTWO from '../assets/img/image-2.png';
import SRC_IMGTHREE from '../assets/img/image-3.png';

export function Navbar(props) {
    const { title, number, isArticle } = props;
    const navigate = useNavigate();
    const [isLocation, setIsLocation] = useState(false);

    const [isOpen, setIsOpen] = useState(false);

    const handleTrigger = () => setIsOpen(!isOpen);

    return (
        <>
            <AnimatePresence mode='wait'>
                <div className="w-full text-xs flex gap-x-3 pb-8 fixed left-0 top-0 p-6 z-[9999]  text-black bg-transparent dark:text-white justify-between items-center flex-shrink-0">
                    <motion.div className='rounded-full relative z-50 gap-x-2 p-1 pr-8 flex items-center'>
                        <button onClick={handleTrigger} className='size-11 relative z-20 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-zinc-800'>
                            {isOpen ?
                                <motion.img layoutId="navicon" initial={{ rotate: 60 }} animate={{ rotate: 0 }} className='dark:invert' src={SRC_CLOSE} />
                                :
                                <motion.img layoutId="navicon" initial={{ scale: 0.8 }} animate={{ scale: 1 }} className='dark:invert' src={SRC_BURGER} />
                            }
                        </button>
                        <Link className='relative z-20' to="/">Brojure name</Link>
                        {isOpen ?
                            <></>
                            :
                            <>
                                <img className='opacity-30 dark:invert relative z-20' src={SRC_CHEV} />
                                <div className='whitespace-nowrap overflow-hidden relative z-20' layout layoutId="breadcrumb">{title}</div>
                            </>
                        }
                        <motion.div layoutId="burger" className='w-full rounded-full h-full bg-white dark:bg-zinc-900  absolute shadow-sm left-0 top-0 ' />
                    </motion.div>
                    <AnimatePresence>
                        {isOpen &&
                            <ExpandedNav />
                        }
                    </AnimatePresence>

                    {isArticle
                        ?
                        <>
                            <motion.div initial={{ y: -100 }} animate={{ y: 0 }} transition={{ delay: 0.3 }} className='flex gap-x-2'>
                                <Link className='size-11 rounded-full border-2 shadow-md border-white'>
                                    <img src={SRC_IMGONE} className='w-full h-full rounded-full object-cover dark:border-zinc-900' />
                                </Link>
                                <Link className='size-11 rounded-full border-2 shadow-md border-white dark:border-zinc-900 opacity-50 hover:opacity-100'>
                                    <img src={SRC_IMGTWO} className='w-full h-full rounded-full object-cover' />
                                </Link>
                                <Link className='size-11 rounded-full border-2 shadow-md border-white dark:border-zinc-900 opacity-50 hover:opacity-100'>
                                    <img src={SRC_IMGTHREE} className='w-full h-full rounded-full object-cover' />
                                </Link>
                                <Link to="/page-one" className='size-11 rounded-full border-2 shadow-md border-white bg-white dark:bg-zinc-900 flex items-center justify-center'>
                                    <img src={SRC_CLOSE} className='dark:invert size-5' />
                                </Link>
                            </motion.div>
                        </>
                        :
                        <>
                            <div className='rounded-full ml-auto gap-x-2 shadow-sm p-1 bg-white dark:bg-zinc-900 flex items-center'>
                                <button className='size-9 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-zinc-800'>
                                    <img className='size-5 dark:invert rotate-180' src={SRC_CHEV} />
                                </button>
                                <div className='text-xxs'>{number}/5</div>
                                <button className='size-9 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-zinc-800'>
                                    <img className='size-5 dark:invert' src={SRC_CHEV} />
                                </button>
                            </div>
                            <div className='rounded-full gap-x-2 shadow-sm p-1 bg-white dark:bg-zinc-900 flex items-center'>
                                <ThemeSwitcher />
                                <img src={SRC_TOMAS} className='size-9 rounded-full object-cover' />
                            </div>
                        </>
                    }

                </div>
            </AnimatePresence>


        </>
    );
}


export function ExpandedNav({ onClose }) {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.5
            }
        }
    }
    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
    }
    return (
        <motion.div className='w-full h-full fixed flex top-0 left-0 items-start justify-start'>
            <motion.div layoutId="burger" variants={container} className='w-full p-10 pt-28 md:w-[400px] h-full bg-white relative z-20 dark:bg-zinc-800'>
                <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.3 }} exit={{ opacity: 0 }}>
                    <motion.div variants={item} className='w-full menu-item text-2xl font-italiana py-6 border-b border-slate-100'>
                        Cover Page Title
                    </motion.div>
                    <motion.div variants={item} className='w-full menu-item text-2xl font-italiana py-6 border-b border-slate-100'>
                        <Link to="/page-one">Page Title Two</Link>
                        <div className='flex flex-col text-sm mt-4 gap-2 pl-0 font-inter text-slate-400'>
                            <Link to="/article">Article about something</Link>
                            <Link to="/article-two">Great London hotels</Link>
                            <Link to="/article-three">100 Best hotels in California</Link>
                        </div>
                    </motion.div>
                    <motion.div variants={item} className='w-full menu-item text-2xl font-italiana py-6 border-b border-slate-100'>
                        Another Lorem Ipsum
                        <div className='flex flex-col text-sm mt-4 gap-2 pl-0 font-inter text-slate-400'>
                            <Link>San Diego is cool</Link>
                            <Link>Surfing capital</Link>
                        </div>
                    </motion.div>
                    <motion.div variants={item} className='w-full menu-item text-2xl font-italiana py-6 border-b border-slate-100'>
                        One More Sed Um
                    </motion.div>
                    <motion.div variants={item} className='w-full menu-item text-2xl font-italiana py-6'>
                        Contact us
                    </motion.div>
                </motion.div>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='absolute left-0 top-0 bg-black/40 w-full h-full' />
        </motion.div>

    )
}


const ThemeSwitcher = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        setDarkMode(isDarkMode);
    }, []);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode);
        localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode);
    };

    return (
        <button onClick={toggleDarkMode} className='size-9 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-zinc-800'>
            <img className='size-5 dark:invert' src={SRC_MOON} />
        </button>

    );
};