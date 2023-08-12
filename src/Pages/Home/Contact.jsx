import React from 'react';
import appointment from '../../assets/images/appointment.png';

const Contact = () => {
    return (
        <section
            className="bg-cover bg-center relative"
            style={{ backgroundImage: `url(${appointment})` }}
        >
            <div className="text-center py-6">
                <h3 className="text-4xl text-primary font-bold">Contact Us</h3>
                <h3 className="text-2xl text-white py-6">Stay Connected With Us</h3>
            </div>
            <div className="rounded-lg p-8 mx-4 md:mx-auto md:max-w-md shadow-lg">
                <form>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Your email"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="subject"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Subject"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="message"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Your message"
                        ></textarea>
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition duration-300"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
