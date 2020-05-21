import fetch from 'isomorphic-unfetch';
import { API_ENDPOINT } from '../variables/environment';

const practices = async () => {
  const res = await fetch(`${API_ENDPOINT}/practice-mains`);
  const data = await res.json();
  return data;
};

export default practices;
