import request from "../utils/requestConfig";

const header = {
  "Content-Type": "application/json",
  "X-Auth-Token": "f27267f9-6b05-4e88-a117-52b37519c0fd",
};
const api = {
  config: async () => {
    return request({
      url: process.env.REACT_APP_CONFIG_URL,
      method: "POST",
      data: {
        campaign_id: 1,
      },
    });
  },
  validate: async () => {
    return request({
      url: process.env.REACT_APP_VALIDATE_URL,
      method: "POST",
      headers: header,
      data: {
        campaign_id: 1,
        phone_number: "9104304054",
      },
    });
  },
  allocate: async () => {
    return request({
      url: process.env.REACT_APP_ALLOCATE_URL,
      method: "POST",
      headers: header,
      data: {
        campaign_id: 1,
        phone_number: "9104304054",
      },
    });
  },
};

export default api;
