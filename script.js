// 🌗 DARK MODE TOGGLE
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Behåll tidigare tema från localStorage
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
  themeToggle.textContent = '☀️';
}

// Klick – byt tema
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  const isDark = body.classList.contains('dark');

  // Byt ikon
  themeToggle.textContent = isDark ? '☀️' : '🌙';

  // Spara tema
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});



// === TRANSAKTIONS-FORMULÄR ===
const sendForm = document.querySelector('.send-form form');

sendForm?.addEventListener('submit', (e) => {
  e.preventDefault(); // stoppa riktig sidladdning

  const to = sendForm.querySelector('input[type="text"]').value;
  const token = sendForm.querySelector('select').value;
  const amount = sendForm.querySelector('input[type="number"]').value;

  const date = new Date().toISOString().split('T')[0];

  const table = document.querySelector('.transactions tbody');
  const newRow = document.createElement('tr');

  newRow.innerHTML = `
    <td>${date}</td>
    <td>${to}</td>
    <td>${amount}</td>
    <td>${token}</td>
  `;

  table?.prepend(newRow);

  sendForm.reset(); // nollställ formuläret
});

// 📊 Dummyhistorik för wallet-balans (kan bytas mot riktig data)
// 📊 Wallet Balance Chart (uppdaterad för dark mode)
const labels = ['Maj', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt'];
const data = [1.5, 2.3, 3.0, 2.7, 3.4, 3.5]; // Exempeldata

const ctx = document.getElementById('balanceChart')?.getContext('2d');
if (ctx) {
  const isDark = document.body.classList.contains('dark');
  const chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: 'ETH Balance',
        data: data,
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        fill: true,
        tension: 0.3,
        pointRadius: 4
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          labels: {
            color: isDark ? '#f9fafb' : '#1f2937'
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'ETH',
            color: isDark ? '#f9fafb' : '#1f2937'
          },
          ticks: {
            color: isDark ? '#f9fafb' : '#1f2937'
          }
        },
        x: {
          title: {
            display: true,
            text: 'Månad',
            color: isDark ? '#f9fafb' : '#1f2937'
          },
          ticks: {
            color: isDark ? '#f9fafb' : '#1f2937'
          }
        }
      }
    }
  });
}


// HAMBURGER MENU TOGGLE
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');

menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

