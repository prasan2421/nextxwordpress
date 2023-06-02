import Alert from './alert'
import Footer from './footer'
import Meta from './meta'
import { useEffect, useState } from 'react'
import { Dialog } from '@headlessui/react'
import Image from 'next/image'
import profilePic from '../public/images/tedx.png'
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon,ComputerDesktopIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useTheme } from 'next-themes'


const navigation = [
  { name: 'HOME', href: '/' },
  { name: 'VIDEOS', href: '/about' },
  { name: 'EVENTS', href: '/events' },
  { name: 'MEET THE TEAM', href: '/team' },
  { name: 'VOLUNTEER', href: '/volunteer' },
]

export default function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  useEffect(()=>{
    setTheme('system');
  },[])

  const toggleTheme = () => {
   
    if (resolvedTheme === 'light') {
      setTheme('dark');
    } else if (resolvedTheme === 'dark') {
      setTheme('light');
    } 
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
          <div className="hidden lg:flex lg:gap-x-12">
          {/* <p className="mt-4 text-gray-600">Current Theme: {theme}</p> */}
          <button
        className="p-2 rounded-full bg-gray-800 dark:bg-white"
        onClick={toggleTheme}
      >
        {resolvedTheme === 'light' ?  <MoonIcon className="h-4 w-4" /> : resolvedTheme === 'dark' ? <SunIcon className="h-4 w-4" /> : <ComputerDesktopIcon className="h-3 w-3" />}
      </button>
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
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-gray-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
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
                <button
        className="p-2 rounded-full bg-gray-800 dark:bg-white"
        onClick={toggleTheme}
      >
        {resolvedTheme === 'light' ?  <MoonIcon className="h-4 w-4" /> : resolvedTheme === 'dark' ? <SunIcon className="h-4 w-4" /> : <ComputerDesktopIcon className="h-3 w-3" />}
      </button>
      
                  {navigation.map((item) => (
                    <Link
                    href={item.href}
                    key={item.name}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-600 "
                    >{item.name}</Link>

                   
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

  )
}
