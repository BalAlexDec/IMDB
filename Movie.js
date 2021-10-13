"use strict";
exports.__esModule = true;
exports.Movie = void 0;
var Movie = /** @class */ (function () {
    function Movie(title, releseYear, nacionality) {
        this.title = title;
        this.releseYear = releseYear;
        this.nacionality = nacionality;
    }
    Movie.prototype.printallMovie = function () {
        console.log("Nombre  " + this.title + " " + "releseYear  " + this.releseYear +
            "actors  " + this.actors + " " + "nacionality  " + this.nacionality + " " + "director  " + this.director + " " + "writert  " + this.writert + " " +
            "lenguage  " + this.lenguage + " " + "mainCharacterName  " + this.mainCharacterName + " " + "produced  " + this.produced + " " + "disttributor  " + this.disttributor + " "
            + "genre  " + this.genre + " ");
    };
    return Movie;
}());
exports.Movie = Movie;
