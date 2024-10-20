// 'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// type LogoProps = {
//   isDashboard?: boolean;
// }

const Logo: React.FC = () => {
    return (
        <div className='w-[130px] md:w-[170px] xl:w-[209px]'>
            <Link href={'/'}>
                <Image
                    className="object-cover w-full"
                    src={'/Logo.png'}
                    // src={isDashboard ? '/DashboardLogo.png' : '/Logo.png'}
                    alt="Logo"
                    width={209}
                    height={200}
                    priority
                />
            </Link>
        </div>
    );
};

export default Logo;
