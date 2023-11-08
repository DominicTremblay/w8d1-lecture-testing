import { pickOppositeChoice, pickRandomEmoji } from './gameHelpers';

describe('pickOppositeChoice', () => {
  xit('returns an uncool message when a choice is not valid', () => {
    // Arrange
    const invalidChoice = '🍅';
    const value = pickOppositeChoice(invalidChoice);

    // Act

    const expectedResult = 'Hey, not cool. No cheating!';

    // Assert
    expect(value).toBe(expectedResult);
  });

  xit('throws an error when no choice was received', () => {
    const throwFunction = () => pickOppositeChoice();

    expect(throwFunction).toThrow('Wait? What? No emojiiiiis !!!');
  });

  xit('returns the opposite choice when it is valid', () => {
    const list = ['🗿', '🌳', '🪓'];

    const winnerChoices = {
      '🗿': '🌳',
      '🌳': '🪓',
      '🪓': '🗿',
    };

    for (let choice of list) {
      const value = pickOppositeChoice(choice);
      const expectedResult = winnerChoices[choice];
      expect(value).toBe(expectedResult);
    }
  });
});

describe('pickRandomEmoji', () => {
  xit('returns a random valid emoji', () => {
    const matches = {
      15: '🗿',
      25: '🌳',
      50: '🪓',
    };

    for (let seed in matches) {
      const value = pickRandomEmoji(seed);
      const expectedResult = matches[seed];
      expect(value).toBe(expectedResult);
    }
  });
});