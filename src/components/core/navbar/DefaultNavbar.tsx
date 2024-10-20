'use client';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import React, { useState } from 'react';
// import MenuIcon from '../icons/publicIcon/MenuIcon';
import { usePathname } from 'next/navigation';
// import { defaultNavMenuData } from '@/data/defaultNavMenuData';
import Link from 'next/link';
// import Logo from '../logo/Logo';
import Button from '@/components/ui/button';
import { defaultNavMenuData } from '@/components/data/public-data';
import Logo from '../logo/Logo';
import MenuIcon from '../icons/publicIcon/MenuIcon';

// Hamburger menu
const DefaultHamburgerMenu: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <aside>
            <Sheet open={open} onOpenChange={() => setOpen(!open)}>
                <SheetTrigger>
                    {/* Menu */}
                    <MenuIcon size={'32'} />
                </SheetTrigger>
                <SheetContent>
                    <DefaultNavMenuList />
                </SheetContent>
            </Sheet>
        </aside>
    );
};

// Menu List
export const DefaultNavMenuList: React.FC = () => {
    const pathname = usePathname();

    return (
        <div className="flex flex-col pl-7 py-16 lg:gap-10 lg:pl-0 lg:py-0 lg:flex-row lg:items-center whitespace-nowrap">
            {defaultNavMenuData.map((i) => (
                <div key={Math.random()}>
                    <Link
                        className={` text-w-title-1-Medium-22 ${pathname === i.url ? 'text-primary-color underline' : ''
                            }`}
                        href={i.url}
                    >
                        {i.title}
                    </Link>
                </div>
            ))}
        </div>
    );
};

// Default Navbar
const DefaultNavbar: React.FC = () => {
    return (
        // 
        <div className="w-full fixed bg-white border-b  top-0 left-0 z-30 ">
            <nav className="flex relative justify-between oc-commonContainer  items-center pt-4 pb-[10px] md:pt-6 md:pb-5">
                <div>
                    <Logo />
                </div>
                <div className="hidden lg:block absolute right-1/2 top-2/2 transform translate-x-1/2">
                    <div className="flex justify-center">
                        <DefaultNavMenuList />
                    </div>
                </div>
                <div className="flex items-center gap-2 md:gap-[10px] cursor-pointer xl:gap-5 justify-end">
                    <div>
                        <Link href={'/quote'}>
                            <Button variant={'primarybtn'} label={'Contact Us'} />
                        </Link>
                    </div>
                    <div className="block lg:hidden pl-2">
                        <DefaultHamburgerMenu />
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default DefaultNavbar;
