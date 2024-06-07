import React from "react";
import Timer from "@/components/timer/Timer";
import BrandImage from "@/components/brand-image/BrandImage";
import BuyCard from "@/components/cards/BuyCard";
import ProgressBar from "@/components/progress-bar/ProgressBar";
import Statistics from "@/components/statistics/Statistics";

export default function Section1() {
    return (
        <div className="bg-section1-background">
            <div className="w-full pt-[105px] flex flex-col items-center bg-gradient-radial-section1">
                <div className="mb-[42px]">
                    <BrandImage width={234} height={82} />
                </div>
                <div className="mb-[40px]">
                    <Timer />
                </div>
                <div className="mb-[65px]">
                    <BuyCard />
                </div>
                <div className="mb-[36px] flex 2xl:flex-row flex-col justify-center gap-[56px] w-full">
                    <ProgressBar percent={0} text="Presale Amount received" />
                    <ProgressBar percent={0} text="Your Hard Cap Amount" />
                </div>
                <div className="w-full">
                    <Statistics />
                </div>
            </div>
        </div>
    )

}