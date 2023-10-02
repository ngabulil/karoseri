import React from 'react'
import logo from '../../assets/logo.png'

const Logo: React.FC = () => {
  return (
    <div>
        <img src={logo} alt="" className='w-36' />
    </div>
  )
}

export default Logo