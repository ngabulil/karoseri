import React from 'react'

interface clintImgProp {
    link: string,
}

const ClientImage: React.FC<clintImgProp> = ({link}) => {
  return (
    <div className='p-4 border-2 border-slate-500'>
        <img className='w-32 m-auto' src={link} alt="no-img" />
    </div>
  )
}

export default ClientImage