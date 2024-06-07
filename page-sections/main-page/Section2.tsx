"use client"
import BrandImage from "@/components/brand-image/BrandImage";
import GradientButton from "@/components/buttons/GradientButton";
import Image from "next/image";
import React from "react";

export default function Section2() {
    const buyNowButtonClicked = () => {

    }
    return (
        <div className="bg-section2-background">
            <div className="md:py-[105px] py-[20px] flex md:flex-row flex-col justify-center bg-gradient-radial-section2">
                <div className="ps-[20px] pb-[20px] flex flex-col">
                    <div className="ms-[16px] mt-[163px] mb-[18.28px]">
                        <BrandImage width={438} height={154} />
                    </div>
                    <div className="ms-[10px] outfit font-semibold md:text-[64px] text-[48px] leading-[70.4px] text-white mb-[64.72px]">
                        MERGING MINTING <br /> AI TECH <br /> WITH HUMANITY
                    </div>
                    <div className="ms-[25.5px]">
                        <GradientButton text="Buy Now" onClick={buyNowButtonClicked} />
                    </div>
                </div>
                <div className="p-[40px] flex items-center justify-center">
                    <Image
                        src="/assets/images/section2.png"
                        alt="Content Image"
                        width={504.23}
                        height={710}
                        priority
                    />
                </div>
            </div>
        </div>
    )

}