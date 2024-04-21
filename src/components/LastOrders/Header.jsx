import React from 'react'

function Header() {
  return (
    <div className='w-full flex justify-between items-center mb-5 font-serif'>
        <h1 className=' text-sm sm:text-[16px] dark:text-slate-100 xl:text-lg font-semibold text-dark-purple'>Last Orders</h1>
        <button className=' text-custom-green text-sm sm:text-[16px] xl:text-lg font-medium py-2 px-4 hover:bg-light-green rounded-full'>
            See All
        </button>
    </div>
  )
}

export default Header