let Pessoa = class Pessoa {
  constructor(nome, cpf) {
    this.nome = nome;
    this.cpf = cpf;
  }
}

let User = class User extends Pessoa {
  constructor(nome, senha, idade, cpf) {
    console.log('NOME', nome);
    console.log('idade', idade);
    super(nome, cpf)
    this.senha = senha;
    this.idade = idade;
  }
  usuarioSalvo() {
    try {
      if (this.status != undefined) {
        this.status = "Salvo"
      }
    } catch (error) {
      console.log(error)
    }
  }
};


function salvar() {
  try {
    let pessoa = {}
    let inputs = document.getElementsByTagName('input');
    for (let item of inputs) {
      pessoa[item.id] = item.value
    }
    var cliente = new User(pessoa.nome, pessoa.senha, pessoa.idade, pessoa.cpf)
    if (cliente.hasOwnProperty('nome')) {
      User.prototype.status = ""
      cliente.usuarioSalvo()
      document.getElementById("result").innerHTML = `<fieldset> <legend style='color: green;'>Salvo com sucesso</legend> <span>Nome:${cliente.nome}</span><br><span>CPF:${cliente.cpf}</span><br><span>Idade:${cliente.idade}</span><br><span>Status:${cliente.status}</span></fieldset>`
    }
  } catch (error) {
    console.log(error)
  }
};

async function validar() {
  try {
    let maxValidate = 4
    let inputs = document.getElementsByTagName('input')
    let newArray = new Array()
    for (let item of inputs) {
      newArray.push(item)
    }
    const check = await newArray.map(checkingInputs)
    if (check) {
      for (let item of check) {
        if (item == false) maxValidate--
      }
      if (maxValidate == 4) {
        salvar()
        return true
      }
      else {
        document.getElementById("result").innerHTML = `<legend style='color: Red;'>Todos os campos devem ser preenchidos</legend>`
        return false
      }
    }
  } catch (error) {
    console.log(error)
  }
}
checkingInputs = (item) => {
  try {
    if (item.value == "" || item.value == null) return false
    else return true
  } catch (error) {
    console.log(error)
    return false
  }
}