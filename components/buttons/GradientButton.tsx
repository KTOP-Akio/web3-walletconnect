import React from "react";

interface GradientButtonProps {
    text: string;
    onClick: () => void;
}
export default function GradientButton(props: GradientButtonProps) {
    return (
        <div className={`max-w-[170px] px-[40px] py-[17px] rounded-[10px] cursor-pointer bg-gradient-radial-filled-button shadow-gradient-button`} onClick={props.onClick}>
            <span className="outfit font-bold text-[20px] leading-[22px] tracking-[0.5px] text-white">
                {props.text}
            </span>
        </div>
    )
}