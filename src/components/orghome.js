import React from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function OrgHome() {
    const history = useNavigate();
    const location = useLocation();
    const username = location.state.id;

    async function oevent(username) {
        history("/orgnewevent", { state: { id: username } })
    }

    async function ohome(username) {
        history("/orghome", { state: { id: username } })
    }

    async function obook(username) {
        history("/orgbooking", { state: { id: username } })
    }

    async function oprofile(username) {
        history("/orgprofile", { state: { id: username } })
    }

    return (
        <div>
            <h1>Hello {location.state.id} and welcome to the home</h1>

            <div className="sidenav">
                
                <button onClick={() => ohome(username)}>Home</button>
                <button onClick={() => oevent(username)}>New Event</button>
                <button onClick={() => obook(username)}>Bookings</button>
                <button onClick={() => oprofile(username)}>Profile</button>
            </div>

            <div className="container">
                <br /><br />

                <button className="dropbtn" style={{ float: 'right' }}>Logout</button>

                <div className="dropdown" style={{ float: 'left' }}>
                    <button className="dropbtn">Venue</button>
                    <div className="dropdown-content">
                        <a href="#">Venue 1</a>
                        <a href="#">Venue 2</a>
                        <a href="#">Venue 3</a>
                    </div>
                </div>

                <div className="content">
                    <br /><br />
                    <br /><br />

                    <form>
                        <label htmlFor="venue"><b>VENUE DETAILS:</b></label>
                        <input type="text" id="venue" required />
                        <br /><br /><br />

                        <label htmlFor="food"><b>FOOD:</b></label>
                        <input type="text" id="food" required />
                        <br /><br /><br />

                        {/* Add other input fields similarly */}

                        <button className="dropbtn">Update</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default OrgHome;
