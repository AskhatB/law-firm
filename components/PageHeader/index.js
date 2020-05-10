import Link from 'next/link';
import { withRouter } from 'next/router';
import './style.scss';

const PageHeader = (props) => {
  const { lang } = props.router.query;
  return (
    <div className="page-header">
      <div className="container">
        <Link href={`/${lang}`}>
          <div className="page-header__logo">
            TUKULOV & KASSILGOV LITIGATION LLP
          </div>
        </Link>
        <div className="page-header__menu">
          <ul>
            <li>
              <Link href={`/${lang}/why-us/idea-of-creation`} passHref>
                <a>Почему мы</a>
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/partners`} passHref>
                партнёры
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/practices`} passHref>
                практики
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/why-us/idea-of-creation`} passHref>
                новости и публикации
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default withRouter(PageHeader);
