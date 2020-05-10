const NewsBlock = (props) => {
  return (
    <div className="news-block">
      <div className="date">{props.date}</div>
      <div className="preview">{props.preview}</div>
    </div>
  );
};

export default NewsBlock;
