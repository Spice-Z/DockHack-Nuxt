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

  axios.post('http://localhost:8080/api/deleteIdea', {id: id}, config)
    .then(function (response) {
      return response.data
    }).catch(
      function (err) {
        console.log(err)
      }
    )
}
