import React, { useEffect } from 'react';
import Head from 'next/head';
import Router from 'next/router';

const Home = () => {
  useEffect(() => {
    Router.push('/ru');
  }, []);
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};

export default Home;
