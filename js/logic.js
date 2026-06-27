listaMeses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
function gravarMes(){
    const mes = document.getElementById("selecionar-mes").value;
    switch(mes){
        case "0": 
            console.log(listaMeses[0]);
            break;
        case "1":
            console.log(listaMeses[1]);
            break;
        case "2":
            console.log(listaMeses[2]);
            break;
        case "3":
            console.log(listaMeses[3]);
            break;
        case "4":
            console.log(listaMeses[4]);
            break;
        case "5":
            console.log(listaMeses[5]);
            break;
        case "6":
            console.log(listaMeses[6]);
            break;
        case "7":
            console.log(listaMeses[7]);
            break;
        case "8":
            console.log(listaMeses[8]);
            break;
        case "9":
            console.log(listaMeses[9]);
            break;
        case "10":
            console.log(listaMeses[10]);
            break;
        case "11":
            console.log(listaMeses[11]);
            break;
}
}
function etapa1(){
    gravarMes();
    document.getElementById("cadastro-dias").style.display = "block";
    document.getElementById("cadastro-mes").style.display = "none";
}
function voltar1(){
    document.getElementById("cadastro-dias").style.display = "none";
    document.getElementById("cadastro-mes").style.display = "block";
}
function etapa2(){
    document.getElementById("cadastro-dias").style.display = "none";
    document.getElementById("cadastro-horas").style.display = "block";
}

let qtdHoras = 0;
function incrementarHora(){
    qtdHoras++;
    document.getElementById("hora-trabalhada").value = qtdHoras;
    console.log(qtdHoras);
}
function decrementarHora(){
    if(qtdHoras > 0){
        qtdHoras--;
        document.getElementById("hora-trabalhada").value = qtdHoras;
        console.log(qtdHoras);
    }
    
}










document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.dias-btn');
    if(container){
        container.addEventListener('click', (event) =>{
            if(event.target.tagName === 'BUTTON') {
                event.target.classList.toggle('ativo');
            }
        });
    } else{
        console.error("Não encontrado");
    }
})

