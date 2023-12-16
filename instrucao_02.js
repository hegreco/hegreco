var num_dia = new Date().getDay();
if (num_dia == 0){
    dia = "Domingo";
} else if(num_dia == 1){
    dia = "Segunda-feira";
} else if(num_dia == 2){
    dia = "Terça-feira";
} else if(num_dia == 3){
    dia = "Quarta-feira";
} else if(num_dia == 4){
    dia = "Quinta-feira";
} else if(num_dia == 5){
    dia = "Sexta-feira";
} else if(num_dia == 6){
    dia = "Sábado";
}
document.write("Aproveite o seu dia! hoje é ", dia)