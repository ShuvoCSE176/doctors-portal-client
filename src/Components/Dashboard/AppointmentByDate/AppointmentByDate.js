import React from 'react';

const AppointmentByDate = ({appointments}) => {
    console.log(appointments)
    return (
        <div>
            <h2>appointments :{appointments.length}</h2>

            {
                appointments.map(app=><li key={app._id}>{app.name}</li>)
            }
            
        </div>
    );
};

export default AppointmentByDate;