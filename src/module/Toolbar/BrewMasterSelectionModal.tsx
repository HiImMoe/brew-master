import { Modal, Button, Card } from 'react-bootstrap';
import { BrewMasterI, BrewMasterModalI } from '../../data/brewMaster';
import { useCallback, useEffect, useState } from 'react';
import { LocalStorageKeys } from '../../logic/localStorage';
import { buy, formatNumber, getCurrentBalance } from '../../logic/money';
import { messageService } from '../../logic/iteration';

interface Props {
  show: boolean;
  brewMasterModal: BrewMasterModalI;
  handleClose: (newSelection: BrewMasterI) => void;
}

const BrewMasterSelectionModal: React.FC<Props> = ({ brewMasterModal, show, handleClose }) => {
  const [unlockedBrewMasters, setUnlockedBrewMasters] = useState<number[]>(
    JSON.parse(localStorage.getItem(LocalStorageKeys.UNLOCKED_BREW_MASTER) || '') as number[],
  );
  const [currentBalance, setCurrentBalance] = useState(getCurrentBalance());

  useEffect(() => {
    messageService.getMessage().subscribe(() => {
      setCurrentBalance(getCurrentBalance());
    });
  }, []);

  const handleSelect = useCallback(
    (brewMaster: BrewMasterI) => {
      if (unlockedBrewMasters.includes(brewMaster.id)) {
        handleClose(brewMaster);
      } else {
        buy(brewMaster.unlockPrice);
        localStorage.setItem(LocalStorageKeys.UNLOCKED_BREW_MASTER, JSON.stringify(unlockedBrewMasters.concat([brewMaster.id])));
        setUnlockedBrewMasters(JSON.parse(localStorage.getItem(LocalStorageKeys.UNLOCKED_BREW_MASTER) || '') as number[]);
        handleClose(brewMaster);
      }
    },
    [unlockedBrewMasters, setUnlockedBrewMasters],
  );

  return (
    <Modal show={show} className="beer-composition-selection">
      <Modal.Body>
        <div className="container">
          <div className="row g-2">
            {brewMasterModal.possibleBrewMasters.map((s, i) => (
              <div className="col-4" key={i}>
                <Card className={`text-white bg-secondary ${!unlockedBrewMasters.includes(s.id) ? 'locked' : ''}`}>
                  <Card.Body>
                    <Card.Title>{s.name}</Card.Title>
                    <Card.Text>
                      <p>
                        <strong>
                          Salary: {formatNumber(s.salary)}
                          <br />
                          Productivity: {s.productivity * 10}
                        </strong>
                      </p>
                      <p>{s.description}</p>
                    </Card.Text>
                    <Card.Footer>
                      {!unlockedBrewMasters.includes(s.id) && <div>Price: {formatNumber(s.unlockPrice)}</div>}
                      <Button onClick={() => handleSelect(s)} className="mt-2" disabled={currentBalance < s.unlockPrice}>
                        {unlockedBrewMasters.includes(s.id) ? <span>Select</span> : <span>Unlock</span>}
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

export default BrewMasterSelectionModal;
