import React from "react";

interface StatisticsDetailProps {
    title: string;
    value: number;
}
function StatisticsDetail(props: StatisticsDetailProps) {
    return (
        <div className="flex flex-col gap-[1px]">
            <span className="outfit font-normal text-[14px] leading-[21px] text-[#B2B7B6]">
                {props.title}:
            </span>
            <span className="outfit font-normal text-[16px] leading-[24px] text-white">
                ${props.value.toLocaleString()} ETH
            </span>
        </div>
    )
}
export default function Statistics() {
    return (
        <div className="flex justify-between max-w-[1100px] mx-auto px-[40px]">
            <StatisticsDetail title="Presale Amount Received" value={0} />
            <StatisticsDetail title="Maximum Presale Amount Allocated" value={700000} />
            <StatisticsDetail title="ShuBex Price" value={0.02} />
        </div>
    )
}