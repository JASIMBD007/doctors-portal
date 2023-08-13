import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import chair from '../../assets/images/chair.png';
import bg from '../../assets/images/bg.png';

const AppointmentBanner = ({ date, setDate }) => {
    return (
        <div style={{ background: `url(${bg})` }} className="hero min-h-screen flex flex-col justify-center items-center">
            <h2 className="text-3xl  font-bold mb-24 text-center text-secondary">Book Your Appointment Here!</h2>
            <div className="flex flex-col lg:flex-row items-center">
                <img src={chair} alt="Chair" className="max-w-sm rounded-lg shadow-2xl lg:order-2 ml-16" />
                <div className="lg:order-1 lg:mr-16 ">
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;
