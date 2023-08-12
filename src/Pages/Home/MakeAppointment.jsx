import React from 'react'
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton'

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }}
            className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-150px]' src={doctor} />
            </div>
            <div className='flex-1 p-5'>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-4xl text-white py-6'>Make an appointment Today</h2>
                <p className='text-white pb-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, est officia! Minus ipsam quam iure nobis asperiores vero cum quod amet, pariatur minima rem ab ipsum perspiciatis neque ad nesciunt esse molestias aliquid consectetur a natus corporis soluta. Voluptate, sunt!</p>
                <PrimaryButton />
            </div>

        </section>
    )
}

export default MakeAppointment