listaMeses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
listaDias = {
    "segunda": 0,
    "terça": 0,
    "quarta": 0,
    "quinta": 0,
    "sexta": 0,
    "sábado": 0,
    "domingo": 0
};
const chaves = Object.keys(listaDias)
console.log(chaves)


function gravarMes() {
    const mes = document.getElementById("selecionar-mes").value;
    switch (mes) {
        case "0":
            console.log(listaMeses[0]);
            document.getElementById("mes-escolhido").innerHTML = listaMeses[0];
            break;
        case "1":
            console.log(listaMeses[1]);
            document.getElementById("mes-escolhido").innerHTML = listaMeses[1];
            break;
        case "2":
            console.log(listaMeses[2]);
            document.getElementById("mes-escolhido").innerHTML = listaMeses[2];
            break;
        case "3":
            console.log(listaMeses[3]);
            document.getElementById("mes-escolhido").innerHTML = listaMeses[3];
            break;
        case "4":
            console.log(listaMeses[4]);
            document.getElementById("mes-escolhido").innerHTML = listaMeses[4];
            break;
        case "5":
            console.log(listaMeses[5]);
            document.getElementById("mes-escolhido").innerHTML = listaMeses[5];
            break;
        case "6":
            console.log(listaMeses[6]);
            document.getElementById("mes-escolhido").innerHTML = listaMeses[6];
            break;
        case "7":
            console.log(listaMeses[7]);
            document.getElementById("mes-escolhido").innerHTML = listaMeses[7];
            break;
        case "8":
            console.log(listaMeses[8]);
            document.getElementById("mes-escolhido").innerHTML = listaMeses[8];
            break;
        case "9":
            console.log(listaMeses[9]);
            document.getElementById("mes-escolhido").innerHTML = listaMeses[9];
            break;
        case "10":
            console.log(listaMeses[10]);
            document.getElementById("mes-escolhido").innerHTML = listaMeses[10];
            break;
        case "11":
            console.log(listaMeses[11]);
            document.getElementById("mes-escolhido").innerHTML = listaMeses[11];
            break;
    }
}
function etapa1() {
    gravarMes();
    document.getElementById("cadastro-dias").style.display = "block";
    document.getElementById("cadastro-mes").style.display = "none";
}
function voltar1() {
    document.getElementById("cadastro-dias").style.display = "none";
    document.getElementById("cadastro-mes").style.display = "block";
}
function etapa2() {
    document.getElementById("cadastro-dias").style.display = "none";
    document.getElementById("cadastro-horas").style.display = "block";
}
function concluir() {
    const a = null;
}
function voltarInicio() {
    document.getElementById("cadastro-dias").style.display = "none";
    document.getElementById("cadastro-mes").style.display = "block";
    document.getElementById("cadastro-horas").style.display = "none";

}
const incrementar = () => {
    document.getElementById("cadastro-horas").addEventListener('click', function (event) {
        const btnID = event.target.dataset.id;
        console.log(btnID)
        switch (btnID) {
            case 'decSeg':
                console.log("inserir o comando");
                break;
            case 'incSeg':
                console("inserir o comando")
        }

    });
    const chaves = Object.keys(listaDias);

}
function mudarCor() {
    const containerDias = document.querySelector(".dias-btn");
    containerDias.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            event.target.classList.toggle('ativo');
            console.log(event.target.value);
            let diaSelecionado = event.target.value;
            if(diaSelecionado == 0 ){
                document.getElementById("segunda").style.display = "block";
            }
        }
    });
}

mudarCor()