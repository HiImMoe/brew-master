import { useCallback, useEffect, useState } from 'react';
import { Modal, Button, Card } from 'react-bootstrap';
import BeerCompositionSelectionModal from './BeerCompositionSelectionModal';
import { LocalStorageKeys } from '../../logic/localStorage';
import { SelectionModalI, SelectionI, SelectionWater, SelectionHop, SelectionMalt } from '../../data/Ingredients';
import { messageService } from '../../logic/iteration';
import { formatNumber } from '../../logic/money';

interface Props {
  show: boolean;
  handleClose: () => void;
}

interface IngredientSelectionProps {
  selection: SelectionModalI;
  localStorageKey: LocalStorageKeys;
  unlockLocalStorageKey: LocalStorageKeys;
}

const IngredientSelection: React.FC<IngredientSelectionProps> = ({ selection, localStorageKey, unlockLocalStorageKey }) => {
  const [currentSelection, setCurrentSelection] = useState<SelectionI | undefined>();
  const [showSelectionModal, setShowSelectionModal] = useState(false);

  useEffect(() => {
    const id = Number(localStorage.getItem(localStorageKey));
    setCurrentSelection(selection.selection.find(s => s.id === id));
  }, []);

  const handleOpenSelectionModal = useCallback(() => {
    setShowSelectionModal(true);
  }, []);

  const handleSelectionModalClose = useCallback((newSelection: SelectionI) => {
    localStorage.setItem(localStorageKey, newSelection.id.toString());
    setCurrentSelection(newSelection);
    setShowSelectionModal(false);
    messageService.sendMessage(undefined);
  }, []);

  return (
    <>
      <Card className="text-white bg-secondary selected-ingredients-card">
        {currentSelection && (
          <Card.Body>
            <Card.Title>{currentSelection.title}</Card.Title>
            <Card.Text>
              Cost: {formatNumber(currentSelection.price)}
              <br />
              Quality: {currentSelection.quality}
            </Card.Text>
            <Card.Footer>
              <Button onClick={handleOpenSelectionModal}>Change</Button>
            </Card.Footer>
          </Card.Body>
        )}
      </Card>
      <BeerCompositionSelectionModal
        selection={selection}
        show={showSelectionModal}
        handleClose={handleSelectionModalClose}
        localStorageKey={unlockLocalStorageKey}
      />
    </>
  );
};

const BeerCompositionModal: React.FC<Props> = ({ show, handleClose }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Beer Ingredients</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="row">
              <div className="col-4">
                <IngredientSelection
                  selection={SelectionWater}
                  localStorageKey={LocalStorageKeys.SELECTED_INGREDIENTS_WATER_ID}
                  unlockLocalStorageKey={LocalStorageKeys.UNLOCKED_WATER}
                />
              </div>
              <div className="col-4">
                <IngredientSelection
                  selection={SelectionHop}
                  localStorageKey={LocalStorageKeys.SELECTED_INGREDIENTS_HOP_ID}
                  unlockLocalStorageKey={LocalStorageKeys.UNLOCKED_HOPS}
                />
              </div>
              <div className="col-4">
                <IngredientSelection
                  selection={SelectionMalt}
                  localStorageKey={LocalStorageKeys.SELECTED_INGREDIENTS_MALT_ID}
                  unlockLocalStorageKey={LocalStorageKeys.UNLOCKED_MALT}
                />
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

export default BeerCompositionModal;
