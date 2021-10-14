import {Movie} from "./Movie";
import {Professional} from "./Professional";
import {Imdb} from "./Imdb";
var prompt = require('prompt-sync')();
//import { readFileSync } from 'fs';
const fs = require('fs');
let pelicula;

let array = [];
let f = new Imdb(array);

var n = prompt('Como se llama la Pelicula? ');
var n2 = prompt('En que año se hizo la Pelicula?');
var n3 = prompt('En que pais se hizo la Pelicula?');

let obj = f.obtenerIntanciaIMDB("pepito");
let pelicula2 = new Movie(n,n2,n3);
console.log(obj);

//obj.movie.push(pelicula2);

let data = JSON.stringify(obj,null,2);

 //Escribir
fs.writeFile('final.json', data, (err) => {
    if (err) throw err;
    console.log('Los datos se encrito en el archivo');
})
