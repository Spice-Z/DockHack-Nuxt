import Cookies from 'universal-cookie'
const cookies = new Cookies()

export default function (context) {
  const token = cookies.get('dockhack-x-access-token')
  if (token) {
    console.log('have token')
    console.log(token)
  } else {
    console.log('no token')
  }
}
