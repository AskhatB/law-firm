import fetch from 'isomorphic-unfetch';
import { API_ENDPOINT } from '../variables/environment';

const partners = async () => {
  const res = await fetch(`${API_ENDPOINT}/news`);
  const data = await res.json();
  return data;
};

export default partners;
