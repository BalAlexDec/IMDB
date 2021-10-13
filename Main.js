"use strict";
exports.__esModule = true;
var Professional_1 = require("./Professional");
var Movie_1 = require("./Movie");
// Main
var primerActor = new Professional_1.Professional("Antonio Banderas", 54, "hombre", 74, 1.74, "negro", "marrones", "blanca", false, "española", 2, "actor");
var segundoActor = new Professional_1.Professional("Scarlett Johansson", 41, "mujer", 60, 1.64, "rubio", "azul", "blanca", false, "estadounidense", 2, "actriz");
var tercerActor = new Professional_1.Professional("Manolo Lama", 57, "hombre", 75, 1.77, "blanco", "marrones", "blanca", true, "española", 5, "comentarista");
primerActor.printAll();
segundoActor.printAll();
tercerActor.printAll();
var primeraPelicula = new Movie_1.Movie("V de Vendetta", 2005, "estadounidense");
var segundaPelicula = new Movie_1.Movie("A Todo de Gas", 1997, "estadounidense");
var tercerPelicula = new Movie_1.Movie("Harry Potter y la Piedra Filosofal", 1996, "estadounidense");
primeraPelicula.printallMovie();
segundaPelicula.printallMovie();
tercerPelicula.printallMovie();
