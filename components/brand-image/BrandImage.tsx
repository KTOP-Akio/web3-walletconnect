import Image from "next/image";
import React from "react";

interface BrandImageProps {
    width: number;
    height: number;
}

export default function BrandImage(props: BrandImageProps) {
    return (
        <Image
            src="/assets/images/brand.png"
            alt="Brand"
            width={props.width}
            height={props.height}
            priority
        />
    )
}