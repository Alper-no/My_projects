const Card = (props) => {
  console.log("ne geliyor", props);
  return (
    <div className="cards">
      <div className="title">
        <h1>props.item.title</h1>
      </div>
      <div className="date">
        <h2>date</h2>
      </div>
      <img src="" alt="" />
      <div className="card-over">
        <p>description</p>
      </div>
    </div>
  );
};
export default Card;
