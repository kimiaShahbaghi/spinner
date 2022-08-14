import axios from "axios";
const request = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: process.env.REACT_APP_API_TIMEOUT,
});
request.defaults.headers.common["X-Access-Options"] = "true";
request.defaults.headers.post["X-Lucky-Access"] = "true";

export default request;
