import { useState } from 'react'
import SideBar from './components/Sidebar/Index'
import Header from './components/Header/Index'
import LastOrders from './components/LastOrders/Index'
import TopPlatform from './components/TopPlatform/Index'
import SalesTrends from './components/SalesTrends/Index'
import Performance from './components/Performance/Index'



function App() {
  const [isOpen, setOpen] = useState(false);
  const [activeMode, setActiveMode] = useState(false);

  function handleMode() {
    if(document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      setActiveMode(false)
    } else {
      document.documentElement.classList.add('dark');
      setActiveMode(true)
    }
  }


  return (
    <div className=' flex w-full md:w-[calc(100%-80px)] md:ml-20 bg-[#fafafa]'>
     <SideBar isOpen={ isOpen } setOpen={setOpen} changeMode={handleMode} activeMode={activeMode} />

     <div className=" relative flex flex-col w-full h-24 bg-[#fafafa] dark:bg-slate-800">

      <div className=' fixed top-0 left-0 w-full md:left-20 md:w-[calc(100%-80px)] bg-white z-10'>
        <Header setOpen={setOpen} isOpen={ isOpen }  activeMode={activeMode} />
      </div>
      <div className="flex flex-col xl:flex-row dark:bg-slate-800 bg-[#fafafa] gap-5 lg:gap-[15px] p-2 sm:p-3 xl:gap-5 xl:p-5 mt-[88px] w-full">

        <div className="flex justify-between dark:bg-slate-800 bg-[#fafafa] flex-col gap-5">
          <SalesTrends /> 
          <LastOrders />
          
        </div>

        <div className="flex flex-1 bg-[#fafafa] dark:bg-slate-800 justify-between flex-col gap-5">
          <Performance />
          <TopPlatform />
        </div>
       
      </div>
     </div>
    </div>
   
  )
}

export default App
