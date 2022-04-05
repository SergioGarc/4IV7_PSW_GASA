//problema 1
function problema1(){
    var up = document.querySelector('#p1-input').value;
    var ar = up.split(' ').reverse();
    var res = '';
    ar.forEach(function(pal, x){
        if(x !=0  !=ar.length) res += ' ';
        res += pal;
    });
    document.querySelector('#p1-output').textContent = res;
}

//problema 2
function problema2(){
    var x1 = parseInt(document.getElementById('p2-x1').value);
    var x2 = parseInt(document.getElementById('p2-x2').value);
    var x3 = parseInt(document.getElementById('p2-x3').value);
    var x4 = parseInt(document.getElementById('p2-x4').value);
    var x5 = parseInt(document.getElementById('p2-x5').value);

    var y1 = parseInt(document.getElementById('p2-y1').value);
    var y2 = parseInt(document.getElementById('p2-y2').value);
    var y3 = parseInt(document.getElementById('p2-y3').value);
    var y4 = parseInt(document.getElementById('p2-y4').value);
    var y5 = parseInt(document.getElementById('p2-y5').value);
    document.getElementById('p2-output').innerHTML = (x1*y1)+(x2*y2)+(x3*y3)+(x4*y4)+(x5*y5)
}


//problema 3

function problema3(){
    //definir un albeto
    var alfabeto = ['A', 'B', 'C', 'D', 'E', 'F',
            'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
            'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U',
            'V', 'W', 'X', 'Y', 'Z'];

    //Obtener la cadena del input y separar por comas
    
    var p3_input = document.querySelector('#p3-input').value;

    var p3_palabras = p3_input.split(',');

    //eliminar el espacio que hay entre cada palabra
    p3_palabras = p3_palabras.map(function (palabra){
        return palabra.replace(/\s/g, '').toUpperCase();
    });

    //calcular los caracteres unicos de cada palabra

    var p3_res = '';

    //iterar en cada palabra

    p3_palabras.forEach(function (palabra, i){
        //separar las palabras en un array para leer cada letra
        var letras_unicas = [];
        var palabra_array = palabra.split('');
        //iterar al alfabeto
        alfabeto.forEach(function (letra, j){
            //iterar por palabra
            palabra_array.forEach(function (letra_palabra, k){
                //comprobar que la letra esta dentro del alfabeto
                if(letra_palabra == letra){
                    //si la letra no la hemos contado, la agregamos a un array
                    //para contar las letras unicas
                    if(letras_unicas.indexOf(letra) < 0){
                        letras_unicas.push(letra);
                    }
                }
            });

        });
        p3_res += 'Palabra: ' + palabra + ' = ' + letras_unicas.length + '\n';
    });

    document.querySelector('#p3-output').textContent = p3_res;

}