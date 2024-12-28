export function displaySortedCharacters(listCharacters) {
  return listCharacters.sort((a, b) => b.health - a.health);
}