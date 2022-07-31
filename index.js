const axios = require("axios");

const genRand = (len) => {
  axios
    .get(
      "https://baconipsum.com/api/?type=all-meat&sentences=1&start-with-lorem=1"
    )
    .then((res) => console.log(res.data));

  return Math.random()
    .toString(36)
    .substring(2, len + 2);
};

module.exports = genRand;
