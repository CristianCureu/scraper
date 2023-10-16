import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import { useState } from "react";
import Item from "./components/Item";
import JsonDisplay from "./components/JsonDisplay";

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [jsonDisplay, setJsonDisplay] = useState(false);

  const scrapWebsite = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(
        "http://localhost:3001/scrape?url=https://wsa-test.vercel.app"
      );
      const data = await response.json();
      setResult(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex flex-col w-full items-center justify-center p-10">
      <h1 className="text-3xl font-bold">Welcome to Web Scraper</h1>
      <form className="my-6" onSubmit={scrapWebsite}>
        <Input
          type="text"
          name="search"
          placeholder="https://wsa-test.vercel.app"
          value={text}
          disabled={true}
          onChange={(e) => setText(e.target.value)}
        />
        <Button buttonText="Scrape website" type="submit" />
      </form>
      {loading && <p>Scraping website...</p>}
      {result && (
        <Button
          buttonText={jsonDisplay ? "Hide JSON format" : "Display JSON format"}
          onClick={() => setJsonDisplay(!jsonDisplay)}
        />
      )}
      {jsonDisplay && <JsonDisplay data={result} />}
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
