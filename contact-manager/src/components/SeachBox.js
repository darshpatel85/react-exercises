import Form from "react-bootstrap/Form";

const SearchBox = ({ search, setSearch }) => {
  return (
    <Form.Control
      value={search}
      onChange={(event) => setSearch(event.target.value)}
      type="text"
      placeholder="Search..."
    />
  );
};

export default SearchBox;
