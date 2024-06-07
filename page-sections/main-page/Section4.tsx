import Analasys from "@/components/analasis/Analasis";
import PieChart from "@/components/chart/PieChart";
import React from "react";

export default function Section4() {
    return (
        <div className="pt-[79.44px] pb-[114.36px] px-[40px] flex md:flex-row flex-col justify-center items-center gap-[185px] bg-[#020710]">
            <Analasys public={70} integrate={16} creator={10} />
            <PieChart />
        </div>
    )
}