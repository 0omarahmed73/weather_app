import { Col, Form, Row } from "react-bootstrap";
import { IoIosSearch } from "react-icons/io";

export function SearchNavBar({ col = 7 , colInput = 8 , colIcon = 1}) {
  return (
    <Col xs={col} className="d-flex justify-content-start align-items-center">
      <Form className="form-choose-city w-100">
        <Row className="gap-2 w-100 d-flex justify-content-center">
          <Col xs={colInput}>
            <Form.Control placeholder="Search City"></Form.Control>
          </Col>
          <Col xs={colIcon}>
            <div className="form-control d-flex justify-content-center align-items-center m-0 p-0">
              <IoIosSearch />
            </div>
          </Col>
        </Row>
      </Form>
    </Col>
  );
}
