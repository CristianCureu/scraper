const Button = ({ buttonText, type }) => {
  return (
    <button className="py-4 px-8" type={type}>
      {buttonText}
    </button>
  );
};

export default Button;
