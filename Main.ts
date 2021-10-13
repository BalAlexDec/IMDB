import { Professional } from "./Professional";
import { Movie } from "./Movie";



// Main

let primerActor = new Professional("Antonio Banderas", 54, "hombre", 74, 1.74, "negro", "marrones", "blanca", false, "española", 2, "actor");
let segundoActor = new Professional("Scarlett Johansson", 41, "mujer", 60, 1.64, "rubio", "azul", "blanca", false, "estadounidense", 2, "actriz");
let tercerActor = new Professional("Manolo Lama", 57, "hombre", 75, 1.77, "blanco", "marrones", "blanca", true, "española", 5, "comentarista");

primerActor.printAll();
segundoActor.printAll();
tercerActor.printAll();

let primeraPelicula = new Movie("V de Vendetta", 2005, "estadounidense");
let segundaPelicula = new Movie("A Todo de Gas", 1997, "estadounidense");
let tercerPelicula = new Movie("Harry Potter y la Piedra Filosofal", 1996, "estadounidense");

primeraPelicula.printallMovie();
segundaPelicula.printallMovie();
tercerPelicula.printallMovie();