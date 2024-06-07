import Image from "next/image";
import React from "react";

interface TaxInfoCardProps {
    taxData: {
        image: string,
        title: string,
        text: string
    }[]
}
export default function TaxInfoCard(props: TaxInfoCardProps) {
    return (
        <div className="flex flex-col gap-[20px]">
            {props.taxData.map((data, index) => (
                <div key={index} className={`rounded-[10px] px-[30px] ${index === 0 ? "bg-gradient-radial-tax-card1" : "bg-gradient-radial-tax-card2"} flex gap-[23px]`}>
                    <div className="pt-[30px]">
                        <Image
                            src={data.image}
                            alt="Tax"
                            width={45.48}
                            height={45.48}
                            priority
                        />
                    </div>
                    <div className="py-[22px] flex flex-col gap-[0.8px]">
                        <span className="outfit font-bold text-[24px] leading-[40.8px] text-[#6DDFF6]">
                            {data.title}
                        </span>
                        <span className="outfit font-normal text-[16px] leading-[24px] text-[#FFFFFF] opacity-70 max-w-[460px]">
                            {data.text}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    )
}