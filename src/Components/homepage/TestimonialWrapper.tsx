import React from 'react'
import { arrData } from '../../helper/arrayReduce'
import Testimonial from './Testimonial'

interface testiWrapperProps {
    data: arrData[] | []
}

const TestimonialWrapper: React.FC<testiWrapperProps> = ({ data }) => {

  return (
    <div className='flex justify-center gap-x-9'>
    {data && data.map((val) => (
        <Testimonial data={val} />
    ))}
    </div>
    )
}

export default TestimonialWrapper