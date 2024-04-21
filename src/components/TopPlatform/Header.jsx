import React from 'react'

function Header() {
  return (
    <div className='w-full flex justify-between items-center mb-5 font-serif'>
        <h1 className=' dark:text-slate-100 text-xs sm:text-base xl:text-lg lg:text-sm font-semibold text-dark-purple'>Top Platform</h1>
        <button className=' text-sm sm:text-[16px] text-custom-green lg:text-sm xl:text-lg font-medium hover:bg-light-green py-2 px-4 rounded-full'>
            See All
        </button>
    </div>
  )
}

export default Header