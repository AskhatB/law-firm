import './style.scss';
import { monthes } from '../../variables';
import { withRouter } from 'next/router';

const NewsBlock = (props) => {
  const { lang } = props.router.query;
  const date = new Date(props.updated_at);
  const created = `${date.getDate()}-${
    monthes[date.getMonth()]
  }-${date.getFullYear()}`;
  // console.log('news', date, created);
  return (
    <div className="news-block">
      <div className="date">{created}</div>
      <div>
        <div className="heading">{props[`title_${lang}`]}</div>
        <div className="preview">{props[`content_${lang}`]}</div>
      </div>
    </div>
  );
};

export default withRouter(NewsBlock);
