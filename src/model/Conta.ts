export abstract class Conta {

    //Definir os atributos da classe (caracteristicas) do meu objeto
    private _numero: number;
    private _agencia: number;
    private _tipo: number;
    private _titular: string;
    private _saldo: number;

    // Abaixo foi definifo o metodo construtor, responsavel por criar os objetos da classe
    constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number) {
        this._numero = numero;
        this._agencia = agencia;
        this._tipo = tipo;
        this._titular = titular;
        this._saldo = saldo;
    }


    //definidos os metodos get e set de cada atributo


    public get numero(): number {
        return this._numero;
    }

    public get agencia(): number {
        return this._agencia;
    }

    public get tipo(): number {
        return this._tipo;
    }


    public get titular(): string {
        return this._titular;
    }

    public get saldo(): number {
        return this._saldo;
    }

    public set numero(value: number) {
        this._numero = value;
    }

    public set agencia(value: number) {
        this._agencia = value;
    }

    public set tipo(value: number) {
        this._tipo = value;
    }

    public set titular(value: string) {
        this._titular = value;
    }


    public set saldo(value: number) {
        this._saldo = value;
    }
    // metodo sacar dinheiro da conta

    public sacar(valor: number): boolean {

        if (this._saldo < valor) {
            console.log("saldo e insuficiente!");
            return false;
        }

        this._saldo = this._saldo - valor;
        return true;

    }

    //metodo depositar
    public depositar(valor: number): void {
        this._saldo = this._saldo + valor;

    }

    // metodo para visualizar todos os dados do objeto
    public visualizar(): void {

        let tipo: string = "";

        switch (this._tipo) {
            case 1:
                tipo = "Conta corrente";
                break;

            case 2:
                tipo = "Conta poupanca";
                break
        }

        console.log("\n*************************************");
        console.log("\ndados da conta");
        console.log("\n*************************************");
        console.log(`numero da conta: ${this._numero}`);
        console.log(`numero da agencia: ${this._agencia}`);
        console.log(`tipo da conta: ${tipo}`);
        console.log(`titular da conta: ${this._titular}`);
        console.log(`saldo conta: ${this._saldo.toFixed(2)}`);

    }
    //exemplo de um metoodo abstrato
   // public abstract teste(): void;

}