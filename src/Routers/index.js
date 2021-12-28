import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Bid from "../Pages/Bid";

const Routers = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/Bid" element={<Bid />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default Routers;
