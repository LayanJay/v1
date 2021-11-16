import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import ButtonLink from '../Link'
import Hamburger from './Hamburger'
import Menu from './Menu'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [menu, setMenu] = useState('')

  const toggle = () => {
    if (!isOpen) {
      setMenu('opened')
    } else {
      setMenu('')
    }
    setIsOpen(!isOpen)
  }

  const handleLink = () => {
    setIsOpen(false)
    setMenu('')
  }
  return (
    <>
      <nav className='sticky top-0 flex items-center justify-between bg-primary-dark font-poppins text-white-base p-4 sm:p-6 md:px-10'>
        <div className='w-16 sm:w-20 md:w-24'>
          <Link href='/'>
            <a>
              <Image
                src='/brand_assets/logo-v1.svg'
                alt='brand logo'
                layout='intrinsic'
                width={165}
                height={72}
              />
            </a>
          </Link>
        </div>
        <div>
          <ul className='flex space-x-14'>
            <li className='hidden md:block'>
              <ScrollLink
                className='transition ease-in font-mono hover:text-primary-light cursor-pointer'
                to='about'
                smooth
                duration={500}
                offset={-100}
                isDynamic
              >
                1. About
              </ScrollLink>
            </li>
            <li className='hidden md:block'>
              <ScrollLink
                className='transition ease-in font-mono hover:text-primary-light cursor-pointer'
                to='work'
                smooth
                duration={500}
                offset={-100}
                isDynamic
              >
                2. Work
              </ScrollLink>
            </li>
            <li className='hidden md:block'>
              <ScrollLink
                className='transition ease-in font-mono hover:text-primary-light cursor-pointer'
                to='contact'
                smooth
                duration={500}
                offset={-100}
                isDynamic
              >
                3. Contact
              </ScrollLink>
            </li>
            <li className='hidden md:block'>
              <ButtonLink>Resume</ButtonLink>
            </li>
            <li className='block md:hidden'>
              <Hamburger
                onclick={toggle}
                classname={`hover:outline-none focus:outline-none menu ${menu}`}
              />
            </li>
          </ul>
        </div>
      </nav>
      <Menu isOpen={isOpen} linkHandler={handleLink} />
    </>
  )
}

export default Nav
