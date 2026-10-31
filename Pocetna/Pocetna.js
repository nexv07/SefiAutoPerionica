const form = document.querySelector('#booking-form');
const dirtLevel = document.querySelector('#dirt-level');
const dirtRange = document.querySelector('#dirt-range');
const dirtLabel = document.querySelector('#dirt-label');
const status = document.querySelector('#form-status');

const dirtLabels = { 1: 'Veoma prljavo', 2: 'Prljavo', 3: 'Solidno' };

document.querySelectorAll('input[name="usluga"]').forEach((input) => {
  input.addEventListener('change', () => {
    const showDirt = input.value === 'Pranje kola' || input.value === 'Dubinsko pranje';
    dirtLevel.hidden = !showDirt;
  });
});

dirtRange.addEventListener('input', () => {
  dirtLabel.textContent = dirtLabels[dirtRange.value];
});

document.querySelectorAll('.comparison-card').forEach((card) => {
  const range = card.querySelector('input[type="range"]');
  const fill = card.querySelector('.after-fill');
  const divider = card.querySelector('.comparison-divider');
  const updateComparison = () => {
    fill.style.left = `${range.value}%`;
    divider.style.left = `${range.value}%`;
  };
  range.addEventListener('input', updateComparison);
  updateComparison();
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const service = data.get('usluga');
  status.textContent = `Hvala, ${data.get('ime')}! Vaš zahtev za ${service.toLowerCase()} je primljen. Javićemo vam se uskoro.`;
  form.reset();
  dirtLevel.hidden = true;
  dirtLabel.textContent = dirtLabels[2];
});
