window.addEventListener('load', () => {
  document.querySelectorAll('.box-combat').forEach(box => {
    const hp = parseInt(box.getAttribute('data-hp'));
    const maxHp = parseInt(box.getAttribute('data-max-hp'));
    const fill = box.querySelector('.life-fill');

    if (!isNaN(hp) && !isNaN(maxHp) && fill) {
      const percent = Math.max(0, Math.min(100, (hp / maxHp) * 100));
      fill.style.width = percent + "%";

      // Couleur dynamique selon le pourcentage
      if (percent < 25) fill.style.backgroundColor = '#a80000';
      else if (percent < 50) fill.style.backgroundColor = '#cc3300';
      else if (percent < 75) fill.style.backgroundColor = '#e68a00';
      else fill.style.backgroundColor = 'crimson';
    }
  });
});
