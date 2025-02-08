// import Link from 'next/link'
// import React from 'react'
// import Image from 'next/image'
// import { Poppins } from 'next/font/google'

// const poppins = Poppins({
//     subsets: ["latin"],
//     weight: '400'
// })


// const Header = () => {
//   return (
//     <header className='text-black-900 w-[1440px] h-[100px]'>
// <div className='relative left-[505px] flex position-fixed'>
// <nav className={`${poppins.className} w-[440px] h-[24px] mt-[38px] space-x-16 font-[500px] text-[16px] leading-[24px] pr-[px]`} >
//     <Link className='hover:text-blue-800' href="/">Home</Link>
//     <Link className='hover:text-blue-800' href="/shop">Shop</Link>
//     <Link className='hover:text-blue-800' href="/about">About</Link>
//     <Link className='hover:text-blue-800' href="/contact">Contact</Link>
// </nav>
// <div className='w-[247px] h-[28px] mt-[36px] pl-[100px] space-x-10 flex items-center'>


//     <Image
//      src="/Image/account.png" 
//      width={28} 
//      height={28}
//      alt="Vector"
//      />




//     <Image 
//      src="/Image/search.png" 
//      width={28} 
//      height={28}
//      alt="Vector"
//      />


//     <Image 
//      src="/Image/heart.png" 
//      width={28} 
//      height={28}
//      alt="Vector"
//      />


//     <Image 
//      src="/Image/cart.png" 
//      width={28} 
//      height={28}
//      alt="Vector"
//      />


// </div>
//      </div>
//     </header>
//   )
// }

// export default Header
"use client"
import React, { useRef } from 'react';
import { IoCartOutline, IoHeartOutline, IoSearch, IoPersonOutline } from 'react-icons/io5';

import Link from 'next/link';
import {  AiFillCloseCircle } from 'react-icons/ai';
import { TbShoppingBagX } from 'react-icons/tb';

const Header = () => {
const toggleCart = () => {
if(ref.current.classList.contains('translate-x-full')){
 ref.current.classList.remove('translate-x-full')
 ref.current.classList.add('translate-x-0')
}
else if(!ref.current.classList.contains('translate-x-full')){
   ref.current.classList.remove('translate-x-0')
   ref.current.classList.add('translate-x-full')
  }
}
const ref = useRef<HTMLDivElement>(null);

  return (
      <header className="text-black">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
          

          {/* Navigation Links - Aligned to the right */}
          <nav className="flex flex-col md:flex-row items-center md:items-end text-base justify-between gap-4 md:gap-9 ml-auto">
            <Link className="hover:text-blue" href="/">Home</Link>
            <Link className="hover:text-blue" href="/shop">Shop</Link> 
            <Link className="hover:text-blue" href="/about">About</Link>
            <Link className="hover:text-blue" href="/contact">Contact</Link>
          </nav>

    {/* Icon Section - Aligned to the right */}
<div className="flex items-center gap-3 ml-auto">
  <ul className="flex gap-4">
    <li>
      <Link href="/account">
         <IoPersonOutline className="text-black text-xl hover:bg-black hover:text-white rounded-md" />
      </Link>
    </li>
    <li>
      <Link href="/search">
        <IoSearch className="text-black text-xl  hover:bg-black hover:text-white rounded-md" />
      </Link>
    </li>
    <li>
      <Link href="/favorites">
        <IoHeartOutline className="text-black text-xl  hover:bg-black hover:text-white rounded-md" size={24} />
      </Link>
    </li>
    <li>
     
        <IoCartOutline onClick={toggleCart} className="text-black text-xl  hover:bg-black hover:text-white rounded-md cursor-pointer" size={24} />
      
    </li>
  </ul>
</div>
<div ref={ref} className="sideCart absolute top-0 right-0 w-[417px] h-[716px]  bg-[#ffffff] py-10 px-7 transform transition-transform translate-x-full">
  <h1 className={`font-bold text-xl mt-[-10px] `}>Shopping Cart</h1>
  <span onClick={toggleCart} className="absolute top-5  right-2 mr-[10px]  mt-[10px] text-2xl text-[#9F9F9F]"><TbShoppingBagX className='cursor-pointer' /> </span>
  <h3 className='w-[287px] h-[0px] border-[#D9D9D9] border-[1px] mt-[20px]'></h3>
  <ul>
<li >
  <span>  Furniture for student</span>

</li>

  </ul>
  <div className='mt-[500px] ml-[-10px]'>
  <h3 className='w-[417px] h-[0px] border-[#D9D9D9] border-[1px] mt-[20px]'></h3>
<Link href="/cart"><button className='w-[131px] h-[31px] border-[1px] border-[#000000] rounded-full ml-[50px] hover:bg-black hover:text-white mt-[50px]'>View Cart</button></Link>
<Link href="/checkout"><button className='w-[131px] h-[31px] border-[1px] border-[#000000] rounded-full ml-[50px] hover:bg-black hover:text-white mt-[50px]'>Check Cart</button></Link>
  </div>
</div>
</div>

    
      </header>
  );
};
export default Header

