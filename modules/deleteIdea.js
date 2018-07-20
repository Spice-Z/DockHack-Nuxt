const Cookies = require('universal-cookie')
const axios = require('axios')
const cookies = new Cookies()
const config = {
  headers: {
    'x-access-token': cookies.get('dockhack-x-access-token')
  }
}

module.exports = function deleteIdea (id) {
  console.log(id)
  axios.post('https://quattorroserver.herokuapp.com/api/deleteIdea', {id: id}, config)
    .then(function (response) {
      return response.data
    }).catch(
      function (err) {
        console.log(err)
      }
    )
}
