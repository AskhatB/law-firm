import React from 'react';
import Head from 'next/head';

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div>
      <nav>
        <ul>
          <li>Почему мы</li>
          <li>партнёры</li>
          <li>практики</li>
          <li>новости и публикации</li>
        </ul>
      </nav>
    </div>
  </div>
);

export default Home;
