import React from 'react'
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review'

const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            review: '',
            location: 'Frankfurt',
            img: people1
        },
        {
            _id: 2,
            name: 'Winson Herry',
            review: '',
            location: 'Bonn',
            img: people2
        },
        {
            _id: 3,
            name: 'Winson Herry',
            review: '',
            location: 'Berlin',
            img: people3
        },
    ]
    return (
        <section className='my-16'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-4xl text-primary font-bold py-5'>Testimonials</h4>
                    <h3 className='text-3xl font-bold'>What Our Patients Says</h3>
                </div>
                <div>
                    <img src={quote} className='w-24 lg:w-48' alt="" />
                </div>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    )
}

export default Testimonials