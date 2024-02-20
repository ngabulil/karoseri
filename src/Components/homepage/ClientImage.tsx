import React from 'react'

interface clintImgProp {
    link: string,
}

const ClientImage: React.FC<clintImgProp> = ({link}) => {
  return (
    <div className='flex p-4 sm:p-2 md:py-2'>
        <img className='w-32 m-auto sm:w-full sm:min-w-[170px] sm:max-w-[187px] md:w-3/5 md:max-w-[195px]' src={link} alt="no-img" />
    </div>
  )
}

export default ClientImage