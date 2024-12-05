import React from 'react'

function Stripe({val}) {
    console.log(val);
    const {url,number} = val;
  return (
    <div className='w-[16.76%] border-t-2 border-b-2 border-r-2 px-5 py-6 border-zinc-800 flex items-center justify-between'>
        <img className='object-cover' src={url} alt="img" />
        <h5 className='font-semibold'>{number}</h5>
    </div>
  )
}

export default Stripe;