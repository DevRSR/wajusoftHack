import React from 'react'
import { Line } from 'react-chartjs-2'

import { Chart as ChartJS } from 'chart.js/auto'


function Trends({ trendsData }) {


    function getGradient(ctx,chartArea) {
        const { top, bottom, left, } = chartArea;

        const gradientBg = ctx.createLinearGradient(0,top,0,bottom);

        gradientBg.addColorStop(0,`rgba(${trendsData.color}, 0.3)`);
        gradientBg.addColorStop(1,`rgba(${trendsData.color},0)`)

        return gradientBg;
    }

  return (
    <Line data={
        {
            labels: trendsData.data.map((item) => item.week),
            datasets: [
            {
                data: trendsData.data.map((item) => item.value),
                borderColor: `rgba(${trendsData.color}, 1)`,
                borderRadius: { topRight: 20, topLeft: 20},
                borderWidth: 1,
                hoverBackgroundColor: 'green',
                hoverBorderWidth: 2,
                hoverOffset: 4,
                pointRadius: 0, 
                borderCapStyle: 'round',
                fill: true,
                backgroundColor: (context) => {
                    const { ctx, chartArea } = context.chart;
                    if(!chartArea) {
                        return null
                    }

                    return getGradient(ctx, chartArea)
                },
            }
            ]
        }
    } 
    options={
        {
            plugins: {
                filler: {
                    propagate: false,
                },
                legend: {
                    display: false
                },
                tooltip: {
                    xAlign: 'center',
                    yAlign: 'bottom',
                    displayColors: false,
                    bodyFont: {
                        size: 12,
                        weight: 500,
                        family: 'Inter'
                    },
                    
                    callbacks: {
                        label: (context) => {
                            const label = context.dataset.label || '';
                            const formatter = new Intl.NumberFormat('en-US', {
                                style: 'currency',
                                currency: 'USD',
                                minimumFractionDigits: 3,
                            });
                            const value = context.parsed.y;
                            return `${label} ${formatter.format(value)}`;
                        },
                        title: (context) => {
                            
                            return ''
                        }
                    }
                },
            
            },
            maintainAspectRatio: false,
            scales: {
                x: {
                    grid: {
                        display: false,
                    },
                    ticks: {
                        display: false,
                    },
                    border: {
                        display: false,
                    }
                },
                y: {
                    grid: {
                        display: false,                   
                    },
                    ticks: {
                       display: false,                       
                        stepSize: 10,
                        
                    },
                    border: {
                        display: false,
                    }
                }
            }
        }
    } 
    />
  )
}

export default Trends