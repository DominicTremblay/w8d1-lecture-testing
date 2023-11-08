export default function Result({ winner }) {
  return (
    <footer>
      {!winner && <h2>Waiting for your choice</h2>}
      {winner === 'player' && <h2>Winner takes it all!</h2>}
      {winner === 'computer' && <h2>You have been annihilated by AI power!</h2>}
      {winner === 'tie' && <h2>The match ended in a draw, knotting the score like a tie that neither team could loosen.</h2>}
    </footer>
  );
}
