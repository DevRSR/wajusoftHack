import React from 'react'
import curvedArrow from '../../assets/curvedArrow.svg'
import downArrow from '../../assets/trending-down.svg'
import Trends from './Trends'

function Card({ data }) {

  return (
    <div className=' bg-white dark:bg-slate-700 flex flex-col items-center w-full p-4 gap-4 rounded-lg shadow hover:shadow-md'>
        <div className="flex items-center w-full justify-between">
            <div className="flex items-center justify-center w-14 h-14 rounded-full border border-slate-200">
                <img className='w-6 h-6' src={ data.image } alt="svg" />
            </div>
            <div className='h-12 w-24 '>
                <Trends trendsData={data.dataInfo} />
            </div>
        </div>

        <div className="flex flex-col justify-start gap-3 lg:gap-[5px] w-full">
            <h4 className='text-left  text-lg font-serif font-medium text-coffee dark:text-slate-200'>{data.name}</h4>
            <p className='text-left  text-2xl font-serif font-semibold text-dark-chocolate dark:text-slate-100'>{data.total}</p>
        </div>

        <div className="flex items-center gap-2 text-xs w-full">
            <div className={`flex ${data.textColor === 'green' ? ' bg-light-green' : 'bg-light-red'} gap-2 p-2 items-center  rounded-full`}>
                <img className=' w-3 h-3 2xl:w-4 2xl:h-4 ' src={ data.textColor === 'green' ? curvedArrow : downArrow } alt='arrow' />
                <p className={` ${data.textColor === 'green' ? 'text-custom-green' : 'text-custom-red'} font-bold font-serif`}>23.5%</p>
            </div>
            <div>
                <p className=' font-sans font-normal dark:text-slate-100 text-chocolate'>vs prev. month</p>
            </div>
        </div>
    </div>
  )
}

export default Card
