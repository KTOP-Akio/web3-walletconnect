import React from "react";

interface WhitePaperButtonProps {
    text: string;
    onClick: () => void;
}
export default function WhitePaperButton(props: WhitePaperButtonProps) {
    return (
        <div className={`max-w-[187.41px] px-[47px] py-[15px] rounded-[10px] cursor-pointer bg-gradient-radial-whitepaper-button shadow-whitepaper-button`} onClick={props.onClick}>
            <span className="outfit font-bold text-[17px] leading-[22px] tracking-[-0.3px] text-[#020710]">
                {props.text}
            </span>
        </div>
    )
}