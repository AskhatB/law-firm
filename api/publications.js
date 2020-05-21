import fetch from 'isomorphic-unfetch';
import { API_ENDPOINT } from '../variables/environment';

const publications = async () => {
  const res = await fetch(`${API_ENDPOINT}/publications`);
  const data = await res.json();
  return data;
};

export default publications;
