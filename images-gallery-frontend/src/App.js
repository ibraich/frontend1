import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Search from "./Components/Search";
const Unsplash_Key = process.env.REACT_APP_UNSPLASH_KEY;
const App = () => {
  const [word, setWord] = useState("");
  const [images, setImages] = useState([]);
  console.log(images);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetch(
      `https://api.unsplash.com/photos/random/?query=${word}&client_id=${Unsplash_Key}`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages([data, ...images]);
      })
      .catch((err) => {
        console.log(err);
      });
    setWord("");
  };

  return (
    <div className="App">
      <Header title="Images Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
    </div>
  );
};
export default App;
