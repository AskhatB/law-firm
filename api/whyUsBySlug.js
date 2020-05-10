import fetch from 'isomorphic-unfetch';
import { API_ENDPOINT } from '../variables/environment';

const whyUsBySlug = async (slug) => {
  const res = await fetch(`${API_ENDPOINT}/data/why-us.json`, {
    method: 'GET',
  });
  const data = await res.json();
  return data.find((x) => x.slug === slug.toLowerCase());
};

export default whyUsBySlug;
