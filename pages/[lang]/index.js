import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { withRouter } from 'next/router';

const Home = (props) => {
  const { lang } = props.router.query;
  return (
    <>
      <Head>
        <title>
          Главная - TUKULOV & KASSILGOV LITIGATION KAZAKHSTAN’S FIRST DISPUTE
          RESOLUTION LAW FIRM
        </title>
      </Head>
      <div className="main">
        <nav>
          <ul>
            <li>
              <Link href={`/${lang}/why-us/idea-of-creation`}>
                <a>Почему мы</a>
              </Link>
            </li>

            <li>
              <Link href={`/${lang}/partners`}>
                <a>партнёры</a>
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/practices`}>
                <a>практики</a>
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/news-and-publications/news`}>
                <a>новости и публикации</a>
              </Link>
            </li>
          </ul>
        </nav>
        <header>
          <div className="container">
            <h1>TUKULOV & KASSILGOV LITIGATION <span>LLP</span></h1>
            <h2>
              Первая в Казахстане юридическая фирма, специализированная в
              области разрешения споров
            </h2>
          </div>
        </header>
        <div className="main__address">
          77 KONAEV STREET, ALMATY, KAZAKHSTAN T.: +7 727 321 23 17
          CONTACT@TKL.KZ
        </div>
      </div>
    </>
  );
};

export default withRouter(Home);
