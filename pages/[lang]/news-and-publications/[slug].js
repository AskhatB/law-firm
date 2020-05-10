import React, { useEffect } from 'react';
import Head from 'next/head';
import { withRouter } from 'next/router';
import partnerById from '../../../api/partnerById';
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
          <div className="content">
            {/* {
              props.data.
            } */}
          </div>
          <PageSidebar list={menu} />
        </div>
      </div>
    </>
  );
};

NewsAndPublications.getInitialProps = async (ctx) => {
  const data = await partnerById(ctx.query.slug);
  return {
    data,
  };
};

export default withRouter(NewsAndPublications);
