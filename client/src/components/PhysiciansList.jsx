import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  retrievePhysicians,
} from "../slices/physicians";

const PhysiciansList = () => {
  const [currentPhysician, setCurrentPhysician] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const physicians = useSelector(state => state.physicians);

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
