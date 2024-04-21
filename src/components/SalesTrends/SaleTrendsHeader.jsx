import React from 'react'
import { useState, useRef } from 'react'
import { useClickAway } from 'react-use';
import { motion } from 'framer-motion';
import { monthSalesData, weekSalesData, yearSalesData } from '../../Data/SalesData'


function SaleTrendsHeader({ setLabelY }) {

    const [open, setOpen] = useState(false);
    const [basis, setBasis] = useState('monthly');

    const ref = useRef(null);

    useClickAway(ref, () => {
        if (open) setOpen(false);
    });

    function handleOpen() {
        setOpen(prev => !prev)
    }

    function handleClick (e) {
        setBasis(e.target.innerHTML)
        
        if(e.target.innerHTML === 'Monthly') {
            setLabelY(monthSalesData)
        } else if (e.target.innerHTML === 'Weekly') {
            setLabelY(weekSalesData)
        } else if(e.target.innerHTML === 'Yearly') {
            setLabelY(yearSalesData)
        }
  
    }


    function handleKeyDown(e) {

        
        if(e.key === 'Enter' && e.target.tagName === 'DIV') {
            handleOpen()
        }

        if(e.key === 'Escape') {
            setOpen(false)
        }

    }

  return (
    <div className='w-full flex justify-between items-center mb-4 font-serif'>
        <h1 className=' text-[14px] sm:text-[16px] xl:text-lg font-semibold dark:text-slate-100 text-[#26282c]'>Sales Trends</h1>
        <div className="flex items-center gap-[10px]">
            <p className=' dark:text-slate-100 text-[#3a3f51] text-[10px] sm:text-sm xl:text-sm font-medium'>Short By:</p>

            <div tabIndex='0' aria-controls='drop-down' aria-expanded='false' ref={ref} onKeyDown={ handleKeyDown } onClick={ handleOpen } className=' relative flex items-center px-2 py-1 sm:py-[6px] sm:px-3 border border-slate-100 text-[#3a3f51] text-[10px] sm:text-xs font-normal rounded-full cursor-pointer'>
                <div  className="flex items-center gap-[10px]">
                    <p className=' dark:text-slate-100'>{basis}</p>
                    <svg className={` ${ open ? 'rotate-180' : ''} transition-all delay-100 w-4 h-4 lg:w-[15px] lg:h-[15px] xl:w-5 xl:h-5`} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 21" fill="none">
                        <path className='dark:fill-slate-100' d="M3.72456 7.14131C3.94645 6.91942 4.29367 6.89925 4.53835 7.0808L4.60845 7.14131L9.99984 12.5324L15.3912 7.14131C15.6131 6.91942 15.9603 6.89925 16.205 7.0808L16.2751 7.14131C16.497 7.3632 16.5172 7.71042 16.3356 7.9551L16.2751 8.02519L10.4418 13.8585C10.2199 14.0804 9.87267 14.1006 9.62799 13.919L9.5579 13.8585L3.72456 8.02519C3.48048 7.78112 3.48048 7.38539 3.72456 7.14131Z" fill="black"/>
                    </svg>
                </div>

               { open && 
                 <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: .3 }}
                    exit={{ opacity: 0, y: -10 }}
                    id='drop-down'

                    className="absolute flex flex-col top-9 shadow left-0 right-0 w-auto h-auto gap-2 rounded-lg bg-white dark:text-slate-100 dark:bg-slate-800">
                    <button onClick={ handleClick } className=' hover:bg-slate-100/95 dark:hover:bg-transparent/90 rounded-sm p-1'>Yearly</button>
                    <button onClick={ handleClick } className=' hover:bg-slate-100/95 dark:hover:bg-transparent/90 rounded-sm p-1'>Monthly</button>
                    <button onClick={ handleClick } className=' hover:bg-slate-100/95 dark:hover:bg-transparent/90 rounded-sm p-1'>Weekly</button>
                    <button onClick={ handleClick } className=' hover:bg-slate-100/95 dark:hover:bg-transparent/90 rounded-sm p-1'>Daily</button>
                </motion.div>}
            </div>
           
        </div>
    </div>
  )
}

export default SaleTrendsHeader