import { Professional } from "./Professional";

let primerActor = new Professional("Antonio Banderas", 54, "hombre", 74, 1.74, "negro", "marrones", "blanca", false, "española", 2, "actor");
let segundoActor = new Professional("Scarlett Johansson", 41, "mujer", 60, 1.64, "rubio", "azul", "blanca", false, "estadounidense", 2, "actriz");
let tercerActor = new Professional("Manolo Lama", 57, "hombre", 75, 1.77, "blanco", "marrones", "blanca", true, "española", 5, "comentarista");

primerActor.printAll();
segundoActor.printAll();
tercerActor.printAll();