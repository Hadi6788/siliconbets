import Grid from "@material-ui/core/Grid";
import header from "../../Assets/Images/header.png";
// import Ellipse2 from "../../assets/Images/Ellipse 2.png";
import Button from "../../Units/Button";
import Container from "@material-ui/core/Container";
import "./style.css";

const WelcomeBanner = () => {
  return (
    <>
      <Grid container className="maingrid">
        <Grid item container xs={12} md={6}>
          <Grid item container xs={12} md={12} direction="column">
            <div>
              <h1>Welcome to the </h1>
              <h2> Silicon Bet</h2>
            </div>
          </Grid>
          <Grid item container xs={12}>
            <h4>The easiest and more secure NFT marketplace</h4>
          </Grid>
          <Grid
            item
            container
            xs={4}
            justifyContent="space-between"
            className="bannerbuttons"
          >
            <Button whitebutton text="Explore" />
            <Button purplebutton text="Mint" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          xs={12}
          md={6}
          justifyContent="center"
          alignItems="center"
        >
          <img src={header} alt="Ellipse2" />
        </Grid>
      </Grid>
      {/* </Container> */}

      {/* </Container> */}
    </>
  );
};

export default WelcomeBanner;
