import axios from "axios";
const request = axios.create(
    {
        baseURL: 'https://bw-api.pr.mci.dev/v2/luckywheel',

    }
)
export default request