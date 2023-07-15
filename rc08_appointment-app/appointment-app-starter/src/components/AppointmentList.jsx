import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { LuDelete } from "react-icons/lu";

const AppointmentList = ({ apps }) => {
  return (
    <Container className="p-2">
      <h3 className="display-6 mb-2" style={{ color: "rgb(166, 18, 189)" }}>
        Appointment List
      </h3>

      {apps.map(({ id, patient, consulted, doctor, day }) => (
        <div
          key={id}
          className={consulted ? "appointments consulted" : "appointments"}
        >
          <Row>
            <Col>
              <h4>{patient}</h4>
              <h5>{doctor}</h5>
            </Col>

            <Col>{day}</Col>
            <Col>
              <LuDelete className="text-danger fs-2" />
            </Col>
          </Row>
        </div>
      ))}
    </Container>
  );
};

export default AppointmentList;
