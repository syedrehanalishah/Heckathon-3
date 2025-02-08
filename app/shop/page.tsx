"use client"
import React from 'react'
import Header from '../components/Header'
import Image from 'next/image'
import { Poppins } from "next/font/google";
import Link from 'next/link';
import Footer from '../components/Footer';
import { useSelector } from 'react-redux';





const poppins = Poppins({
  subsets: ["latin"],
  weight: "500",
});


const Shop = () => {
const products =   useSelector((state:any)=> state.product);
  return (
    <div>
      <Header/>
    <section className='w-[1440px] h-[3220px]'>
      <div className='w-[1440px] h-[316px]'>
   <Image src="/Image/background1.png" width={1440} height={316} alt='back image'/>
   <div className='w-[124px] h-[132px] mt-[-265px] ml-[660px]'>
    <Image src="/Image/logo.png" width={77} height={77} alt='logo'/>
    <p className={`${poppins.className} ml-[-23px] mt-[-25px] w-[124px] h-[72px] font-[500px] text-[48px] leading-[72px]`}>Shop</p>
   </div>

<div className='w-[121px] h-[24px] flex'>
<p className={`${poppins.className} w-[48px] h-[24px] font-[500px] text-[16px] leading-[24px] ml-[640px] mt-[-5px]`}>Home</p>
<Image className='mt-[-7px] ml-[6px]' src="/Image/arrow.png" height={25} width={25} alt='arrow'/>
<p className={`${poppins.className} w-[41px] h-[24px] font-[300px] text-[16px] leading-[24px] mt-[-4px] ml-[6px]`}>Shop</p>
</div>
<div className='w-[1440px] h-[100px] mt-[150px] bg-[#FAF4F4]'>
 <div className='w-[85px] h-[30px]'>
  <Image className='text-[#000000] pt-[40px] ml-[90px] ' src="/Image/vector.png" width={19} height={16} alt='vector'/>
  <p className={`${poppins.className} ml-[120px] mt-[-25px] w-[48px] h-[30px] font-[400px] text-[20px] leading-[30px]`}>Filter</p>
 </div>
<div className='w-[28px] h-[28px] ml-[195px] mt-[9px]'>
  <Image src="/Image/vector1.png" width={16.33} height={16.33} alt='logo'/>
</div>
<div className='w-[24px] h-[24px] mt-[-30px] ml-[240px]'>
  <Image src="/Image/vector2.png" width={21} height={19} alt='logo'/>
</div>
<div className='w-[237px] h-[37px]  ml-[317px]'>
  <div className='w-[0px] h-[37px] ml-[-20px] mt-[-33px] border-[2px] border-[#9F9F9F]'></div>
  <p className={`${poppins.className} ml-[20px] mt-[-30px] w-[220px] h-[24px] font-[400px] text-[16px] leading-[24px]`}>Showing 1–16 of 32 results</p>
</div>
<div className='w-[126px] h-[55px] ml-[-40px]'>
<p className={`${poppins.className} ml-[897px] mt-[-30px] w-[54px] h-[30px] font-[400px] text-[20px] leading-[30px] text-[#000000]`}>Show</p>
<div className='w-[55px] h-[55px] ml-[970px] mt-[-40px] bg-[#FFFFFF] '>
<p className={`${poppins.className} ml-[15px] pt-[10px] w-[20px] h-[30px] font-[400px] text-[20px] leading-[30px] text-[#9F9F9F]`}>16</p>
</div>
</div>
<div className='w-[288px] h-[55px] ml-[-40px]'>
<p className={`${poppins.className} ml-[1062px] mt-[-54px] w-[100px] h-[30px] font-[400px] text-[20px] leading-[30px] text-[#000000]`}>Short by</p>
<div className='w-[188px] h-[55px] ml-[1162px] mt-[-40px] bg-[#FFFFFF] '>
<p className={`${poppins.className} ml-[52px] pt-[10px] w-[72px] h-[30px] font-[400px] text-[20px] leading-[30px] text-[#9F9F9F]`}>Default</p>
</div>
</div>
</div>

<section className='container mx-auto p-4' >
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {
            products.map((data : any) => {
                return(
                    
                 <div> 
                    <Link href={`/shop/${data.id}`}><div className='aspect-square relative w-[230px] h-[230px]'><Image src={data.img_url} alt={data.title} width={300} height={200} className='object-cover 'sizes='(max-width:768px) 100vw,
                    (max-width: 1200px) 50vw, 33vw' ></Image></div></Link>
                    <div>
                    <p className='font-normal text-lg line-clamp-2'>{data.title}</p>
                    <p className='text-xl font-bold text-muted-foreground'>{data.price}</p>
                    </div>
                 </div>
                )
            })
        }
    </div>
<div className='flex items-center gap-6 mt-[150px] w-[392px] h-[60px] justify-center ml-[350px] radius-[10px]'>
    <div className='w-[60px] h-[60px] bg-[#FBEBB5]  rounded-lg pt-[10px]'>
        <Link className={`${poppins.className} w-[7px] h-[30px] text-[20px] leading-[30px] pl-[25px] `} href="/shop">1</Link>
    </div>
    <div className='w-[60px] h-[60px] bg-[#FFF9E5]  rounded-lg pt-[10px]'>
        <Link className={`${poppins.className} w-[7px] h-[30px] text-[20px] leading-[30px] pl-[25px] `} href="/shop">2</Link>
    </div>
    <div className='w-[60px] h-[60px] bg-[#FFF9E5]  rounded-lg pt-[10px]'>
        <Link className={`${poppins.className} w-[7px] h-[30px] text-[20px] leading-[30px] pl-[25px] `} href="/shop">3</Link>
    </div>
</div>
    <div className='w-[98px] h-[60px] mt-[-60px] pt-[10px] ml-[700px] bg-[#FFF9E5] rounded-lg'>
    <Link className={`${poppins.className} w-[43px] h-[30px] text-[20px] leading-[30px] pl-[25px] `} href="/shop">Next</Link>
    </div>
</section>

    <div className='flex w-[1440px] mt-[100px] h-[300px] bg-[#FAF4F4]'>
<div className='w-[376px] h-[108px] ml-[100px]'>
    <p className={`${poppins.className} w-[205px] h-[48px] font-[500px] text-[32px] leading-[48px] pt-[90px]`}>Free Delivery</p>
    <p className={`${poppins.className} mt-[50px] w-[376px] h-[60px] font-[500px] text-[20px] leading-[30px] text-[#9F9F9F]`} >For all oders over $50, consectetur adipim scing elit.</p>
</div>
<div className='w-[376px] h-[108px] ml-[50px]'>
    <p className={`${poppins.className} w-[244px] h-[48px] font-[500px] text-[32px] leading-[48px] pt-[90px]`}>90 Days Return</p>
    <p className={`${poppins.className} mt-[50px] w-[376px] h-[60px] font-[500px] text-[20px] leading-[30px] text-[#9F9F9F]`} >If goods have problems, consectetur adipim scing elit.</p>
</div>
<div className='w-[376px] h-[108px] ml-[50px]'>
    <p className={`${poppins.className} w-[265px] h-[48px] font-[500px] text-[32px] leading-[48px] pt-[90px]`}>Secure Payment</p>
    <p className={`${poppins.className} mt-[50px] w-[376px] h-[60px] font-[500px] text-[20px] leading-[30px] text-[#9F9F9F]`} >100% secure payment, consectetur adipim scing elit.</p>
</div>
    </div>
    <Footer/>
  </div>
    </section>
    </div>
  )
}

export default Shop
