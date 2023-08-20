//biblioteca que me permite hacer las peticiones CRUD
import axios from 'axios'

const taksApi = axios.create({
    baseURL: 'http://localhost:8000/task/api/v1/task/'
})

export const getAllTask = () => {
    return taksApi.get('/')
}

export const createTask = (task) => {
    return taksApi.post('/', task)
}

export const deleteTask = (id) => taksApi.delete(`/${id}`)