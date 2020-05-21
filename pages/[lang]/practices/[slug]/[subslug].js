import React, { useEffect } from 'react';
import Head from 'next/head';
import { withRouter } from 'next/router';
import PageHeader from '../../../../components/PageHeader';
import PageSidebar from '../../../../components/PageSidebar';
import practiceById from '../../../../api/practiceById';
import translit from '../../../../services/translit';

const Practices = (props) => {
  console.log('practices', props);
  const { lang } = props.router.query;
  const menu = props.data.practices.map((v) => {
    v.name = v[`name_${lang}`];
    v.slug = v.id;
    return v;
  });
  const content = props.data.practices.find(
    (x) => x.id === +props.router.query.subslug
  )[`content_${lang}`];
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
            <p dangerouslySetInnerHTML={{ __html: content }}></p>
          </div>
          <PageSidebar list={menu} active={props.router.query.subslug} />
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
