const Heading = ({
  type = 'h1',
  children,
  margin = 'mb-3',
  isMono = false,
}) => {
  if (type === 'h1') {
    return (
      <h1
        className={`${
          isMono ? 'font-mono text-primary-light' : 'font-inter text-white-base'
        } font-semibold text-4xl sm:text-5xl md:text-7xl leading-snug ${margin}`}
      >
        {children}
      </h1>
    )
  } else if (type === 'h2') {
    return (
      <h2
        className={`${
          isMono ? 'font-mono text-primary-light' : 'font-inter'
        } font-semibold text-2xl sm:text-3xl md:text-4xl ${margin}`}
      >
        {children}
      </h2>
    )
  } else if (type === 'h3') {
    return (
      <h3
        className={`${
          isMono ? 'font-mono text-primary-light' : 'font-inter'
        } font-semibold text-xl sm:text-2xl md:text-3xl ${margin}`}
      >
        {children}
      </h3>
    )
  } else {
    return (
      <h4
        className={`${
          isMono ? 'font-mono text-primary-light' : 'font-inter'
        } font-semibold text-lg sm:text-xl md:text-2xl ${margin}`}
      >
        {children}
      </h4>
    )
  }
}

export default Heading
