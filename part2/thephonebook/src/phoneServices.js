import axios from 'axios';

const baseUrl = 'http://localhost:3001/persons';

export const addPerson = (newPersonObj) => {
  return axios.post(baseUrl, newPersonObj).then((response) => response.data);
};

export const getPersons = () => {
  return axios.get(baseUrl).then((response) => response.data);
};

export const deletePerson = (id) => {
  return axios.delete(`${baseUrl}/${id}`).then((response) => response.data);
};

export const updatePerson = (id, updatedPersonObj) => {
  return axios
    .put(`${baseUrl}/${id}`, updatedPersonObj)
    .then((response) => response.data);
};
