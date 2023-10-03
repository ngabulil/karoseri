import React from 'react'

interface footerListProps {
    data: string[],
}

const FooterList: React.FC<footerListProps> = ({ data }) => {
  return (
    <div className='flex flex-col'>
        {data.map((item, i) => (
            <div key={item} className={`${i === 0 ? 'font-bold pb-4 text-xl' : 'font-normal text-sm py-1 text-slate-700'}`}>
                <p>{item}</p>
            </div>
        ))}
    </div>
  )
}

export default FooterList