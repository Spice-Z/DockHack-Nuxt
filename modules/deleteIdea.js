const axios = require('axios')

module.exports = function deleteIdea(id) {
  console.log(id);

  axios.post(
      "https://dock-hack.herokuapp.com/api/deleteIdea", {
        id: id
      }
    )
    .then(function (response) {
      return res.data
    }).catch(
      function (err) {
        console.log(err);
      }
    )
}
