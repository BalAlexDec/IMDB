import {Movie} from "./Movie";
const fs = require('fs');

class Imdb{
    public movie:Movie[];

    constructor(movie:Movie[]){
        this.movie = movie;
    }

   public  escribirEnFicheroJson(nombreFichero:string){
        let rawdata = fs.readFileSync(nombreFichero+".json");
        let data =  JSON.parse(rawdata);
        //let data = JSON.stringify(imdb,null,2);
        fs.writeFile(nombreFichero+".json", data, (err) => {
            if (err) throw err;
            console.log('Los datos se encrito en el archivo');
        });
    }

    public obtenerIntanciaIMDB(nombreFichero:string){

    }

}

export{Imdb};