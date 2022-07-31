const axios = require("axios");

const genRand = (len) => {
  axios
    .get(
      "https://baconipsum.com/api/?type=all-meat&sentences=1&start-with-lorem=1"
    )
    .then((res) => {
      return res.data;
    });
};

module.exports = genRand;
