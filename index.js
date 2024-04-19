//Definindo a classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch (this.tipo) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'realizou um ataque';
        }

        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
}

 //Criando instâncias da classe Heroi
const heroi1 = new Heroi('Capitão America', 30, 'guerreiro');
const heroi2 = new Heroi('Harry Potter', 1000, 'mago');
const heroi3 = new Heroi('Jackie Chan', 32, 'monge');
const heroi4 = new Heroi('Toranaga', 25, 'ninja');

 //Chamando o método atacar para cada herói
heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();