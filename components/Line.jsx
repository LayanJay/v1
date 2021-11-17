import Image from 'next/image'

const Line = () => {
  return (
    <div className='flex items-center w-32 sm:w-56 md:w-60 px-2'>
      <Image
        src='/line.svg'
        alt='line'
        layout='intrinsic'
        width={300}
        height={2}
      />
    </div>
  )
}

export default Line
