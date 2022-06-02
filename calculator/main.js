//click button

let element=document.getElementById('text-input');

let button1=document.getElementById('one');
button1.addEventListener('click',one);
function one(){
    var one=1;
    element.value+=one;

}
let button2=document.getElementById('two');
button2.addEventListener('click',two);
function two(){
    var two=2;
    element.value+=two;

}
let button3=document.getElementById('three');
button3.addEventListener('click',three);
function three(){
    var three=3;
    element.value+=three;

}
let button4=document.getElementById('four');
button4.addEventListener('click',four);
function four(){
    var four=4;
    element.value+=four;

}
let button5=document.getElementById('five');
button5.addEventListener('click',five);
function five(){
    var five=5;
    element.value+=five;

}
let button6=document.getElementById('six');
button6.addEventListener('click',six);
function six(){
    var six=6;
    element.value+=six;

}
let button7=document.getElementById('seven');
button7.addEventListener('click',seven);
function seven(){
    var seven=7;
    element.value+=seven;

}
let button8=document.getElementById('eight');
button8.addEventListener('click',eight);
function eight(){
    var eight=8;
    element.value+=eight;

}
let button9=document.getElementById('nine');
button9.addEventListener('click',nine);
function nine(){
    var nine=9;
    element.value+=nine;

}
let button0=document.getElementById('zero');
button0.addEventListener('click',zero);
function zero(){
    var zero=0;
    element.value+=zero;

}
let buttonp=document.getElementById('point');
buttonp.addEventListener('click',point);
function point(){
    var point='.';
    element.value+=point;

}
let buttonr=document.getElementById('reset');
buttonr.addEventListener('click',reset);
function reset(){

    element.value="";

}
