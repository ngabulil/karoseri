import React from 'react'
import { arrData } from '../../helper/arrayReduce'

interface testiWrapperProps {
  data: arrData
}

const Testimonial: React.FC<testiWrapperProps> = ({ data }) => {
  return (
    <div className='border-2 border-solid border-slate-400 max-w-md rounded-2xl px-8 pb-8 bg-white'>
        <div className='mt-[-45px] rounded-full border-2 w-fit p-4 bg-slate-400 mx-auto'>
          <img className='w-[70px] h-[70px]' src={data.img} alt="" />
        </div>
        <div className='text-center my-2'>
          <p className='font-bold text-xl'>{data.name}</p>
          <p className='text-xs text-slate-600'>{data.perusahaan}</p>
        </div>
        <div className='break-words'>
          <p className='text-xs text-slate-600'>{data.description}</p>
        </div>
    </div>
  )
}

export default Testimonial