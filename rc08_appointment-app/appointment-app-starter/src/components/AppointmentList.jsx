import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { LuDelete } from "react-icons/lu";

const AppointmentList = ({ apps, setApps }) => {
  const handleDelete = (id) => {
    setApps(apps.filter((item) => item.id !== id));
  };

  return (
    <Container className="p-2">
      <h3 className="display-6 mb-2" style={{ color: "rgb(166, 18, 189)" }}>
        Appointment List
      </h3>
      {apps.length < 1 && <img src="./img/appointment.jpg" width= '70%' />}

      {apps.map(({ id, patient, consulted, doctor, day }) => (
        <div
          key={id}
          className={consulted ? "appointments consulted" : "appointments"}
        >
          <Row className="justify-content-between align-item-center">
            <Col xs={12} sm={12} md={6}>
              <h4>{patient}</h4>
              <h5>{doctor}</h5>
            </Col>

            <Col>
              <h5>{day}</h5>
            </Col>
            <Col className="text-end">
              <LuDelete
                className="text-danger fs-2 "
                onClick={() => handleDelete(id)}
                type="button"
              />
            </Col>
          </Row>
        </div>
      ))}
    </Container>
  );
};

export default AppointmentList;
