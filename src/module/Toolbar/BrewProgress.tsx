import { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { messageService } from '../../logic/iteration';
import { LocalStorageKeys } from '../../logic/localStorage';

const BrewProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    messageService.getMessage().subscribe(() => {
      setProgress(Number(localStorage.getItem(LocalStorageKeys.BREW_PROGRESS)));
    });
  });

  return (
    <div className="container">
      <div className="row brew-progress-container">
        <div className="brew-progress">
          <CircularProgressbar value={progress} strokeWidth={10} text="Brew Progress" />
        </div>
      </div>
    </div>
  );
};

export default BrewProgress;
