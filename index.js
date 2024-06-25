const container= document.querySelector(".container")

function obtenerFibonacci(){
    let numeroACalcular= parseFloat(prompt("ingrese el numero a calcular sucesión de fibonacci"));

    if(!isNaN(numeroACalcular)){
        calcularFibonacci(numeroACalcular);
    }else{
        container.innerHTML=`<h1> no es un numero el dato ingresado</h1>`
    }


}

obtenerFibonacci();




function calcularFibonacci(numero){
    
    let a = 0;
    let b = 1;
    let c = 0;

    container.innerHTML = "<p>0</p> "+ "<p>1</p>";

    for(let i = 2; i< numero; i++){
        c= a+b;
        a = b;
        b = c;
        
        container.innerHTML+=`<p>${c}</p>`
    } 
}

// calcularFibonacci(3);