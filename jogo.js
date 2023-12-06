let heroi = ['', 0, 0]
let chanceVitoria = 0.7

function IniciarJogo(){
    document.getElementById("telaInicio").style.display = "none";
    document.getElementById("telaJogo").style.display = "block";

    heroi[0] = document.getElementById("name").value; //nome
    heroi[1] = 1; //xp
    heroi[2] = 100; // vida
    
    exibirVida();

    let apresentacao = document.getElementById("apresentacao");
    apresentacao.innerHTML = `<p>Seja Bem-vindo Herói ${heroi[0]}</p>`
}

function exibirNivel(){
    let nivel

    if (heroi[1] < 1000) {
        nivel = 'Ferro'
    } else if(heroi[1] >= 1001 && heroi[1] <= 2000 ){
        nivel = 'Bronze'
    } else if(heroi[1] >= 2001 && heroi[1] <= 5000 ){
        nivel = 'Prata'
    } else if(heroi[1] >= 5001 && heroi[1] <= 6000 ){
        nivel = 'Ouro'
    } else if(heroi[1] >= 6001 && heroi[1] <= 7000 ){
        nivel = 'Platina'
    } else if(heroi[1] >= 7001 && heroi[1] <= 8000 ){
        nivel = 'Diamante'
    } else if(heroi[1] >= 8001 && heroi[1] <= 9000 ){
        nivel = 'Ascendente'
    } else if(heroi[1] >= 9001 && heroi[1] <= 10000 ){
        nivel = 'Imortal'
    } else if(heroi[1] >= 10001){
        nivel = 'Radiante'
    }

    let exibicao = document.getElementById("telaResultado")

    exibicao.innerHTML = `<p>O Herói de nome ${heroi[0]} está no nível de ${nivel} com ${heroi[1]} de XP </p>`
}

function batalha(){
    let xpBatalha = 150;
    
    let exibicao = document.getElementById("telaResultado")

    const sorteio = Math.random(); // Gera um número aleatório entre 0 e 1
    
    if (sorteio < chanceVitoria) {
        // Vitória
        heroi[1] += xpBatalha;
        heroi[2] += 35;

        exibirVida();

        exibicao.innerHTML = `<p>Voce venceu a batalha e ganhou ${35} de vida e ${xpBatalha} de XP!<br>Agora voce tem ${heroi[1]} de XP total!!</p>`

    } else {
        // Derrota
        let vidaPerdida = Math.floor(Math.random() * 15) + 10;

        heroi[2] -= vidaPerdida;
        heroi[1] -= xpBatalha / 3;

        exibirVida();

        exibicao.innerHTML = `<p>Voce perdeu a batalha e perdeu ${vidaPerdida} de vida e ${xpBatalha/3} de XP! <br>Agora voce tem ${heroi[1]} de XP total!!</p>`
    }
}

function desafiarBoss() {
    alert("Em breve!!")
}

function exibirVida() {
    let exibirVida = document.getElementById("exibirVida");
    exibirVida.innerHTML = `<p>Voce tem ${heroi[2]} de vida!</p>`;
}
