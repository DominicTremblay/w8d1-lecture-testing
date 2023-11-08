import { useState } from 'react';
import Computer from './Computer';
import Player from './Player';
import Result from './Result';
import { pickRandomEmoji } from '../helpers/gameHelpers';

export default function Game(props) {
  const [computerCheating, setComputerCheating] = useState(true);
  const [winner, setWinner] = useState(null);

  const getGameResult = (playerChoice) => {
    const computerChoice = pickRandomEmoji(['🗿', '🌳', '🪓'], Math.random());

    const winnerChoices = {
      '🗿': '🌳',
      '🌳': '🪓',
      '🪓': '🗿',
    };

    if (computerCheating) {
      setWinner('computer');
      return;
    }

    if (playerChoice === computerChoice) {
      setWinner('tie');
    } else if (winnerChoices[computerChoice] === playerChoice) {
      setWinner('computer');
    } else {
      setWinner('player');
    }
  };

  const toggleCheat = () => setComputerCheating(!computerCheating);

  return (
    <div>
      <main className="game">
        <Computer
          computerCheating={computerCheating}
          toggleCheat={toggleCheat}
        />
        <Player getGameResult={getGameResult} />
      </main>
      <Result winner={winner} />
    </div>
  );
}
