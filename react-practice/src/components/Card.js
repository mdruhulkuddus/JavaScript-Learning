


function Card(props){
  const{titleText, description} = props;
    return (
      <div className="card">
    <div className="container">
      <h4><b>{titleText}</b></h4>
      <p>{description}</p>
    </div>
  </div>
    );
  }

  export default Card;