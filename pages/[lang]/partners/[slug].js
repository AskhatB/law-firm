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
            <img src={props.data.avatar_link} />
            <div className="name">{props.data[`name_${lang}`]}</div>
            <div className="phones d-flex">
              M:
              <div>
                {props.data.m_phone.map((v) => (
                  <>
                    {v}
                    <br />
                  </>
                ))}
              </div>
            </div>
            <div className="phones">
              D:
              {props.data.d_phone.map((v) => (
                <>
                  {v}
                  <br />
                </>
              ))}
            </div>
            <div className="email">E: {props.data.email}</div>
            <div className="partner-page__skills">
              <div className="heading">Образование:</div>
              {props.data[`edu_${lang}`].map((v) => (
                <p>{v}</p>
              ))}
            </div>
            <div className="partner-page__skills">
              <div className="heading">Языки:</div>
              {props.data[`lang_${lang}`].map((v) => (
                <p>{v}</p>
              ))}
            </div>
            <div className="partner-page__skills">
              <div className="heading">Деятельность/членства:</div>
              {props.data[`activities_${lang}`].map((v) => (
                <p>{v}</p>
              ))}
            </div>
          </div>
          <div
            className="partner-page__content"
            dangerouslySetInnerHTML={{ __html: props.data[`content_${lang}`] }}
          ></div>
          <div className="partner-page__side">
            {props.data.personal_rewards.map((v) => (
              <div className="partner-page__award">
                <div className="image">
                  <img src={v.image_url} />
                </div>
                <div className="heading">{v[`name_${lang}`]}</div>
                <p>{v[`descr_${lang}`]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

Partners.getInitialProps = async (ctx) => {
  let data = await partnerById(ctx.query.slug);
  return {
    data,
  };
};

export default withRouter(Partners);
