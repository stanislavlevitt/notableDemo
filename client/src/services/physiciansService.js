import http from "../http-common";

const getAll = () => {
  return http.get("/physicians");
};

const getAppointments = id =>{
  return http.get(`/appointments/${id}`);
}

const DataService = {
  getAll,
  getAppointments,
};

export default DataService;
