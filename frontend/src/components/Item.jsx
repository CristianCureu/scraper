const Item = ({ item }) => {
  return (
    <div className="my-4 flex flex-col items-center">
      <p className="text-xl mb-2">{item.title}</p>
      <p className="mb-2">{item.shortDescription}</p>
      <div className="mb-2">
        href:
        <a href={item.href} className="text-blue-800 font-bold">
          {item.href}
        </a>
      </div>
      <img src={item.image} alt="image" className="w-2/4 my-2" />
      <p className="mb-2">
        Number of words: <b>{item.words}</b>
      </p>
      <p>
        Sentiment: <b>{item.sentiment}</b>
      </p>
    </div>
  );
};

export default Item;
