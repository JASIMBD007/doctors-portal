import React from 'react'
import Banner from './Banner'
import Info from './Info'
import Services from './Services'
import Treatment from './Treatment'
import MakeAppointment from './MakeAppointment'
import Testimonials from './Testimonials'

const Home = () => {
    return (
        <div className='px-12'>
            <Banner />
            <Info />
            <Services />
            <Treatment />
            <MakeAppointment />
            <Testimonials />
        </div>
    )
}

export default Home