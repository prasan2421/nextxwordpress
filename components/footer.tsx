import Container from './container'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import facebook from '../public/images/facebook.png'
import flickr from '../public/images/flickr.png'
import instagram from '../public/images/instagram.png'
import linkedin from '../public/images/linkedin.png'
import twitter from '../public/images/twitter.png'
import Image from 'next/image'
import profilePic from '../public/images/tedx.png'
import profilePicLight from '../public/images/tedxwhite.png'
import { useTheme } from 'next-themes'

import Link from 'next/link'

export default function Footer({nav}) {
  const { theme, setTheme, resolvedTheme } = useTheme()
  return (
    <footer className="bg-white dark:bg-zinc-900 border-t border-accent-2">
      <Container>
        <div className="py-10 flex flex-col lg:flex-row ">
        <div className="flex flex-1 justify-center lg:justify-start">
            <Link 
            href={'/'}
              >
                 <Image
                  className="h-8 w-auto"
     
        src={resolvedTheme=='dark'?profilePicLight:profilePic}
        alt="Picture of the TEDXTrondheim"/>
            </Link>
           
          </div>
          <div className="flex flex-1 lg:pl-4 lg:w-1/2 justify-center lg:justify-end">
          
          {nav.map((item) => (
               <Link
               href={item.href}
               key={item.name}
               className=" flex flex-1 justify-center lg:justify-end text-sm font-semibold leading-6 py-5 lg:py-0 text-gray-900 dark:text-slate-50  hover:text-red-700"
             >{item.name}</Link>
             
            ))}
        </div>
        
          </div>
          <div className="py-10 flex  justify-center">
      
          <div className="flex ">
          
         <Image
                  className="h-8 w-auto px-3"
     
        src={facebook}
        alt="Picture of the TEDXTrondheim"
       
      />
      <Image
                  className="h-8 w-auto px-3"
     
        src={flickr}
        alt="Picture of the TEDXTrondheim"
       
      />
      <Image
                  className="h-8 w-auto px-3"
     
        src={instagram}
        alt="Picture of the TEDXTrondheim"
       
      />
      <Image
                  className="h-8 w-auto px-3"
     
        src={linkedin}
        alt="Picture of the TEDXTrondheim"
       
      />
      <Image
                  className="h-8 w-auto px-3"
     
        src={twitter}
        alt="Picture of the TEDXTrondheim"
       
      />
        </div>
        
          </div>
    
      </Container>
    </footer>
  )
}
