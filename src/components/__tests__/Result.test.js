import { render, prettyDOM } from '@testing-library/react';
import Result from '../Result';

describe('Result', () => {
  it('shows the waiting message when there is no result', () => {
    const { getByText, container } = render(<Result />);

    console.log(prettyDOM(container));

    const waitingMsg = 'Waiting for your choice';

    const result = getByText(waitingMsg);

    expect(result).toBeInTheDocument();
  });

  it('displays the player winning message when the player is the winner', () => {
    const { getByText, queryByText, container } = render(
      <Result winner="player" />
    );

    console.log(prettyDOM(container));

    const waitingMsg = 'Waiting for your choice';
    const winningMsg = 'Winner takes it all 😎!!!!';

    const waiting = queryByText(waitingMsg);
    const winning = getByText(winningMsg);

    expect(winning).toBeInTheDocument();
    expect(waiting).not.toBeInTheDocument();
  });

  it('diplay the robot wining message when the computer is the winner', () => {
    const { getByText, queryByText, container } = render(
      <Result winner="computer" />
    );

    console.log(prettyDOM(container));

    const waitingMsg = 'Waiting for your choice';
    const winningMsg =
      'You are annihilated! The power of the dark force is strong!';

    const waiting = queryByText(waitingMsg);
    const winning = getByText(winningMsg);

    expect(winning).toBeInTheDocument();
    expect(waiting).not.toBeInTheDocument();
  });

  it('show a tie message, when there is a tie', () => {
    const { getByText, queryByText, container } = render(
      <Result winner="tie" />
    );

    console.log(prettyDOM(container));

    const waitingMsg = 'Waiting for your choice';
    const tyingMsg =
      'The match ended in a draw, knotting the score like a tie that neither team could loosen.';

    const waiting = queryByText(waitingMsg);
    const tying = getByText(tyingMsg);

    expect(tying).toBeInTheDocument();
    expect(waiting).not.toBeInTheDocument();
  });
});
