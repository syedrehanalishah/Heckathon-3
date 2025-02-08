import React from "react";
import Header from "../components/Header";
import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from "next/link";
import Footer from "../components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "500",
});

const Account = () => {
  return (
    <section className="w-[1440px] h-[2031px]">
      <Header />
      <div className="w-[1440px] h-[316px]">
        <Image
          src="/Image/background1.png"
          width={1440}
          height={316}
          alt="back image"
        />
        <div className="w-[124px] h-[132px] mt-[-265px] ml-[660px]">
          <Image src="/Image/logo.png" width={77} height={77} alt="logo" />
          <p
            className={`${poppins.className} ml-[-100px] mt-[-25px] w-[285px] h-[72px] font-[500px] text-[48px] leading-[72px]`}
          >
            My Account
          </p>
        </div>

        <div className="ml-[-10px] w-[225px] h-[24px] flex">
          <p
            className={`${poppins.className} w-[48px] h-[24px] font-[500px] text-[16px] leading-[24px] ml-[640px] mt-[-5px]`}
          >
            Home
          </p>
          <Image
            className="mt-[-7px] ml-[6px]"
            src="/Image/arrow.png"
            height={25}
            width={25}
            alt="arrow"
          />
          <p
            className={`${poppins.className} w-[94px] h-[24px] font-[300px] text-[16px] leading-[24px] mt-[-4px] ml-[6px] text-justify`}
          >
            Account
          </p>
        </div>
      </div>
      <div className="w-[1440px] h-[760px] ml-[100px] flex items-center">
        <div className="w-[608px] h-[630px] ml-[100px] mt-[130px]">
          <h1
            className={`${poppins.className} w-[207px] h-[54px] font-[600px] text-[36px] leading-[54px]`}
          >
            Log In
          </h1>
          <form>
            <div className="mt-[30px] w-[424px] h-[121px]">
              <label
                htmlFor="email"
                className={`${poppins.className} w-[224px] h-[24px] font-[500px] text-[16px] leading-[24px] md-[10px]`}
              >
                Username or email address
              </label>
              <input
                type="email"
                id="email"
                placeholder=""
                className="w-[423px] h-[75px] p-5 border border-[#9F9F9F] mt-[15px] rounded-md"
                required
              />
            </div>
            <div className="mt-[30px] w-[424px] h-[121px]">
              <label
                htmlFor="email"
                className={`${poppins.className} w-[78px] h-[24px] font-[500px] text-[16px] leading-[24px] md-[10px]`}
              >
                Password
              </label>
              <input
                type="passward"
                id="passward"
                placeholder=""
                className="w-[423px] h-[75px] p-5 border border-[#9F9F9F] mt-[15px] rounded-md"
                required
              />
            </div>
            <div className="flex items-center mt-[30px]">
              <input
                type="checkbox"
                id="rememberMe"
                className="mr-2 w-[30px] h-[27px]"
              />
              <label
                htmlFor="rememberMe"
                className={`${poppins.className} ml-[10px] w-[120px] h-[24px] font-[400px] text-[16px] leading-[24px]`}
              >
                Remember Me
              </label>
            </div>
            <div className="flex items-center">
              <button
                className={`${poppins.className} font-[400px] text-[20px] leading-[30px] w-[215px] h-[64px] border-[1px] border-[#000000] rounded-md mt-[30px] hover:bg-black hover:text-white`}
              >
                Log In
              </button>
              <Link
              href="#"
                className={`${poppins.className} font-[300px] text-[16px] leading-[24px] w-[200px] h-[24px]  ml-[40px] mt-[30px] `}
              >
                Lost Your Password?
              </Link>
            </div>
          </form>
        </div>
        <div className="w-[608px] h-[630px] mt-[120px] ">
<h1 className={`${poppins.className} w-[151px] h-[54px] font-[600px] text-[36px] leading-[54px]`}>Register</h1>
<form>
<div className="mt-[30px] w-[424px] h-[121px]">
              <label
                htmlFor="email"
                className={`${poppins.className} w-[224px] h-[24px] font-[500px] text-[16px] leading-[24px] md-[10px]`}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder=""
                className="w-[423px] h-[75px] p-5 border border-[#9F9F9F] mt-[15px] rounded-md"
                required
              />
            </div>
            <p className={`${poppins.className} font-[300px] text-[16px] leading-[24px] w-[453px] h-[48px] mt-[30px]`}>A link to set a new password will be sent to your email address.</p>
            <p className={`${poppins.className} font-[300px] text-[16px] leading-[24px] w-[453px] h-[96px] text-justify mt-[20px]`}>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>

            <button
                className={`${poppins.className} font-[400px] text-[20px] leading-[30px] w-[215px] h-[64px] border-[1px] border-[#000000] rounded-md mt-[40px] hover:bg-black hover:text-white`}
              >
                Register
              </button>
</form>
        </div>
      </div>
      <div className='flex w-[1440px] mt-[100px] h-[300px] bg-[#FAF4F4]'>
<div className='w-[376px] h-[108px] ml-[100px]'>
    <p className={`${poppins.className} w-[205px] h-[48px] font-[500px] text-[32px] leading-[48px] pt-[70px]`}>Free Delivery</p>
    <p className={`${poppins.className} mt-[100px] w-[376px] h-[60px] font-[500px] text-[20px] leading-[30px] text-[#9F9F9F]`} >For all oders over $50, consectetur adipim scing elit.</p>
</div>
<div className='w-[376px] h-[108px] ml-[50px]'>
    <p className={`${poppins.className} w-[244px] h-[48px] font-[500px] text-[32px] leading-[48px] pt-[70px]`}>90 Days Return</p>
    <p className={`${poppins.className} mt-[100px] w-[376px] h-[60px] font-[500px] text-[20px] leading-[30px] text-[#9F9F9F]`} >If goods have problems, consectetur adipim scing elit.</p>
</div>
<div className='w-[376px] h-[108px] ml-[50px]'>
    <p className={`${poppins.className} w-[265px] h-[48px] font-[500px] text-[32px] leading-[48px] pt-[70px]`}>Secure Payment</p>
    <p className={`${poppins.className} mt-[100px] w-[376px] h-[60px] font-[500px] text-[20px] leading-[30px] text-[#9F9F9F]`} >100% secure payment, consectetur adipim scing elit.</p>
</div>
    </div>

    <Footer/>
    </section>
  );
};

export default Account;
