import fetch from 'isomorphic-unfetch';
import { API_ENDPOINT } from '../variables/environment';

const partners = async (id) => {
  const res = await fetch(`${API_ENDPOINT}/partners/${id}`);
  const data = await res.json();
  return data;
};

export default partners;
