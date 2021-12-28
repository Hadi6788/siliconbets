import Grid from "@material-ui/core/Grid";
import logo from "../../Assets/Images/logo.png";
import SearchIcon from "@material-ui/icons/Search";
// import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Button from "../../Units/Button";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));
const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        className="nav"
        // spacing={3}
      >
        <Grid item md={3}>
          <img src={logo} alt="logo" />
        </Grid>
        <Grid item container justifyContent="center" md={3}>
          <div className="search">
            <input
              type="text"
              className="searchTerm"
              placeholder="search items, collections and accounts"
            />
            <SearchIcon className="icon" />
          </div>
        </Grid>
        <Grid item md={4}>
          <div className="links">
            <div className="leftlinks">
              <p>explore</p>
              <p>my profile</p>
              <p>Following</p>
              <p>Market</p>
            </div>
            <div className="rightlinks">
              <p>How it works</p>
              <p>community</p>
            </div>
          </div>
        </Grid>
        <Grid item md={2} className="navbuttons">
          <Button purplebutton text="Create" />
          <Button whitebutton text="Sign In" />
        </Grid>
      </Grid>
    </>
  );
};

export default Navbar;
