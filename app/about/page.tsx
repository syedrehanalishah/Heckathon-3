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

const page = () => {
  return (
    <section className="w-[1440px] h-[3981px]">
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
            className={`${poppins.className} ml-[-15px] mt-[-25px] w-[107px] h-[72px] font-[500px] text-[48px] leading-[72px]`}
          >
            Blog
          </p>
        </div>

        <div className="w-[121px] h-[24px] flex">
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
            className={`${poppins.className} w-[41px] h-[24px] font-[300px] text-[16px] leading-[24px] mt-[-4px] ml-[6px]`}
          >
            Blog
          </p>
        </div>
      </div>
      <div className="w-[1440px] h-[2710px] mt-[100px] flex">

        <div className="w-[820px] h-[2490px] ml-[97px]">
          <div className="w-[820px] h-[794px] ">
            <Image src="/Image/pic1.png" width={817} height={500} alt="pic" />
            <div className="w-[349px] h-[24px] flex ">
              <div
                className={` ${poppins.className} flex gap-3  mt-[10px] w-[80px] h-[24px]`}
              >
                <Image
                  src="/Image/logos.png"
                  height={16.15}
                  width={20.48}
                  alt="logo"
                />
                <p className="text-[#9F9F9F] text-[16px] leading-[24px] font-[400px]">
                  Admin
                </p>
              </div>
              <div
                className={`${poppins.className} ml-[60px] flex gap-3 w-[201px] h-[24px] mt-[10px]`}
              >
                <Image
                  src="/Image/logos1.png"
                  width={20.67}
                  height={16.67}
                  alt="logo"
                />
                <p className="text-[16px] leading-[24px] font-[400px] text-[#9F9F9F]">
                  14 Oct 2022
                </p>
              </div>
              <div
                className={`${poppins.className} flex gap-3 w-[78px] h-[24px] mt-[10px] `}
              >
                <Image
                  src="/Image/logos2.png"
                  width={20.91}
                  height={18.91}
                  alt="logo"
                />
                <p className="text-[16px] leading-[24px] font-[400px] text-[#9F9F9F]">
                  Wood
                </p>
              </div>
            </div>
            <h1
              className={`${poppins.className} text-[#000000] font-[500px] text-[30px] leading-[45px] w-[517px] h-[45px] mt-[30px]`}
            >
              Going all-in with millennial design
            </h1>
            <p className={`${poppins.className} font-[400px] text-[15px] leading-[22px] w-[818px] h-[115px] text-[#9F9F9F] text-justify mt-[10px]`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
              mauris vitae ultricies leo integer malesuada nunc. In nulla
              posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus
              at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis
              in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar
              mattis nunc sed blandit libero. Pellentesque elit ullamcorper
              dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean
              euismod elementum.
            </p>
            <div className="w-[89px] h-[36px] mt-[30px]">
              <Link href="/" className={`${poppins.className} font-[400px] text-[16px] leading-[24px] text-justify hover:text-blue-700`}>Read more</Link>
              <h2 className="w-[77px] h-[0px] border-[1px] border-[#000000] ml-[4px] mt-[10px]"></h2>
            </div> 
          </div>
          <div className="w-[820px] h-[794px] mt-[50px] ">
            <Image src="/Image/pic2.png" width={817} height={500} alt="pic" />
            <div className="w-[349px] h-[24px] flex ">
              <div
                className={` ${poppins.className} flex gap-3  mt-[10px] w-[80px] h-[24px]`}
              >
                <Image
                  src="/Image/logos.png"
                  height={16.15}
                  width={20.48}
                  alt="logo"
                />
                <p className="text-[#9F9F9F] text-[16px] leading-[24px] font-[400px]">
                  Admin
                </p>
              </div>
              <div
                className={`${poppins.className} ml-[60px] flex gap-3 w-[201px] h-[24px] mt-[10px]`}
              >
                <Image
                  src="/Image/logos1.png"
                  width={20.67}
                  height={16.67}
                  alt="logo"
                />
                <p className="text-[16px] leading-[24px] font-[400px] text-[#9F9F9F]">
                  14 Oct 2022
                </p>
              </div>
              <div
                className={`${poppins.className} flex gap-3 w-[78px] h-[24px] mt-[10px] `}
              >
                <Image
                  src="/Image/logos2.png"
                  width={20.91}
                  height={18.91}
                  alt="logo"
                />
                <p className="text-[16px] leading-[24px] font-[400px] text-[#9F9F9F]">
                  Wood
                </p>
              </div>
            </div>
            <h1
              className={`${poppins.className} text-[#000000] font-[500px] text-[30px] leading-[45px] w-[517px] h-[45px] mt-[30px]`}
            >
              Exploring new ways of decorating
            </h1>
            <p className={`${poppins.className} font-[400px] text-[15px] leading-[22px] w-[818px] h-[115px] text-[#9F9F9F] text-justify mt-[10px]`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
              mauris vitae ultricies leo integer malesuada nunc. In nulla
              posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus
              at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis
              in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar
              mattis nunc sed blandit libero. Pellentesque elit ullamcorper
              dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean
              euismod elementum.
            </p>
            <div className="w-[89px] h-[36px] mt-[30px]">
              <Link href="/" className={`${poppins.className} font-[400px] text-[16px] leading-[24px] text-justify hover:text-blue-700`}>Read more</Link>
              <h2 className="w-[77px] h-[0px] border-[1px] border-[#000000] ml-[4px] mt-[10px]"></h2>
            </div> 
          </div>
          <div className="w-[820px] h-[794px] mt-[50px] ">
            <Image src="/Image/pic3.png" width={817} height={500} alt="pic" />
            <div className="w-[349px] h-[24px] flex ">
              <div
                className={` ${poppins.className} flex gap-3  mt-[10px] w-[80px] h-[24px]`}
              >
                <Image
                  src="/Image/logos.png"
                  height={16.15}
                  width={20.48}
                  alt="logo"
                />
                <p className="text-[#9F9F9F] text-[16px] leading-[24px] font-[400px]">
                  Admin
                </p>
              </div>
              <div
                className={`${poppins.className} ml-[60px] flex gap-3 w-[201px] h-[24px] mt-[10px]`}
              >
                <Image
                  src="/Image/logos1.png"
                  width={20.67}
                  height={16.67}
                  alt="logo"
                />
                <p className="text-[16px] leading-[24px] font-[400px] text-[#9F9F9F]">
                  14 Oct 2022
                </p>
              </div>
              <div
                className={`${poppins.className} flex gap-3 w-[78px] h-[24px] mt-[10px] `}
              >
                <Image
                  src="/Image/logos2.png"
                  width={20.91}
                  height={18.91}
                  alt="logo"
                />
                <p className="text-[16px] leading-[24px] font-[400px] text-[#9F9F9F]">
                  Wood
                </p>
              </div>
            </div>
            <h1
              className={`${poppins.className} text-[#000000] font-[500px] text-[30px] leading-[45px] w-[632px] h-[45px] mt-[30px]`}
            >
              Handmade pieces that took time to make
            </h1>
            <p className={`${poppins.className} font-[400px] text-[15px] leading-[22px] w-[818px] h-[115px] text-[#9F9F9F] text-justify mt-[10px]`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
              mauris vitae ultricies leo integer malesuada nunc. In nulla
              posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus
              at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis
              in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar
              mattis nunc sed blandit libero. Pellentesque elit ullamcorper
              dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean
              euismod elementum.
            </p>
            <div className="w-[89px] h-[36px] mt-[30px]">
              <Link href="/" className={`${poppins.className} font-[400px] text-[16px] leading-[24px] text-justify hover:text-blue-700`}>Read more</Link>
              <h2 className="w-[77px] h-[0px] border-[1px] border-[#000000] ml-[4px] mt-[10px]"></h2>
            </div> 
          </div> 
        </div>
        <div className="w-[393px] h-[650px]">
          <div className="w-[252px] h-[618px]">
            <h1 className={`${poppins.className} font-[500px] text-[24px] leading-[36px] w-[155px] h-[36px] ml-[100px]`}>Recent Posts</h1>
            <div className="w-[211px] h-[80px] ml-[100px] mt-[50px] radius-[10px] flex">
              <Image src="/Image/image.png" width={80} height={80} alt="pic" />
              <div className={`${poppins.className} ml-[20px] w-[159px] h-[65px]`}>
                <h3 className="h-[45px] w-[139px]">Going all-in with millennial design</h3>
                <p className="text-[#9F9F9F] mt-[5px]">03 Aug 2022</p>
              </div>
            </div>
            <div className="w-[211px] h-[80px] ml-[100px] mt-[50px] radius-[10px] flex">
              <Image src="/Image/image1.png" width={80} height={80} alt="pic" />
              <div className={`${poppins.className} font-[400px] ml-[20px] w-[159px] h-[65px]`}>
                <h3 className="h-[45px] text-[14px] leading-[21px] w-[149px]">Exploring new ways of decorating</h3>
                <p className="text-[#9F9F9F] text-[12px] leading-[18px] mt-[5px]">03 Aug 2022</p>
              </div>
            </div>
            <div className="w-[211px] h-[80px] ml-[100px] mt-[50px] radius-[10px] flex">
              <Image src="/Image/image2.png" width={80} height={80} alt="pic" />
              <div className={`${poppins.className} font-[400px] ml-[20px] w-[189px] h-[65px]`}>
                <h3 className="h-[45px] text-[14px] leading-[21px] w-[170px]">Handmade pieces that took time to make</h3>
                <p className="text-[#9F9F9F] text-[12px] leading-[18px] mt-[5px]">03 Aug 2022</p>
              </div>
            </div>
            <div className="w-[211px] h-[80px] ml-[100px] mt-[50px] radius-[10px] flex">
              <Image src="/Image/image3.png" width={80} height={80} alt="pic" />
              <div className={`${poppins.className} font-[400px] ml-[20px] w-[189px] h-[65px]`}>
                <h3 className="h-[45px] text-[14px] leading-[21px] w-[119px]">Modern home in Milan</h3>
                <p className="text-[#9F9F9F] text-[12px] leading-[18px] mt-[5px]">03 Aug 2022</p>
              </div>
            </div>
            <div className="w-[211px] h-[80px] ml-[100px] mt-[50px] radius-[10px] flex">
              <Image src="/Image/image4.png" width={80} height={80} alt="pic" />
              <div className={`${poppins.className} font-[400px] ml-[20px] w-[189px] h-[65px]`}>
                <h3 className="h-[45px] text-[14px] leading-[21px] w-[119px]">Colorful office redesign</h3>
                <p className="text-[#9F9F9F] text-[12px] leading-[18px] mt-[5px]">03 Aug 2022</p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex items-center gap-6 w-[392px] h-[60px] mt-[2600px] ml-[-850px] radius-[10px]'>
    <div className='w-[60px] h-[60px] bg-[#FBEBB5]  rounded-lg pt-[10px]'>
        <Link className={`${poppins.className} w-[7px] h-[30px] text-[20px] leading-[30px] pl-[25px]`} href="/about">1</Link>
    </div>
    <div className='w-[60px] h-[60px] bg-[#FFF9E5]  rounded-lg pt-[10px]'>
        <Link className={`${poppins.className} w-[7px] h-[30px] text-[20px] leading-[30px] pl-[25px] `} href="/about">2</Link>
    </div>
    <div className='w-[60px] h-[60px] bg-[#FFF9E5]  rounded-lg pt-[10px]'>
        <Link className={`${poppins.className} w-[7px] h-[30px] text-[20px] leading-[30px] pl-[25px] `} href="/about">3</Link>
    </div>
    <div className='w-[98px] h-[60px] pt-[10px] bg-[#FFF9E5] rounded-lg'>
    <Link className={`${poppins.className} w-[43px] h-[30px] text-[20px] leading-[30px] pl-[25px]  `} href="/about">Next</Link>
    </div>
</div>

      </div>  

      <div className='flex w-[1440px] mt-[100px] h-[300px] bg-[#FAF4F4]'>
<div className='w-[376px] h-[108px] ml-[100px]'>
    <p className={`${poppins.className} w-[205px] h-[48px] font-[500px] text-[32px] leading-[48px] pt-[60px]`}>Free Delivery</p>
    <p className={`${poppins.className} mt-[100px] w-[376px] h-[60px] font-[500px] text-[20px] leading-[30px] text-[#9F9F9F]`} >For all oders over $50, consectetur adipim scing elit.</p>
</div>
<div className='w-[376px] h-[108px] ml-[50px]'>
    <p className={`${poppins.className} w-[244px] h-[48px] font-[500px] text-[32px] leading-[48px] pt-[60px]`}>90 Days Return</p>
    <p className={`${poppins.className} mt-[100px] w-[376px] h-[60px] font-[500px] text-[20px] leading-[30px] text-[#9F9F9F]`} >If goods have problems, consectetur adipim scing elit.</p>
</div>
<div className='w-[376px] h-[108px] ml-[50px]'>
    <p className={`${poppins.className} w-[265px] h-[48px] font-[500px] text-[32px] leading-[48px] pt-[60px]`}>Secure Payment</p>
    <p className={`${poppins.className} mt-[100px] w-[376px] h-[60px] font-[500px] text-[20px] leading-[30px] text-[#9F9F9F]`} >100% secure payment, consectetur adipim scing elit.</p>
</div>
    </div>
    <Footer/>
    </section>
  );
};

export default page;
