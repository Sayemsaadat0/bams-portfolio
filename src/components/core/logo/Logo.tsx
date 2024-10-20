// 'use client';
import Image from 'next/legacy/image';
import Link from 'next/link';
import React from 'react';
import logo from '../../../../public/BAMSLogo.svg'

// type LogoProps = {
//   isDashboard?: boolean;
// }

const Logo: React.FC = () => {
    return (
        <div className='w-[130px] md:w-[170px] xl:w-[209px] '>
            <Link href={'/'} className='flex items-center gap-3'>
                <div className='shrink-0 inline-block'>
                    <Image
                        className="object-cover w-full"
                        src={logo || ''}
                        // src={isDashboard ? '/DashboardLogo.png' : '/Logo.png'}
                        alt="Logo"
                        width={40}
                        height={40}
                        priority
                    />
                </div>
                <p className='bg-gradient-to-r from-primary-color  to-secondary-color bg-clip-text text-transparent text-xl hidden sm:block md:text-3xl xl:text-4xl font-bold'>Bams</p>
            </Link>
        </div>
    );
};

export default Logo;
