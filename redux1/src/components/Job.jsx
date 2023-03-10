import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";

const Job = ({ data }) => {
  const cart = useSelector((state) => state);
  console.log(cart);
  const dispatch = useDispatch();

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={9}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
        <Button
          onClick={() => dispatch({ type: "ADD", payload: data })}
          variant="danger"
        >
          add
        </Button>{" "}
      </Col>
    </Row>
  );
};

export default Job;
