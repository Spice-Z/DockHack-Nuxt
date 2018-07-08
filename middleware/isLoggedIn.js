import Cookies from 'universal-cookie'

export default function ({redirect, route}) {
  const cookies = new Cookies()
  const token = cookies.get('dockhack-x-access-token')
  if (route.path === '/') {
    if (token) {
      console.log('have token')
      redirect('/IL')
    }
  } else {
    if (token) {
      console.log('have token')
    } else {
      console.log('no token')
      redirect('/')
    }
  }
}
