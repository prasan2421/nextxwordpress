import Alert from './alert'
import Footer from './footer'
import Meta from './meta'
import { useEffect, useState } from 'react'
import { Dialog } from '@headlessui/react'
import Image from 'next/image'
import profilePic from '../public/images/tedx.png'
import { Bars3Icon, XMarkIcon, SunIcon } from '@heroicons/react/24/outline'

import Link from 'next/link'
import { useTheme } from 'next-themes'


const navigation = [
  { name: 'HOME', href: '/' },
  { name: 'Videos', href: '/about' },
  { name: 'EVENTS', href: '/events' },
  { name: 'MEET THE TEAM', href: '/team' },
  { name: 'VOLUNTEER', href: '/volunteer' },
]

export default function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()


  const setLightMode = () => {
    setTheme('light');
  };

  const setDarkMode = () => {
    setTheme('dark');
  };

  const setSystemDefault = () => {
    setTheme('system');
  };
  return (
    <div className="bg-white dark:bg-gray-800">
     
      <header className="absolute inset-x-0 top-0 z-50">
      {/* <Alert preview={preview} /> */}
        <nav className="flex items-center justify-between p-6 lg:px-8 bg-white dark:bg-gray-900" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link 
            href={'/'}
              >
                 <Image
                  className="h-8 w-auto"
     
        src={profilePic}
        alt="Picture of the TEDXTrondheim"/>
            </Link>
           
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className=" hidden lg:flex lg:gap-x-12">
          {/* <p className="mt-4 text-gray-600">Current Theme: {resolvedTheme}</p> */}
          <div className="dropdown">
          <p
        className=" p-2 rounded-full bg-gray-200 dark:bg-gray-800"
        // onClick={toggleTheme}
      >
        {theme}
      </p>
      <ul className="dropdown-menu absolute top-16 hidden text-gray-700 pt-1">
      <li className="flex"><button className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" onClick={setSystemDefault} >System</button></li>
      <li className=""><button className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" onClick={setDarkMode}>Dark</button></li>
      <li className=""><button className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" onClick={setLightMode}>Light</button></li>
    </ul>
    </div>
            {navigation.map((item) => (
               <Link
               href={item.href}
               key={item.name}
               className="text-sm font-semibold leading-6 text-gray-900 dark:text-slate-50  hover:text-red-700"
             >{item.name}</Link>
             
            ))}
          </div>
          {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div> */}
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
               
                <Image
                  className="h-8 w-auto"
     
        src={profilePic}
        alt="Picture of the TEDXTrondheim"
        
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
               
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
               
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
               
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      <main>{children}</main>

      

      <Footer />
    </div>

    // <>  
    //   <div className="min-h-screen">
      
    //         <main>{children}</main> 
       
    //   </div>
      
    // </>
  )
}
