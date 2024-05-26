import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

const Logo: React.FC = () => {
  return (
    <Link to='/'>
        <img src={logo} alt="" className='w-36' />
    </Link>
  )
}

export default Logo