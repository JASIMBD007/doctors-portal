import React from 'react'
import InfoCard from './InfoCard'
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import quote from '../../assets/icons/quote.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InfoCard img={clock} />
            <InfoCard img={marker} />
            <InfoCard img={phone} />
        </div>
    )
}

export default Info