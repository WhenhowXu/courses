const { GET_USER_LIST } = require("../api/constants");
const Mock = require("mockjs");

Mock.mock(GET_USER_LIST, "post", {
  "list|10": [
    {
      "id|+1": 1,
      userName: Mock.Random.cname(),
    },
  ],
  total: 1000,
});
