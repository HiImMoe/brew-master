import { Button } from 'react-bootstrap';
import { useCallback, useEffect, useState } from 'react';
import BeerCompositionModal from './BeerCompositionModal';
import Money from './Money';
import BrewProgress from './BrewProgress';
import WorkerConfigurationModal from './WorkerModal';
import { EventI } from '../../data/events';
import { messageService } from '../../logic/iteration';
import EventModal from '../EventModal/EventModal';
import WorkerAlcoholConfig from './WorkerAlcoholConfig';

const Toolbar = () => {
  const [showBeerComposition, setShowBeerComposition] = useState(false);
  const [showWorkerConfiguration, setShowWorkerConfiguration] = useState(false);

  const [showEvent, setShowEvent] = useState(false);
  const [event, setEvent] = useState<EventI | undefined>();

  const handleOpen = useCallback(() => {
    setShowBeerComposition(true);
  }, []);

  const handleOpenWorkerConfiguration = useCallback(() => {
    setShowWorkerConfiguration(true);
  }, []);

  useEffect(() => {
    messageService.getMessage().subscribe((e: any) => {
      const ev = e as EventI | undefined;
      if (ev) {
        setShowEvent(true);
        setEvent(ev);
      }
    });
  }, []);

  const handleClose = useCallback(() => {
    setShowEvent(false);
    setEvent(undefined);
  }, []);

  return (
    <div className="toolbar">
      <div className="container">
        <div className="row">
          <div className="col container config-buttons">
            <div className="row worker-button">
              <Button onClick={handleOpenWorkerConfiguration}>Worker</Button>
            </div>
            <div className="row beer-config-button">
              <Button onClick={handleOpen}>Beer Configuration</Button>
            </div>
          </div>
          <div className="col">
            <WorkerAlcoholConfig />
          </div>
          <div className="col flex-center">
            <BrewProgress />
          </div>
          <div className="col flex-center">
            <Money />
          </div>
        </div>
      </div>
      <WorkerConfigurationModal show={showWorkerConfiguration} handleClose={() => setShowWorkerConfiguration(false)} />
      <BeerCompositionModal show={showBeerComposition} handleClose={() => setShowBeerComposition(false)} />
      <EventModal show={showEvent} handleClose={handleClose} event={event} />
    </div>
  );
};

export default Toolbar;
