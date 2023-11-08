export const getNextElement = (list, index) => {
  const newIndex = (index + 1) % list.length;

  return list[newIndex];
};

export const oppositeChoice = (playerChoice) => {
  const list = ['🗿', '🌳', '🪓'];

  if (!playerChoice) {
    throw new Error('Wait! What!! No emojiss!! 😭');
  }

  if (!list.includes(playerChoice)) {
    return "That's the wrong stuff!";
  }

  return getNextElement(list, list.indexOf(playerChoice));
};

export const pickRandomEmoji = (list, seed) => {
  const randomIndex = Math.round(seed * 23425435353535 + 60) % list.length;

  return list[randomIndex];
};
