'use client';
import Image from 'next/legacy/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import Link from 'next/link';
import Button from './ui/button';

const NotFoundContainer = () => {
    const { back } = useRouter();
    return (
        <div>
            <div className="text-center min-h-screen flex flex-col items-center justify-center space-y-4 xl:space-y-9">
                <div className="mx-auto w-full">
                    <Image src="/error.png" width={825} height={450} alt="404-Icon" />
                </div>
                <div className="flex items-center gap-5">
                    <Button
                        onClick={back}
                        className=""
                        label="Back"
                    />
                    <Link href="/">
                        <Button variant={'outlineBtn'} label="Home" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFoundContainer;
