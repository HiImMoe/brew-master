import { Modal, Button, Card } from 'react-bootstrap';
import { SelectionModalI, SelectionI } from '../../data/Ingredients';
import { LocalStorageKeys } from '../../logic/localStorage';
import { useState, useCallback, useEffect } from 'react';
import { buy, formatNumber, getCurrentBalance } from '../../logic/money';
import { messageService } from '../../logic/iteration';

interface Props {
  show: boolean;
  selection: SelectionModalI;
  localStorageKey: LocalStorageKeys;
  handleClose: (newSelection: SelectionI) => void;
}

const BeerCompositionSelectionModal: React.FC<Props> = ({ selection, show, handleClose, localStorageKey }) => {
  const [unlockedSelection, setUnlockedSelection] = useState<number[]>(JSON.parse(localStorage.getItem(localStorageKey) || '') as number[]);
  const [currentBalance, setCurrentBalance] = useState(getCurrentBalance());

  useEffect(() => {
    messageService.getMessage().subscribe(() => {
      setCurrentBalance(getCurrentBalance());
    });
  }, []);

  const handleSelect = useCallback(
    (selection: SelectionI) => {
      if (unlockedSelection.includes(selection.id)) {
        handleClose(selection);
      } else {
        buy(selection.unlockPrice);
        localStorage.setItem(localStorageKey, JSON.stringify(unlockedSelection.concat([selection.id])));
        setUnlockedSelection(JSON.parse(localStorage.getItem(localStorageKey) || '') as number[]);
        handleClose(selection);
      }
    },
    [unlockedSelection, setUnlockedSelection],
  );

  return (
    <Modal show={show} className="beer-composition-selection">
      <Modal.Body>
        <div className="container">
          <div className="row g-2">
            {selection.selection.map((s, i) => (
              <div className="col-4" key={i}>
                <Card className="text-white bg-secondary">
                  <Card.Body>
                    <Card.Title>{s.title}</Card.Title>
                    <Card.Text>
                      <p>
                        <strong>
                          Costs per Iteration: {formatNumber(s.price)}
                          <br />
                          Quality: {s.quality}
                        </strong>
                      </p>
                      <p>{s.description}</p>
                    </Card.Text>
                    <Card.Footer>
                      {!unlockedSelection.includes(s.id) && <div>Price: {formatNumber(s.unlockPrice)}</div>}
                      <Button onClick={() => handleSelect(s)} className="mt-2" disabled={currentBalance < s.unlockPrice}>
                        {unlockedSelection.includes(s.id) ? <span>Select</span> : <span>Unlock</span>}
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

export default BeerCompositionSelectionModal;
