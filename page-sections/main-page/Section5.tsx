import TaxInfoCard from "@/components/cards/TaxInfoCard";
import Image from "next/image";
import React from "react";

export default function Section5() {
    const taxData = [
        {
            image: "/assets/images/tax1.png",
            title: "Marketing tax 1%",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            image: "/assets/images/tax2.png",
            title: "Charity tax 1%",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
        },
        {
            image: "/assets/images/tax3.png",
            title: "Liquidity fee 2%",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
    ]
    return (
        <div className="bg-section5-background">
            <div className="py-[60px] flex md:flex-row flex-col justify-center items-center gap-[50px]">
                <div>
                    <Image
                        src="/assets/images/section5.png"
                        alt="Content Image"
                        width={554.59}
                        height={530.39}
                        priority
                    />
                </div>
                <div className="p-[10px] flex justify-center items-center">
                    <TaxInfoCard taxData={taxData} />
                </div>
            </div>
        </div>
    )
}