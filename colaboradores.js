function Pessoa(nome) {
    this.nome = nome;
}

function Colaborador(nome, cargo, salario) {
    this.cargo = cargo;
    let _salario = salario;
   
    this.getSalario = function() {
        return _salario;
    }

    this.setSalario = function(valor) {
        if (typeof valor === 'number'){
            _salario = valor;
        }
    }

    this.aumento = function() {
        const novoSalario = _salario * 1.10;
        _salario = novoSalario;
    }

    Pessoa.call(this, nome);
}

function Diretor(nome) {
    Colaborador.call(this, nome, "Diretora", 15000)

    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.15;
        this.setSalario(novoSalario);
    }
}

function Estagiario(nome) {
    Colaborador.call(this, nome, "Estagiário", 3500)

    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.05;
        this.setSalario(novoSalario);
    }
}


const colaborador1 = new Colaborador("Elisa", "Engenheira de Software", 6500);
const colaborador2 = new Colaborador("Davi", "Cientista de Dados", 9000);
const colaborador3 = new Estagiario("Fernanda");
const colaborador4 = new Diretor("Marília");


colaborador1.aumento();
console.log(colaborador1.getSalario());

colaborador2.aumento();
console.log(colaborador2.getSalario());

colaborador3.aumento();
console.log(colaborador3.getSalario());

colaborador4.aumento();
console.log(colaborador4.getSalario());
