import readlinesync = require("readline-sync");
import { colors } from './src/util/colors';
import { Conta } from "./src/model/Conta";

export function main() {

    let opcao: number;

    //objetos da classe conta
    //novas instancia da classe conta (objetos)

    const c1: Conta = new Conta(1, 1234, 1, 'julia castro', 800000.00);
    const c2: Conta = new Conta(2, 1234, 2, 'marcela sanches', 600000.00);

    // visualizando o saldo da conta 1
    c1.visualizar();

    // visualizando o saldo da conta 2
    c2.visualizar();

    //mosrtando o saldo da conta 1
    console.log(`o saldo da conta 01 e: ${c1.saldo}`);

    //atribuindo novo valor a conta 2 e atualizando o mesmo
    c2.saldo = 900000.00;

    //mostrando o saldo da conta 2 atualizado
    console.log(`o saldo da conta 02 e: ${c2.saldo}`);

    //saque na conta 01


    console.log(`\nsacar 100 Reais da conta c1: ${c1.sacar(100)}`); //true
    c1.visualizar();

    console.log(`\nsacar 1700000.00 Reais da conta c2: ${c2.sacar(17000000)}`); //false
    c2.visualizar();

    //deposito nas contas

    console.log(`\ndepositar 1000000 Reais da conta c1: `);
    c1.depositar(1000000)
    c1.visualizar();

    console.log(`\ndepositar 17500000.33 Reais da conta c2: `);
    c2.depositar(17500000.33)
    c2.visualizar();




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
                "\nBanco do Brazil com Z - O seu Futuro começa aqui!");
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
    console.log("Projeto Desenvolvido por: ");
    console.log("Generation Brasil - generation@generation.org");
    console.log("github.com/conteudoGeneration");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();