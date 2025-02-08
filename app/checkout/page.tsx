import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Poppins } from "next/font/google";
import Footer from '../components/Footer';


const poppins = Poppins({
  subsets: ["latin"],
  weight: "500",
});

const Checkout = () => {
  return (
    <div>
      {/* First Section with Tailwind Background */}
      <div className='w-[1440px] h-[316px]'>
               <Image src="/Image/background1.png" width={1440} height={316} alt='back image'/>
               <div className='w-[124px] h-[132px] mt-[-265px] ml-[660px]'>
                <Image src="/Image/logo.png" width={77} height={77} alt='logo'/>
                <p className={`${poppins.className} ml-[-60px] mt-[-25px] w-[106px] h-[72px] font-[500px] text-[48px] leading-[72px]`}>CheckOut</p>
               </div>
            
            <div className='ml-[-10px] w-[121px] h-[24px] flex'>
            <p className={`${poppins.className} w-[48px] h-[24px] font-[500px] text-[16px] leading-[24px] ml-[640px] mt-[-5px]`}>Home</p>
            <Image className='mt-[-7px] ml-[6px]' src="/Image/arrow.png" height={25} width={25} alt='arrow'/>
            <p className={`${poppins.className} w-[41px] h-[24px] font-[300px] text-[16px] leading-[24px] mt-[-4px] ml-[6px]`}>CheckOut</p>
            </div>
            </div>

      {/* 2nd Section: Billing Details and Product Information */}
      <section className="bg-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* First Column: Billing Details */}
            <div className="space-y-6">
              <h1 className="text-3xl font-bold ">Billing Details</h1>
              <form className="space-y-4">
                {/* First Name */}
                <div>
                  <label className="block text-lg font-semibold" htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="Enter your first name"
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                </div>
                {/* Last Name */}
                <div>
                  <label className="block text-lg font-semibold" htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Enter your last name"
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                </div>
                {/* Company Name */}
                <div>
                  <label className="block text-lg font-semibold" htmlFor="companyName">Company Name (optional)</label>
                  <input
                    type="text"
                    id="companyName"
                    placeholder="Enter your company name"
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                </div>
                {/* Country/Region */}
                <div>
                  <label className="block text-lg font-semibold" htmlFor="country">Country/Region</label>
                  <input
                    type="text"
                    id="country"
                    placeholder="Enter your country"
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                </div>
                {/* Street Address */}
                <div>
                  <label className="block text-lg font-semibold" htmlFor="streetAddress">Street Address</label>
                  <input
                    type="text"
                    id="streetAddress"
                    placeholder="Enter your street address"
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                </div>
                {/* Town/City */}
                <div>
                  <label className="block text-lg font-semibold" htmlFor="townCity">Town/City</label>
                  <input
                    type="text"
                    id="townCity"
                    placeholder="Enter your town or city"
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                </div>
                {/* Province */}
                <div>
                  <label className="block text-lg font-semibold" htmlFor="province">Province</label>
                  <input
                    type="text"
                    id="province"
                    placeholder="Enter your province"
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                </div>
                {/* ZIP Code */}
                <div>
                  <label className="block text-lg font-semibold" htmlFor="zipCode">ZIP Code</label>
                  <input
                    type="text"
                    id="zipCode"
                    placeholder="Enter your ZIP code"
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                </div>
                {/* Phone */}
                <div>
                  <label className="block text-lg font-semibold" htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Enter your phone number"
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                </div>
                {/* Email */}
                <div>
                  <label className="block text-lg font-semibold" htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                </div>
                {/* Additional Information */}
                <div>
                  <label className="block text-lg font-semibold" htmlFor="additionalInfo">Additional Information</label>
                  <textarea
                    id="additionalInfo"
                    placeholder="Any additional information"
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                </div>
              </form>
            </div>

            {/* Second Column: Product Information */}
            <div className="space-y-6">
              <h1 className="text-3xl font-bold">Product <span className='text-end'>Sub Total</span> </h1>
              <div className="space-y-4">
                {/* Row 1: Product */}
                <div className="flex justify-between">
                  <span>Asgaard Sofa *1</span>
                  <span>Rs 250,000.00</span>
                </div>
                {/* Row 2: Subtotal */}
                <div className="flex justify-between font-semibold">
                  <span>Subtotal</span>
                  <span>Rs 250,000.00</span>
                </div>
                {/* Row 3: Total */}
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>Rs 250,000.00</span>
                </div>
              </div>
              <hr className="my-4" />
              <h3 className="font-bold text-xl flex items-center space-x-2">
                <span className="w-3 h-3 bg-black rounded-full"></span>
                <span>Direct Bank Transfer</span>
              </h3>
              <p className="text-sm mt-2">
                Make our payment directly into our bank account. Please use your order ID as the payment reference. Your order will not be shipped until your funds shift onto our account.
              </p>
              <h3 className="font-bold text-xl flex items-center space-x-2 mt-4">
                <span className="w-3 h-3 border-2 border-black rounded-full"></span>
                
                <span>Direct Bank Transfer</span>
              </h3>
              <h3 className="font-bold text-xl flex items-center space-x-2 mt-4">
                <span className="w-3 h-3 border-2 border-black rounded-full"></span>
                
                <span>Cash on Delivery</span>
              </h3>
              <p className="text-sm mt-2">
                Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
              </p>
              {/* Place Order Button */}
              <button className="w-full py-2 bg-transparent border border-black rounded-md text-black text-lg hover:bg-black hover:text-white transition">
                Place Order
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
    <Footer/>
    </div>
  )
}

export default Checkout