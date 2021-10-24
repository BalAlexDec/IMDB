import {Movie} from "./Movie";
import {Professional} from "./Professional";
import {Imdb} from "./Imdb";
var prompt = require('prompt-sync')();
//import { readFileSync } from 'fs';
const fs = require('fs');
let pelicula = [];

let cent = new Movie("5Centimentros",2021,"Asiatica","");
let Conbat = new Movie("Conbat",2021,"Americana"," ");
let whatif = new Movie("whatif",2021,"Americana"," ");

let array = [cent,Conbat,whatif];
let f = new Imdb(array);
//f.escribirEnFicheroJson("ssss");
var n = prompt('Como se llama la Pelicula? ');
var n2 = prompt('En que año se hizo la Pelicula?');
var n3 = prompt('En que pais se hizo la Pelicula?');
var n4 = prompt('En que pais se hizo la Pelicula?');

let nuevapelicula = new Movie(n,n2,n3,n4);
let obj:Imdb;
//console.log("1. "+nuevapelicula.printallMovie());
 obj = f.obtenerIntanciaIMDB("ssss");
//console.log(obj);
let arr:Movie[] ;

 obj.movie.push(nuevapelicula);
//arr.push(nuevapelicula);
console.log(obj);
obj.escribirEnFicheroJson("ssss");