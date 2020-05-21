import React from 'react';
import Head from 'next/head';
import { withRouter } from 'next/router';
import PageHeader from '../../../components/PageHeader';
import practices from '../../../api/practices';
import Link from 'next/link';

const Practices = (props) => {
  console.log(props);
  const { lang } = props.router.query;
  return (
    <>
      <Head>
        <title>
          Главная - TUKULOV & KASSILGOV LITIGATION KAZAKHSTAN’S FIRST DISPUTE
          RESOLUTION LAW FIRM
        </title>
      </Head>
      <PageHeader />
      <div className="practices">
        <div className="container">
          <h1>
            Практики<div className="heading-bottom-sign"></div>
          </h1>
          <div className="practices__cards">
            {props.data.map((v) => (
              <div className="practices__card">
                <Link href={`/${lang}/practices/${v.id}/${v.practices[0].id}`}>
                  <a>{v[`name_${lang}`]}</a>
                </Link>
              </div>
            ))}
            <div className="practices__card"></div>
          </div>
        </div>
      </div>
    </>
  );
};

Practices.getInitialProps = async () => {
  const data = await practices();
  return {
    data,
  };
};

export default withRouter(Practices);
