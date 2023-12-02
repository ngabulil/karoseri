import React from 'react'

interface FeatureBoxProp {
    bgImg: string,
    img: string,
    title: string,
    text: string,
    even?: boolean,
}

const FeatureBox: React.FC<FeatureBoxProp> = ({bgImg, img, title, text, even}) => {
  return (
    <div className={`${even ? "mt-4" : "mb-4 xsml:!ml-auto md:ml-auto"} p-4 border-2 border-solid max-w-[250px] rounded-2xl bg-white sm:my-0 md:my-0 sm:mx-auto xsml:!mx-0`}>
        <div className={`${bgImg} p-3 w-fit rounded-md mb-4`}>
            <img className='' src={img} alt="feture" />
        </div>
        <div className='mb-1'>
            <p className='font-bold text-2xl text-slate-800'>{title}</p>
        </div>
        <div className='text-slate-600 break-all'>
            {text}
        </div>
    </div>
  )
}

export default FeatureBox