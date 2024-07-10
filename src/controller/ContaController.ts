import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";

export class contaController implements ContaRepository {

    // colecao array que vai armazernar os objetos conta
    private listaContas: Array<Conta> = new Array<Conta>();

    // essa variavel numero serve para controlar os numeros das contas, ela que vai definir qual vai ser os numeros da conta
    //vai ser a especie de um contador

    public numero: number = 0;

    procurarPorNumero(numero: number): void {
        let buscarConta = this.buscarNoArray(numero);

        if (buscarConta !== null)
            buscarConta.visualizar();
        else
            console.log("\nA Conta não foi encontrada!"); //posso colocar a conta solicitada e mostrar qual que nao foi encontrada

    }
    listarTodas(): void {
        for (let conta of this.listaContas) { // esse metodo of percorre o array das lista das contas
            conta.visualizar()
        }

    }
    cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log("A conta foi cadastrada com Sucesso!");

    }
    atualizar(conta: Conta): void {
        let buscarConta = this.buscarNoArray(conta.numero);

        if (buscarConta !== null) {
            this.listaContas[this.listaContas.indexOf(buscarConta)] = conta;
            console.log("\nA conta foi atualiza!");//voltar aqui depois e editar (formatar)

        } else
            console.log("\nA Conta não foi encontrada!");

    }
    deletar(numero: number): void {
        let buscarConta = this.buscarNoArray(numero);

        if (buscarConta !== null) {
            this.listaContas.slice(this.listaContas.indexOf(buscarConta), 1);
            console.log("\nA conta foi excluida!");//voltar aqui depois e editar (formatar)

        } else
            console.log("\nA Conta não foi encontrada!");

    }
    sacar(numero: number, valor: number): void {
        let buscarConta = this.buscarNoArray(numero);

        if (buscarConta !== null) {
            if (buscarConta.sacar(valor) === true)
                console.log("\nO Saque foi efetuado com sucesso!");//voltar aqui depois e editar (formatar)

        } else
            console.log("\nA Conta não foi encontrada!");

    }
    depositar(numero: number, valor: number): void {
        let buscarConta = this.buscarNoArray(numero);

        if (buscarConta !== null) {
            buscarConta.depositar(valor);
            console.log("\nO Deposito foi efetuado com sucesso!");//voltar aqui depois e editar (formatar)

        } else
            console.log("\nA Conta não foi encontrada!");

    }
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        let buscaContaOrigem = this.buscarNoArray(numeroOrigem);
        let buscarContaDestino = this.buscarNoArray(numeroDestino);
        if (buscarContaDestino !== null && buscaContaOrigem !== null) {
            if (buscaContaOrigem.sacar(valor) === true)
                buscarContaDestino.depositar(valor);
            console.log("\nA transferencia foi efetuado com sucesso!");//voltar aqui depois e editar (formatar)

        } else
            console.log("\nA Conta de origem e/ou destino não foram encontrada encontrada!");
    }

    // criando os metodos auxiliares

    public gerarNumero(): number {
        return ++this.numero;

    }
    //esse metodo e ulti para procurar pelo numero, apagar, sacar, transferir, praticamente tudo que falta.
    public buscarNoArray(numero: number): Conta | null {
        for (let conta of this.listaContas) {
            if (conta.numero === numero)
                return conta;
        }
        return null;
    }
}