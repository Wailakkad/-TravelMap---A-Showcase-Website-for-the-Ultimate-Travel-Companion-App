import React from 'react'
import { FOOTER_LINKS , FOOTER_CONTACT_INFO, SOCIALS } from '@/constants'
import Link from 'next/link'
import Image from 'next/image'
const Footer = () => {
  return (
    <footer className='flexCenter mb-24'>
      <div className='padding-container max-container flex flex-col w-full gap-6 '> 
        <div className=' flex flex-col items-start justify-center md:flex-row gap-12'>
          <h1 className='font-bold text-3xl text-green-500'>TRAVEL APP</h1>
          <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>
            {
              FOOTER_LINKS.map((column) => (
                      <FooterColumns title={column.title}>
                        <ul className='flex flex-col gap-4 text-gray-30 '>
                          {
                            column.links.map((link)=>(
                              <li className='font-bold' key={link}>{link}</li>
                            ))
                          }
                        </ul>
                      </FooterColumns>
              ))
            }
            <div className=' flex flex-col gap-5'>
              <FooterColumns title={FOOTER_CONTACT_INFO.title}>
                {
                  FOOTER_CONTACT_INFO.links.map((link)=>(
                    <Link href='/' className='flex gap-4 md:flex-col lg:flex-row'>
                      <p className="font-bold">{link.label} :</p>
                      <p className='regular-14 text-gray-30 '>{link.value}</p>
                    </Link>
                  ))
                }
              </FooterColumns>
            </div>
            <div className=''>
              <FooterColumns title={SOCIALS.title}>
                <ul className='flex gap-4'>
                {
                  SOCIALS.links.map((link)=>(
                         <Link href="/" key={link}>
                           <Image src={link} alt="logo" width={24} height={24}/>
                         </Link>
                  ))
                }
                </ul>
              </FooterColumns>
            </div>
          </div>
        </div>
        <div className="border bg-gray-20" />
        <p className="regular-14 w-full text-center text-gray-30">2025 TRAVEL | All rights reserved</p>
      </div>
      
    </footer>

  )
}

type FooterLinksProps ={
  title: string;
  children : React.ReactNode;
}
const  FooterColumns = ({title , children} : FooterLinksProps)=>{
        return(
          <div>
            <h1 className='bold-40 mb-4'>{title}</h1>
            <h2>{children}</h2>
          </div>
        )
}

export default Footer