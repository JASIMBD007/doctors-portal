import React from 'react'

const Contact = () => {
    return (
        <div>
            <div>
                <h4>Contact Us</h4>
                <h3>Stay connected with us</h3>
            </div>
            <div>
                <input type="text" placeholder="Type here" className="input input-bordered input-xs w-full max-w-xs" />
                {/* sm */}
                <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />
                {/* md */}
                <input type="text" placeholder="Type here" className="input input-bordered input-md w-full max-w-xs" />
                {/* lg */}
                <input type="text" placeholder="Type here" className="input input-bordered input-lg w-full max-w-xs" />
            </div>
        </div>
    )
}

export default Contact