import { Routes, Route } from "react-router-dom";
import Physician from "./components/Physician"
import PhysiciansList from "./components/PhysiciansList"

const RouteLinks = () =>{
  return(
    <div className="container mt-3">
        <Routes>
          <Route path="/" element={<PhysiciansList/>} />
          <Route path="/:id" element={<Physician/>} />
        </Routes>
      </div>
  )
}

export default RouteLinks
