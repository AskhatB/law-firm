import React, { useEffect } from 'react';
import Head from 'next/head';
import { withRouter } from 'next/router';
import partners from '../../../api/partners';
import PageHeader from '../../../components/PageHeader';
import Link from 'next/link';

const Partners = (props) => {
  const { lang } = props.router.query;
  console.log(props);
  return (
    <>
      <Head>
        <title>
          Главная - TUKULOV & KASSILGOV LITIGATION KAZAKHSTAN’S FIRST DISPUTE
          RESOLUTION LAW FIRM
        </title>
      </Head>
      <PageHeader />
      <div className="container">
        <h1 className="partners__heading">Партнеры</h1>
        {/* <div className="partners">
          {props.data.map((v) => (
            <div className="partners__card">
              <Link href={`/${lang}/partners/${v.slug}`}>
                <a>
                  <img src={v.image} />
                  <div className="partners__card-name">{v.name}</div>
                </a>
              </Link>
            </div>
          ))}
        </div> */}
      </div>
    </>
  );
};

Partners.getInitialProps = async () => {
  const data = await partners();
  return {
    data,
  };
};

export default withRouter(Partners);
