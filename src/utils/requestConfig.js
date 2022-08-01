import axios from "axios";
const request = axios.create(
    {
        baseURL: 'https://bw-api.dv.mci.dev/v1/luckywheel/config', 
        timeout: 5000
    }
)
export default request