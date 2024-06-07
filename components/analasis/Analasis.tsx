import React from "react";

interface AnalasysProps {
    public: number;
    integrate: number;
    creator: number;
}
export default function Analasys(props: AnalasysProps) {
    return (
        <div className="outfit font-bold text-[36px] leading-[90px] flex flex-col">
            <span className="text-[#85FF67]">
                • {props.public}% - Public
            </span>
            <span className="text-[#7176FF]">
                • {props.integrate}% - Integrated cloud project
            </span>
            <span className="text-[#FF7967]">
                • {props.creator}% - Project creator
            </span>
        </div>
    )
}