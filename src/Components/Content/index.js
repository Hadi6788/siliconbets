import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "../../Units/Button";
import "./style.css";
const Content = () => {
  return (
    <>
      <Grid container className="maincontent">
        <Grid item xs={12} md={3} container className="innercontent">
          <h4 className="innercontenth4">Pioneering art market royalties</h4>
          <p className="innercontentp">
            Artists receive continuous royalties for all secondary sales on
            their artworks forever
          </p>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          container
          justifyContent="flex-start"
          className="innercontent"
        >
          <h4 className="innercontenth4">Built for longevity</h4>
          <p className="innercontentp">
            All transactions happen on-chain, creating a tamper-proof record of
            each artwork’s history
          </p>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          container
          justifyContent="flex-start"
          className="innercontent"
        >
          <h4 className="innercontenth4">The future of art collecting</h4>
          <p className="innercontentp">
            Browse and build your collection of the world’s most cutting-edge
            digital art{" "}
          </p>
        </Grid>
        <Grid
          item
          md={3}
          xs={12}
          container
          justifyContent="center"
          alignItems="center"
        >
          <Button purplebutton text="Learn More" />
        </Grid>
      </Grid>
    </>
  );
};

export default Content;
