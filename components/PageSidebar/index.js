import Link from 'next/link';
import { withRouter } from 'next/router';
import './style.scss';

const PageSidebar = (props) => {
  console.log('active', props);
  return (
    <div className="page-sidebar">
      {props.list.map((v) => (
        <Link href={'/' + v.slug} passHref>
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
