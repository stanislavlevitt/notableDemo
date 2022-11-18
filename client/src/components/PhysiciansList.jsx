import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  retrievePhysicians,
} from "../slices/physicians";

const PhysiciansList = () => {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const physicians = useSelector(state => state.physicians);

  const dispatch = useDispatch();

  const initFetch = useCallback(() => {
    dispatch(retrievePhysicians());
  }, [dispatch])

  useEffect(() => {
    initFetch()
  }, [initFetch])

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
                key={index}
              >
                {physician.lastName}, {physician.firstName},
              </li>
            ))}
        </ul>
      </div>

    </div>
  );
}

export default PhysiciansList;
