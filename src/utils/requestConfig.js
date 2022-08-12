import axios from "axios";
const request = axios.create({
  baseURL: "https://bw-api.dv.mci.dev/v2/luckywheel",
  // timeout: 50000,
});
request.defaults.headers.common["X-Access-Options"] = "true";
request.defaults.headers.post["X-Lucky-Access"] = "true";

export default request;
// 'http://192.168.10.142:8000/v2/luckywheel'
// 'https://bw-api.dv.mci.dev/v2/luckywheel'
