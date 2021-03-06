import Link from 'next/link';
import { withRouter } from 'next/router';
import './style.scss';

const PageHeader = (props) => {
  const { lang } = props.router.query;
  return (
    <div className="page-header">
      <div className="container">
        <div className="page-header__menu">
          <ul>
            <li>
              <Link href={`/${lang}/why-us/1`} passHref>
                <a>Почему мы</a>
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/partners`} passHref>
                партнеры
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/practices`} passHref>
                практики
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/news`} passHref>
                новости и публикации
              </Link>
            </li>
          </ul>
        </div>
        <Link href={`/${lang}`}>
          <div className="page-header__logo"></div>
        </Link>
      </div>
    </div>
  );
};

export default withRouter(PageHeader);
