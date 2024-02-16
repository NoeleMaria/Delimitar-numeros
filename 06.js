function separarNumeros() {
    let numerosInseridos = document.getElementById('numeros').value;
    // console.log(numerosInseridos);
    
    let delimitadorNumeros = numerosInseridos.split(",");
    console.log(delimitadorNumeros);
}