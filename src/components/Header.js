import Button from "./Button";

const Header = (props) => {
  return (
    <header>
      <h3>{props.title}</h3>
      <Button
        text="white"
        background={props.btnState ? 'red' : 'black'}
        title={props.btnState ? "Close" : "+ New"}
        onClick={props.formButton}
      />
    </header>
  );
};

export default Header;
