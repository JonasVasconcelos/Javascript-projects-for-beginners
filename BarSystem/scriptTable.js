let dados = [
    {
        nome: 'Jonas',
        senha: '1234',
        cargo: 'funcionario'
    },
    {
        nome: 'JonasVas',
        senha: '123456',
        cargo: 'adm'
    }
]

const inputFields = document.querySelectorAll('input');
const loginInput = document.getElementById('login');
const passwordInput = document.getElementById('password');
const btnLogin = document.getElementById('btnLogin');
const btnLogout = document.getElementById('btnlogout');
const mainTables = document.getElementsByClassName('container');

function createTable(N) {
  for(let i = 0; i < N ; i += 1) {
  let table = document.createElement('div');
  table.classList.add('table')
  table.innerHTML = i;
  mainTables[0].appendChild(table);
  }
}


window.onload = createTable(10);