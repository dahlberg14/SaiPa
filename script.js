// Växla mellan flikar
function openTab(tabName) {
  document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
  document.getElementById(tabName).classList.add('active');
  window.scrollTo(0, 0);
}

// Aktivera menyknappar
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => openTab(btn.dataset.tab));
});

// Startanimation
window.onload = () => {
  setTimeout(() => {
    document.getElementById('start-animation').style.display = 'none';
  }, 2500);
  createBingo();
};

// Bingo
const bingoItems = [
  "Bil med S-skylt", "Någon i gul tröja", "Vägskylt 48",
  "Hockeyklubba", "Mössa", "Logga med stjärna",
  "SaiPa-keps", "Lastbil", "Paus i regn", "Kaffe på macken",
  "SaiPa-logga", "Ismaskin", "Flagga", "Sjöutsikt", "Motorcykel",
  "Leende supporter", "Hockeypuck", "Musik i bilen", "Tuta", "Ett skratt"
];

function createBingo() {
  const board = document.getElementById('bingo-board');
  board.innerHTML = '';
  bingoItems.slice(0, 25).forEach((text, i) => {
    const cell = document.createElement('div');
    cell.classList.add('bingo-cell');
    cell.innerText = i === 12 ? "SAIPA 🏒" : text;
    cell.addEventListener('click', () => {
      cell.classList.toggle('active');
      checkBingo();
    });
    board.appendChild(cell);
  });
}

function resetBingo() {
  document.querySelectorAll('.bingo-cell').forEach(cell => cell.classList.remove('active'));
  document.getElementById('bingo-message').innerText = '';
}

function checkBingo() {
  const cells = [...document.querySelectorAll('.bingo-cell')];
  const rows = [0,5,10,15,20].map(i => cells.slice(i, i+5));
  const cols = [0,1,2,3,4].map(i => [cells[i], cells[i+5], cells[i+10], cells[i+15], cells[i+20]]);
  const diag1 = [cells[0],cells[6],cells[12],cells[18],cells[24]];
  const diag2 = [cells[4],cells[8],cells[12],cells[16],cells[20]];
  const lines = [...rows, ...cols, diag1, diag2];
  if (lines.some(line => line.every(c => c.classList.contains('active')))) {
    document.getElementById('bingo-message').innerText = "🎉 Saimaan Pallo! 🎉";
  }
}

// Pubutmaningar
const challenges = [
  "Skåla med någon i gul tröja 🍻",
  "Sjung en SaiPa-ramsa högt 🎶",
  "Imitera en hockeykommentator 🎤",
  "Berätta ditt bästa hockeyminne 🏒",
  "Få föraren att skratta 😂",
  "Hitta något med en stjärna ⭐",
  "Säg 'Saimaan Pallo!' med inlevelse 💛"
];
function newChallenge() {
  const random = challenges[Math.floor(Math.random() * challenges.length)];
  document.getElementById('challenge').innerText = random;
}

// Korsord
function toggleFacit() {
  const facit = document.getElementById('facit');
  facit.style.display = facit.style.display === 'block' ? 'none' : 'block';
}
