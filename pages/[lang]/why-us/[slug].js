import React, { useEffect } from 'react';
import Head from 'next/head';
import { withRouter } from 'next/router';
import whyUsBySlug from '../../../api/whyUsBySlug';
import PageHeader from '../../../components/PageHeader';
import PageSidebar from '../../../components/PageSidebar';
import { API_ENDPOINT } from '../../../variables/environment';

const WhyUs = (props) => {
  console.log('API_ENDPOINT', API_ENDPOINT);
  const menu = [
    {
      name: 'Идея создания',
      slug: 'idea-of-creation',
    },
    {
      name: 'Чем мы отличаемся от конкурентов',
      slug: 'how-do-we-differ-from-our-competitors',
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
      <div className="why-us">
        <div className="container">
          <div className="content">
            <h1>{props.data.title}</h1>
            <p>{props.data.content}</p>
          </div>
          <PageSidebar list={menu} active={props.router.query.slug} />
        </div>
      </div>
    </>
  );
};

WhyUs.getInitialProps = async (ctx) => {
  const data = await whyUsBySlug(ctx.query.slug);
  return {
    data,
  };
};

export default withRouter(WhyUs);
