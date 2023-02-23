'use client';
import React from 'react'
import Link from 'next/link';
import { Settings, User, Grid, Calendar } from "react-feather";
import { usePathname } from "next/navigation";
import clsx from "clsx"
import path from 'path';

const icons = { Settings, User, Grid, Calendar };



const SidebarLink = ({link}: {link:any}) => {
    const pathname = usePathname();
    let isActive = false;
    if(pathname === link.link){
        isActive = true;
    }
    {/* @ts-expect-error Server Component */}
    const Icon= icons[link.icon];
  return (
    <Link href='link.link'>
        <Icon size={40} className={clsx(
          "stroke-gray-400 hover:stroke-violet-600 transition duration-200 ease-in-out",
          isActive && "stroke-violet-600")}/>
    </Link>
  )
}

export default SidebarLink