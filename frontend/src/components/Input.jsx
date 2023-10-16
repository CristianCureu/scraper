const Input = ({ type, name, placeholder, value, onChange, disabled }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className="m-4 border-gray-400 border-2 rounded-md p-2 w-60"
    />
  );
};

export default Input;
