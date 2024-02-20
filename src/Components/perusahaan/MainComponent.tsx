import React from 'react'

interface MainComponentProps {
    data: {
        title: string,
        component: React.ReactElement,
        pathKey: number,
    }[]
    pathNow: number
}

const MainComponent:React.FC<MainComponentProps> = ({ data, pathNow }) => {
    const renderedComponent = data.find((v) => v.pathKey === pathNow)
  return (
    <div>
        <div className='text-center font-bold text-3xl pb-6'>
            <p>{renderedComponent?.title}</p>
        </div>
        <div>
            {renderedComponent?.component}
        </div>
    </div>
  )
}

export default MainComponent