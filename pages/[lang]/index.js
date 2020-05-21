import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { withRouter } from 'next/router';
import Clock from 'react-live-clock';

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
              <Link href={`/${lang}/why-us/1`}>
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
              <Link href={`/${lang}/news`}>
                <a>новости и публикации</a>
              </Link>
            </li>
          </ul>
        </nav>
        <header>
          <div className="container">
            <h1>
              TUKULOV & KASSILGOV LITIGATION <span>LLP</span>
            </h1>
            <h2>
              Первая в Казахстане юридическая фирма, специализированная в
              области разрешения споров
            </h2>
          </div>
        </header>
        <div className="main__address">
          <nav>
            <ul>
              <li>г. Алматы, ул. Конаева, 77</li>
              <li>T.: +7 727 321 23 17</li>
              <li>CONTACT@TKL.KZ</li>
              <li>
                <Clock
                  format={'HH:mm'}
                  ticking={true}
                  timezone={'Asia/Almaty'}
                />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default withRouter(Home);
