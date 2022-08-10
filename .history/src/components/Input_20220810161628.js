import PropTypes from "prop-types";

function Input({ placeHolder = "Type...", size = "md", type }) {
  let scale = 1;
  if (size === "sm") scale = 0.75;
  if (size === "lg") scale = 1.5;

  const style = {
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    border: "none",
  };
  return <input type={type} style={style} placeholder={placeHolder} />;
}

Input.propTypes = {
  type: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};

export default Input;
