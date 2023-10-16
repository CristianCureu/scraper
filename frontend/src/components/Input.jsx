const Input = ({ type, name, placeholder, value, onChange, disabled }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className="my-4 border-gray-700 py-2"
    />
  );
};

export default Input;
