import http from "../http-common";

const getAll = () => {
  return http.get("/physicians");
};

const DataService = {
  getAll,
};

export default DataService;
