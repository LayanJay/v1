import { Link as ScrollLink } from 'react-scroll'
import ButtonLink from '../Link'

const Menu = ({ isOpen, linkHandler }) => {
  return (
    <div
      className={`fixed z-20 right-0 left-0 h-full w-full backdrop-filter ${
        isOpen ? 'backdrop-blur-sm' : 'backdrop-blur-none'
      } transition-all ease-in`}
    >
      <div
        className={`absolute z-10 right-6 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-52'
        } transition-all duration-200 ease-in bg-primary-base rounded-md shadow-md px-10 pt-5 pb-8`}
      >
        <ul className='flex flex-col space-y-6'>
          <li className='flex justify-start'>
            <ScrollLink
              className='transition ease-in font-mono text-primary-light hover:underline cursor-pointer'
              to='about'
              smooth
              duration={500}
              offset={-100}
              isDynamic
              onClick={linkHandler}
            >
              About
            </ScrollLink>
          </li>
          <li className='flex justify-start'>
            <ScrollLink
              className='transition ease-in font-mono text-primary-light hover:underline cursor-pointer'
              to='work'
              smooth
              duration={500}
              offset={-100}
              isDynamic
              onClick={linkHandler}
            >
              Work
            </ScrollLink>
          </li>
          <li className='flex justify-start'>
            <ScrollLink
              className='transition ease-in font-mono text-primary-light hover:underline cursor-pointer'
              to='contact'
              smooth
              duration={500}
              offset={-100}
              isDynamic
              onClick={linkHandler}
            >
              Contact
            </ScrollLink>
          </li>
          <li className='flex justify-start'>
            <ButtonLink onClick={linkHandler}>Resume</ButtonLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Menu
