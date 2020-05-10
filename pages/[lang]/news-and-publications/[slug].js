import React, { useEffect } from 'react';
import Head from 'next/head';
import { withRouter } from 'next/router';
import news from '../../../api/news';
import PageHeader from '../../../components/PageHeader';
import Link from 'next/link';
import PageSidebar from '../../../components/PageSidebar';
import NewsBlock from '../../../components/NewsBlock';

const NewsAndPublications = (props) => {
  const { lang } = props.router.query;
  console.log(props);
  const menu = [
    {
      name: 'Новости',
      slug: 'news',
    },
    {
      name: 'Публикации',
      slug: 'publications',
    },
  ];
  return (
    <>
      <Head>
        <title>
          Главная - TUKULOV & KASSILGOV LITIGATION KAZAKHSTAN’S FIRST DISPUTE
          RESOLUTION LAW FIRM
        </title>
      </Head>
      <PageHeader />
      <div className="news">
        <div className="container">
          <h1>Новости и публикации</h1>
        </div>
        <div className="container">
          <div className="news__main">
            {props.data.map((v) => (
              <NewsBlock {...v} />
            ))}
          </div>
          <PageSidebar list={menu} />
        </div>
      </div>
    </>
  );
};

NewsAndPublications.getInitialProps = async (ctx) => {
  const data = await news();
  return {
    data,
  };
};

export default withRouter(NewsAndPublications);
