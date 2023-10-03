import React from 'react'
import ButtonPrimary from '../button/ButtonPrimary'

interface FeatureContProps {
    img: string,
    title: string,
    even: boolean,
    text: string,
}

const FeatureCont: React.FC<FeatureContProps> = ({even, img, text, title}) => {
  return (
    <div className='flex justify-between items-center'>
        <div className={`${even ? "order-2" : "order-1"} w-1/2`}>
            <img className='w-[600px]' src={img} alt="" />
        </div>
        <div className={`${even ? "order-1 text-left" : "order-2 text-right"} flex flex-col w-1/2`}>
            <p className='text-sm text-sky-600 pb-3'>{title}</p>
            <p className='text-4xl font-bold pb-3'>{title}</p>
            <p className='text-4xl font-bold pb-3'>{title}</p>
            <p className='pb-6 pt-2 text-slate-600 text-justify'>{text}</p>
            <ButtonPrimary title='akshdgkasd' />
        </div>
    </div>
  )
}

export default FeatureCont