import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Card, Modal, Table, Image, Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Webcam from 'react-webcam'; // Import the webcam component
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  const [alerts, setAlerts] = useState([]);
  const [selectedAlert, setSelectedAlert] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [liveCameraFeed, setLiveCameraFeed] = useState(false);
  const webcamRef = useRef(null);

  useEffect(() => {
    // Fetch alerts data from API and update state
    // Example: fetchAlerts().then(data => setAlerts(data));

    // Dummy alerts data for demonstration
    const dummyAlerts = [
      { id: 1, type: 'Fire', location: 'XYZ Street', time: '2024-03-08 10:30:00', status: 'New' },
      { id: 2, type: 'Flood', location: 'ABC Avenue', time: '2024-03-08 11:45:00', status: 'In Progress' },
      { id: 3, type: 'Traffic Accident', location: 'PQR Road', time: '2024-03-08 12:15:00', status: 'Resolved' }
    ];
    setAlerts(dummyAlerts);
  }, []);

  const handleSelectAlert = (alert) => {
    setSelectedAlert(alert);
    setShowModal(true);
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    setSelectedVideo(file);
    // If live camera feed is active, stop it when a video file is uploaded
    setLiveCameraFeed(false);
  };

  const startLiveCamera = () => {
    setSelectedVideo(null); // Reset selected video if live camera is started
    setLiveCameraFeed(true);
  };

  const stopLiveCamera = () => {
    setLiveCameraFeed(false);
  };

  const handleVideoCapture = () => {
    // Access the webcam and capture a frame for processing
    const imageSrc = webcamRef.current.getScreenshot();
    // Process the captured frame for anomaly detection
    console.log('Captured frame:', imageSrc);
  };

  const handleChangeStatus = (id, newStatus) => {
    const updatedAlerts = alerts.map(alert => {
      if (alert.id === id) {
        return { ...alert, status: newStatus };
      }
      return alert;
    });
    setAlerts(updatedAlerts);
  };

  return (
    <div>
      <Container fluid>
        {/* Government Details */}
        <Row className="government-details">
          <Col xs={6}>
            <Image src="https://see.fontimg.com/api/renderfont4/j9eO/eyJyIjoiZnMiLCJoIjo5OCwidyI6MTUwMCwiZnMiOjY1LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/Q0hpTFNjb3Bl/license-plate.png"/>
            <div className="government-info">
              <h2>Anomaly Detection Application</h2>
              <p>Department of Emergency Services</p>
            </div>
          </Col>
          <Col xs={6} className="search-container">
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <button className="search-button" type="submit">
                <i className="fas fa-search"></i>
              </button>
            </Form>
          </Col>
        </Row>
      </Container>

      <Container fluid>
        <Row>
          <Col md={8}>
            <Card>
              <Card.Body>
                <h4>Dashboard Overview</h4>
                <Table striped bordered hover responsive>
                  <thead>
                    <tr>
                      <th>Type</th>
                      <th>Location</th>
                      <th>Time</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {alerts.map(alert => (
                      <tr key={alert.id}>
                        <td>{alert.type}</td>
                        <td>{alert.location}</td>
                        <td>{alert.time}</td>
                        <td>
                          <select value={alert.status} onChange={(e) => handleChangeStatus(alert.id, e.target.value)}>
                            <option value="New">New</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Resolved">Resolved</option>
                          </select>
                        </td>
                        <td>
                          <button className="btn btn-primary btn-sm" onClick={() => handleSelectAlert(alert)}>View</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            {/* Anomalies Detection Images */}
            <Card>
              <Card.Body>
                <h4>Anomalies Detection</h4>
                <Image src="/anomalies_detection1.jpg" className="anomalies-image" />
                <Image src="/anomalies_detection2.jpg" className="anomalies-image" />
              </Card.Body>
            </Card>
            {/* Video Upload */}
            <Card>
              <Card.Body>
                <h4>Video Upload</h4>
                <input type="file" accept="video/*" onChange={handleFileInputChange} />
                {selectedVideo && <p>Selected Video: {selectedVideo.name}</p>}
              </Card.Body>
            </Card>
            {/* Live Camera */}
            <Card>
              <Card.Body>
                <h4>Live Camera</h4>
                {!liveCameraFeed && <button onClick={startLiveCamera}>Start Live Camera</button>}
                {liveCameraFeed && (
                  <div>
                    <Webcam
                      audio={false}
                      ref={webcamRef}
                      screenshotFormat="image/jpeg"
                      style={{ width: '100%', height: 'auto' }}
                    />
                    <button onClick={stopLiveCamera}>Stop Live Camera</button>
                    <button onClick={handleVideoCapture}>Capture Frame</button>
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Alert Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedAlert && (
              <div>
                <h5>{selectedAlert.type}</h5>
                <p><strong>Location:</strong> {selectedAlert.location}</p>
                <p><strong>Time:</strong> {selectedAlert.time}</p>
              </div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
};

export default App;
