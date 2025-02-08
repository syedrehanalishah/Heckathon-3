import React from "react";
import Header from "./Header";
import Image from "next/image";
import { Poppins } from "next/font/google";
import Footer from "./Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

const Hero = () => {
  return (
    <><>
          <>
              <>
                  <>
                      <>
                      <></>
                      <div className="w-[1440px] bg-[#FBEBB5]">
                          <Header/>
                          <section className=" w-[1440px] h-[700px] flex items-center justify-center ">
                              <div className="w-[1440px] h-[700px] mt-[200px]">
                                  <div className="w-[540px] h-[400px] relative left-[200px] flex flex-col items-start justify-center">
                                      <h1
                                          className={` ${poppins.className} font-[500px] text-[66px] leading-[96px]`}
                                      >
                                          Rocket single
                                          <br />
                                          <span>seater</span>
                                      </h1>
                                      <button
                                          className={` ${poppins.className} font-[500px] text-[24px] leading-[36px] pt-[20px] hover:text-red-900 text-3xl`}
                                      >
                                          Shop Now
                                      </button>
                                      <h1 className="w-[121px] h-[0px] border-[2px] border-[#000000] mt-[10px]"></h1>
                                  </div>
                              </div>
                              <div className="w-[1440px] h-[600px] flex items-center justify-center relative left-[-100px] mt-[50px]">
                                  <Image
                                      src="/Image/sufa.png"
                                      width={853}
                                      height={1000}
                                      alt="sufa" />
                              </div>
                  </section>
                  </div></>
                  <section className="bg-[#FAF4F4] w-[1440px] h-[672px] ">
                      <div className="flex justify-between  ml-[-50px]">
                          <div className=" relative left-[60px] pt-[50px] pl-[10px] flex flex-col justify-between items-center">
                              <Image
                                  className="mb-[-180px]"
                                  src="/Image/table1.png"
                                  width={600}
                                  height={1641}
                                  alt="table" />
                              <p
                                  className={`${poppins.className} relative left-[-90px] font-[500px] text-[36px] leading-[54px]`}
                              >
                                  Side table
                              </p>
                              <a
                                  className={`${poppins.className} hover:text-red-900 text-[25px] leading-[36px] text-3xl relative left-[-110px] pt-[10px]`}
                                  href="#"
                              >
                                  View more
                              </a>
                              <h1 className="w-[121px] h-[0px] border-[2px] border-[#000000] ml-[-220px] mt-[10px]"></h1>
                          </div>
                          <div className=" relative left-[60px] pt-[50px] pr-[200px] flex flex-col justify-between items-center">
                              <Image
                                  className="mb-[-180px]"
                                  src="/Image/sidesufa.png"
                                  width={600}
                                  height={1641}
                                  alt="table" />
                              <p
                                  className={`${poppins.className} relative left-[-90px] font-[500px] text-[36px] leading-[54px]`}
                              >
                                  Side table
                              </p>
                              <a
                                  className={`${poppins.className} hover:text-red-900 text-[25px] leading-[36px] text-3xl relative left-[-110px] pt-[10px]`}
                                  href="#"
                              >
                                  View more
                              </a>
                              <h1 className="w-[121px] h-[0px] border-[2px] border-[#000000] ml-[-220px] mt-[10px]"></h1>
                          </div>
                      </div>
                  </section>
              </>
              <section className="w-[1440px] h-[777px] ml-[-30px] bg-[#FFFFFF]">
                  <div>
                      <h1
                          className={`${poppins.className} w-[411px] h-[54px] font-[500px] text-[36px] leading-[54px] ml-[564px] pt-[50px]`}
                      >
                          Top Picks For You
                      </h1>
                  </div>
                  <p
                      className={`${poppins.className} text-[#9F9F9F] text-[16px] leading-[24px] font-[500px] w-[773px] h-[24px] ml-[333px] pt-[60px]`}
                  >
                      Find a bright ideal to suit your taste with our great selection of
                      suspension, floor and table lights.
                  </p>
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
                      className={`${poppins.className} flex flex-col justify-between items-center hover:text-blue-900 text-[25px] leading-[36px] text-3xl mt-[180px]`}
                      href="#"
                  >
                      View more

                  </a>
                  <h1 className="w-[115px] h-[0px] border-[2px] border-[#000000] ml-[662px] mt-[10px]"></h1>
              </section>
          </>
          <section className="w-[1440px] h-[799px] bg-[#FFF9E5] flex">
              <Image  className='ml-[10px]' src="/Image/sufa1.png" height={799} width={900} alt="sufa" />

              <div className="w-[331px] h-[205px] ml-[150px] mt-[300px]">
                  <h1
                      className={`${poppins.className} font-[500px] text-[27px] leading-[36px] `}
                  >
                      New Arrivals
                  </h1>
                  <h1
                      className={`${poppins.className} font-bold text-[49px] leading-[72px] mt-[10px] ml-[-80px] `}
                  >
                      Asgaard sofa
                  </h1>
                  <div className="w-[255px] h-[64px] border-[1px] border-[#000000] ml-[-40px] mt-[40px] hover:bg-blue-700">
                      <p
                          className={`${poppins.className} font-[400px] text-[20px] leadding-[30px] ml-[70px] mt-[15px] hover:text-white`}
                      >
                          Order Now
                      </p>
                  </div>
              </div>
          </section>
      </><section className="w-[1440px] h-[944px] ml-[-40px] bg-[#FFFFFF] ">
              <div className="w-[479px] h-[91px]">
                  <h1
                      className={`${poppins.className} w-[274px] h-[54px] font-[500px] text-[36px] leading-[54px] ml-[650px] pt-[50px]`}
                  >
                      Our Blogs
                  </h1>

                  <p
                      className={`${poppins.className} text-[#9F9F9F] text-[16px] leading-[24px] font-[500px] w-[479px] h-[24px] ml-[500px] pt-[60px]`}
                  >
                      Find a bright ideal to suit your taste with our great selection.
                  </p>
              </div>
              <div className="w-[1240px] h-[679px] ml-[100px] flex">
                  <div>
                      <Image
                          className="text-[#D9D9D9] radius-[10px] mt-[140px] ml-[15px]"
                          src="/Image/laptop1.png"
                          height={393}
                          width={370}
                          alt="laptop1" />
                      <div className="w-[339px] h-[129px] ml-[115px]">
                          <p
                              className={`${poppins.className} font-[400px] text-[20px] leading-[30px] w-[339px] h-[30px] ml-[-85px] mt-[30px]`}
                          >
                              Going all-in with millennial design
                          </p>
                          <h3
                              className={`${poppins.className} font-[500px] text-[24px] leading-[36px] w-[230px] h-[36px] ml-[16px] mt-[15px]`}
                          >
                              Read More
                          </h3>
                          <h1 className="w-[115px] h-[0px] border-[2px] border-[#000000] ml-[20px] mt-[10px]"></h1>
                      </div>
                      <div className="w-[323px] h-[24px] ml-[80px] mt-[-15px] flex items-center justify-between">
                          <Image
                              className="text-[#000000]"
                              src="/Image/clock.png"
                              height={18}
                              width={18}
                              alt="clock" />
                          <span
                              className={`${poppins.className} font-[300px] text-[16px] leading-[24px] w-[100px] h-[24px] ml-[10px]`}
                          >
                              {" "}
                              5 min
                          </span>

                          <div className="w-[300px] h-[24px] ml-[20px] flex ">
                              <Image
                                  className="ml-[-25px]"
                                  src="/Image/date.png"
                                  width={20}
                                  height={10}
                                  alt="date" />
                              <span
                                  className={`${poppins.className} font-[300px] text-[16px] leading-[24px] w-[200px] h-[24px] ml-[10px]`}
                              >
                                  12th Oct 2022
                              </span>
                          </div>
                      </div>
                  </div>
                  <div className="ml-[-40px]">
                      <Image
                          className="text-[#D9D9D9] radius-[10px] mt-[140px] ml-[15px]"
                          src="/Image/laptop2.png"
                          height={393}
                          width={370}
                          alt="laptop2" />
                      <div className="w-[339px] h-[129px] ml-[115px]">
                          <p
                              className={`${poppins.className} font-[400px] text-[20px] leading-[30px] w-[339px] h-[30px] ml-[-85px] mt-[30px]`}
                          >
                              Going all-in with millennial design
                          </p>
                          <h3
                              className={`${poppins.className} font-[500px] text-[24px] leading-[36px] w-[230px] h-[36px] ml-[16px] mt-[15px]`}
                          >
                              Read More
                          </h3>
                          <h1 className="w-[115px] h-[0px] border-[2px] border-[#000000] ml-[20px] mt-[10px]"></h1>
                      </div>
                      <div className="w-[323px] h-[24px] ml-[80px] mt-[-15px] flex items-center justify-between">
                          <Image
                              className="text-[#000000]"
                              src="/Image/clock.png"
                              height={18}
                              width={18}
                              alt="clock" />
                          <span
                              className={`${poppins.className} font-[300px] text-[16px] leading-[24px] w-[100px] h-[24px] ml-[10px]`}
                          >
                              {" "}
                              5 min
                          </span>

                          <div className="w-[300px] h-[24px] ml-[20px] flex ">
                              <Image
                                  className="ml-[-25px]"
                                  src="/Image/date.png"
                                  width={20}
                                  height={10}
                                  alt="date" />
                              <span
                                  className={`${poppins.className} font-[300px] text-[16px] leading-[24px] w-[200px] h-[24px] ml-[10px]`}
                              >
                                  12th Oct 2022
                              </span>
                          </div>
                      </div>
                  </div>

                  <div className="ml-[-40px]">
                      <Image
                          className="text-[#D9D9D9] radius-[10px] mt-[140px] ml-[15px]"
                          src="/Image/laptop3.png"
                          height={393}
                          width={370}
                          alt="laptop3" />
                      <div className="w-[339px] h-[129px] ml-[115px]">
                          <p
                              className={`${poppins.className} font-[400px] text-[20px] leading-[30px] w-[339px] h-[30px] ml-[-85px] mt-[30px]`}
                          >
                              Going all-in with millennial design
                          </p>
                          <h3
                              className={`${poppins.className} font-[500px] text-[24px] leading-[36px] w-[230px] h-[36px] ml-[16px] mt-[15px]`}
                          >
                              Read More
                          </h3>
                          <h1 className="w-[115px] h-[0px] border-[2px] border-[#000000] ml-[20px] mt-[10px]"></h1>
                      </div>
                      <div className="w-[323px] h-[24px] ml-[80px] mt-[-15px] flex items-center justify-between">
                          <Image
                              className="text-[#000000]"
                              src="/Image/clock.png"
                              height={18}
                              width={18}
                              alt="clock" />
                          <span
                              className={`${poppins.className} font-[300px] text-[16px] leading-[24px] w-[100px] h-[24px] ml-[10px]`}
                          >
                              {" "}
                              5 min
                          </span>

                          <div className="w-[300px] h-[24px] ml-[20px] flex ">
                              <Image
                                  className="ml-[-25px]"
                                  src="/Image/date.png"
                                  width={20}
                                  height={10}
                                  alt="date" />
                              <span
                                  className={`${poppins.className} font-[300px] text-[16px] leading-[24px] w-[200px] h-[24px] ml-[10px]`}
                              >
                                  12th Oct 2022
                              </span>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="w-[136px] h-[49px] ml-[650px]">
                  <a
                      className={`${poppins.className} flex justify-center items-center hover:text-blue-900 text-[20px] leading-[36px] font-[500px] mt-[80px]`}
                      href="#"
                  >
                      View All Post

                  </a>
                  <h1 className="w-[115px] h-[0px] border-[2px] border-[#000000] ml-[6px] mt-[10px]"></h1>
                  </div>
          </section></>
          <section className="w-[1440px] h-[450px]">
            <div className="w-[1440px] h-[450px] opacity-[20px] text-[#FAF4F480]">
<Image src="/Image/background.png" width={1440} height={450} alt="background image"/>
<div className={`w-[454px] h-[202px] flex jusyify-center items-center`}>
    <div className={`${poppins.className } w-[454px] h-[120px]`}>
 <h1 className="w-[454px] h-[90px] font-[700px] text-[60px] leading-[90px] text-[#000000] mt-[-350px] ml-[492px]">Our Instagram</h1>
 <p className="w-[297px] h-[30px] font-[400px] text-[20px] leading-[30px] text-[#000000] ml-[560px] mt-[5px]">Follow our store on Instagram</p>
    </div>
    <div className="w-[455px] h-[64px] radius-[50px] mt-[-460px] ml-[160px] dropshadow-[#0000001A] hover:bg-red-200 rounded-full bg-[#FAF4F4]">
        <h3 className={`${poppins.className} font-[400px] text-[20px] leading-[30px] w-[200px] h-[30px] pt-[15px] pl-[55px] ml-[2px] text-[#000000]`}>Follow Us</h3>
    </div>
</div>
            </div>

          </section>
          <Footer/>
    </>
  );
};

export default Hero;
