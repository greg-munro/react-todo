import PropTypes from "prop-types";
import Button from "./Button";

const Header = (props, { onAdd }) => {
  return (
    <header className="header">
      <h1>{props.title}</h1>
      <Button color="green" text="Add" onClick={onAdd} />
    </header>
  );
};

export default Header;
