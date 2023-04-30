import { useEffect, useState } from 'react';
import { messageService } from '../../logic/iteration';
import { LocalStorageKeys } from '../../logic/localStorage';

const BeerTransporter = () => {
  const [animation, setAnimation] = useState('invisible');

  useEffect(() => {
    messageService.getMessage().subscribe(() => {
      const progress = Number(localStorage.getItem(LocalStorageKeys.BREW_PROGRESS));
      if (progress >= 100) {
        setAnimation(' animate__bounceOutRight');
      } else if (progress > 60) {
        setAnimation('animate__bounceInRight');
      } else {
        setAnimation('invisible');
      }
    });
  });
  return (
    <div>
      <div className={`${animation} animate__animated animate__slow`}>
        <img src="Truck.svg" />
      </div>
    </div>
  );
};

export default BeerTransporter;
