let maquinas = [];

function carregarMaquinas() {
  maquinas = JSON.parse(localStorage.getItem('maquinas')) || [];
  renderizarMaquinas(maquinas);
}

function renderizarMaquinas(lista) {
  const tbody = document.querySelector('#tabelaMaquinas tbody');
  const semDados = document.getElementById('semDados');
  tbody.innerHTML = '';

  if (lista.length === 0) {
    semDados.style.display = 'block';
    return;
  }

  semDados.style.display = 'none';

  lista.forEach(m => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${m.localidade}</td>
      <td>${m.dispositivo}</td>
      <td>${m.serial}</td>
      <td>${m.nf}</td>
      <td>${m.responsavel}</td>
      <td>${m.email}</td>
      <td>${m.setor}</td>
      <td>${m.windowsUpdate}</td>
      <td>${m.so}</td>
    `;
    tbody.appendChild(tr);
  });
}

document.getElementById('pesquisa').addEventListener('input', function() {
  const termo = this.value.toLowerCase();

  const filtradas = maquinas.filter(m => {
    return Object.values(m).some(valor =>
      valor.toLowerCase().includes(termo)
    );
  });

  renderizarMaquinas(filtradas);
});

window.onload = carregarMaquinas;
