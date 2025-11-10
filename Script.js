// ---------- INDEX.JS - Jogador ----------

function sendForApproval() {
  const name = document.getElementById('playerName').value;
  const house = document.getElementById('houseSelect').value;

  if (!name) {
    alert("Digite seu nome!");
    return;
  }

  // Salva no localStorage como pendente
  let pendingUsers = JSON.parse(localStorage.getItem('pendingUsers') || '[]');
  pendingUsers.push({name, house, status:"Pending"});
  localStorage.setItem('pendingUsers', JSON.stringify(pendingUsers));

  alert("Usuário enviado para aprovação pelo administrador!");
  document.getElementById('paymentSection').style.display = 'none';
}

// ---------- ADMIN.JS - Administrador ----------

function loadPendingUsers() {
  const tbody = document.querySelector("#playersTable tbody");
  tbody.innerHTML = '';
  let pendingUsers = JSON.parse(localStorage.getItem('pendingUsers') || '[]');

  pendingUsers.forEach((user, index) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${user.name}</td>
      <td>${user.house}</td>
      <td class="status-${user.status.toLowerCase()}">${user.status}</td>
      <td>
        <button class="approve" onclick="approveUser(${index})">✔️ Aprovar</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function approveUser(index) {
  let pendingUsers = JSON.parse(localStorage.getItem('pendingUsers') || '[]');
  pendingUsers[index].status = "Approved";
  localStorage.setItem('pendingUsers', JSON.stringify(pendingUsers));
  alert(`${pendingUsers[index].name} aprovado!`);
  loadPendingUsers();
}

// Carrega os usuários pendentes ao abrir admin.html
if(document.querySelector("#playersTable")) {
  loadPendingUsers();
}