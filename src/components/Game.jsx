import { useState } from 'react';
import Computer from './Computer';
import Player from './Player';
import Result from './Result';
import { pickRandomEmoji } from '../helpers/gameHelpers';

export default function Game(props) {
  const [computorCheating, setcomputorCheating] = useState(true);
  const [winner, setWinner] = useState(null);

  const getGameResult = (playerChoice) => {
    
    if (computorCheating) {
      setWinner('computer');
      console.log({computorCheating, winner})
      return;
    }
    
    const computerChoice = pickRandomEmoji(Math.random());
    console.log({ playerChoice, computerChoice });

    const winnerChoices = {
      '🗿': '🌳',
      '🌳': '🪓',
      '🪓': '🗿',
    };

    if (playerChoice === computerChoice) {
      setWinner('tie');
    } else if (winnerChoices[playerChoice] === computerChoice) {
      setWinner('computer');
    } else {
      setWinner('player');
    }
  };

  const toggleCheating = () => setcomputorCheating(!computorCheating);

  return (
    <div>
      <main className="game">
        <Computer
          computorCheating={computorCheating}
          toggleCheating={toggleCheating}
        />
        <Player getGameResult={getGameResult} />
      </main>
      <Result winner={winner} />
    </div>
  );
}
