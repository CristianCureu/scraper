import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import { useState } from "react";
import Item from "./components/Item";

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState([]);
  const [error, setError] = useState(null);

  const scrapWebsite = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:3001/scrape?url=https://wsa-test.vercel.app"
      );
      const data = await response.json();
      setResult(data);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex flex-col w-full items-center justify-center border-blue-950 p-10">
      <form
        className="w-3/5 flex items-center justify-center m-4"
        onSubmit={scrapWebsite}
      >
        <Input
          type="text"
          name="search"
          placeholder="https://wsa-test.vercel.app"
          value={text}
          disabled={true}
          onChange={(e) => setText(e.target.value)}
        />
        <Button buttonText="Scrap website" type="submit" />
      </form>
      {result &&
        result.map((item) => (
          <div key={item.title}>
            <Item item={item} />
          </div>
        ))}
      {error && <div className="text-red text-center">{error}</div>}
    </div>
  );
}

export default App;
