import request from "../utils/requestConfig";
const header = {
  "Content-Type": "application/json",
  "X-Access-Options": "true",
};
const api = {
  config: async () => {
    return request({
      url: "/config",
      method: "POST",

      data: {
        campaign_id: 1,
      },
    });
  },
  validate: async () => {
    return request({
      url: "/validate",
      method: "POST",
    });
  },
  allocate: async () => {
    return request({
      url: "/allocate",
      method: "POST",
    });
  },
};

export default api;
