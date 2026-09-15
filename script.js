const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
function closeMenu() { toggle.setAttribute('aria-expanded', 'false'); toggle.setAttribute('aria-label', 'Otwórz menu'); nav.classList.remove('is-open'); }
toggle.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') !== 'true'; toggle.setAttribute('aria-expanded', String(open)); toggle.setAttribute('aria-label', open ? 'Zamknij menu' : 'Otwórz menu'); nav.classList.toggle('is-open', open); });
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

document.querySelectorAll('[data-product-gallery]').forEach(gallery => {
  const mainButton = gallery.querySelector('.gallery-main');
  const mainImage = mainButton.querySelector('img');
  const caption = gallery.querySelector('.media-caption');
  const extra = gallery.querySelector('.gallery-extra');
  const images = [{ src: mainImage.getAttribute('src'), alt: mainImage.alt, caption: caption.textContent.trim() }];
  extra?.content.querySelectorAll('img').forEach(img => images.push({
    src: img.getAttribute('src'), alt: img.alt, caption: img.dataset.caption || img.alt
  }));

  const strip = gallery.querySelector('.gallery-strip');
  const thumbs = gallery.querySelector('.gallery-thumbs');
  const dialog = gallery.querySelector('.gallery-dialog');
  const dialogImage = dialog.querySelector('img');
  const dialogCaption = dialog.querySelector('.gallery-dialog-caption');
  let current = 0;

  function show(index) {
    current = (index + images.length) % images.length;
    const image = images[current];
    mainImage.src = image.src;
    mainImage.alt = image.alt;
    mainButton.setAttribute('aria-label', `Powiększ zdjęcie: ${image.alt}`);
    caption.textContent = image.caption;
    thumbs.querySelectorAll('button').forEach((button, i) => button.setAttribute('aria-pressed', String(i === current)));
    if (dialog.open) {
      dialogImage.src = image.src;
      dialogImage.alt = image.alt;
      dialogCaption.textContent = image.caption;
    }
  }

  if (images.length > 1) {
    strip.hidden = false;
    dialog.querySelector('.gallery-dialog-actions').hidden = false;
    images.forEach((image, index) => {
      const button = document.createElement('button');
      const thumb = document.createElement('img');
      button.type = 'button';
      button.className = 'gallery-thumb';
      button.setAttribute('aria-label', `Pokaż zdjęcie ${index + 1}: ${image.alt}`);
      thumb.src = image.src;
      thumb.alt = '';
      thumb.loading = 'lazy';
      button.append(thumb);
      button.addEventListener('click', () => show(index));
      thumbs.append(button);
    });
    gallery.querySelectorAll('.gallery-prev').forEach(button => button.addEventListener('click', () => show(current - 1)));
    gallery.querySelectorAll('.gallery-next').forEach(button => button.addEventListener('click', () => show(current + 1)));
  }
  show(0);

  if (typeof dialog.showModal === 'function') {
    mainButton.addEventListener('click', () => {
      dialogImage.src = images[current].src;
      dialogImage.alt = images[current].alt;
      dialogCaption.textContent = images[current].caption;
      dialog.showModal();
    });
    dialog.querySelector('.gallery-close').addEventListener('click', () => dialog.close());
    dialog.addEventListener('keydown', event => {
      if (images.length < 2) return;
      if (event.key === 'ArrowLeft') { event.preventDefault(); show(current - 1); }
      if (event.key === 'ArrowRight') { event.preventDefault(); show(current + 1); }
    });
  } else {
    mainButton.disabled = true;
  }
});
