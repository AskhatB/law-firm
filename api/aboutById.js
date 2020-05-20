import fetch from 'isomorphic-unfetch';
import { API_ENDPOINT } from '../variables/environment';

const aboutById = async (id) => {
  const response = await fetch(`${API_ENDPOINT}/abouts/${id}`);
  const data = await response.json();
  return data;
};

export default aboutById;
