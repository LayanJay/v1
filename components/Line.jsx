import Image from 'next/image'

const Line = ({ lineStyles, width = 'w-32 sm:w-40 md:w-56' }) => {
  return (
    <div className={`flex items-center ${width} px-2 ${lineStyles}`}>
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
