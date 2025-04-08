const map = document.getElementById('map');

for (let i = 0; i < 100; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  cell.dataset.claimed = "false";

  cell.addEventListener('click', () => {
    if (cell.dataset.claimed === "false") {
      cell.classList.add('claimed');
      cell.dataset.claimed = "true";
    } else {
      alert("Deze plek is al geclaimd!");
    }
  });

  map.appendChild(cell);
}
