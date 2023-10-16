const Item = ({ item }) => {
  return (
    <div className="my-4 mx-auto w-4/6 py-6 px-2 flex flex-col items-center rounded-md bg-gray-100">
      <p className="text-xl mb-4 font-semibold">{item.title}</p>
      <p className="mb-4 text-lg">{item.shortDescription}</p>
      <div className="mb-4">
        href:
        <a href={item.href} className="text-blue-800 font-bold">
          {item.href}
        </a>
      </div>
      <img src={item.image} alt="image" className="w-4/6 mb-4" />
      <p className="mb-4">
        Number of words: <b>{item.words}</b>
      </p>
      <p>
        Sentiment: <b>{item.sentiment}</b>
      </p>
    </div>
  );
};

export default Item;
