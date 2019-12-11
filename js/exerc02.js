function operacao() {
    var valor1 = Number(document.getElementById("valor").value)

    var dolar = valor1 / 4.15;
    var euro = valor1 / 5.10;
    var peso = valor1 / 0.07;
    var iene = valor1 / 0.03;

    switch (document.getElementById("calcular").value) {
        case "Dolar":
            document.getElementById("resultado").value = dolar;
            break;

        case "Euro":
            document.getElementById("resultado").value = euro;
            break;

        case "Peso":
            document.getElementById("resultado").value = peso;
            break;

        case "Iene":
            document.getElementById("resultado").value = iene;
            break;

        default:
            break;
    }
}
