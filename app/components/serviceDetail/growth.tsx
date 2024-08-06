import React from 'react'
import Heading from '../heading'
import Image from 'next/image'


export default function Growth() {
    return (
        <div>
            <Heading isCenter={false} title='Our Impactful and Professionally Vetted
SEO Formula for Spectacular Growth' />
            <div className="relative w-full md:h-[480px] h-[400px]">
                <Image
                    src="/service-detail/growth.png"
                    alt="Growth"
                    layout="fill"
                    objectFit="contain"
                    className="max-w-full h-auto"
                    priority
                />
            </div>
        </div>
    )
}