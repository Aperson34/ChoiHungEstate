(() => {
  const history = document.querySelector('.estate-history');
  const canvas = history.querySelector('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // Historical stages follow LSY’s reference. The drawing is sized for this story.
  const stages = [
    ['1958–60', 'Site preparation', 'Former farmland is cleared as work begins on the estate.'],
    ['1961–63', 'Construction and first residents', 'Blocks rise and the first residents move in before the official opening in 1963.'],
    ['1964–65', 'Completion and recognition', 'The estate is completed and receives the Hong Kong Institute of Architects Silver Medal in 1965.'],
    ['1970s', 'A neighbourhood takes shape', 'Schools, markets and local shops serve the growing community.'],
    ['1980s', 'Life around the court', 'Trees mature around the estate and the rooftop court becomes a gathering place.'],
    ['1990s–2000s', 'Renovation and repainting', 'Scaffolding goes up as buildings are repaired and repainted.'],
    ['2010s', 'The court draws visitors', 'Visitors come to photograph the rainbow facades and rooftop basketball court.'],
    ['2020s', 'A landmark faces redevelopment', 'Daily life continues at the estate as residents and shops look ahead to a phased rebuild.'],
  ];
  const previous = history.querySelector('[data-step="-1"]');
  const next = history.querySelector('[data-step="1"]');
  const play = history.querySelector('.history-play');
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  let index = 0;
  let timer;
  let transition;

  function rect(x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
  }

  function building(x, top, floors, scaffold) {
    const colors = ['#eab199', '#efcf8c', '#a7c7a3', '#88b8c7'];
    rect(x, top, 55, floors * 9 + 3, '#544c53');
    for (let floor = 0; floor < floors; floor++) {
      const y = top + floor * 9 + 3;
      rect(x + 2, y, 51, 8, colors[floor % colors.length]);
      for (let col = 0; col < 5; col++) {
        rect(x + 5 + col * 10, y + 1, 6, 4, '#364f58');
      }
    }
    if (scaffold) {
      for (let post = 0; post < 6; post++) rect(x + post * 10, top - 4, 2, floors * 9 + 7, '#3c6553');
      for (let beam = 0; beam < floors; beam++) rect(x, top + beam * 9, 55, 2, '#3c6553');
    }
  }

  function draw() {
    rect(0, 0, 320, 160, index === 0 ? '#eac184' : '#a9d1d0');
    for (const x of [20, 112, 236]) {
      rect(x, 23, 34, 5, '#f8ebd3');
      rect(x + 9, 18, 16, 5, '#f8ebd3');
    }
    for (let x = 0; x < 320; x += 8) {
      const hill = Math.round(75 - 20 * Math.sin(x / 31));
      rect(x, hill, 8, 125 - hill, '#75938a');
    }
    rect(0, 119, 320, 41, index < 2 ? '#b28661' : '#536c60');

    if (index > 0) {
      for (let block = 0; block < 4; block++) {
        const floors = index === 1 ? 3 + block % 2 : 7 + block % 2;
        building(24 + block * 64, 121 - floors * 9, floors, index === 1 || (index === 5 && block === 1));
      }
    }
    if (index < 2) {
      rect(279, 48, 4, 75, '#9b6434');
      rect(250, 48, 57, 4, '#9b6434');
      rect(300, 52, 2, 25, '#514340');
    }
    if (index >= 3) {
      rect(22, 112, 58, 12, '#f2bb79');
      rect(18, 108, 66, 5, '#934c4a');
    }
    if (index >= 4) {
      rect(75, 120, 171, 33, '#b96b65');
      rect(80, 124, 161, 24, '#427d83');
      rect(159, 124, 2, 24, '#f8edcf');
      rect(226, 108, 3, 20, '#e8d9a7');
      rect(219, 108, 10, 3, '#e8d9a7');
      for (const x of [12, 278, 301]) {
        rect(x, 101, 4, 26, '#654b43');
        rect(x - 7, 99, 18, 14, '#41765e');
        rect(x - 3, 94, 11, 7, '#41765e');
      }
    }
    if (index === 7) {
      rect(90, 80, 28, 1, '#f8edcf');
      rect(93, 81, 5, 5, '#f5d481');
      rect(102, 81, 5, 6, '#f9eddf');
      rect(111, 81, 4, 5, '#d88d81');
    }
    if (index >= 3) {
      const people = index === 6 ? 8 : 3;
      for (let person = 0; person < people; person++) {
        const x = 88 + person * 17;
        const y = 131 + (person % 2) * 7;
        rect(x, y, 3, 3, '#492f35');
        rect(x - 1, y + 3, 5, 6, person % 2 ? '#f1cc81' : '#eee2ca');
      }
    }
  }

  function render(animate = false) {
    const [year, title, description] = stages[index];
    history.querySelector('.history-year').textContent = year;
    history.querySelector('h3').textContent = title;
    history.querySelector('.history-description').textContent = description;
    history.querySelector('.history-position').textContent = `Stage ${index + 1} of ${stages.length}`;
    previous.disabled = index === 0;
    next.disabled = index === stages.length - 1;
    transition?.cancel();
    draw();
    if (animate && !motion.matches) {
      transition = canvas.animate([{ opacity: .58 }, { opacity: 1 }], { duration: 300, easing: 'ease-out' });
    }
  }

  function pause() {
    clearInterval(timer);
    timer = undefined;
    play.textContent = 'Autoplay';
  }

  for (const step of [previous, next]) {
    step.addEventListener('click', () => {
      pause();
      index += Number(step.dataset.step);
      render(true);
    });
  }
  play.addEventListener('click', () => {
    if (timer) {
      pause();
      return;
    }
    play.textContent = 'Pause';
    timer = setInterval(() => {
      index = (index + 1) % stages.length;
      render(true);
    }, 5000);
  });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) pause();
  });
  render();
  history.hidden = false;
})();
