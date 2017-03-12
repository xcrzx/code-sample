import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:9001/api/',
})

const getTodos = () => api.get('/todos/')

export default {
  getTodos,
}
