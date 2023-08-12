import React from 'react'
import InfoCard from './InfoCard'
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import quote from '../../assets/icons/quote.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InfoCard bgClass="bg-gradient-to-r from-secondary to-primary" cardTitle="Opening Hours" img={clock} info="Lorem Ipsum is simply dummy text of the pri" />
            <InfoCard bgClass="bg-accent" cardTitle="Visit Our Location" img={marker} info="Brooklyn, NY 10036, United States" />
            <InfoCard bgClass="bg-gradient-to-r from-secondary to-primary" cardTitle="Contact Us Now" img={phone} info="+000 123 456789" />
        </div>
    )
}

export default Info