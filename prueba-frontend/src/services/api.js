import axios from 'axios';

const API_BASE_URL = 'http://localhost:5214/api/properties';

export const getProperties = async (filters) => {
    console.log("Haciendo petición a:", API_BASE_URL, "con filtros:", filters); 
  try {
    const response = await axios.get(API_BASE_URL, { params: filters });
    return response.data;
  } catch (error) {
    console.error('Error fetching properties:', error);
    throw error;
  }
};

export const getPropertyById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching property:', error);
    throw error;
  }
};