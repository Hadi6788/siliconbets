import "./style.css";
import Grid from "@material-ui/core/Grid";
const Nft = () => {
  return (
    <>
      <Grid container justifyContent="center" className="nft">
        <Grid item container xs={12} justifyContent="center">
          <h1>WHAT IS NFT?</h1>
        </Grid>
        <Grid item container xs={12} justifyContent="center">
          <p>
            A non-fungible token (NFT) is a unit of data stored on a digital
            ledger, called a blockchain, that certifies a digital asset to be
            unique and therefore not interchangeable.
          </p>
        </Grid>
      </Grid>
    </>
  );
};

export default Nft;
