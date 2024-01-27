import React from 'react'
import Iphone from "../assets/iphone.png"

const Hero = () => {
  return (
    <section className='flex flex-col items-center justify-center p-14'>
      <div className='text-center font-sans'>
        <h1 className='font-bold text-[3.8rem] text-gray-900'>iPhone X</h1>
        <h3 className='font-semibold text-[2rem] text-gray-900'>Say hello to the future</h3>
        <div className='flex justify-center items-center gap-6 text-[1.5rem] text-blue-500'>
          <h5><a href="https://www.apple.com/in/store?afid=p238%7Cs8Vs8GkTq-dc_mtid_187079nc38483_pcrid_680861337326_pgrid_112258962467_pntwk_g_pchan__pexid__&cid=aos-IN-kwgo-brand--slid---product-">Learn More!</a></h5>
          <h5><a href="https://www.apple.com/in/store">Buy!</a></h5>
        </div>
      </div>
      <img src={Iphone} alt="" />
    </section>
  )
}

export default Hero