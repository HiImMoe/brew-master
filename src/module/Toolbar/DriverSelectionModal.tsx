import { Modal, Button, Card } from 'react-bootstrap';
import { DriverI, DriverModalI } from '../../data/driver';
import { useCallback, useEffect, useState } from 'react';
import { LocalStorageKeys } from '../../logic/localStorage';
import { buy, formatNumber, getCurrentBalance } from '../../logic/money';
import { messageService } from '../../logic/iteration';

interface Props {
  show: boolean;
  driverModal: DriverModalI;
  handleClose: (newSelection: DriverI) => void;
}

const DriverSelectionModal: React.FC<Props> = ({ driverModal, show, handleClose }) => {
  const [unlockedDrivers, setUnlockedDrivers] = useState<number[]>(
    JSON.parse(localStorage.getItem(LocalStorageKeys.UNLOCKED_DRIVER) || '') as number[],
  );
  const [currentBalance, setCurrentBalance] = useState(getCurrentBalance());

  useEffect(() => {
    messageService.getMessage().subscribe(() => {
      setCurrentBalance(getCurrentBalance());
    });
  }, []);

  const handleSelect = useCallback(
    (driver: DriverI) => {
      if (unlockedDrivers.includes(driver.id)) {
        handleClose(driver);
      } else {
        buy(driver.unlockPrice);
        localStorage.setItem(LocalStorageKeys.UNLOCKED_DRIVER, JSON.stringify(unlockedDrivers.concat([driver.id])));
        setUnlockedDrivers(JSON.parse(localStorage.getItem(LocalStorageKeys.UNLOCKED_DRIVER) || '') as number[]);
        handleClose(driver);
      }
    },
    [unlockedDrivers, setUnlockedDrivers],
  );

  return (
    <Modal show={show} className="beer-composition-selection">
      <Modal.Body>
        <div className="container">
          <div className="row g-2">
            {driverModal.possibleDrivers.map((d, i) => (
              <div className="col-4" key={i}>
                <Card className="text-white bg-secondary">
                  <Card.Body>
                    <Card.Title>{d.name}</Card.Title>
                    <Card.Text>
                      <p>
                        <strong>
                          Salary: {formatNumber(d.salary)}
                          <br />
                          Productivity: {d.productivity * 10}
                        </strong>
                      </p>
                      <p>{d.description}</p>
                    </Card.Text>
                    <Card.Footer>
                      {!unlockedDrivers.includes(d.id) && <div>Price: {formatNumber(d.unlockPrice)}</div>}
                      <Button onClick={() => handleSelect(d)} className="mt-2" disabled={currentBalance < d.unlockPrice}>
                        {unlockedDrivers.includes(d.id) ? <span>Select</span> : <span>Unlock</span>}
                      </Button>
                    </Card.Footer>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default DriverSelectionModal;
