import fetch from 'isomorphic-unfetch';

const whyUsBySlug = async (slug) => {
  const res = await fetch('http://localhost:3000/data/why-us.json', {
    method: 'GET',
  });
  const data = await res.json();
  return data.find((x) => x.slug === slug.toLowerCase());
};

export default whyUsBySlug;
