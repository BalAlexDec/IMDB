"use strict";
exports.__esModule = true;
exports.Professional = void 0;
var Professional = /** @class */ (function () {
    function Professional(name, age, genre, weight, height, hairColor, eyeColor, race, isRetired, nationality, oscarsNumber, profession) {
        this.name = name;
        this.age = age;
        this.genre = genre;
        this.weight = weight;
        this.height = height;
        this.hairColor = hairColor;
        this.eyeColor = eyeColor;
        this.race = race;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
    }
    Professional.prototype.printAll = function () {
        console.log("Nombre  " + this.name + " " + "age  " + this.age + " " + "genre  " + this.genre + " " + "weight  " + this.weight + " " + "height  " + this.height + " " + "hairColor  " + this.hairColor + " " + "eyeColor  " + this.eyeColor + " " + "race  " + this.race + " " + "isRetired  " + this.isRetired + " " + "nationality  " + this.nationality + " " + "nationality  " + this.nationality + " " + "oscarNumber  " + this.oscarsNumber + " " + "professional  " + this.profession + " ");
    };
    return Professional;
}());
exports.Professional = Professional;
