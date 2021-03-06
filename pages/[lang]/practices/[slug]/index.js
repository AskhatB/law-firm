import React, { useEffect } from 'react';
import Head from 'next/head';
import { withRouter } from 'next/router';
import PageHeader from '../../../../components/PageHeader';
import PageSidebar from '../../../../components/PageSidebar';
import practiceById from '../../../../api/practiceById';
import translit from '../../../../services/translit';

const Practices = (props) => {
  console.log('practices', props);
  const menu = props.data.sub.map((v) => {
    return {
      name: v.title,
      slug: translit(v.title),
    };
  });
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
          </div>
          <PageSidebar list={menu} active={props.router.query.slug} />
        </div>
      </div>
    </>
  );
};

Practices.getInitialProps = async (ctx) => {
  const data = await practiceById(ctx.query.slug);
  return {
    data,
  };
};

export default withRouter(Practices);
