import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: "500",
});

const Footer = () => {
    return (
        <section className="w-[1440px] h-[555px] bg-[#FFFFFF]">
            <div className="w-[1240.01px] h-[419px] ml-[100px]">
                <div className="w-[1131px] h-[312px] ">
                    <p
                        className={`${poppins.className} mt-[250px] font-[400px] text-[16px] leading-[24px] w-[285px] h-[72px] text-[#9F9F9F]`}
                    >
                        400 University Drive Suite 200 Coral Gables,
                        <br />
                        FL 33134 USA
                    </p>
                    <div className="w-[710px] h-[312px] mt-[-200px] ml-[450px]">
                        <div className={`w-[352px] h-[312px] `}>
                            <div className="w-[68px] h-[312px] ">
                                <p
                                    className={`${poppins.className} w-[40px] h-[24px] font-[500px] text-[16px] leading-[24px] text-[#9F9F9F]`}
                                >
                                    Links
                                </p>
                                <div
                                    className={`${poppins.className} mt-[30px] font-[500px] text-[16px] leading-[24px] w-[66px] h-[233px]`}
                                >
                                    <ul className="flex flex-col">
                                        <li className="mt-[50px]">Home</li>
                                        <li className="mt-[50px]">Shop</li>
                                        <li className="mt-[50px]">About</li>
                                        <li className="mt-[50px]">Contact</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="w-[140px] h-[242px] mt-[-314px] ml-[250px]">
                                <p
                                    className={`${poppins.className} w-[37px] h-[24px] font-[500px] text-[16px] leading-[24px] text-[#9F9F9F]`}
                                >
                                    Help
                                </p>
                                <div
                                    className={`${poppins.className} w-[140px] h-[163px] font-[500px] text-[16px] leading-[24px] mt-[30px] `}
                                >
                                    <ul className="flex flex-col">
                                        <li className="mt-[50px]">Payment Options</li>
                                        <li className="mt-[50px]">Returns</li>
                                        <li className="mt-[50px]">Privacy Policies</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="w-[286px] h-[101px] mt-[-314px] ml-[470px] ">
                            <p
                                className={`${poppins.className} w-[86px] h-[24px] font-[500px] text-[16px] leading-[24px] text-[#9F9F9F]`}
                            >
                                Newsletter
                            </p>
                            <div
                                className={`${poppins.className} font-[500px] text-[14px] leading-[21px] w-[286px] h-[24px]`}
                            >
                                <p className="w-[200px] h-[21px] text-[#9F9F9F] mt-[80px]">
                                    Enter Your Email Address
                                </p>
                                <h1 className="w-[200px] h-[0px] border-[1px] border-[#000000]"></h1>
                                <p className="w-[75px] h-[21px] text-[#000000] mt-[-22px] ml-[215px] cursor-pointer hover:bg-red-500 rounded ">
                                    SUBSCRIBE
                                </p>
                                <h1 className="w-[75px] h-[0px] border-[1px] border-[#000000] ml-[215px]"></h1>
                            </div>
                        </div>
                        <h1 className="w-[1240px] h-[0px] border-[1px] border-[#D9D9D9] mt-[300px] ml-[-450px]"></h1>
                        <div className="w-[1240px] h-[59px] mt-[50px] ml-[-450px]">
                            <p
                                className={`${poppins.className} w-[400px] h-[2px] font-[400px] text-[16px] leading-[24px] text-[#000000]`}
                            >
                                2022 Meubel House. All rights reverved
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
