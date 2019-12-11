const player1 = "O";
const player2 = "X";
var playTime = player1;
var gamaOver = false;

atualizarTitulo();
inicializarEspacos();

function atualizarTitulo(){
    if(gamaOver){
        return;
    }
    if(playTime == player1){
        var player = document.querySelectorAll("div#titulo img")[0];
        player.setAttribute("src", "img/jogadorO.jpg")
    }else{
        var player = document.querySelectorAll("div#titulo img")[0];
        player.setAttribute("src", "img/jogadorX.jpg")
    }
}


function inicializarEspacos(){
    var bloco = document.getElementsByClassName("blocos");

    for (i=0; i < bloco.length; i++) {
        bloco[i].addEventListener("click",
            function() {
                if(gamaOver){
                    return
                }
                if(this.getElementsByClassName("img").length == 0){
                    if(playTime == player1){
                        this.innerHTML = "<img src='img/jogadorO.jpg'>";
                        this.setAttribute("jogada", player1);
                        playTime = player2;
                    }else{
                        this.innerHTML = "<img src='img/jogadorX.jpg'>";
                        this.setAttribute("jogada", player2);
                        playTime = player1;
                    }
                    atualizarTitulo();
                    verificarVencedor();
                }
            }
        )
    }
}

function verificarVencedor() {
    var a1 = document.getElementById("a1").getAttribute("jogada");
    var a2 = document.getElementById("a2").getAttribute("jogada");
    var a3 = document.getElementById("a3").getAttribute("jogada");

    var b1 = document.getElementById("b1").getAttribute("jogada");
    var b2 = document.getElementById("b2").getAttribute("jogada");
    var b3 = document.getElementById("b3").getAttribute("jogada");

    var c1 = document.getElementById("c1").getAttribute("jogada");
    var c2 = document.getElementById("c2").getAttribute("jogada");
    var c3 = document.getElementById("c3").getAttribute("jogada");

    var vencedor = "";

    if((a1 == b1 && a1 == c1 && a1 != "") || (a1 == a2 && a1 == a3 && a1 != "") || (a1 == b2 && a1 == c3 && a1 != "")){
        vencedor = a1
    }else if((b2 == b1 && b2 == b3 && b2 != "") || (b2 == a2 && b2 == c2 && b2 != "") || (b2 == a3 && b2 == c1 && b2 != "")){
        vencedor = b2;
    }else if((c3 == c2 && c3 == c1 && c3 != "") || (c3 == a3 && c3 == b3 && c3 != "")){
        vencedor = c3
    }

    if(vencedor != ""){
        gamaOver = true
        alert("O ganhador é o : " + vencedor )
    }else if (vencedor != a1 && b2 && c3 && a2 != "" && a3 != "" && b1 != "" && b3 != ""&& c1 != ""&& c2 != ""){
        gamaOver = true
        alert("DEU VELHA")
    }
}