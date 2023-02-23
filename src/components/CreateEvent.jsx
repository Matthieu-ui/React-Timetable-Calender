import React from "react";


// create component for user to create an event
const CreateEvent = () => {

    return (
        <div>
            <h1>Create Event</h1>
            <form>
                <label>Event Name</label>
                <input type="text" />
                <label>Event Location</label>
                <input type="text" />
                <label>Event Date</label>
                <input type="date" />
                <label>Event Time</label>
                <input type="time" />
                <label>Event Color</label>
                <input type="color" />
                <button type="submit">Create Event</button>
            </form>

        </div>
    );
}


export default CreateEvent;