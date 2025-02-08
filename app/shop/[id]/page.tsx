"use client"
import { title } from 'process'
import React, { useState } from 'react'
import { useParams } from 'next/navigation'
import Header from '@/app/components/Header'
import Link from 'next/link'
import Image from 'next/image'
import { FaFacebookF, FaLinkedinIn, FaStar, FaTwitter } from 'react-icons/fa'
import { BiMinus, BiPlus } from 'react-icons/bi'
import { Poppins } from "next/font/google";
import Footer from '@/app/components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import Products from '@/app/Units/Mock'
import { addtocart } from '@/app/Redux/feature/cartSlice'

let star = [<FaStar/>,<FaStar/>,<FaStar/>,<FaStar/>,<FaStar/> ]

const poppins = Poppins({
    subsets: ["latin"],
    weight: "400",
});
const Pro_Detail = () => {
    let dispatch= useDispatch();
    const params = useParams();
    const id = params.id;
    const Products =   useSelector((state:any)=> state.product);
    const item = Products.find((item:any) => item.id  === Number(id))
    
if(!item){
    return <h1>Product Not Found</h1>
}


const [cartItem,setcartItem] = useState(
    {
      id:item.id,
      title:item.title,
      img_url:item.img_url,
      price: item.price,
      size: item.size[0],
      color: item.color[0],
      discount:item.discount,
      qty: item.qty,
      img1:item.img1,
      img2:item.img2,
      img3:item.img3,
      img4:item.img4,
    }
)

  return (
    <div>
        <Header/>
        <div className=" text-lg my-4 ml-[100px]">
        <Link href="/" className="hover:text-black text-gray-500 ml-[10px] mr-[10px]">Home</Link> &gt; 
        <Link href="/shop" className="hover:text-black text-gray-500 ml-[10px] mr-[10px]">Shop</Link> &gt; <span className='border-[1px] h-[37px] w-[0px] border-[#000000] ml-[10px]'></span>
        <span className="ml-[10px] font-semibold">Asgaard Sofa</span>
      </div>

      <div className='flex justify-evenly mt-[50px]'>
       <div className='w-[76px] h-[416px]'>
        <Image src={cartItem.img1} alt='product detail' width={83} height={55} className='bg-[#FFF9E5] w-[100px] h-[80px]  rounded-lg p-2 '></Image>
        <Image src={cartItem.img2} alt='product detail' width={99} height={66} className='bg-[#FFF9E5]  w-[130px] h-[80px] mt-3 rounded-lg p-2'></Image>
        <Image src={cartItem.img3} alt='product detail' width={77} height={115} className='bg-[#FFF9E5] w-[130px] h-[80px] mt-3 rounded-lg p-2'></Image>
        <Image src={cartItem.img4} alt='product detail' width={74} height={44} className='bg-[#FFF9E5]  w-[100px] h-[80px] mt-3 rounded-lg p-2'></Image>
       </div>
    <div className='w-[381px] h-[500px] ml-[-70px] bg-[#FFF9E5] rounded-md '>
    <Image src={cartItem.img_url} alt='product detail' width={330} height={150} className='w-full h-98% mt-[70px] p-3' ></Image>
    </div>
    <div className='w-[600px] h-[700px]'>
        <h1 className='text-2xl md:text-3xl font-bold'>{cartItem.title}</h1>
        <p className='text-[#9F9F9F] text-xl mt-[5px]' >{Number(cartItem.price)* cartItem.qty}</p>
        <p className='text-[#9F9F9F] text-xl mt-[5px]' >{Number(cartItem.discount) > 0 && (Number(cartItem.price)*Number(cartItem.discount)/100)*cartItem.qty}</p>

    

 


        <div className='flex text-[#FFDA5B] mt-[10px] '>{star} <span className='w-[0px] h-[30px] border-[1px] text-[#9F9F9F] ml-[20px] mb-[10px] pt-[30px]'></span> <span className='text-[#9F9F9F] w-[145px] h-[20px] ml-[20px]' >5 Customer Review</span></div>
        <p className='text-justify text-xl font-bold'>Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</p>

            <p className='text-[#9F9F9F] font-bold mt-[30px]'>Size</p>
        <div className='flex gap-4 mt-[20px] cursor-pointer'>
{
    cartItem.size.split(",").map((item:any , i:any)=>{
        return<button onClick={()=>setcartItem({...cartItem,size:item})} className='w-[30px] active:outline h-[30px]  hover:bg-white rounded-md pl-[9px] bg-[#FBEBB5]'>{item}</button>
    })
}
        </div>
        <p className='text-[#9F9F9F] font-bold mt-[30px]'>Colors</p>
<div className="flex mt-[20px] gap-4">
  {
    cartItem.color.split(",").map((item:any , i:any) =>{
        return <button onClick={()=>setcartItem({...cartItem,color:item})} key={i} className='w-[30px] active:outline  h-[30px]  rounded-full' style={{ backgroundColor : item}}></button>
    }) 
  }
  
</div>
        <div className='flex items-center justify-start mt-[10px] space-x-3'>
        <div className='w-[123px] p-3 h-[64px] rounded-md  flex items-center justify-between border-[2px]  '>
           <button onClick={(()=>setcartItem({...cartItem,qty:cartItem.qty<= 1? 1 : --cartItem.qty}))} className='w-10' ><BiMinus/></button> 
            <span className='w-4'>{cartItem.qty}</span>
            <button onClick={(()=>setcartItem({...cartItem,qty:++cartItem.qty}))} className='w-10px'><BiPlus/></button>
        </div>
       <button onClick={()=> dispatch(addtocart({cartItem}))} className='hover:bg-[#000000] hover:text-white border-[1px] border-[#000000] w-[215px] h-[64px] rounded-lg'>Add To Cart</button>


        </div>
       <h3 className='w-[600px] h-[0px] border-[1px] border-[#D9D9D9]  mt-[60px] '></h3>
        <div className="grid grid-cols-2 gap-4 mt-[50px]">
            <ul>
              <li className="text-sm text-[#9F9F9F]">SKU      : SS001</li>
              <li className="text-sm text-[#9F9F9F]">Category : Sofa</li>
              <li className="text-sm text-[#9F9F9F]">Tags     : Sofa, Chair, Home, Shop</li>
   <li className="text-sm text-[#9F9F9F]  flex gap-3">Share    : 
                {['facebook', 'linkedin', 'twitter'].map((platform) => (
                  <Link key={platform} href={`www.${platform}.com`} className="social-btn">
                    {platform === 'facebook' && <FaFacebookF className='bg-[#000000] rounded-full text-white'/>}
                    {platform === 'linkedin' && <FaLinkedinIn  className='bg-[#000000] rounded-full text-white'/>}
                    {platform === 'twitter' && <FaTwitter  className='bg-[#000000] rounded-full text-white'/>}
                  </Link>
                ))}
              </li>
            </ul>
          </div>
    </div>
       </div>

       <section className='w-[1440px] h-[764px] '>
       <h3 className='w-[1400px] h-[0px] border-[1px] border-[#D9D9D9]  mt-[60px] '></h3>

       <div className='w-[649px] h-[36px] flex justify-center items-center gap-10 ml-[350px] mt-[50px] '>
 <p className={`${poppins.className} w-[136px] h-[36px] text-[24px] font-[400px] leading-[36px]  `}>Description</p>
 <p className={`${poppins.className} w-[279px] h-[36px] text-[24px] font-[400px] leading-[36px] text-[#9F9F9F]  `}>Additional Information</p>
 <p className={`${poppins.className} w-[138px] h-[36px] text-[24px] font-[400px] leading-[36px] text-[#9F9F9F] `}>Reviews [5]</p>

       </div>

       <div className='w-[1026px] h-[174px] flex flex-col justify-between ml-[170px] mt-[50px]'>
 <p className={`${poppins.className} w-[1026px] h-[48px] text-[16px] font-[400px] leading-[24px] text-[#9F9F9F] text-justify `}>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
 <p className={`${poppins.className} w-[1026px] h-[96px] text-[16px] font-[400px] leading-[24px] text-[#9F9F9F]  `}>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>

       </div>
       <div className='w-[1239px] h-[348px] flex justify-between  ml-[50px] mt-[50px]  '>
        <div className='bg-[#FFF9E5]'><Image src="/Image/cloud1.png" width={605} height={348} alt='cloudsofa' /></div>
        <div className='bg-[#FFF9E5]'><Image src="/Image/cloud2.png" width={605} height={348} alt='cloudsofa' /></div>
       </div>
       <h3 className='w-[1400px] h-[0px] border-[1px] border-[#D9D9D9] mt-[50px] '></h3>

       </section>
      <section className="w-[1440px] h-[777px] ml-[-30px] bg-[#FFFFFF]">
                       <div>
                           <h1
                               className={`${poppins.className} w-[411px] h-[54px] font-[500px] text-[36px] leading-[54px] ml-[564px] pt-[50px]`}
                           >
                               Related Products
                           </h1>
                       </div>

                       <div className="flex justify-between items-center">
                           <div className="w-[287px] h-[372px] ml-[100px]">
                               <Image
                                   className="mt-[100px]"
                                   src="/Image/chair1.png"
                                   width={750}
                                   height={385}
                                   alt="chair 1" />
                               <div className="mt-[15px] w-[300px] h-[100px] ">
                                   <h3
                                       className={`${poppins.className} h-[24px] leading-[24px] text-[16px] font-[400px]`}
                                   >
                                       Trenton modular sofa_3
                                   </h3>
                                   <h3
                                       className={`${poppins.className} h-[24px] leading-[36px] text-[24px] font-[500px] text-black-1000 mt-[10px] `}
                                   >
                                       Rs. 25,000.00
                                   </h3>
                               </div>
                           </div>
                           <div className="w-[287px] h-[397px] ml-[35px]">
                               <Image
                                   className="ml-[-25px] mt-[150px]"
                                   src="/Image/chair2.png"
                                   width={700}
                                   height={300}
                                   alt="chair 2" />
                               <div className="mt-[56px] w-[212px] h-[96px] ml-[-30px] ">
                                   <h3
                                       className={`${poppins.className} h-[48px] leading-[24px] text-[16px] font-[400px]`}
                                   >
                                       Granite dining table with dining chair
                                   </h3>
                                   <h3
                                       className={`${poppins.className} h-[24px] leading-[36px] text-[24px] font-[500px] text-black-1000 mt-[10px] `}
                                   >
                                       Rs. 25,000.00
                                   </h3>
                               </div>
                           </div>
                           <div className="w-[287px] h-[397px] ml-[35px]">
                               <Image
                                   className="ml-[-25px] mt-[120px]"
                                   src="/Image/chair3.png"
                                   width={250}
                                   height={376}
                                   alt="chair 3" />
                               <div className="mt-[47px] w-[194px] h-[71px] ml-[-45px]">
                                   <h3
                                       className={`${poppins.className} h-[24px] leading-[24px] text-[16px] font-[400px]`}
                                   >
                                       Outdoor bar table and stool
                                   </h3>
                                   <h3
                                       className={`${poppins.className} h-[24px] leading-[36px] text-[24px] font-[500px] text-black-1000 mt-[30px] `}
                                   >
                                       Rs. 25,000.00
                                   </h3>
                               </div>
                           </div>
                           <div className="w-[287px] h-[397px] ml-[50px]">
                               <Image
                                   className="ml-[-80px] mt-[150px]"
                                   src="/Image/chair4.png"
                                   width={287}
                                   height={287}
                                   alt="chair 4" />
                               <div className="mt-[53px] w-[194px] h-[71px] ml-[-95px]">
                                   <h3
                                       className={`${poppins.className} h-[24px] leading-[24px] text-[16px] font-[400px]`}
                                   >
                                       Plain console with teak mirror
                                   </h3>
                                   <h3
                                       className={`${poppins.className} h-[24px] leading-[36px] text-[24px] font-[500px] text-black-1000 mt-[30px] `}
                                   >
                                       Rs. 25,000.00
                                   </h3>
                               </div>
                           </div>
                       </div>
                       <a
                           className={`${poppins.className} flex flex-col justify-between items-center hover:text-blue-900 text-[25px] leading-[36px] text-3xl mt-[180px] ml-[-30px]`}
                           href="#"
                       >
                           View more
     
                       </a>
                       <h1 className="w-[115px] h-[0px] border-[2px] border-[#000000] ml-[646px] mt-[10px]"></h1>
                   </section>

                   <Footer/>
       
      </div>
  )
}

export default Pro_Detail