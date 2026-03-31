export function sortPlayersByHealth(playersList) {
  return playersList.toSorted((a, b) => {
    const healthCompare = b.health - a.health;
    if (healthCompare !== 0) return healthCompare;
    return a.name.localeCompare(b.name, 'ru');
  });
}