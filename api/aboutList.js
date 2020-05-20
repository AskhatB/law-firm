import fetch from 'isomorphic-unfetch';
import { API_ENDPOINT } from '../variables/environment';

const aboutList = async () => {
  const response = await fetch(`${API_ENDPOINT}/abouts`);
  let data = await response.json();
  return data;
};

export default aboutList;
