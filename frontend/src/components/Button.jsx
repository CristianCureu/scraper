const Button = ({ buttonText, type, onClick }) => {
  return (
    <button
      className="py-3 px-6 rounded-md bg-blue-500 font-bold text-white hover:bg-blue-800 ease-in duration-150"
      type={type}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

export default Button;
