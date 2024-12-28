import { displaySortedCharacters } from '../character'

test('testing the displaySortedCharacters function', () => {
  const listCharacters = [    
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},    
  ];
  const expected = [
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    {name: 'мечник', health: 10},
  ];
  const result = displaySortedCharacters(listCharacters);  
  expect(result).toEqual(expected);
});