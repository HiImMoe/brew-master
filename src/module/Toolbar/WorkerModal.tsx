import { useCallback, useEffect, useState } from 'react';
import { Modal, Button, Card } from 'react-bootstrap';
import { LocalStorageKeys } from '../../logic/localStorage';
import { messageService } from '../../logic/iteration';
import { BrewMasterI, BrewMasterModal } from '../../data/brewMaster';
import BrewMasterSelectionModal from './BrewMasterSelectionModal';
import { DriverI, DriverModal } from '../../data/driver';
import DriverSelectionModal from './DriverSelectionModal';
import { formatNumber } from '../../logic/money';

interface Props {
  show: boolean;
  handleClose: () => void;
}

const DriverCard: React.FC = () => {
  const [selectedDriver, setSelectedDriver] = useState<DriverI | undefined>();
  const [showSelectionModal, setShowSelectionModal] = useState(false);

  useEffect(() => {
    const currentDriverId = Number(localStorage.getItem(LocalStorageKeys.SELECTED_DRIVER));
    const driver = DriverModal.possibleDrivers.find(d => d.id === currentDriverId);
    setSelectedDriver(driver);
  }, []);

  const handleOpenSelectionModal = useCallback(() => {
    setShowSelectionModal(true);
  }, []);

  const handleSelectionModalClose = useCallback((newDriver: DriverI) => {
    localStorage.setItem(LocalStorageKeys.SELECTED_DRIVER, newDriver.id.toString());
    setSelectedDriver(newDriver);
    setShowSelectionModal(false);
    messageService.sendMessage(undefined);
  }, []);

  return (
    <>
      <Card className="text-white bg-secondary selected-ingredients-card">
        {selectedDriver && (
          <Card.Body>
            <Card.Title>
              Beer Driver
              <br />
              {selectedDriver.name}
            </Card.Title>
            <Card.Text>
              Cost: {formatNumber(selectedDriver.salary)}
              <br />
              Productivity: {selectedDriver.productivity * 10}
            </Card.Text>
            <Card.Footer>
              <Button onClick={handleOpenSelectionModal}>Change</Button>
            </Card.Footer>
          </Card.Body>
        )}
      </Card>
      <DriverSelectionModal driverModal={DriverModal} show={showSelectionModal} handleClose={handleSelectionModalClose} />
    </>
  );
};

const BrewMasterCard: React.FC = () => {
  const [selectedBrewMaster, setSelectedBrewMaster] = useState<BrewMasterI | undefined>();
  const [showSelectionModal, setShowSelectionModal] = useState(false);

  useEffect(() => {
    const currentBrewMasterId = Number(localStorage.getItem(LocalStorageKeys.SELECTED_BREW_MASTER));
    const brewMaster = BrewMasterModal.possibleBrewMasters.find(bm => bm.id === currentBrewMasterId);
    setSelectedBrewMaster(brewMaster);
  }, []);

  const handleOpenSelectionModal = useCallback(() => {
    setShowSelectionModal(true);
  }, []);

  const handleSelectionModalClose = useCallback((newBrewMaster: BrewMasterI) => {
    localStorage.setItem(LocalStorageKeys.SELECTED_BREW_MASTER, newBrewMaster.id.toString());
    setSelectedBrewMaster(newBrewMaster);
    setShowSelectionModal(false);
    messageService.sendMessage(undefined);
  }, []);

  return (
    <>
      <Card className="text-white bg-secondary selected-ingredients-card">
        {selectedBrewMaster && (
          <Card.Body>
            <Card.Title>
              Brew Master
              <br />
              {selectedBrewMaster.name}
            </Card.Title>
            <Card.Text>
              Cost: {formatNumber(selectedBrewMaster.salary)}
              <br />
              Productivity: {selectedBrewMaster.productivity * 10}
            </Card.Text>
            <Card.Footer>
              <Button onClick={handleOpenSelectionModal}>Change</Button>
            </Card.Footer>
          </Card.Body>
        )}
      </Card>
      <BrewMasterSelectionModal brewMasterModal={BrewMasterModal} show={showSelectionModal} handleClose={handleSelectionModalClose} />
    </>
  );
};

const WorkerConfigurationModal: React.FC<Props> = ({ show, handleClose }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose} className="worker-selection-modal">
        <Modal.Header closeButton>
          <Modal.Title>Current selected Worker</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="row">
              <div className="col-6">
                <BrewMasterCard />
              </div>
              <div className="col-6">
                <DriverCard />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default WorkerConfigurationModal;
