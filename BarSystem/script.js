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

const erro = document.getElementById('erro');

inputFields.forEach(function(inputItem){
  inputItem.addEventListener('input', function() {
    if (passwordInput.value.length > 3 & loginInput.value.length > 3) {
      btnLogin.classList.remove('disabled');
    } else {
      btnLogin.classList.add('disabled');
    }
  });
});

function validation() {
  let flag = false;
  for (let i = 0; i < dados.length; i += 1) {
    if (loginInput.value === dados[i].nome && passwordInput.value === dados[i].senha){
      flag = true;
      open('./tables.html')
      break;
    }
  }
  if (flag === false){
    var e = new Error('Could not parse input');
    throw e;
  }
};

function createTable(N) {
  for(let i = 0; i < N ; i += 1) {
    let table = document.createElement('div');
    table.classList.add('table')
    mainTables[0].appendChild(table);
  }
}


btnLogin.addEventListener('click', validation);
window.onload = createTable(10);