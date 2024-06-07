import React from "react";

interface CounterProps {
    count: number;
    unit: string;
}

function Counter(props: CounterProps) {
    const text_count = "" + Math.floor((props.count % 60) / 10) + (props.count % 10);
    return (
        <div className="flex flex-col items-center">
            <span className="outfit font-medium text-[34px] leading-[51px] text-[#00C3F3]">{text_count}</span>
            <span className="outfit font-normal text-[16px] leading-[24px] text-[#B2B7B6]">{props.unit}</span>
        </div>
    )
}

export default function Timer() {
    return (
        <div className="sm:w-[528px] h-[75px] flex justify-between gap-[30px] w-full">
            <Counter count={0} unit="Days" />
            <Counter count={0} unit="Hours" />
            <Counter count={0} unit="Minutes" />
            <Counter count={0} unit="Seconds" />
        </div>
    )
}