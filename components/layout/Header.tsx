"use client"
import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import RoundButton from '../buttons/RoundButton';

import { useWeb3Modal } from '@web3modal/wagmi/react'
import { useAccount } from 'wagmi';

export default function Hearder() {
  const menus = [
    {
      item: "Whitepaper",
      link: "/whitepaper"
    },
    {
      item: "Tokenomics",
      link: "/tokenomics"
    },
    {
      item: "Community",
      link: "/community"
    }
  ]
  const { address, isConnected } = useAccount();
  const { open } = useWeb3Modal()

  return (
    <div className='w-full h-[104px] absolute top-[1px]'>
      <header className="flex items-center justify-between max-w-[1448px] h-full mx-auto 2xl:px-0 px-[20px]">
        <div className='flex h-full items-center'>
          <Link href="/" className='flex items-center gap-2.5 h-[52px]'>
            <Image
              src="/assets/images/SBX3 1.png"
              alt="Logo"
              width={52}
              height={52}
              priority
            />
            <span className='outfit font-bold text-[23px] tracking-[0.5px] leading-[14px] text-white'>
              SHUBEX
            </span>
          </Link>
          <div className='hidden lg:flex items-center gap-9 max-w-[920px] h-full px-[58px]'>
            {menus.map((menu, index) => (
              <Link key={index} href={menu.link} className='outfit font-normal text-[16px] leading-[24px] text-[#B2B7B6] hover:text-white'>{menu.item}</Link>
            ))}
          </div>
        </div>
        <div className='flex items-center gap-[65px] h-[58px] ps-[10px]'>
          <div className='hidden md:block w-[2px] h-[28px] opacity-20 bg-white'></div>
          {!isConnected ? (
            <RoundButton text='CONNECT WALLET' onClick={() => open()} />
          ) : (
            <RoundButton text={address?.substring(0, 10) + "..." + address?.substring(address?.length - 4)} onClick={() => open()} />
          )}
        </div>
      </header>
    </div>
  );
};
