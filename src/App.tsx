import 'bootstrap/dist/css/bootstrap.css';
import 'react-circular-progressbar/dist/styles.css';
import 'animate.css';
import './App.scss';
import BrewKettle from './components/BrewKettle';
import Toolbar from './module/Toolbar/Toolbar';
import { LocalStorageKeys, initStorage } from './logic/localStorage';
import BeerTransporter from './module/Action/BeerTransporter';
import { useCallback, useEffect, useState } from 'react';
import StartModal from './module/StartModal';
import GameOverModal from './module/GameOverModal';
import { messageService } from './logic/iteration';
import { getCurrentBalance } from './logic/money';

export enum GameState {
  START = 'START',
  PLAYING = 'PLAYING',
  GAME_OVER = 'GAME_OVER',
}

function App() {
  const [gameState, setGameState] = useState(GameState.START);

  useEffect(() => {
    messageService.getMessage().subscribe(() => {
      const balance = getCurrentBalance();
      if (balance < 0) {
        setGameState(GameState.GAME_OVER);
        localStorage.setItem(LocalStorageKeys.GAME_STATE, GameState.GAME_OVER);
      }
    });
  });

  const handleStartModalClose = useCallback(() => {
    initStorage();
    setGameState(GameState.PLAYING);
    localStorage.setItem(LocalStorageKeys.GAME_STATE, GameState.PLAYING);
  }, [gameState, setGameState]);

  return (
    <div className="main-container  ">
      <div className="headline">
        <img src="logo.svg" />
      </div>
      <div className="">
        <Toolbar />
      </div>
      <div className="action-container container">
        <div className="row">
          <div className="col">
            <BrewKettle />
          </div>
          <div className="col beer-truck-container">
            <BeerTransporter />
          </div>
        </div>
      </div>
      <StartModal show={gameState === GameState.START} handleClose={handleStartModalClose} />
      <GameOverModal show={gameState === GameState.GAME_OVER} handleClose={handleStartModalClose} />
    </div>
  );
}

export default App;
