import { render, prettyDOM } from '@testing-library/react';
import Result from '../Result';

describe('Result component', () => {
  xit('shows the waiting message when there is no result', () => {
    const { getByText, container } = render(<Result />);

    console.log(prettyDOM(container));

    const waitingMessage = 'Waiting for your choice';

    const waiting = getByText(waitingMessage);

    expect(waiting).toBeInTheDocument();
  });

  xit('show the player winning message when the players win', () => {
    const { getByText, queryByText, container } = render(
      <Result winner="player" />
    );

    console.log(prettyDOM(container));

    const waitingMessage = 'Waiting for your choice';
    const winningMessage = 'Winner takes it all!';

    const waiting = queryByText(waitingMessage);
    const winning = getByText(winningMessage);

    expect(winning).toBeInTheDocument();
    expect(waiting).not.toBeInTheDocument();
  });

  xit('shows the computer winning message when the computer wins', () => {
    const { getByText, queryByText, container } = render(
      <Result winner="computer" />
    );

    console.log(prettyDOM(container));

    const waitingMessage = 'Waiting for your choice';
    const winningMessage = 'You have been annihilated by AI power!';

    const waiting = queryByText(waitingMessage);
    const winning = getByText(winningMessage);

    expect(winning).toBeInTheDocument();
    expect(waiting).not.toBeInTheDocument();
  });

  xit('shows a tie message when it is a tie', () => {

    const { getByText, queryByText, container } = render(
      <Result winner="tie" />
    );

    console.log(prettyDOM(container));

    const waitingMessage = 'Waiting for your choice';
    const tieMessage = 'The match ended in a draw, knotting the score like a tie that neither team could loosen.';

    const waiting = queryByText(waitingMessage);
    const tying = getByText(tieMessage);

    expect(tying).toBeInTheDocument();
    expect(waiting).not.toBeInTheDocument();

  })
});
