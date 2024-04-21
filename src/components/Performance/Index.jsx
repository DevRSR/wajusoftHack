import React from 'react'
import Card from './Card'
import coin from '../../assets/coin.png'
import rotate3d from '../../assets/3d-rotate.png';
import boxTick from '../../assets/box-tick.png';
import cart from '../../assets/shopping-cart.png';
import { trendsData } from '../../Data/Data'
import { trendsData2 } from '../../Data/Data'







let data = [
  {
    id: 1,
    name: 'Total Order',
    total: '350',
    percentage: 23.5,
    previousMonth: 300,
    dataInfo: trendsData,
    image: boxTick,
    color: '52,202,165',
    textColor: 'green'
  },
  {
    id: 2,
    name: 'Total Refund',
    total:'270',
    percentage: 23.5,
    dataInfo: trendsData2,
    image: rotate3d,
    color: '237,84,78',
    textColor: 'red'
  },
  {
    id: 3,
    name: 'Avarage Sales',
    total: '1567',
    percentage: 23.5,
    dataInfo: trendsData2,
    image: cart,
    color: '237,84,78',
    textColor: 'red'
  },
  {
    id: 4,
    name: 'Total Income',
    total: '$350.000',
    percentage: 23.5,
    dataInfo: trendsData,
    image: coin,
    color: '52,202,165',
    textColor: 'green'
  }
]


function Index() {
  return (
    <div className=' grid gap-5 grid-cols-1 md:grid-cols-2 xl:gap-4 w-full items-center'>
      {data.map((item) => (
        <Card key={item.id} data={item} />
      ))}
    </div>
  )
}

export default Index