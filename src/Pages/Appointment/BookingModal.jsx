import React from 'react'

const BookingModal = ({ treatment }) => {
    const { name, slots } = treatment;
    return (
        <div>
            {/* The button to open modal */}
            <label htmlFor="my-modal-6" className="btn">open modal</label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-secondary text-lg">Booking For: {name}</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                        <label htmlFor="booking-modal" className="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookingModal