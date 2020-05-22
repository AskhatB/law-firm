import React, { useEffect } from 'react';
import Head from 'next/head';
import { withRouter } from 'next/router';
import newsById from '../../../api/newsById';
import PageHeader from '../../../components/PageHeader';
import PageSidebar from '../../../components/PageSidebar';

const News = (props) => {
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
      <div className="news-one">
        <div className="container">
          <div className="content">
            <div
              dangerouslySetInnerHTML={{
                __html: props.data[`content_${props.router.query.lang}`],
              }}
            ></div>
          </div>
          <PageSidebar list={menu} active="news" />
        </div>
      </div>
    </>
  );
};

News.getInitialProps = async (ctx) => {
  const data = await newsById(ctx.query.slug);
  return {
    data,
  };
};

export default withRouter(News);
