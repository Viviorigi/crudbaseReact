import axios from 'axios'

const REST_API_URL='http://localhost:8080/api/employees'

export const listEmployees =  async () => {
  const getListEmployees = await axios.get(REST_API_URL)
  return getListEmployees
}

export const createEmployee = async (e) => {
  return await axios.post(REST_API_URL,e)
}

export const getEmployee = async (id) => {
  const getEmployee = await  axios.get(REST_API_URL+'/'+id)
  return getEmployee
}

export const updateEmployee = async (id,e) => {
  const updateEmployee = await  axios.put(REST_API_URL+'/'+id,e)
  return updateEmployee
}

export const deleteEmployee = async (id) => {
  const deleteEmployee = await  axios.delete(REST_API_URL+'/'+id)
  return deleteEmployee
}
