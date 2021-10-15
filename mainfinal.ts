
//Revisar classe movie falta atributos , mirar contructor , print all
//Revisar professional 
//Intentar a ver si solucioanmos error
import {Movie} from "./Movie";
import {Professional} from "./Professional";
import {Imdb} from "./Imdb";
var prompt = require('prompt-sync')();
//import { readFileSync } from 'fs';
const fs = require('fs');
let pelicula = [];

let cent = new Movie("5Centimentros",2021,"Asiatica");
let Conbat = new Movie("Conbat",2021,"Americana");
let whatif = new Movie("whatif",2021,"Americana");

let array = [cent,Conbat,whatif];
let f = new Imdb(array);
//f.escribirEnFicheroJson("finalobject");
var n = prompt('Como se llama la Pelicula? ');
var n2 = prompt('En que año se hizo la Pelicula?');
var n3 = prompt('En que pais se hizo la Pelicula?');

let nuevapelicula = new Movie(n,n2,n3);

let obj = f.obtenerIntanciaIMDB("Ultima2");
let arr = obj.movie;
//console.log(arr);
var result = [];
for(var i in arr){
    result.push([i, arr [i]]);
}
result.push(nuevapelicula);
//console.log(result);
let u = new Imdb(result);
u.escribirEnFicheroJson("Imbd");