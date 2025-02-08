import React from 'react'
import Header from '../components/Header'
import Image from 'next/image'
import { Poppins } from "next/font/google";
import Footer from '../components/Footer';

const poppins = Poppins({
  subsets: ["latin"],
  weight: "500",
});

const page = () => {
  return (
    <section className='w-[1440px] h-[2415px]'>
      <Header/>
         <div className='w-[1440px] h-[316px]'>
         <Image src="/Image/background1.png" width={1440} height={316} alt='back image'/>
         <div className='w-[124px] h-[132px] mt-[-265px] ml-[660px]'>
          <Image src="/Image/logo.png" width={77} height={77} alt='logo'/>
          <p className={`${poppins.className} ml-[-55px] mt-[-25px] w-[196px] h-[72px] font-[500px] text-[48px] leading-[72px]`}>Contact</p>
         </div>
      
      <div className='ml-[-10px] w-[121px] h-[24px] flex'>
      <p className={`${poppins.className} w-[48px] h-[24px] font-[500px] text-[16px] leading-[24px] ml-[640px] mt-[-5px]`}>Home</p>
      <Image className='mt-[-7px] ml-[6px]' src="/Image/arrow.png" height={25} width={25} alt='arrow'/>
      <p className={`${poppins.className} w-[41px] h-[24px] font-[300px] text-[16px] leading-[24px] mt-[-4px] ml-[6px]`}>Contact</p>
      </div>
      </div>
      <div className=' w-[1440px] h-[1144px] mt-[100px] ml-[513px] bg-[#FFFFFF]'>
        <h1 className={`${poppins.className} w-[475px] h-[54px] font-[600px] text-[36px] leading-[54px]`}>Get In Touch With Us</h1>
        <p className={`${poppins.className} text-center w-[644px] h-[48px] font-[400px] text-[16px] leading-[24px] ml-[-120px] text-[#9F9F9F]`}>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
      </div>
      <div className='w-[1058px] h-[923px]'>
      <div className='w-[393px] h-[537px] mt-[-950px] ml-[191px]'>

        <div className='flex items-center'>
          <Image className='ml-[20px]' src="/Image/location.png" width={22} height={29} alt='location'/>
      <div className= 'pl-[40px] pt-[70px]'>
          <h3 className={`${poppins.className}  w-[99px] h-[36px] font-[500px] text-[24px] leading-[36px]`}>Address</h3>
          <p className={`${poppins.className} w-[212px] h-[72px] font-[400px] text-[16px] leading-[24px]`}>236 5th SE Avenue, New York NY10000, United States</p>
      </div>
      </div>
      <div className='flex items-center'>
          <Image className='ml-[20px]' src="/Image/phone.png" width={22} height={29} alt='phone'/>
      <div className= 'pl-[40px] pt-[70px]'>
          <h3 className={`${poppins.className}  w-[99px] h-[36px] font-[500px] text-[24px] leading-[36px]`}>Phone</h3>
          <p className={`${poppins.className} w-[212px] h-[72px] font-[400px] text-[16px] leading-[24px]`}>Mobile: +(84) 546-6789
          Hotline: +(84) 456-6789</p>
      </div>
      </div>
      <div className='flex items-center mt-[-20px]'>

          <Image className='ml-[20px]' src="/Image/time.png" width={22} height={29} alt='clock'/>
      <div className= 'pl-[40px] pt-[70px]'>
          <h3 className={`${poppins.className}  w-[166px] h-[36px] font-[500px] text-[24px] leading-[36px]`}>Working Time</h3>
          <p className={`${poppins.className} w-[312px] h-[76px] font-[400px] text-[16px] leading-[24px]`}>Monday-Friday: 9:00 - <br />
             22:00 <br />
          Saturday-Sunday: 9:00 - <br />21:00</p>
      </div>
      </div>
        
       
        </div>
<div className='w-[635px] h-[923px] mt-[-500px] ml-[616px]'>
<div>
  <label htmlFor="name" className={`${poppins.className} w-[111px] h-[24px] font-[500px] text-[16px] leading-[24px] md-[10px]`}>
    Your Name
  </label>
  <input type="text"
  id='name'
  placeholder='Abc'
  className='w-full h-[75px] p-5 border border-[#9F9F9F] mt-[30px] rounded-md'
  required />
</div>
<div className='mt-[40px]'>
  <label htmlFor="email" className={`${poppins.className} w-[111px] h-[24px] font-[500px] text-[16px] leading-[24px] md-[10px]`}>
    Email Address
  </label>
  <input type="email"
  id='email'
  placeholder='Abc@def.com'
  className='w-full h-[75px] p-5 border border-[#9F9F9F] mt-[30px] rounded-md'
  required />
</div>
<div className='mt-[40px]'>
  <label htmlFor="subject" className={`${poppins.className} w-[111px] h-[24px] font-[500px] text-[16px] leading-[24px] md-[10px]`}>
    Subject
  </label>
  <input type="text"
  id='subject'
  placeholder='This is an optional'
  className='w-full h-[75px] p-5 border border-[#9F9F9F] mt-[30px] rounded-md'
  required />
</div>
<div className='mt-[40px]'>
  <label htmlFor="message" className={`${poppins.className} w-[111px] h-[24px] font-[500px] text-[16px] leading-[24px] md-[10px]`}>
    Message
  </label>
  <textarea 
  id='message'
  placeholder="I'd like to ask about "
  className='w-full h-[120px] p-5 border border-[#9F9F9F] mt-[30px] rounded-md'
  required ></textarea>
</div>
<div className='mt-[40px]'>
  <button type='submit'
  className={`${poppins.className} w-[237px] h-[48px] border border-black rounded-md text-black text-lg hover:bg-black hover:text-white transition`}>Submit</button>
</div>
</div>
<div className='flex w-[1440px] mt-[100px] h-[300px] bg-[#FAF4F4]'>
<div className='w-[376px] h-[108px] ml-[100px]'>
    <p className={`${poppins.className} w-[205px] h-[48px] font-[500px] text-[32px] leading-[48px] pt-[50px]`}>Free Delivery</p>
    <p className={`${poppins.className} mt-[100px] w-[376px] h-[60px] font-[500px] text-[20px] leading-[30px] text-[#9F9F9F]`} >For all oders over $50, consectetur adipim scing elit.</p>
</div>
<div className='w-[376px] h-[108px] ml-[50px]'>
    <p className={`${poppins.className} w-[244px] h-[48px] font-[500px] text-[32px] leading-[48px] pt-[50px]`}>90 Days Return</p>
    <p className={`${poppins.className} mt-[100px] w-[376px] h-[60px] font-[500px] text-[20px] leading-[30px] text-[#9F9F9F]`} >If goods have problems, consectetur adipim scing elit.</p>
</div>
<div className='w-[376px] h-[108px] ml-[50px]'>
    <p className={`${poppins.className} w-[265px] h-[48px] font-[500px] text-[32px] leading-[48px] pt-[50px]`}>Secure Payment</p>
    <p className={`${poppins.className} mt-[100px] w-[376px] h-[60px] font-[500px] text-[20px] leading-[30px] text-[#9F9F9F]`} >100% secure payment, consectetur adipim scing elit.</p>
</div>
    </div>
    <Footer/>


      </div>

      
    </section>
  )
}

export default page
