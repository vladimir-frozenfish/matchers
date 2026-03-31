import { sortPlayersByHealth } from "../sortPlayers"

test('sortPlayersByHealth', () => {
  let players = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'арабалетчик', health: 100 },
  ];

  let sortedPlayers = [
    { name: 'арабалетчик', health: 100 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 }
  ];

  expect(sortPlayersByHealth(players)).toEqual(sortedPlayers);
});
