import React from 'react'
import Table from './Table'
import Header from './Header'

function Index() {
  return (
    <div className=' flex flex-col flex-1 w-full h-auto rounded-lg p-3 dark:bg-slate-700 bg-[#fff] shadow lg:py-4 sm:p-5'>
        <Header />
        <Table />
    </div>
  )
}

export default Index