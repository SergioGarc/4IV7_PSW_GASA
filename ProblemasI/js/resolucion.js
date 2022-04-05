function r(){
    document.getElementById('monto').reset();
}

function p1(){
    var x = parseInt(document.getElementById('monto').value);
    var y = 0.02;

    document.getElementById('r1').innerHTML = (x*y)+x
}

//problema 2
function re(){
    document.getElementById('comision').reset();
}

function p2(){
    var x = parseInt(document.getElementById('comision').value);
    var y = 0.30;

    document.getElementById('r2').innerHTML = (x*y)+x;
}

//problema3
function reiniciar(){
    document.getElementById('total').reset();
}

function p3(){
    var x = parseInt(document.getElementById('total').value);
    var y = 0.15;

    document.getElementById('r3').innerHTML = x-(x*y);
}

//problema4
function p4(){
    var par1 = parseInt(document.getElementById('p1').value);
    var par2 = parseInt(document.getElementById('p2').value);
    var par3 = parseInt(document.getElementById('p3').value);
    var Exa = parseInt(document.getElementById('Examen').value);
    var Tra = parseInt(document.getElementById('Trabajo_final').value);

    var par = (par1+par2+par3)/3;
    var ms = par*0.55;

    var exam = Exa*0.30
    
    var ns = Tra*0.15

    document.getElementById('r4').innerHTML = ms+exam+ns;
}

//problema5
function p5(){
    var Ta = parseInt(document.getElementById('altot').value);
    var H = parseInt(document.getElementById('Hombres').value);
    var M = parseInt(document.getElementById('Mujeres').value);

    var HT = (H*100)/Ta;
    var MT = (M*100)/Ta;

    var Por = "%";

    document.getElementById('r51').innerHTML = HT + Por;
    document.getElementById('r52').innerHTML = MT + Por;
}

//problema6
function p6(){
    var Aña = parseInt(document.getElementById('Aña').value);
    var Año = parseInt(document.getElementById('Año').value);


    document.getElementById('r6').innerHTML = Aña-Año;
}