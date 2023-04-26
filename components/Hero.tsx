import React from 'react'

function Hero() {
  return (
    <section className='h-[120vh] w-full flex flex-col lg:flex-row mt-[80px] lg:mt-[111px] border-b border-[#333C4D] space-x-0 lg:space-x-5 space-y-5 lg:space-y-0 z-10 p-5'>
        <div className="relative h-[50%] lg:h-full w-full lg:w-[75%] bg-[url('/herosection.webp')] bg-center bg-cover rounded-lg cursor-pointer">
            {/* Filtre */}
            <div className="absolute top-0 h-full w-full bg-[#00000056]" />
            <div className="absolute bottom-10 lg:bottom-[60px] left-10 lg:left-[60px] flex flex-col space-y-2 lg:space-y-4">
                <h2 className='text-3xl lg:text-5xl font-bold text-white'>MAILLOT ULTRA 2023</h2>
                <span className='text-2xl lg:text-3xl font-light text-white'>60€</span>
                <div>
                    <button className='bg-white p-3 lg:p-5'>
                        ACHETER LE PRODUIT
                    </button>
                </div>
            </div>
        </div>
        <div className='h-[50%] lg:h-full w-full lg:w-[25%] space-y-5 pb-5'>
            <div className="relative h-[70%] lg:h-[50%] w-full bg-[url('/product1.webp')] bg-cover bg-center rounded-lg cursor-pointer">
                {/* Filtre */}
                <div className="absolute top-0 h-full w-full bg-[#00000056]" />
                <div className="absolute bottom-5 left-5">
                    <span className='text-white text-lg font-light'>COLLECTION</span>
                    <h2 className='text-white text-xl font-bold pb-2'>Manchette Ultra 2023</h2>
                    <span className='text-white text-5xl'>25€</span>
                </div>
            </div>
            <div className="relative h-[70%] lg:h-[50%] w-full bg-[url('/product2.webp')] bg-cover bg-center rounded-lg cursor-pointer">
                {/* Filtre */}
                <div className="absolute top-0 h-full w-full bg-[#00000056]" />
                <div className="absolute bottom-5 left-5">
                    <span className='text-white text-lg font-light'>COLLECTION</span>
                    <h2 className='text-white text-xl font-bold pb-2'>Manchette Ultra 2023</h2>
                    <span className='text-white text-5xl'>25€</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero