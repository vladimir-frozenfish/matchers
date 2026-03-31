import { getHealth } from "../getHealth"

test.each([
  [60, 'healthy'],
  [40, 'wounded'],
  [10, 'critical'],
])(
  ('getHealth for %s health'),
  (health, statusHealth) => {
    expect(getHealth({name: 'Mag', health: health})).toBe(statusHealth)
  }
)