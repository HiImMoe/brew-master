import { Button, Modal } from 'react-bootstrap';
import { EventI } from '../../data/events';

interface Props {
  event: EventI | undefined;
  show: boolean;
  handleClose: () => void;
}

const EventModal: React.FC<Props> = ({ event, show, handleClose }) => {
  return (
    <>
      {event && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{event.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{event.text}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default EventModal;
