import { oppositeChoice, pickRandomEmoji } from './gameHelpers';

describe('oppositeChoice', () => {
  it('returns the opposite of the player choice', () => {
    const list = ['🗿', '🌳', '🪓'];
    // AAA
    // ARRANGE

    const opposites = {
      '🗿': '🌳',
      '🌳': '🪓',
      '🪓': '🗿',
    };

    for (let choice of list) {
      // ACT
      const result = oppositeChoice(choice);
      const expectedResult = opposites[choice];

      // ASSERT

      expect(result).toBe(expectedResult);
    }
  });

  it('throws an error message when no choice was provided', () => {
    const throwFct = () => oppositeChoice();

    expect(throwFct).toThrow('Wait! What!! No emojiss!! 😭');
  });

  it('returns an uncool message when there is an invalid choice', () => {
    const invalidChoice = '🍿';

    const result = oppositeChoice(invalidChoice);

    const expectedResult = "That's the wrong stuff!";

    expect(result).toBe(expectedResult);
  });
});

describe('pickRandomEmoji', () => {
  it('provides a random emoji', () => {
    // 15, 25, 50
    const list = ['🗿', '🌳', '🪓'];

    const matchRandom = {
      15: '🗿',
      25: '🌳',
      50: '🪓',
    };

    for (let seed in matchRandom) {
      const result = pickRandomEmoji(list, seed);
      const expectedResult = matchRandom[seed];
      expect(result).toBe(expectedResult);

    }


  });
});
