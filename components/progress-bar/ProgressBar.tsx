import React from "react";

interface ProgressBarProps {
    percent: number;
    text: string;
}
export default function ProgressBar(props: ProgressBarProps) {
    return (
        <div className="relative sm:max-w-[644px] h-[116px] 2xl:mx-0 w-full sm:mx-auto mx-[20px]">
            <div className="absolute top-[11px] w-full flex justify-between">
                <span></span>
                <span className="outfit font-normal text-[16px] leading-[24px] text-white">25%</span>
                <span className="outfit font-normal text-[16px] leading-[24px] text-white">50%</span>
                <span className="outfit font-normal text-[16px] leading-[24px] text-white">75%</span>
                <span></span>
            </div>
            <div className="absolute top-[30.39px] w-full flex justify-between">
                <span></span>
                <span className="outfit font-normal text-[16px] leading-[24px] text-white">|</span>
                <span className="outfit font-normal text-[16px] leading-[24px] text-white">|</span>
                <span className="outfit font-normal text-[16px] leading-[24px] text-white">|</span>
                <span></span>
            </div>
            <div className="absolute top-[48px] w-full h-[30px] rounded-[16px] border-4 border-solid border-white bg-white">
                <div className="h-full rounded-[11px] bg-[#00C3F3]" style={{ width: `${props.percent}%` }}></div>
            </div>
            <div className="absolute top-[78px] w-full outfit font-normal text-[20px] leading-[30px] text-white text-center">
                {props.text}
            </div>
            <div className="absolute top-[16px] left-[-13px] w-[45px] h-[45px] rounded-[50px] bg-[#00C3F3] flex justify-center items-center">
                <span className="outfit font-bold text-[16px] leading-[24px] text-black">{props.percent}%</span>
            </div>
        </div>
    )
}