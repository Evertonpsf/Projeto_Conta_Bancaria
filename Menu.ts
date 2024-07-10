import readlinesync = require("readline-sync");
import { colors } from './src/util/colors';
import { Conta } from "./src/model/Conta";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { contaController } from "./src/controller/ContaController";

export function main() {

    let opcao, numero, agencia, tipo, saldo, limite, aniversario, valor, numeroDestino: number;
    let titular: string;
    const tipoContas = ['Conta corrente', 'Conta poupanca'];

    const contas: contaController = new contaController();

    // novas instancias da classe ContaCorrente (objetos)
    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 1234, 1, 'Amanda Magro', 1000000.00, 100000));
    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 4231, 1, 'Lucas Silva', 1000.00, 100.00));


    // novas instancias da classe ContaPoupanca (objetos)
    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 6578, 2, 'Pandora', 200.00, 12));
    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 8765, 2, 'Laila', 100.00, 13));

    while (true) {

        console.log(colors.bg.black, colors.fg.blue,
            "><><><><><><><><><><><><><><><><><><><><><><><><><><><");
        console.log("                                                     ");
        console.log("       I . N . S . T . I . T . U . I . Ç . Ã . O     ");
        console.log("             P . R . I . M . E . I . R . A           ");
        console.log("                  S . A . F . R . A                  ");
        console.log("                                                     ");
        console.log("<><><><><><><><><><><><><><><><><><><><><><><><><><><");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Listar todas as Contas               ");
        console.log("            3 - Buscar Conta por Numero              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir valores entre Contas      ");
        console.log("            9 - Procurar Por Titular                 ");
        console.log("            0 - Sair                                 ");
        console.log("                                                     ");
        console.log("><><><><><><><><><><><><><><><><><><><><><><><><><><><");
        console.log("                                                     ",
            colors.reset);


        console.log("\nSEJA BEM VINDO AO SEU BANCO!\n");
        console.log("\nEnrte as opções do Menu, Abaixo informe o serviço de sua preferencia: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 0) {
            console.log(colors.bg.black, colors.fg.blue,
                "\nInstituicao Primeira Safra - Aqui seu Dinheiro Esta Seguro!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong,
                    "\n\nCriação de Conta!\n\n", colors.reset);

                console.log('Nos Informa o número da Agência: ');
                agencia = readlinesync.questionInt("");

                console.log('Informe o Nome Completo do titular da Conta: ');
                titular = readlinesync.question("");

                console.log('Informe o Tipo da conta Que Deseja Criar: ');
                tipo = readlinesync.keyInSelect(tipoContas, "", { cancel: false }) + 1;

                console.log('Informe o Saldo da Conta: ');
                saldo = readlinesync.questionFloat("");

                switch (tipo) {
                    case 1:
                        console.log('Solicitamos que informe o Limite da conta: ');
                        limite = readlinesync.questionFloat("");
                        contas.cadastrar(
                            new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite)
                        )

                        break;
                    case 2:

                        console.log('Qaul a Data de Aniversario da Conta Que Seja Melhor Para você?: ');
                        aniversario = readlinesync.questionInt("");
                        contas.cadastrar(
                            new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario)
                        )

                        break;
                }

                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong,
                    "\n\nListar todas as Contas\n\n", colors.reset);
                contas.listarTodas();

                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong,
                    "\n\nConsultar dados da Conta - por número\n\n", colors.reset);

                console.log("informe o Número da Conta que Deseja Consultar: ");
                numero = readlinesync.questionInt("");

                contas.procurarPorNumero(numero);

                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong,
                    "\n\nAtualização dos dados da Conta\n\n", colors.reset);

                console.log("Informe o Número da Conta que Deseja Atualizar: ");
                numero = readlinesync.questionInt("");

                let conta = contas.buscarNoArray(numero);

                if (conta) {

                    console.log('Informe o Número da Agência Que Se Refere a Mesma Conta: ');
                    agencia = readlinesync.questionInt("");

                    console.log('Informe Nome do titular da Conta: ');
                    titular = readlinesync.question("");

                    console.log('Informe o Saldo da conta: ');
                    saldo = readlinesync.questionFloat("");

                    tipo = conta.tipo;

                    switch (tipo) {
                        case 1:
                            console.log('Informe o Limite da conta de sua Preferencia: ');
                            limite = readlinesync.questionFloat("");
                            contas.atualizar(
                                new ContaCorrente(numero, agencia, tipo, titular, saldo, limite)
                            )

                            break;
                        case 2:

                            console.log('Informe a Data de Aniversario da conta: ');
                            aniversario = readlinesync.questionInt("");
                            contas.atualizar(
                                new ContaPoupanca(numero, agencia, tipo, titular, saldo, aniversario)
                            )

                            break;
                    }

                } else {
                    console.log(`\nO numero referente a conta:  ${numero} nao foi localizado!`)
                }

                keyPress()
                break;

            case 5:
                console.log(colors.fg.whitestrong,
                    "\n\nExclusao de uma Conta!\n\n", colors.reset);

                console.log("Informe o numero da Conta que Deseja Excluir: ");//editar tudo aqui depois tambem!
                numero = readlinesync.questionInt("");

                contas.deletar(numero);

                keyPress()
                break;
            case 6:
                console.log(colors.fg.whitestrong,
                    "\n\nInforme os dados para realizar seu Saque.\n\n", colors.reset);

                console.log("\nInforme o numero da Conta que desejar Efetuar o Saque: ");//editar tudo aqui depois tambem!
                numero = readlinesync.questionInt("");

                console.log("/nInforme o Valo que Deseja Sacar R$: ");//editar tudo aqui depois tambem!
                valor = readlinesync.questionFloat("");

                contas.sacar(numero, valor);


                keyPress()
                break;
            case 7:
                console.log(colors.fg.whitestrong,
                    "\n\nFaça seu Depósito, Informando os Dados solicitados Abaixo.\n\n", colors.reset);


                console.log("Informe o numero da Conta: ");//editar tudo aqui depois tambem!
                numero = readlinesync.questionInt("");

                console.log("Faça seu Deposito, informe o Valor R$: ");//editar tudo aqui depois tambem!
                valor = readlinesync.questionFloat("");

                contas.depositar(numero, valor);

                keyPress()
                break;
            case 8:
                console.log(colors.fg.whitestrong,
                    "\n\nTransferência entre Contas\n\n", colors.reset);


                console.log("Informe o numero da Conta de Origem ( Conta que o Dinheiro vai ser retirado): ");//editar tudo aqui depois tambem!
                numero = readlinesync.questionInt("");

                console.log("Informe o numero da Conta de Destino ( Conta que recebera o dinheiro): ");//editar tudo aqui depois tambem!
                numeroDestino = readlinesync.questionInt("");


                console.log("Informe o Valor que deseja Sacar R$: ");//editar tudo aqui depois tambem!
                valor = readlinesync.questionFloat("");

                contas.transferir(numero, numeroDestino, valor);

                keyPress()
                break;
            case 9:
                console.log("Informe o nome!")
                console.log('Porcurar Por Titular da Conta: ');
                titular = readlinesync.question("");
                contas.procurarPorTitular(titular);
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
    console.log("\n><><><><><><><><><><><><><><><><><><><><><><><><><><>");
    console.log("                                                       ");
    console.log("Projeto Desenvolvido por: Everrton Pinheiro Sales Figueiredo ");
    console.log("Generation Brasil - everton.figueiredo@genstudents.org");
    console.log("https://github.com/Evertonpsf");
    console.log("                                                       ");
    console.log("><><><><><><><><><><><><><><><><><><><><><><><><><><><>");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para Continuar...");
    readlinesync.prompt();
}

main();