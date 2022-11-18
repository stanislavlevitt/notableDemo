import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  retrievePhysicians,
  retrieveAppointment,
} from "../slices/physicians";

const PhysiciansList = () => {
  const [currentPhysician, setCurrentPhysician] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const physicians = useSelector(state => state.physicians.doctors);
  const appointments = useSelector(state => state.physicians.schedules);

  const dispatch = useDispatch();

  const initFetch = useCallback(() => {
    dispatch(retrievePhysicians());
  }, [dispatch])

  useEffect(() => {
    initFetch()
  }, [initFetch])

  const setActivePhysician = (physician, index) => {
    setCurrentPhysician(physician);
    setCurrentIndex(index);
    dispatch(retrieveAppointment({id: physician.id}));
  };

  return (
    <div className="list row">
      <div className="col-md-6">
        <h4>Physicians List</h4>

        <ul className="list-group">
          {physicians &&
            physicians.map((physician, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActivePhysician(physician, index)}
                key={index}
              >
                {physician.lastName}, {physician.firstName},
              </li>
            ))}
        </ul>
      </div>

      <div className="col-md-6">
{currentPhysician ? (
  <div>
    <h2>Dr. {currentPhysician.firstName} {currentPhysician.lastName}</h2>
    <h4>Dr. {currentPhysician.email}</h4>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Time</th>
          <th>Kind</th>
        </tr>
        </thead>
        <tbody>
            {appointments && appointments.map((appointment,index)=>{

              return(
                <tr  key={index}>
                 <td>{index+1}</td>
                 <td>{appointment.patientName}</td>
                 <td>{appointment.time}</td>
                 <td>{appointment.kind}</td>
                 </tr>
                 )
            })}
        </tbody>
    </table>
  </div>
) : (
  <div>
    <br />
    <p>Please click on a Physician...</p>
  </div>
)}
</div>

    </div>
  );
}

export default PhysiciansList;
