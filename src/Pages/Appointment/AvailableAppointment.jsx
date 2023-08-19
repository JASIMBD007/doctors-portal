import { data } from 'autoprefixer';
import { format } from 'date-fns'
import React, { useEffect, useState } from 'react'
import Service from './Service';
import BookingModal from './BookingModal';

const AvailableAppointment = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/service')
            // fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div>
            <h4 className='text-2xl text-secondary text-center my-10'>Available Services on {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 my-12 gap-10'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    >
                    </Service>)
                }
            </div>
            {treatment && <BookingModal
                date={date}
                treatment={treatment}
                setTreatment={setTreatment}
            ></BookingModal>}
        </div>
    )
}

export default AvailableAppointment