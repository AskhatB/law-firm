import React, { useEffect } from 'react';
import Head from 'next/head';
import { withRouter } from 'next/router';
import partnerById from '../../../api/partnerById';
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
        <div className="partner-page">
          <div className="partner-page__side">
            <img src={props.data.image} />
            <div className="name">{props.data.name}</div>
            <div className="partner-page__skills">
              <div className="heading">Образование:</div>
              {props.data.edu.map((v) => (
                <p>{v}</p>
              ))}
            </div>
            <div className="partner-page__skills">
              <div className="heading">Языки:</div>
              {props.data.lang.map((v) => (
                <p>{v}</p>
              ))}
            </div>
            <div className="partner-page__skills">
              <div className="heading">Деятельность/членства:</div>
              {props.data.activities.map((v) => (
                <p>{v}</p>
              ))}
            </div>
          </div>
          <div
            className="partner-page__content"
            dangerouslySetInnerHTML={{ __html: props.data.content }}
          ></div>
          <div className="partner-page__side">
            {props.data.awards.map((v) => (
              <div className="partner-page__award">
                <div className="image">
                  <img src={v.image} />
                </div>
                <div className="heading">{v.title}</div>
                <p>{v.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

Partners.getInitialProps = async (ctx) => {
  const data = await partnerById(ctx.query.slug);
  return {
    data,
  };
};

export default withRouter(Partners);
