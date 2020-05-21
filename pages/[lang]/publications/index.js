import React, { useEffect } from 'react';
import Head from 'next/head';
import { withRouter } from 'next/router';
import publications from '../../../api/publications';
import PageHeader from '../../../components/PageHeader';
import Link from 'next/link';
import PageSidebar from '../../../components/PageSidebar';
import NewsBlock from '../../../components/NewsBlock';

const Publications = (props) => {
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
          <div className="news__main">
            {props.data.map((v) => (
              <NewsBlock {...v} />
            ))}
          </div>
          <PageSidebar list={menu} active="publications" />
        </div>
      </div>
    </>
  );
};

Publications.getInitialProps = async (ctx) => {
  const data = await publications();
  return {
    data,
  };
};

export default withRouter(Publications);
