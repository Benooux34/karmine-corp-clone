import React from 'react'
import Image from 'next/image'
// ICONS
import { AiOutlineTwitter, AiOutlineInstagram, AiFillYoutube } from 'react-icons/ai'
import { FaTiktok } from 'react-icons/fa'
import { RiShoppingCartLine } from 'react-icons/ri'

function Header() {
  return (
    <header className='fixed top-0 h-[80px] lg:h-[111px] w-full bg-[#0E1014] flex items-center justify-between z-50'>
        <div className='relative h-full w-[13%] lg:w-[10%] flex items-center justify-center border-b border-[#333C4D]'>
            <div className='relative h-[30px] lg:h-[50px] w-[30px] lg:w-[50px]'>
                <Image
                    src="/kcorp-logo.png"
                    alt="Logo de la Karmine Corp"
                    fill
                />
            </div>
            <div className='hidden absolute bottom-0 lg:flex items-center justify-center bg-[#02C8FF] px-3 rounded-t-xl'>
                <span className='text-xs font-semibold'>BETA</span>
            </div>
        </div>
        <div className='h-full w-[40%] lg:w-[70%] border-x border-b border-[#333C4D]'>
            <div className='hidden h-full w-full lg:flex items-center justify-center space-x-10'>
                <span className='headerLink'>ACCUEIL</span>
                <span className='headerLink'>KCORP</span>
                <span className='headerLink'>ESPORT</span>
                <span className='headerLink'>ULTRAS</span>
                <span className='headerLink'>PARTENAIRES</span>
                <span className='headerLink'>BOUTIQUE</span>
            </div>
        </div>
        <div className='h-full w-[40%] lg:w-[20%] border-b border-[#333C4D]'>
            <div className='h-full flex items-center justify-center space-x-1 lg:space-x-3'>
                <div className='bg-transparent hover:bg-[#02C8FF] border border-[#333C4D] rounded-full p-2 transition-all cursor-pointer'>
                    <AiOutlineTwitter className='text-white' />
                </div>
                <div className='bg-transparent hover:bg-[#02C8FF] border border-[#333C4D] rounded-full p-2 transition-all cursor-pointer'>
                    <AiOutlineInstagram className='text-white' />
                </div>
                <div className='bg-transparent hover:bg-[#02C8FF] border border-[#333C4D] rounded-full p-2 transition-all cursor-pointer'>
                    <AiFillYoutube className='text-white' />
                </div>
                <div className='bg-transparent hover:bg-[#02C8FF] border border-[#333C4D] rounded-full p-2 transition-all cursor-pointer'>
                    <FaTiktok className='text-white' />
                </div>
            </div>
        </div>
        <div className='h-full w-[12%] border-b border-l border-[#333C4D]'>
            <div className='h-full flex items-center justify-center'>
                <div className='bg-transparent hover:bg-[#02C8FF] border border-[#333C4D] rounded-full p-2 lg:p-4 transition-all cursor-pointer'>
                    <RiShoppingCartLine className='text-white text-xl lg:text-3xl' />
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header