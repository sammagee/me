import Link from 'next/link'
import NavLink from './nav-link'
import { Menu, Transition } from '@headlessui/react'

export default function Nav() {
    return (
      <header className="container fixed top-0 left-0 right-0 z-20 flex items-center justify-between p-8 mx-auto standalone:pt-20">
        <Link href="/">
          <a className="flex flex-shrink w-24 h-24 rounded-full text-primary-400 rise focus:ring ring-primary-500 ring-opacity-50" aria-label="Home">
            <svg className="w-full" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect className="text-gray-900" fill="currentColor" width="128" height="128" rx="64" />
              <path fill="currentColor" d="M84.454 74.038C84.454 66.166 76.486 59.446 72.358 53.782C81.958 44.182 78.406 37.75 70.15 37.75C63.046 37.75 55.558 42.07 55.558 49.558C55.558 51.67 56.23 53.686 57.19 55.606C54.022 58.102 49.606 60.982 43.75 64.534L46.534 70.486C52.582 67.51 57.67 64.726 61.798 62.038C66.214 66.934 71.206 71.254 71.206 74.71C71.206 78.166 65.638 79.126 48.742 78.262L48.454 90.262C76.294 90.55 84.454 82.678 84.454 74.038Z" />
            </svg>
          </a>
        </Link>

        <div className="items-center justify-end hidden py-4 pl-12 pr-4 bg-gray-900 rounded-full shadow-md md:flex">
          <div className="flex items-center space-x-6 navigation">
            <NavLink href="/">
              {({ active }) => (
                <a className={`flex items-center leading-8 border-b-2 border-transparent transition duration-200 ease-in-out group ${active ? 'text-white active' : 'text-gray-500 hover:text-white focus:text-white'}`}>
                  <svg className="w-4 h-4 text-gray-600 transition duration-200 ease-in-out group-hover:text-gray-500 group-focus:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>

                  <span className="mt-1 ml-1 link-text">Home</span>
                </a>
              )}
            </NavLink>

            <NavLink href={`/work`}>
              {({ active }) => (
                <a className={`flex items-center leading-8 border-b-2 border-transparent transition duration-200 ease-in-out group ${active ? 'text-white active' : 'text-gray-500 hover:text-white focus:text-white'}`}>
                  <svg className="w-4 h-4 text-gray-600 transition duration-200 ease-in-out group-hover:text-gray-500 group-focus:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>

                  <span className="mt-1 ml-1 link-text">Work</span>
                </a>
              )}
            </NavLink>

            <NavLink href={`/about`}>
              {({ active }) => (
                <a className={`flex items-center leading-8 border-b-2 border-transparent transition duration-200 ease-in-out group ${active ? 'text-white active' : 'text-gray-500 hover:text-white focus:text-white'}`}>
                  <svg className="w-4 h-4 text-gray-600 transition duration-200 ease-in-out group-hover:text-gray-500 group-focus:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>

                  <span className="mt-1 ml-1 link-text">About</span>
                </a>
              )}
            </NavLink>

            <a className="flex items-center text-gray-600 border-b-2 border-transparent hover:text-gray-500 focus:text-gray-500" href="//github.com/sammagee" target="_blank" rel="noopener noreferrer" title="GitHub">
              <svg className="w-4 h-4 transition duration-200 ease-in-out" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
              </svg>
            </a>

            <a className="flex items-center text-gray-600 border-b-2 border-transparent hover:text-gray-500 focus:text-gray-500" href="//twitter.com/sammagee" target="_blank" rel="noopener noreferrer" title="Twitter">
              <svg className="w-4 h-4 transition duration-200 ease-in-out link-text" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </a>
          </div>

          <a className="flex items-center px-6 py-3 ml-6 uppercase rounded-full text-primary-900 bg-primary-400 group rise hover:bg-primary-300 hover:text-primary-800 focus:ring ring-primary-500 ring-opacity-50" href="mailto:hi@sammagee.me">
            <span className="mt-1">Contact</span>

            <svg className="w-4 ml-2 transition-all duration-200 ease-in-out transform fill-current text-primary-700 group-hover:text-primary-600 group-hover:translate-x-1 group-focus:translate-x-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </a>
        </div>

        <div className="relative inline-block mr-8 text-left md:hidden">
          <Menu>
            {({ open }) => (
              <>
                <Menu.Button className={`flex items-center justify-center rounded-full w-16 h-16 -mr-5 transition duration-200 ease-in-out border-none shadow select-none focus:outline-none group focus:ring ring-primary-500 ring-opacity-50 ${open ? 'z-30' : 'bg-gray-900 rise'}`}>
                  <div className="flex flex-col items-center justify-center w-full h-full pointer-events-none">
                    <span className={`h-0.5 w-6 block bg-gray-400 group-hover:bg-white rounded-full transition-all transform duration-200 ease-in-out ${open ? 'translate-y-px rotate-45' : 'rotate-0 -translate-y-1'}`}></span>
                    <span className={`h-0.5 w-6 block bg-gray-400 group-hover:bg-white rounded-full transition-all transform duration-200 ease-in-out ${open ? '-translate-y-px -rotate-45' : 'rotate-0 translate-y-1'}`}></span>
                  </div>
                </Menu.Button>

                <Transition
                  show={open}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <div className="absolute right-0 w-56 -mt-16 -mr-5 origin-top-right rounded-md shadow-xl">
                    <Menu.Items
                      static
                      className="overflow-hidden bg-gray-900 rounded-md outline-none"
                    >
                      <div className="p-6">
                        <span className="text-2xl leading-5 text-gray-200">Menu</span>
                      </div>

                      <div className="divide-y divide-gray-800">
                        <div>
                          <Menu.Item>
                            <NavLink href="/">
                              {({ active }) => (
                                <a className={`leading-none hover:bg-gray-800 focus:bg-gray-800 flex items-center px-6 py-3 text-xl transition duration-200 ease-in-out hover:text-white ${active ? 'text-white' : 'text-gray-400'}`}>
                                  {active && <span className="absolute top-0 left-0 w-1 h-full rounded-r-full bg-primary-500"></span>}
                                  <span className="mt-1">Home</span>
                                </a>
                              )}
                            </NavLink>
                          </Menu.Item>
                          <Menu.Item>
                            <NavLink href="/work">
                              {({ active }) => (
                                <a className={`leading-none hover:bg-gray-800 focus:bg-gray-800 flex items-center px-6 py-3 text-xl transition duration-200 ease-in-out hover:text-white ${active ? 'text-white' : 'text-gray-400'}`}>
                                  {active && <span className="absolute top-0 left-0 w-1 h-full rounded-r-full bg-primary-500"></span>}
                                  <span className="mt-1">Work</span>
                                </a>
                              )}
                            </NavLink>
                          </Menu.Item>
                          <Menu.Item>
                            <NavLink href="/about">
                              {({ active }) => (
                                <a className={`leading-none hover:bg-gray-800 focus:bg-gray-800 flex items-center px-6 py-3 text-xl transition duration-200 ease-in-out hover:text-white ${active ? 'text-white' : 'text-gray-400'}`}>
                                  {active && <span className="absolute top-0 left-0 w-1 h-full rounded-r-full bg-primary-400"></span>}
                                  <span className="mt-1">About</span>
                                </a>
                              )}
                            </NavLink>
                          </Menu.Item>
                        </div>

                        <div>
                          <Menu.Item>
                            <a className="flex items-center justify-between px-6 py-3 text-xl leading-none text-gray-400 transition duration-200 ease-in-out hover:bg-gray-800 focus:bg-gray-800 hover:text-white" href="//github.com/sammagee" target="_blank" rel="noopener noreferrer">
                              <span className="mt-1">GitHub</span>

                              <svg className="w-4 h-4 -mt-1 text-gray-600" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                              </svg>
                            </a>
                          </Menu.Item>
                          <Menu.Item>
                            <a className="flex items-center justify-between px-6 py-3 text-xl leading-none text-gray-400 transition duration-200 ease-in-out hover:bg-gray-800 focus:bg-gray-800 hover:text-white" href="//twitter.com/sammagee" target="_blank" rel="noopener noreferrer">
                              <span className="mt-1">Twitter</span>

                              <svg className="w-4 h-4 -mt-1 text-gray-600" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                              </svg>
                            </a>
                          </Menu.Item>

                          <Menu.Item>
                            <a className="flex items-center justify-between px-6 py-3 text-xl leading-none text-primary-900 bg-primary-400 contact-button hover:bg-primary-300 hover:text-primary-800 group focus:ring ring-primary-500 ring-opacity-50" href="mailto:hi@sammagee.me">
                              <span className="mt-1">Contact</span>

                              <svg className="w-4 fill-current text-primary-700 group-hover:text-primary-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                              </svg>
                            </a>
                          </Menu.Item>
                        </div>
                      </div>
                    </Menu.Items>
                  </div>
                </Transition>
              </>
            )}
          </Menu>
        </div>
      </header>
    )
}
