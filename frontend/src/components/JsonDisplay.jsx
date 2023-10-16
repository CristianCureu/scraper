const JsonDisplay = ({ data }) => {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

export default JsonDisplay;
