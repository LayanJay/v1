const Button = ({
  type = 'button',
  children,
  onClick = null,
  padding = 'py-2 px-4',
  width = 'md:w-32 sm:w-28 w-24',
  margin = '',
  disabled = false,
}) => {
  return (
    <button
      type={type}
      className={`${padding} ${margin} ${width} font-mono font-semibold text-sm sm:text-base text-primary-light hover:text-white-base ring-2 ring-primary-light hover:bg-primary-light rounded-md shadow-md transition ease-in`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
