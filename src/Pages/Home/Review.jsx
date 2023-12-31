import React from 'react'

const Review = ({ review }) => {
    return (
        <div className="card lg:max-w-lg shadow-xl">
            <div className="card-body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores magnam at, corporis cupiditate voluptatibus asperiores.</p>
                <div className="flex items-center">
                    <div className="avatar">
                        <div className="w-28 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={review.img} alt='' />
                        </div>
                        <div>
                            <h4 className='text-xl'>{review.name}</h4>
                            <p>{review.location}</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review