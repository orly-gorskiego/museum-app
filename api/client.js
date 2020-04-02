import { API_URI, API_KEY } from 'react-native-dotenv'

const sendRequest = (method, endpoint, body = null) => {
  const url = `${API_URI}/${endpoint}/?apikey=${API_KEY}`

  return fetch(url, {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    ...(body !== null && { body: JSON.stringify(body) }),
  })
}

export default sendRequest
