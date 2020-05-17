import Link from 'next/link';
import { withRouter } from 'next/router';
import './style.scss';

const PageSidebar = (props) => {
  console.log('active', props);
  const { lang } = props.router.query;
  return (
    <div className="page-sidebar">
      {props.list.map((v) => (
        <Link href={`/${lang}/practices/${props.active}/${v.slug}`} passHref>
          <a>
            <div
              className={`page-sidebar__item${
                props.active === v.slug ? ' active' : ''
              }`}
            >
              {v.name}
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default withRouter(PageSidebar);
