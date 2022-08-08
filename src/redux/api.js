import request from "../utils/requestConfig";
const header = { "Content-Type": "application/json" };
const api = {
  config: async () => {
    return request({
      url: "/config",
      method: "POST",
      headers: header,
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

//     var axios = require("axios");
//     var data = JSON.stringify({
//       campaign_id: 1,
//     });

//     var config = {
//       method: "post",
//       url: "https://bw-api.pr.mci.dev/v2/luckywheel/config",
//       headers: {
//         "Content-Type": "application/json",
//         Cookie:
//           "op_browser_state=9ea1c55ba68d9778d96f64af6a050daf3346a6c8ae9e1e8c0fbd29c0",
//       },
//       data: data,
//     };

//     axios(config)
//       .then(function (response) {
//         console.log(JSON.stringify(response.data));
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   },
// };
