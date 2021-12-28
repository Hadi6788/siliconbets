import "./style.css";
import Container from "@material-ui/core/Container";
const Card = ({ img, title, desc }) => {
  return (
    <>
      <Container>
        <div className="card" style={{ border: "2px solid yellow" }}>
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
