import React from "react";
import { Row, Container, Col, Button, Form } from "react-bootstrap";

const Search = ({word,setWord,handleSubmit}) => {
  return (
    <Container className="mt-4">
      <Form onSubmit={handleSubmit}>
        <Row className="justify-content-center" >
          <Col xs={12} md={8}>
            <Form.Control 
            type="text"
            value={word}
            onChange={(e)=>setWord(e.target.value)}
            placeholder="Search Image Name" 

            />
          </Col>
          <Col >
            <Button variant="primary" type="submit">
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};
export default Search;
