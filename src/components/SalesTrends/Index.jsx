import React, { useState } from 'react'
import SalesTrends from './SaleTrendsHeader'
import Chart from './Chart'
import { monthSalesData } from '../../Data/SalesData'


function Index() {

const[ labelY, setLabelY ] = useState(monthSalesData)

  return (
    <div className=' flex flex-col w-full h-96 p-2 bg-[#fff] dark:bg-slate-700 sm:p-5 rounded-lg shadow'>
        <SalesTrends setLabelY={setLabelY} />
        <div className=' h-80 cursor-pointer'>
            <Chart labelY={labelY} />
        </div>

    </div>
  )
}

export default Index