import { useState, useEffect, useCallback } from 'react';
import { ButtonGroup, ToggleButton, ProgressBar } from 'react-bootstrap';
import { messageService } from '../../logic/iteration';
import { LocalStorageKeys } from '../../logic/localStorage';

const drinkingConfig = [
  { name: 'No Alcohol at Work!', value: '1' },
  { name: 'One beer is fine', value: '0.9' },
  { name: 'All you can drink', value: '0.5' },
];

const WorkerAlcoholConfig = () => {
  const [alcoholValue, setAlcoholValue] = useState(localStorage.getItem(LocalStorageKeys.ALCOHOL_ALLOWANCE || 1));
  const [drunkProgress, setDrunkProgress] = useState(Number(localStorage.getItem(LocalStorageKeys.DRUNK_PROGRESS)) || 0);

  useEffect(() => {
    messageService.getMessage().subscribe(() => {
      setDrunkProgress(Number(localStorage.getItem(LocalStorageKeys.DRUNK_PROGRESS)));
    });
  });

  const changeAlcoholValue = useCallback((e: any) => {
    setAlcoholValue(e.currentTarget.value);
    localStorage.setItem(LocalStorageKeys.ALCOHOL_ALLOWANCE, e.currentTarget.value);
    messageService.sendMessage(undefined);
  }, []);

  return (
    <div className="container">
      <div className="row pt-4">
        <div>
          <div>Beer for Employees</div>
          <ButtonGroup className="mb-2">
            {drinkingConfig.map((radio, idx) => (
              <ToggleButton
                key={idx}
                id={`radio-${idx}`}
                type="radio"
                variant="secondary"
                name="radio"
                value={radio.value}
                checked={alcoholValue === radio.value}
                onChange={changeAlcoholValue}
              >
                {radio.name}
              </ToggleButton>
            ))}
          </ButtonGroup>
        </div>
      </div>
      <div className="row drunk-progress">
        How drunk are your workers
        <ProgressBar animated variant="warning" now={drunkProgress} />
      </div>
    </div>
  );
};

export default WorkerAlcoholConfig;
