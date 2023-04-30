import { Modal, Button } from 'react-bootstrap';

interface Props {
  show: boolean;
  handleClose: () => void;
}

const GameOverModal: React.FC<Props> = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} className="end-modal">
      <Modal.Header>
        <Modal.Title>
          <img src="logo.svg" />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          <strong>Oh no you lost</strong>
        </p>
        <p>
          <i>Bavarian</i>
          <br />
          Dei Boarai is zua gmacht worn, weil da Braumeister und da Bierfohrer zvui von eiraneign Bia gsoffn ham. Sia woa so übazäigt vo da
          Qualidät ihres Biers, dass's es schian öfters testn und saufn miaßtn. Aba ihre Trinkgwöhnheitn ham zu Fehler in da Hersteilung und
          Lieferung gfiahrt. Da Bia is schleicha worn und de Kundn san wegbliebn. De Boarai hod de finanzielln Probleme nimma gschaft und is
          zvuiachts gfahrn.
        </p>
        <p>
          <i>English</i>
          <br />
          Your brewery had to close down because the brewmaster and the beer driver drank too much of their own beer. They were so convinced
          of the quality of their beer that they had to constantly taste and drink it. However, their drinking habits led to errors in
          production and delivery. The beer became worse and customers stopped coming. The brewery couldn't handle the financial problems
          anymore and had to close down.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button size="lg" variant="primary" onClick={handleClose}>
          Start again
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default GameOverModal;
