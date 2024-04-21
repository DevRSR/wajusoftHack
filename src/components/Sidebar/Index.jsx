import React, {useRef} from 'react'
import { createPortal } from 'react-dom'
import { useClickAway } from 'react-use';
import MainMenu from '../Menu/Index.jsx';
import { motion } from 'framer-motion';

function Index({ isOpen, setOpen, changeMode, activeMode }) {

    const ref = useRef()

    useClickAway(ref, () => {
        if (isOpen) setOpen(false);
    });


    return createPortal (
        <motion.div 
            initial={{ translateX: '-100px', opacity: 0}}
            animate={{ translateX: 0, opacity: 1}}
            transition={{ duration: .3, delay: 0.2}}
            ref={ref} 
            className={`fixed ${ isOpen ? 'block' : 'hidden' } z-50 p-2 w-auto bg-white md:bg-[#fafafa] dark:bg-slate-800 top-0 bottom-0 md:max-h-full border-r border-coffee overflow-x-hidden no-scrollbar md:w-20 md:flex items-center flex-col md:p-5`}
        >
            <MainMenu isOpen={isOpen} setOpen={setOpen} onChangeMode={changeMode} activeMode={activeMode} />
        </motion.div>, document.getElementById('sidebar')
    )
}

export default Index