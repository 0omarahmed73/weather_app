import { Col } from "react-bootstrap";
import { IoLocationSharp } from "react-icons/io5";

export function LocationName({ col = 2 }) {
  return (
    <Col
      xs={col}
      className="location-name d-flex flex-row gap-1 align-items-center"
    >
      <IoLocationSharp size={20} />
      <p>Cairo</p>
    </Col>
  );
}
