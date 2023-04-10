import Container from './container'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import facebook from '../public/images/facebook.png'
import flickr from '../public/images/flickr.png'
import instagram from '../public/images/instagram.png'
import linkedin from '../public/images/linkedin.png'
import twitter from '../public/images/twitter.png'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Follow us on social media.
          </h3>
          <div className="flex flex-row justify-end lg:pl-4 lg:w-1/2">
          <div
            className="text-lg leading-relaxed mb-4"
            
          />
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
