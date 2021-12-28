import "./style.css";
import Container from "@material-ui/core/Container";
const Card = ({ img, title, desc }) => {
  return (
    <>
      <Container>
        <div className="card">
          <img src={img} className="photo" />

          <div className="cardtext">
            <h4 className="cardtitle">{title}</h4>
            <h6 className="carddesc">{desc}</h6>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Card;
