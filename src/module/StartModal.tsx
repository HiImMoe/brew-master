import { Modal, Button } from 'react-bootstrap';

interface Props {
  show: boolean;
  handleClose: () => void;
}

const StartModal: React.FC<Props> = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} className="start-modal">
      <Modal.Header>
        <Modal.Title>
          <img src="logo.svg" />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          <strong>Welcome to Brew Master!</strong>
        </p>
        <p>
          <i>Bavarian Introduction</i>
          <br />
          Servus! I gfreid mi, dass du dabei bist! Heid mia macha a Simulation zum Braua vo Bia. Du kannst d'Qualität vo de Zutatn ändern,
          um besser und besser Bia zum Braua. Du host a Möglichkeit a Braumeista und a Biafahrer anzstelln. Des san beides starke Säufer und
          wennst eahna Bia saufa lässt, dann forderns weniger Goid. Aber pass auf, dass dei Mitarbeita ned z'vui zanknackan! Sonst miaßn's
          schau mitm Hopfnbluat hoamfahrn.
        </p>
        <p>
          <i>English</i>
          <br />
          Hey there! I'm glad you're here. Today we're going to do a simulation about brewing beer. You can change the quality of the
          ingredients to brew better and better beer. You also have the option to hire a brewmaster and a beer driver. They are both heavy
          drinkers, and if you let them drink beer, they will demand lower wages. But be careful not to let your employees get too drunk!
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button size="lg" variant="primary" onClick={handleClose}>
          Start Brewing
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default StartModal;
