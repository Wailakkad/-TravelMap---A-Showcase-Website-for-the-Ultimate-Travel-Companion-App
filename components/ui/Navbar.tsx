import React from 'react'
import Link from 'next/link'

import { NAV_LINKS } from '@/constants'
import { Button } from "@/components/ui/button"
import { Menu, LogIn } from "lucide-react";


const Navbar = () => {
  return (
    <nav className='flexBetween max-container padding-container relative z-30 py-5 '>
        <Link href="/" className='font-bold text-2xl'><h1>TRAVEL<span className='text-green-400'>MAP</span></h1></Link>

        <ul className='hidden h-full gap-12 lg:flex'>
            { 
                NAV_LINKS.map((link) => (
                    <Link href={link.href} key={link.href} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                        {link.label}
                    </Link>
                ))
            }
        </ul>
        <div className='lg:flexCenter hidden'>
        <Button className='bg-black text-white '>
            <Link href="/login">Login</Link>   <LogIn className="w-6 h-6 text-blue-500" />
         </Button>

        </div>
        <Menu className="w-6 h-6 text-gray-700 inline-block cursor-pointer lg:hidden" />
    </nav>
    
  )
}

export default Navbar;
