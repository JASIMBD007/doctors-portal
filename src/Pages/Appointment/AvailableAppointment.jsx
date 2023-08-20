import { data } from 'autoprefixer';
import { format } from 'date-fns'
import React, { useEffect, useState } from 'react'
import Service from './Service';
import BookingModal from './BookingModal';
import { useQuery } from '@tanstack/react-query';
import Loading from '../Shared/Loading';

const AvailableAppointment = ({ date }) => {

    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const formatedDate = format(date, 'PP');

    const { data: services, isLoading, refetch } = useQuery(['available', formatedDate], () => fetch(`http://localhost:5000/available?date=${formatedDate}`)
        .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }

    // useEffect(() => {
    //     fetch(`http://localhost:5000/available?date=${formatedDate}`)
    //         // fetch('services.json')
    //         .then(res => res.json())
    //         .then(data => setServices(data));
    // }, [formatedDate]);

    return (
        <div>
            <h4 className='text-2xl text-secondary text-center my-10'>Available Services on {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 my-12 gap-10'>
                {
                    services?.map(service => (
                        <Service
                            key={service._id}
                            service={service}
                            setTreatment={setTreatment}
                            refetch={refetch} // Pass the refetch function
                        >
                        </Service>
                    ))
                }

            </div>

            {treatment && <BookingModal
                date={date}
                treatment={treatment}
                setTreatment={setTreatment}
                refetch={refetch}
            ></BookingModal>}
        </div>
    )
}

export default AvailableAppointment