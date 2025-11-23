const readline = require("readline");

const SEPARATOR = "----------------------------------\n";

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ask(question, callback){
    input.question(question + "? ", function(response){
        callback(response);
    });
}

function getLevel(wins, losses){
    result = calcResult(wins, losses);
    level = result >= 101 ? "Imortal" :
            result >=  91 ? "Lendário" :
            result >=  81 ? "Diamante" :
            result >=  51 ? "Ouro" :
            result >=  21 ? "Prata" :
            result >=  11 ? "Bronze" : "Ferro";
    return `O Herói tem de saldo de ${result} está no nível de ${level}.`
}

function calcResult(wins, losses){
    result = wins - losses;
    return result < 0 ? 0 : result;
}

function main(){
    ask("Qual o nome do herói", function(name){
        ask("Qual a quantidade de vitórias deste herói", function(wins){
            ask("Qual a quantidade de derrotas deste herói", function(losses){
                console.log(getLevel(parseInt(wins), parseInt(losses)));
                console.log(SEPARATOR);
                input.close();
            });
        });
    });
}

function start(){
    console.clear();
    console.log("=== CALCULADORA DE PARTIDAS RANQUEADAS ===\n");
    main();
}

start();