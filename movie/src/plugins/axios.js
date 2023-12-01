import axios from "axios";

const axiosIns = axios.create({
  baseURL: "http://localhost:8080/",
});

export default axiosIns;
