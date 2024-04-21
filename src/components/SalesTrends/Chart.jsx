import React from 'react'
import { Bar } from 'react-chartjs-2';

import { Chart as ChartJS } from 'chart.js/auto'


function Chart({ labelY }) {


    

    function getGradient(ctx,chartArea,scales) {
        const { top, bottom, left, right } = chartArea;

        const gradientBg = ctx.createLinearGradient(0,top,0,bottom);

        gradientBg.addColorStop(0.5,"#34CAA5");
        gradientBg.addColorStop(1,'rgba(52, 202, 165, 0.00)')

        return gradientBg;
    }


    

  return (
    <Bar data={
        {
            labels: labelY.map((item) => item.label),
            datasets: [
            {
                data: labelY.map((item) => item.value),
                backgroundColor: 'rgba(52, 202, 165, 0.10)',
                borderRadius: { topRight: 20, topLeft: 20},
                hoverBackgroundColor: (context) => {
                    const { ctx, chartArea, scales } = context.chart;
                    if(!chartArea) {
                        return null
                    }

                    return getGradient(ctx, chartArea, scales)
                },
                hoverBorderWidth: 2,
                hoverOffset: 4,
                maxBarThickness: 30,
            }
            ]
        }
    } options={
        {
            plugins: {
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
                        color: '#78828A',
                        font: (context) => {
                            let width = context.chart.width;
                            let size;
                            if(width < 400) {
                                size = 10
                            } else if(width < 600) {
                                size = 12
                            } else {
                                size = 14
                            }

                            return {
                                size,
                                weight: 600,
                                family: 'plus jakarta sans'
                            }
                        }
    
                    }
                },
                y: {
                    grid: {
                        display: true,
                        color: '#EAEAEA',
                       
                    },
                    border: {
                        dash: [8,4],
                        display: false,
                    },
                    ticks: {
                        color: '#78828A',
                        font:  (context) => {
                            let width = context.chart.width;
                            let size;
                            if(width < 400) {
                                size = 8
                            } else if(width < 600) {
                                size = 10
                            } else {
                                size = 12
                            }

                            return {
                                size,
                                weight: 600,
                                family: 'plus jakarta sans'
                            }
                        },
                        stepSize: 10,
                        callback: (value) => {
                            
                           const format = value.toLocaleString('en-US', {
                                minimumFractionDigits: 3,
                           })

                           return format;
                        }
                    }
                }
            }
        }
    } />
  )
}

export default Chart