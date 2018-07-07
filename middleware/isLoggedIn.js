import Cookies from 'universal-cookie'

export default function ({redirect}) {
  const cookies = new Cookies()
  const token = cookies.get('dockhack-x-access-token')
  if (token) {
    console.log('have token')
  } else {
    console.log('no token')
    redirect('/')
  }
}
