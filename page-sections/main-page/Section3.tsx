"use client"
import WhitePaperButton from "@/components/buttons/WhitePaperButton";
import Image from "next/image";
import React from "react";

export default function Section3() {
    const whitePaperButtonClicked = () => {

    }
    return (
        <div className="pb-[80px] flex md:flex-row flex-col justify-center bg-[#020710]">
            <div className="pt-[21.64px]">
                <Image
                    src="/assets/images/section3.png"
                    alt="Content Image"
                    width={570}
                    height={568.56}
                    priority
                />
            </div>
            <div className="min-w-[570px] relative ps-[40px] pt-[80px] flex flex-col">
                <div className="ms-[10px] mt-[110px] mb-[41.79px] outfit font-bold text-[48px] leading-[52.8px] text-white">
                    ShuBex
                </div>
                <div className="ms-[13px] outfit font-normal text-[24px] leading-[34.2px] text-[#A4A9AC] mb-[63px]">
                    Name: Shubex <br /> Ticker: SBX <br /> Total supply: 799 billion <br /> 999 billion for the supply
                </div>
                <div className="ms-[10.5px]">
                    <WhitePaperButton text="WhitePaper" onClick={whitePaperButtonClicked} />
                </div>
                <div className="absolute top-[172px] right-[106px]">
                    <Image
                        src="/assets/images/effect.png"
                        alt="Effect Image"
                        width={50}
                        height={50}
                        priority
                    />
                </div>
            </div>
        </div>
    )
}