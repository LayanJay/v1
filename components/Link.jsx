import Link from 'next/link'

const LinkButton = ({
  onClick = '',
  href = '',
  children,
  padding = 'py-2 px-4',
  width = 'md:w-32 sm:w-28 w-24',
  margin = '',
}) => {
  return (
    <div className={`${margin}`}>
      <Link href={href}>
        <a
          onClick={onClick}
          className={`${padding} ${width} font-mono text-sm sm:text-base text-primary-light ring-1 ring-primary-light hover:bg-primary-light hover:bg-opacity-20 rounded-sm shadow-md transition ease-in`}
        >
          {children}
        </a>
      </Link>
    </div>
  )
}

export default LinkButton
