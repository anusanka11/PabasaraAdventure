const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menu.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', open);
});
document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

const modal = document.querySelector('#modal');
const title = document.querySelector('#modal-title');
const text = document.querySelector('#modal-text');

document.querySelectorAll('.details-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    title.textContent = btn.dataset.title;
    text.textContent = btn.dataset.text;
    modal.classList.add('show');
    modal.setAttribute('aria-hidden', 'false');
  });
});
document.querySelector('.modal-close').addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
function closeModal() {
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden', 'true');
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, {threshold: 0.08});

document.querySelectorAll('.feature-card,.program-card,.instructor,.module,.training-item').forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(16px)';
  el.style.transition = 'opacity .55s ease, transform .55s ease';
  observer.observe(el);
});
