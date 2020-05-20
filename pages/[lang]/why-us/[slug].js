import React, { useEffect } from 'react';
import Head from 'next/head';
import { withRouter } from 'next/router';
import aboutList from '../../../api/aboutList';
import aboutById from '../../../api/aboutById';
import PageHeader from '../../../components/PageHeader';
import PageSidebar from '../../../components/PageSidebar';

const WhyUs = (props) => {
  console.log(props);
  const menu = props.list.map((v) => {
    v.name = v[`title_${props.router.query.lang}`];
    v.slug = v.id;
    return v;
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
            <div
              dangerouslySetInnerHTML={{
                __html: props.data[`content_${props.router.query.lang}`],
              }}
            ></div>
          </div>
          <PageSidebar list={menu} active={props.router.query.slug} />
        </div>
      </div>
    </>
  );
};

WhyUs.getInitialProps = async (ctx) => {
  const list = await aboutList();
  const data = await aboutById(ctx.query.slug);
  return {
    list,
    data,
  };
};

export default withRouter(WhyUs);
