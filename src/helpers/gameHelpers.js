export const getNextElement = (list, index) => {
  const newIndex = (index + 1) % list.length;

  return list[newIndex];
};

export const pickOppositeChoice = (playerChoice) => {
  const list = ['🗿', '🌳', '🪓'];

  if (!playerChoice) {
    throw new Error('Wait? What? No emojiiiiis !!!');
  }

  if (!list.includes(playerChoice)) {
    return 'Hey, not cool. No cheating!';
  }

  // const winnerChoices = {
  //   '🗿': '🌳',
  //   '🌳': '🪓',
  //   '🪓': '🗿',
  // };
  // return winnerChoices[playerChoice];

  return getNextElement(list, list.indexOf(playerChoice));
};

export const pickRandomEmoji = (seed) => {
  const list = ['🗿', '🌳', '🪓'];

  const randomIndex = Math.round(seed * 23425435353535 + 60) % list.length;

  return list[randomIndex];
};
