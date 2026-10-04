// Public, built-in concept layouts. These are not browser-saved personal plans.
(() => {
  const D = window.PLANNER_DATA;
  const item = (name, x, y, w, d, h, color, extra = {}) => ({
    name, x, y, w, d, h, color, shape: 'rect', rot: 0, leg: null,
    clearance: 0, seats: 0, round: 3, note: '', ...extra,
  });
  function shared() {
    return [
      item('Desk · 160 × 80', 0, 0, 160, 80, 75, '#cfab82'),
      item('Desk chair zone', 10, 80, 140, 90, 0, '#cfab8233'),
      item('Left-wall storage', 0, 280, 35, 130, 202, '#d6c9b0'),
      item('Bottom sideboard · 240 × 40', 275, 681, 240, 40, 80, '#d6c9b0', {
        note: 'Only 5 cm nominal total width slack. Physically remeasure before buying.',
      }),
      item('Dining · 180 × 90', 295, 471, 180, 90, 75, '#bd805b', {
        clearance: 'adaptive', seats: 6, clearanceKey: 'dining',
      }),
      ...[414, 568].flatMap((y, row) => [302.5, 362.5, 422.5].map((x, n) =>
        item(`Dining chair ${row * 3 + n + 1}`, x, y, 45, 45, 85, '#e8dcc7', {
          clearanceOwner: 'dining', note: 'Concept chair footprint; verify real chair pull-out.',
        }))),
    ];
  }
  function shelves(x, y, island = false) {
    return Array.from({ length: 4 }, (_, n) => item(
      `FJÄLLBO ${n + 1} · 51 × 36 × 136`, x + n * 51, y, 51, 36, 136, '#c5a583', {
        note: island
          ? 'IKEA requires secure anchoring. Freestanding island anchoring is unresolved; not installation-ready.'
          : 'IKEA FJÄLLBO 703.421.99. Secure anchoring required; max 17 kg per shelf.',
      },
    ));
  }
  const speaker = (name, x, y) => item(name, x, y, 29.4, 37.1, 103.5, '#354943');
  const latest = {
    id: 'latest', name: 'A · Latest — facing dining', locked: true,
    items: [
      ...shared(), ...shelves(219.4, 0),
      speaker('Focal left', 180, 5), speaker('Focal right', 433.4, 5),
      item('L sofa · 260 × 160', 215, 106, 260, 160, 85, '#70938a', {
        shape: 'l-left', rot: 180, leg: 95,
        note: '70 cm clear from shelf front to sofa back; side approach near desk is approximately 65 cm.',
      }),
      item('Coffee table', 300, 243, 60, 35, 40, '#bd805b'),
      item('TV table · 120 × 40', 335, 311, 120, 40, 50, '#d6c9b0', { supportKey: 'tv-support' }),
      item('55-inch TV', 333.5, 316, 123, 8, 71, '#253936', {
        onTopOf: 'tv-support', note: 'Screen mounted on the TV table. Test the approximately 1.7 m viewing distance.',
      }),
    ],
  };
  const flipped = {
    id: 'flipped', name: 'B · Flipped — facing TV', locked: true,
    items: [
      ...shared(), ...shelves(243, 278, true),
      speaker('Focal left', 244.1, 10), speaker('Focal right', 416.5, 10),
      item('L sofa · 260 × 160', 215, 108, 260, 160, 85, '#70938a', {
        shape: 'l-right', leg: 95, note: '10 cm spacer behind sofa is not a walking route.',
      }),
      item('Coffee table', 300, 105, 60, 35, 40, '#bd805b'),
      item('TV table · 120 × 40', 285, 8, 120, 40, 50, '#d6c9b0', { supportKey: 'tv-support' }),
      item('55-inch TV', 283.5, 0, 123, 8, 71, '#253936', {
        onTopOf: 'tv-support', note: 'Screen on TV table; approximately 2.2 m viewing distance.',
      }),
    ],
  };
  D.templates.unshift(latest, flipped);
  D.prefabs.push(
    { group: 'FJÄLLBO storage', key: 'fjallbo51', name: 'FJÄLLBO 51 × 36 × 136',
      shape: 'rect', w: 51, d: 36, h: 136, color: '#c5a583',
      note: 'IKEA 703.421.99. Secure anchoring required; max 17 kg per shelf.' },
    { group: 'FJÄLLBO storage', key: 'fjallbo204', name: '4 × FJÄLLBO · 204 × 36 × 136',
      shape: 'rect', w: 204, d: 36, h: 136, color: '#c5a583',
      note: 'Four separate 51 cm units, not one unsupported span. Each unit needs appropriate anchoring.' },
  );
})();
