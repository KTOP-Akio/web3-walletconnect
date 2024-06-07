"use client"
import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import RoundButton from "../buttons/RoundButton";

interface TokenCardProps {
    where: string;
    balance: number;
    token: string;
    value: number;
    image: string;
    imageSize: number;
}
function TokenCard(props: TokenCardProps) {
    return (
        <div className="w-[297px] h-[112px] rounded-[8px] bg-[#1E2334] shadow-token-card pt-[9px] pb-[10px] ps-[15px] flex flex-col justify-between">
            <div className="flex justify-between w-[257.33px]">
                <span className="outfit font-normal text-[14px] leading-[21px] text-[#00C3F3]">
                    {props.where}
                </span>
                <span className="outfit font-normal text-[14px] leading-[21px] text-[#919494]">
                    Balance: {props.balance}
                </span>
            </div>
            {props.token === 'ETH' ? 
                <div className="w-[33px] h-[15px] rounded-[4px] bg-[#00C3F3] flex items-center justify-center cursor-pointer mt-[6.41px] mb-[7.59px]">
                    <span className="outfit font-bold text-[9px] leading-[21px] text-[#1B181E]">MAX</span>
                </div>
                :
                <></>
            }
            <div className="flex justify-between items-center w-[263.5px] ps-[10px]">
                <div className={`outfit font-bold text-[20px] leading-[24.2px] ${props.token === 'ETH' ? "text-[#9CA3AF]" : "text-white"}`}>
                    {props.token === "ETH" ? props.value.toFixed(1) : props.value}
                </div>
                <div className={`rounded-[50px] bg-[#353A4B] flex items-center cursor-pointer ${props.token === 'ETH' ? "w-[88px] py-[7.5px] ps-[11px] gap-[8.63px]" : "w-[105px] py-[5px] ps-[7px] gap-[5px]"}`}>
                    <Image
                        className="rounded-full"
                        src={props.image}
                        alt="Token"
                        width={props.imageSize}
                        height={props.imageSize}
                        priority
                    />
                    <span className="outfit font-bold text-[14px] leading-[24px] text-white">
                        {props.token}
                    </span>
                </div>
            </div>
        </div>
    )
}
export default function BuyCard() {
    const buyBottonClicked = () => {

    }
    return (
        <div className="rounded-[8px] border border-solid border-[#364463] bg-[#021123] shadow-buy-card px-[26px] pt-[28px] pb-[22px]">
            <div className="outfit font-bold text-[17px] leading-[25.5px] text-white mb-[32.09px]">
                Please Enter The ETH Amount
            </div>
            <div className="flex flex-col items-center">
                <div className="flex md:flex-row justify-center items-center gap-[9px] mb-[32px] flex-col">
                    <TokenCard where="From" balance={0} value={0} token="ETH" image="/assets/images/eth.png" imageSize={25} />
                    <div className="w-[40px] h-[40px] rounded-[20px] flex items-center justify-center border border-solid border-[#506D7D] cursor-pointer">
                        <FaArrowRight size={16} color="#506D7D" className="leading-[24px] font-black rotate-90 md:rotate-0" />
                    </div>
                    <TokenCard where="To" balance={0} value={0} token="ShuBex" image="/assets/images/SBX3 1.png" imageSize={30} />
                </div>
                <span className="outfit font-light text-[15px] leading-[22.5px] text-[#B2B7B6] mb-[1px]">
                    ShuBex remaining for your wallet limit: 75000.00 (0 ETH)
                </span>
                <span className="outfit font-light text-[16px] leading-[24px] text-white mb-[1px] mb-[30px]">
                    Minimum Per Transaction is $500, Maximum For Presale is $5,000
                </span>
                <RoundButton text="BUY NOW" onClick={buyBottonClicked} />
            </div>
        </div>
    )
}