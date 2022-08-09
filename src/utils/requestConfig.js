import axios from "axios";
const request = axios.create(
    {
        baseURL: 'http://192.168.10.142:8000/v2/luckywheel',

    }
)
request.defaults.headers.common['X-Access-Options']= 'true'
export default request

           
// https://bw-api.pr.mci.dev/v2/luckywheel'
// 'http://192.168.10.142:8000/v2/luckywheel'
// https://bw-api.dv.mci.dev/v2/luckywheel'