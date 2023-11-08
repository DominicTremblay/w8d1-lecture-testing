import { render, fireEvent, prettyDOM } from '@testing-library/react';
import Game from '../Game';

describe('Game integration tests', () => {
  it('lets the computer wins when the computer is cheating', () => {
    const { queryByText, getByTestId, container } = render(<Game />);

    const waiting = queryByText('Waiting for your choice');
    expect(waiting).toBeInTheDocument();

    const button = getByTestId('moai-statue');
    fireEvent.click(button);

    console.log(prettyDOM(container));

    const result = queryByText(
      'You are annihilated! The power of the dark force is strong!'
    );

    expect(result).toBeInTheDocument();

    expect(waiting).not.toBeInTheDocument();
  });

  it.only('randomizes the result when the computer is not cheating', () => {

    const { queryByText, getByTestId, container } = render(<Game />);

    const waiting = queryByText('Waiting for your choice');
    expect(waiting).toBeInTheDocument();

    const robot = getByTestId('robot')
    fireEvent.click(robot);

    const button = getByTestId('moai-statue');
    fireEvent.click(button);

    console.log(prettyDOM(container));

    const waitingAgain = queryByText('Waiting for your choice')

    expect(waitingAgain).not.toBeInTheDocument();

  });
});
