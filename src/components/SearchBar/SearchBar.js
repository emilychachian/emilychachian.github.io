import { Button, Form } from "semantic-ui-react";

const SearchBar = () => (
  <div className="search">
    <Form>
      <Form.Group>
        <Form.Input placeholder="Github user" name="github user" />
        <Form.Button content="Search" />
      </Form.Group>
    </Form>
  </div>
);

export default SearchBar;
