const map = document.getElementById('map');
const db = firebase.database();
const claimsRef = db.ref('claims');

// Laad bestaande claims
claimsRef.on('value', (snapshot) => {
  const data = snapshot.val() || {};
  for (let i = 0; i < 100; i++) {
    const cell = document.querySelector(`[data-index="${i}"]`);
    if (cell) {
      if (data[i]) {
        cell.classList.add('claimed');
        cell.dataset.claimed = "true";
      }
    }
  }
});

// Maak cellen
for (let i = 0; i < 100; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  cell.dataset.index = i;
  cell.dataset.claimed = "false";

  cell.addEventListener('click', () => {
    if (cell.dataset.claimed === "false") {
      claimsRef.child(i).set(true); // schrijf naar database
    } else {
      alert("Deze plek is al geclaimd!");
    }
  });

  map.appendChild(cell);
}
