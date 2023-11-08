import { render, prettyDOM, fireEvent } from '@testing-library/react';
import Game from '../Game';

describe('Game integration test', () => {

  it('let the computer wins all the time when the computer is cheating', () => {
    const { queryByText, getByTestId, container } = render(<Game />);

    
    const waiting = queryByText('Waiting for your choice');
    expect(waiting).toBeInTheDocument(waiting);

    const button = getByTestId('moai-statue');

    fireEvent.click(button);
    console.log(prettyDOM(container));

    const result = queryByText('You have been annihilated by AI power!');
    expect(result).toBeInTheDocument();
  });

  it.only('randomizes the result when the computer is not cheating', () => {

    const { queryByText, getByTestId, container } = render(<Game />);

    const waiting = queryByText('Waiting for your choice');
    expect(waiting).toBeInTheDocument(waiting);

    const robot = getByTestId('robot');
    expect(robot).toHaveClass('cheating');
    fireEvent.click(robot);
    expect(robot).not.toHaveClass('cheating');


    const button = getByTestId('moai-statue');
    fireEvent.click(button);

    const waitingAgain = queryByText('Waiting for your choice');
    expect(waitingAgain).not.toBeInTheDocument();


  });
});
