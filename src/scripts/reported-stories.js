for (const section of document.querySelectorAll('[data-reported-stories]')) {
  const track = section.querySelector('.reported-stories-track');
  const controls = section.querySelector('.reported-stories-controls');
  const previous = controls.querySelector('[data-direction="-1"]');
  const next = controls.querySelector('[data-direction="1"]');
  controls.hidden = false;

  const update = () => {
    previous.disabled = track.scrollLeft <= 1;
    next.disabled = track.scrollLeft >= track.scrollWidth - track.clientWidth - 1;
  };
  const move = direction => {
    const group = track.querySelector('.reported-stories-group');
    if (!group) return;
    // Desktop advances a six-story group; mobile advances one visible column.
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    const distance = group.clientWidth <= track.clientWidth + 1
      ? group.clientWidth + gap
      : group.querySelector('.reported-story-card').clientWidth + gap;
    track.scrollBy({ left: direction * distance });
  };
  previous.addEventListener('click', () => move(-1));
  next.addEventListener('click', () => move(1));
  track.addEventListener('keydown', event => {
    if (event.target !== track) return;
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();
      move(event.key === 'ArrowRight' ? 1 : -1);
    }
  });
  track.addEventListener('scroll', update, { passive: true });
  new ResizeObserver(update).observe(track);
  update();
}
