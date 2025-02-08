"use client"
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import { Poppins } from "next/font/google";
import Footer from '../components/Footer';
import { useSelector } from 'react-redux';

const poppins = Poppins({
  subsets: ["latin"],
  weight: "500",
});
interface Icart{
    id: number;
    title: string;
    img_url?:string[] | StaticImageData | string;
    price: number;
    size: string[];
    color:string[];
    qty: number;
    discount?:number;
    vvid:string | number | undefined,
    img1?:string,
    img2?:string,
    img3?:string,
    img4?:string,
};



const Cart = () => {
  const cartItem:Icart =   useSelector((state:any)=> state.Cart);
  console.log(cartItem)

  return (
    <section>
      
      <Header/>
<div>
<div className='w-[1440px] h-[316px]'>
         <Image src="/Image/background1.png" width={1440} height={316} alt='back image'/>
         <div className='w-[124px] h-[132px] mt-[-265px] ml-[660px]'>
          <Image src="/Image/logo.png" width={77} height={77} alt='logo'/>
          <p className={`${poppins.className} ml-[-25px] mt-[-25px] w-[106px] h-[72px] font-[500px] text-[48px] leading-[72px]`}>Cart</p>
         </div>
      
      <div className='ml-[-10px] w-[121px] h-[24px] flex'>
      <p className={`${poppins.className} w-[48px] h-[24px] font-[500px] text-[16px] leading-[24px] ml-[640px] mt-[-5px]`}>Home</p>
      <Image className='mt-[-7px] ml-[6px]' src="/Image/arrow.png" height={25} width={25} alt='arrow'/>
      <p className={`${poppins.className} w-[41px] h-[24px] font-[300px] text-[16px] leading-[24px] mt-[-4px] ml-[6px]`}>Cart</p>
      </div>
      </div>

      {/* 2nd Section: Cart Items and Product Details */}
      <section className="bg-white w-[1440px] h-[525px]">
        <div className="container mx-auto w-[1240px] h-[390px] mt-[100px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* First Column (5 columns layout) */}
            <div className="space-y-6 md:w-[60%]">
              <div className="flex font-bold gap-4 bg-[#FFF9E5] w-[717px]">
                {/* Buttons: Product, Price, Quantity, Subtotal */}
                <button className="ml-[120px] border border-transparent">Product</button>
                <button className="ml-[90px] border border-transparent">Price</button>
                <button className="ml-[100px] border border-transparent">Quantity</button>
                <button className="ml-[30px] border border-transparent">Subtotal</button>
              </div>

              {/* Product Details (5 columns grid) */}
              <div className="grid grid-cols-5">
                {/* First Row */}
                <div></div> {/* Empty cell for layout alignment */}
                <div className="text-[#9F9F9F] gap-4 w-[148px] h-[24px]">
                  <h2 className="text-[16px] font-normal ml-[50px] mt-[45px]">Asgaard Sofa</h2>
                </div>
                <div className="text-[#9F9F9F] gap-4 w-[250px]">
                  <p className=' mt-[45px] ml-[140px]'>Rs. 250,000.00</p>
                </div>
                <div>
                  <input
                    type="number"
                    value="1"
                    className=" p-2 gap-4 border border-gray-300 rounded-md text-center ml-[230px] mt-[45px] w-full"
                  />
                </div>
                <div>
                  <p className="font-normal gap-4 ml-[270px] mt-[45px] w-[200px]">Rs. 250,000.00</p>
                </div>

                {/* Second Row */}
                <div className="flex mt-[-60px] bg-[#FBEBB5]">
                  <Image
                    src="/image/sufa1.png"
                    alt="Asgaard Sofa"
                    width={150}
                    height={150}
                    className="object-cover"
                  />
                </div>
                <div></div> {/* Empty cell for layout alignment */}
                <div></div> {/* Empty cell for layout alignment */}
                <div></div> {/* Empty cell for layout alignment */}
                <div></div> {/* Empty cell for layout alignment */}
              </div>
            </div>

            {/* Second Column for Cart Totals */}
            <div className="bg-[#FFF9E5] p-5 w-[393px] h-[390px] ml-[150px]">
              <h1 className="text-2xl font-bold mb-4 text-center">Cart Totals</h1>

              {/* Subtotal */}
              <div className="flex justify-center py-[40px] ">
                <span className="w-[69px] h-[24px] text-[16px] font-bold">Subtotal</span>
                <span className="text-[#9F9F9F] font-semibold ml-[60px]">Rs. 250,000.00</span>
              </div>

              {/* Total with Golden Color */}
              <div className="flex justify-center ">
                <span className="w-[41px] h-[24px] text-[16px] font-bold">Total</span>
                <span className="text-[20px] font-semibold text-[#B88E2F] ml-[60px]">Rs. 250,000.00</span>
              </div>

              {/* Checkout Button */}
              <button className="w-[222px] h-[58px] ml-[60px]  bg-transparent border border-black rounded-xl text-black text-lg hover:bg-black hover:text-white transition mt-[50px]">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3rd Section: CONCEPT Posts */}
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
    </div>

    <Footer/>
    </section>
  );
}

export default Cart;