import classnames from "classnames";
import "./style.css";
const Button = ({ purplebutton, text, whitebutton }) => {
  const layout = classnames({
    purplebutton: purplebutton,
    whitebutton: whitebutton,
  });
  return (
    <div>
      {" "}
      <button className={layout}> {text} </button>{" "}
    </div>
  );
};

export default Button;
