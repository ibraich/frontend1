import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Search from "./Components/Search";
import ImageCard from "./Components/Imagecard";
import { Container, Row, Col } from "react-bootstrap";
const Unsplash_Key = process.env.REACT_APP_UNSPLASH_KEY;
const App = () => {
  const [word, setWord] = useState("");
  const [images, setImages] = useState([]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetch(
      `https://api.unsplash.com/photos/random/?query=${word}&client_id=${Unsplash_Key}`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages([{ ...data, title: word }, ...images]);
      })
      .catch((err) => {
        console.log(err);
      });
    setWord("");
  };
  const handleDeleteImage = (id) => {
    setImages(images.filter((image) => image.id !== id));
  };
  return (
    <div className="App">
      <Header title="Images Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
      <Container className="mt-4">
        <Row className="pb3" xs={1} md={2} lg={3}>
          {images.map((image, i) => (
            <Col key={i}>
              <ImageCard image={image} deleteImage={handleDeleteImage} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
export default App;
