import React, { useState, useEffect } from 'react'
import "./Nav.css"

function Nav() {
    const [show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else { handleShow(false); }
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, [])

    return (
        <div className={`nav ${show && "nav-black"}`}>
            <img 
                className="nav-logo" 
                src="https://occ-0-171-1723.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABWLSvtmQpJRdBNMOALxikm0K0aZMXftmj9zb5sx4RgHtauEK2hP_rYOO0V0RqsnAn_wUc1EtvcJ_yBjxqz-Twoo96l8qp9zmKbVn.png?r=bee" 
                alt="Netflix Logo" 
            />
            <img 
                className="nav-avatar" 
                src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" 
                alt="Avatar" 
            />
        </div>
    )
}

export default Nav
