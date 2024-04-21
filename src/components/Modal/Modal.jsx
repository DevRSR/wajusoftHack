import React, { forwardRef } from 'react'

const Modal = forwardRef(function Modal({ invoice, status, total }, ref) {
  return (
    <dialog ref={ref} className=' w-1/3 rounded-lg backdrop:bg-black/35' >
        {invoice && <div className=' flex flex-col bg-white dark:bg-black dark:text-white bg-light-red p-6'>
            <h4 className=' text-lg font-semibold mb-4 text-center'>Transaction Detail:</h4>

            <div className=' flex flex-col gap-2'>
                <div className=' flex items-center gap-2 text-sm'>
                    <div>Invoice No:</div>
                    <div>{ invoice.number }</div>
                </div>
                <div className=' flex items-center gap-2 text-sm'>
                    <div>Custumer No:</div>
                    <div>{ invoice.customer }</div>
                </div>
                <div className=' flex items-center gap-2 text-sm'>
                    <div>Invoice date:</div>
                    <div>{ invoice.date }</div>
                </div>
                <div className=' flex items-center gap-2 text-sm'>
                    <div>Status:</div>
                    <div className={`${ status == "Paid" ? 'text-custom-green' : "text-custom-red"}`} >{ status }</div>
                </div>
            </div>

            <div className=' flex flex-col gap-2 my-4'>
                <div className="flex justify-between border-b border-coffee items-center text-sm">
                    <h4 className=' basis-2/3'>Name</h4>
                    <h4>Qty</h4>
                    <h4>Price</h4>
                </div>
                <div className=' flex flex-col gap-2'>
                   { invoice.products.map ( product => (
                        <div className="flex justify-between items-center border-b pb-1 border-coffee">
                                <span className=' basis-2/3'>{ product.name }</span>
                                <span>{ product.quantity }</span>
                                <span>${ product.price }</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className='flex w-full justify-end text-sm'>
                <div className='flex flex-col gap-2'>
                    <p className=' font-bold'>Total Price</p>
                    <span><strong>{ total }</strong></span>
                </div>
                
            </div>

            <form method='dialog' className=' flex items-center justify-center'>
                <button className=' px-4 py-2 hover:bg-light-red focus:bg-light-red focus:text-custom-red hover:text-custom-red rounded-full '>close</button>
            </form>
        </div>}
    </dialog>
  )
})
export default Modal










{/* <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="24px" height="24px" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle style="fill:#25AE88;" cx="25" cy="25" r="25"></circle> <polyline style="fill:none;stroke:#FFFFFF;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" points=" 38,15 22,33 12,25 "></polyline> </g></svg>
<svg fill="#ff0000" height="24px" width="24px"  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 489.00 489.00"  stroke="#ff0000" transform="rotate(0)" strokeWidth="0.00489"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.978"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M244.5,0C109.3,0,0,109.3,0,244.5S109.3,489,244.5,489S489,379.7,489,244.5S379.7,0,244.5,0z M244.5,448.4 c-112.4,0-203.9-91.5-203.9-203.9S132.1,40.6,244.5,40.6s203.9,91.5,203.9,203.9S356.9,448.4,244.5,448.4z"></path> <path d="M354.8,134.2c-8.3-8.3-20.8-8.3-29.1,0l-81.2,81.2l-81.1-81.1c-8.3-8.3-20.8-8.3-29.1,0s-8.3,20.8,0,29.1l81.1,81.1 l-81.1,81.1c-8.3,8.3-8.6,21.1,0,29.1c6.5,6,18.8,10.4,29.1,0l81.1-81.1l81.1,81.1c12.4,11.7,25,4.2,29.1,0 c8.3-8.3,8.3-20.8,0-29.1l-81.1-81.1l81.1-81.1C363.1,155,363.1,142.5,354.8,134.2z"></path> </g> </g> </g></svg>
<div className=' flex flex-col gap-4'>
    <div className='flex'>
        <div>Status:</div>
        <div>{ status }</div>
    </div>
</div> */}