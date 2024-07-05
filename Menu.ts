import readlinesync = require("readline-sync");
import { colors } from './src/util/colors';
import { Conta } from "./src/model/Conta";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";

export function main() {

    let opcao: number;   

    // novas instancias da classe ContaCorrente (objetos)
    const cc1: ContaCorrente = new ContaCorrente(3, 1234, 1, 'Amanda Magro', 1000000.00, 100000);
    const cc2: ContaCorrente = new ContaCorrente(4, 1234, 2, 'Lucas Silva', 1000.00, 100.00);

    cc1.visualizar();
    cc2.visualizar();

    console.log(`\nSaque de R$ 25.000,00 na conta CC1: ${cc1.sacar(25000)}`);
    cc1.visualizar();

    console.log(`\nSaque de R$ 1.500,00 na conta CC2: ${cc2.sacar(1500)}`);

    console.log(`\nDepositar 3.000.99 reais na conta CC2: `);
    cc2.depositar(3000.99)
    cc2.visualizar();

    // novas instancias da classe ContaPoupanca (objetos)

    const cp3: ContaPoupanca = new ContaPoupanca(1, 6574, 2, 'Pandora', 200.00, 12);
    const cp4: ContaPoupanca = new ContaPoupanca(1, 8913, 2, 'Laila', 100.00, 13);

    cp3.visualizar();
    cp4.visualizar();

    // Fazendo Saque na conta poupança
    console.log(`\nSaque de R$ 10 na conta Cp3: ${cp3.sacar(10)}`);
    cp3.visualizar();

    // Fazendo Saque na conta poupança
    console.log(`\nSaque de R$ 10 na conta Cp4: ${cp4.sacar(10)}`);
    cp4.visualizar();

    // Depositando na conta Poupança
    console.log(`\nDepositar R$ 50 na conta `);
    cp3.depositar(50)
    cp3.visualizar();


    while (true) {

        console.log(colors.bg.black, colors.fg.blue,
            "><><><><><><><><><><><><><><><><><><><><><><><><><><><");
        console.log("                                                     ");
        console.log("            INSTITUICAO PRIMEIRA SAFRA               ");
        console.log("                                                     ");
        console.log("><><><><><><><><><><><><><><><><><><><><><><><><><><><");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Listar todas as Contas               ");
        console.log("            3 - Buscar Conta por Numero              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir valores entre Contas      ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("><><><><><><><><><><><><><><><><><><><><><><><><><><><");
        console.log("                                                     ",
            colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 9) {
            console.log(colors.fg.greenstrong,
                "\nInstituicao Primeira Safra - Aqui seu Dinheiro EstaSeguro");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong,
                    "\n\nCriar Conta\n\n", colors.reset);

                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong,
                    "\n\nListar todas as Contas\n\n", colors.reset);

                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong,
                    "\n\nConsultar dados da Conta - por número\n\n", colors.reset);

                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong,
                    "\n\nAtualizar dados da Conta\n\n", colors.reset);

                keyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong,
                    "\n\nApagar uma Conta\n\n", colors.reset);

                keyPress()
                break;
            case 6:
                console.log(colors.fg.whitestrong,
                    "\n\nSaque\n\n", colors.reset);

                keyPress()
                break;
            case 7:
                console.log(colors.fg.whitestrong,
                    "\n\nDepósito\n\n", colors.reset);

                keyPress()
                break;
            case 8:
                console.log(colors.fg.whitestrong,
                    "\n\nTransferência entre Contas\n\n", colors.reset);

                keyPress()
                break;
            default:
                console.log(colors.fg.whitestrong,
                    "\nOpção Inválida!\n", colors.reset);

                keyPress()
                break;
        }
    }

}

/* Função com os dados da pessoa desenvolvedora */
function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Everrton Pinheiro Sales Figueiredo ");
    console.log("Generation Brasil - generation@generation.org");
    console.log("https://github.com/Evertonpsf");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();