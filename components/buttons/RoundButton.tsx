import React from "react";

interface RoundButtonProps {
    text: string | undefined;
    onClick: () => void;
}

export default function RoundButton(props: RoundButtonProps) {
    return (
        <div className={`flex items-center justify-center p-[2px] rounded-[70px] bg-gradient-radial-button cursor-pointer`} onClick={props.onClick}>
          <div className={`flex items-center justify-center px-[45px] py-[20px] rounded-[70px] bg-[#030C16]`}>
            <span className='outfit font-bold text-[14px] leading-[14px] tracking-[0.5px] text-white'>
                {props.text}
            </span>
          </div>
        </div>
    )
}