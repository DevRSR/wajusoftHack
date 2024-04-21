import React from 'react'
import Header from './Header'
import { motion } from 'framer-motion'

const data = [
    {
        name: 'Book Bazaar',
        amount: '$2,500,000',
        percent: '+15%',
        color: 'bg-[#6160DC]',
        width: '54.2%'
    },
    {
        name: 'Artisan Aisle',
        amount: '$1,800,000',
        percent: '+10%',
        color: 'bg-[#54C5EB]',
        width: '45.1%'
    },
    {
        name: 'Toy Troop',
        amount: '$1,200,000',
        percent: '+8%',
        color: 'bg-[#FFB74A]',
        width: '27%'
    },
    // {
    //     name: 'X-Store',
    //     amount: '$2,500,000',
    //     percent: '+15%',
    //     color: 'bg-[#6160DC]',
    //     width: 'w-[245px]'
    // },
    
]

function Index() {
  return (
    <div className=' xl:ml-[6px] w-full p-5 bg-[#fff] dark:bg-slate-700 md:p-4  rounded-lg shadow flex-1 xl:max-h-[542px]'>
        <div>
            <Header />
        </div>
        { data.map(item =>(
        <div key={item.name} className=' flex flex-col mb-5 items-center w-full font-serif'>
            <div className="flex flex-col gap-4 w-full">
                <div className="w-full">
                    <h4 className=' dark:text-slate-100 text-[#222426] text-xs sm:text-sm lg:text-[12px] xl:text-lg font-semibold'>{ item.name}</h4>
                </div>

                <div class="w-full bg-gray-100 rounded-full h-2 sm:h-3 lg:h-2 xl:h-3">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: item.width }} 
                        transition={{ duration: .6, delay: 0.5}}
                        className={`${item.color} ${item.color} h-full  leading-none rounded-full`}
                    ></motion.div>
                </div>

                <div className="flex justify-between items-center w-full">
                    <p className=' text-xs sm:text-sm dark:text-slate-100 text-[#525252] lg:text-[12px] xl:text-lg font-normal'>{ item.amount}</p>
                    <p className=' text-xs sm:text-sm dark:text-slate-100 text-[#525252] lg:text-[12px] xl:text-lg font-normal'>{ item.percent}</p>
                </div> 

            </div>
        </div>))}
    </div>
  )
}

export default Index


