import Link from 'next/link';
import { withRouter } from 'next/router';
import './style.scss';

const PageSidebar = (props) => {
  console.log('active', props);
  const spitedLink = props.router.asPath.split('/');
  const link = spitedLink.slice(0, spitedLink.length - 1).join('/');
  console.log('link', link);
  return (
    <div className="page-sidebar">
      {props.list.map((v) => (
        <Link href={link + '/' + v.slug}>
          <a>
            <div
              className={`page-sidebar__item${
                props.active === v.slug.toString() ? ' active' : ''
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
